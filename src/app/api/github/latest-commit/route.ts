import { NextResponse } from 'next/server';
import axios from 'axios';

interface Commit {
  message: string;
  committedDate: string;
  author: {
    name: string;
  };
}

interface Repository {
  name: string;
  url: string;
  defaultBranchRef?: {
    target: Commit;
  };
}

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

    const repos = response.data.data.viewer.repositories.nodes as Repository[];

    // Find the most recent commit across all repos
    let latestCommit: Commit | undefined;
    let latestDate: Date | undefined;
    let latestRepo: Repository | undefined;

    repos.forEach((repo) => {
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

    if (!latestCommit || !latestRepo || !latestDate) {
      return NextResponse.json(null);
    }

    return NextResponse.json({
      message: latestCommit.message.split('\n')[0], // Get first line only
      repo: latestRepo.name,
      date: latestDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      url: latestRepo.url
    });
  } catch (error) {
    console.error("Error fetching latest commit:", error);
    return NextResponse.json(
      { error: "Failed to fetch latest commit" },
      { status: 500 }
    );
  }
}
