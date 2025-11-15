import { kv } from '@/lib/kv';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { page, referrer } = await request.json();

    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'Unknown';

    const visitorId = Buffer.from(ip + userAgent).toString('base64').substring(0, 20);
    const timestamp = new Date().toISOString();
    const date = new Date().toISOString().split('T')[0];

    // Track page view
    await kv.hincrby('analytics:pageviews', page, 1);

    // Track daily stats
    await kv.hincrby(`analytics:daily:${date}`, 'pageviews', 1);

    // Track unique visitors
    const visitorKey = `analytics:visitors`;
    const isNewVisitor = await kv.zscore(visitorKey, visitorId) === null;

    if (isNewVisitor) {
      await kv.zadd(visitorKey, { score: Date.now(), member: visitorId });
      await kv.hincrby(`analytics:daily:${date}`, 'unique_visitors', 1);
    }

    // Store recent views
    await kv.lpush('analytics:recent', JSON.stringify({
      page,
      referrer,
      timestamp,
      visitorId,
    }));
    await kv.ltrim('analytics:recent', 0, 999);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Track error:', error);
    return NextResponse.json({ error: 'Failed to track' }, { status: 500 });
  }
}
