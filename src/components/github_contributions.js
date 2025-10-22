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

export async function getLatestCommit() {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  if (!token) {
    console.error("NEXT_PUBLIC_GITHUB_TOKEN is not set in environment variables");
    throw new Error("GitHub token is missing. Please set NEXT_PUBLIC_GITHUB_TOKEN in .env.local");
  }

  const query = `
    query {
      viewer {
        repositories(first: 100, orderBy: {field: PUSHED_AT, direction: DESC}, privacy: PUBLIC) {
          nodes {
            name
            url
            defaultBranchRef {
              target {
                ... on Commit {
                  message
                  committedDate
                  author {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    console.log("Fetching latest commit with GraphQL...");
    const response = await axios.post(
      "https://api.github.com/graphql",
      { query },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const repos = response.data.data.viewer.repositories.nodes;

    // Find the most recent commit across all repos
    let latestCommit = null;
    let latestDate = null;
    let latestRepo = null;

    repos.forEach(repo => {
      if (repo.defaultBranchRef?.target) {
        const commit = repo.defaultBranchRef.target;
        const commitDate = new Date(commit.committedDate);

        if (!latestDate || commitDate > latestDate) {
          latestDate = commitDate;
          latestCommit = commit;
          latestRepo = repo;
        }
      }
    });

    if (latestCommit && latestRepo) {
      return {
        message: latestCommit.message.split('\n')[0], // Get first line only
        repo: latestRepo.name,
        date: latestDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        url: latestRepo.url
      };
    }

    return null;
  } catch (error) {
    console.error("Error fetching latest commit:", error.response?.data || error.message);
    throw error;
  }
}

// Create a named object for the default export
const GitHubContributions = {
  getContributions,
  getLatestCommit
};

export default GitHubContributions;
