import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.error("GITHUB_TOKEN is not set in environment variables");
    return NextResponse.json(
      { error: "GitHub token is missing. Please set GITHUB_TOKEN in environment variables." },
      { status: 500 }
    );
  }

  const query = `
    query {
      viewer {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    console.log("Fetching contributions with GraphQL...");
    const response = await axios.post(
      "https://api.github.com/graphql",
      { query },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const weeks = response.data.data.viewer.contributionsCollection.contributionCalendar.weeks;
    const totalContributions = response.data.data.viewer.contributionsCollection.contributionCalendar.totalContributions;

    console.log(`GraphQL found ${totalContributions} total contributions across ${weeks.length} weeks`);

    return NextResponse.json({ weeks, totalContributions });
  } catch (error) {
    console.error("Error fetching GraphQL contributions:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions" },
      { status: 500 }
    );
  }
}
