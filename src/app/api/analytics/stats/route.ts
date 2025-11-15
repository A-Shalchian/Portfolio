import { kv } from '@/lib/kv';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    // Check auth
    const cookieStore = await cookies();
    const authToken = cookieStore.get('analytics_auth');

    if (!authToken || authToken.value !== 'authenticated') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get page views
    const pageViews = await kv.hgetall('analytics:pageviews') || {};

    // Get total unique visitors
    const totalVisitors = await kv.zcard('analytics:visitors') || 0;

    // Get recent views
    const recentViews = await kv.lrange('analytics:recent', 0, 99);
    const parsedRecentViews = recentViews.map((view: string) => JSON.parse(view));

    // Get daily stats for last 30 days
    const dailyStats = [];
    const today = new Date();
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];

      const dayStats = await kv.hgetall(`analytics:daily:${dateStr}`) || {};
      dailyStats.push({
        date: dateStr,
        pageviews: Number(dayStats.pageviews) || 0,
        unique_visitors: Number(dayStats.unique_visitors) || 0,
      });
    }

    const totalPageViews = Object.values(pageViews as Record<string, number>)
      .reduce((sum, count) => sum + Number(count), 0);

    return NextResponse.json({
      totalPageViews,
      totalVisitors,
      pageViews,
      recentViews: parsedRecentViews,
      dailyStats,
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
