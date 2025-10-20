import axios from "axios";

export async function getContributions() {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  if (!token) {
    console.error("NEXT_PUBLIC_GITHUB_TOKEN is not set in environment variables");
    throw new Error("GitHub token is missing. Please set NEXT_PUBLIC_GITHUB_TOKEN in .env.local");
  }
  // This query gets both public and private contributions without any filters
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
    
    // Count contributions by week for debugging
    let contribsByWeek = 0;
    weeks.forEach(week => {
      week.contributionDays.forEach(day => {
        contribsByWeek += day.contributionCount;
      });
    });
    
    console.log(`Sum of contributions by day: ${contribsByWeek}`);
    
    return weeks;
  } catch (error) {
    console.error("Error fetching GraphQL contributions:", error.response?.data || error.message);
    throw error;
  }
}

// Create a named object for the default export
const GitHubContributions = {
  getContributions
};

export default GitHubContributions;
