"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import  GitHubCalendar  from "github-calendar";
import 'github-calendar/dist/github-calendar-responsive.css';

interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: {
    name: string;
  };
  actor?: {
    login?: string;
  };
}

interface DayActivity {
  date: string;
  count: number;
}

export default function GitHubStreak() {
  const [username, setUsername] = useState<string>("A-Shalchian");
  const [accessToken, setAccessToken] = useState<string>("");
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [streak, setStreak] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activityData, setActivityData] = useState<DayActivity[]>([]);
  const [showTokenInput, setShowTokenInput] = useState<boolean>(false);
  
  const calendarRef = useRef<HTMLDivElement>(null);

  const getActivityColor = useCallback((count: number) => {
    if (count === 0) return "bg-slate-100";
    if (count < 3) return "bg-emerald-200";
    if (count < 5) return "bg-emerald-300";
    if (count < 7) return "bg-emerald-400";
    return "bg-emerald-500";
  }, []);

  const calculateStreak = useCallback((pushEvents: GitHubEvent[]) => {
    const sortedEvents = [...pushEvents];
    
    const dates = new Set<string>();
    sortedEvents.forEach(event => {
      const date = new Date(event.created_at).toISOString().split('T')[0];
      dates.add(date);
    });
    
    const dateArray = Array.from(dates).sort().reverse(); // Most recent first
    
    let currentStreak = 0;
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    
    if (dateArray[0] === today || dateArray[0] === yesterday) {
      currentStreak = 1; // Start with 1 for today/yesterday
      
      for (let i = 1; i < dateArray.length; i++) {
        const currentDate = new Date(dateArray[i]);
        const previousDate = new Date(dateArray[i-1]);
        
        const diffTime = previousDate.getTime() - currentDate.getTime();
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        
        if (diffDays === 1) {
          currentStreak++;
        } else {
          break;
        }
      }
    }
    
    setStreak(currentStreak);
  }, []);

  const prepareActivityData = useCallback((pushEvents: GitHubEvent[]) => {
    const activityMap: {[key: string]: number} = {};
    const today = new Date();
    
    for (let i = 0; i < 90; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      activityMap[dateStr] = 0;
    }
    
    pushEvents.forEach(event => {
      const date = new Date(event.created_at).toISOString().split('T')[0];
      if (activityMap[date] !== undefined) {
        activityMap[date]++;
      }
    });
    
    const activityArray: DayActivity[] = Object.keys(activityMap)
      .sort() // Sort dates in ascending order
      .map(date => ({
        date,
        count: activityMap[date]
      }));
    
    setActivityData(activityArray);
  }, []);

  const processEventData = useCallback((eventData: GitHubEvent[]) => {
    const pushEvents = eventData.filter(event => event.type === "PushEvent");
    
    if (pushEvents.length > 0) {
      calculateStreak(pushEvents);
    }
    
    prepareActivityData(pushEvents);
  }, [calculateStreak, prepareActivityData]);

  const fetchGitHubEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let allEvents: GitHubEvent[] = [];
      let page = 1;
      let hasMorePages = true;
      
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
      };
      
      if (accessToken) {
        headers['Authorization'] = `token ${accessToken}`;
      }
      
      console.log("Using GitHub token:", accessToken ? "Yes (from env)" : "No");
      
      while (hasMorePages && page <= 3) { 
        const url = `https://api.github.com/users/${username}/events/public?per_page=100&page=${page}`;
        
        const response = await fetch(url, { headers });
        
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("Invalid access token. Please check your token and try again.");
          } else if (response.status === 403) {
            throw new Error("API rate limit exceeded. Please provide a valid access token to increase limits.");
          } else {
            throw new Error(`Failed to fetch GitHub events: ${response.status} ${response.statusText}`);
          }
        }
        
        const data = await response.json();
        console.log(`Fetched ${data.length} events from page ${page}`);
        allEvents = [...allEvents, ...data];
        
        hasMorePages = data.length === 100; 
        page++;
      }
      
      if (accessToken) {
        try {
          const privateReposList = await fetch('https://api.github.com/user/repos?visibility=private&per_page=100', {
            headers
          });
          
          if (!privateReposList.ok) {
            console.error("Failed to fetch private repos list:", privateReposList.status);
          } else {
            const privateRepos = await privateReposList.json();
            console.log(`Found ${privateRepos.length} private repositories`);
            
            for (const repo of privateRepos) {
              if (repo.owner.login.toLowerCase() === username.toLowerCase()) {
                try {
                  const commitsResponse = await fetch(
                    `https://api.github.com/repos/${repo.full_name}/commits?author=${username}&per_page=100`,
                    { headers }
                  );
                  
                  if (commitsResponse.ok) {
                    const commits = await commitsResponse.json();
                    
                    const pushEvents: GitHubEvent[] = commits.map((commit: {
                      sha: string;
                      commit: {
                        author: {
                          date: string;
                        }
                      }
                    }) => ({
                      id: commit.sha,
                      type: "PushEvent",
                      created_at: commit.commit.author.date,
                      repo: {
                        name: repo.full_name
                      },
                      actor: {
                        login: username
                      }
                    }));
                    
                    console.log(`Found ${pushEvents.length} commits in private repo: ${repo.full_name}`);
                    allEvents = [...allEvents, ...pushEvents];
                  }
                } catch (err) {
                  console.error(`Error fetching commits for ${repo.full_name}:`, err);
                }
              }
            }
          }
        } catch (err) {
          console.error("Error accessing private repos:", err);
        }
      }
      
      console.log(`Total events after all fetching: ${allEvents.length}`);
      setEvents(allEvents);
      
      processEventData(allEvents);
    } catch (err) {
      console.error("Error in fetchGitHubEvents:", err);
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, [username, processEventData, accessToken]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    fetchGitHubEvents();
  }, [fetchGitHubEvents]);

  const toggleTokenInput = useCallback(() => {
    setShowTokenInput(!showTokenInput);
  }, [showTokenInput]);

  useEffect(() => {
    const envToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    if (envToken) {
      setAccessToken(envToken);
      setShowTokenInput(false);
    }
  }, []);

  useEffect(() => {
    if (username) {
      fetchGitHubEvents();
    }
  }, [username, fetchGitHubEvents]);

  useEffect(() => {
    if (calendarRef.current && username) {
      calendarRef.current.innerHTML = '';
      
      GitHubCalendar(calendarRef.current, username, { 
        responsive: true,
        tooltips: true
      });
    }
  }, [username]);

  return (
    <div className="flex">
      <Navbar />
      <div className="ml-32 flex-grow">
        <section className="min-h-screen flex flex-col items-center justify-start bg-slate-50 p-8 pt-16">
          <h1 className="text-4xl font-bold mb-8 text-emerald-600">GitHub Streak</h1>
          
          <div className="w-full max-w-3xl mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="GitHub Username"
                  className="flex-grow p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Check Streak"}
                </button>
              </div>
              
              <div className="flex items-center">
                <button 
                  type="button"
                  onClick={toggleTokenInput}
                  className="text-emerald-500 hover:text-emerald-600 text-sm underline"
                >
                  {accessToken 
                    ? "✓ Using GitHub token from environment" 
                    : showTokenInput 
                      ? "Hide token input" 
                      : "Include private repositories (requires token)"}
                </button>
                <div className="ml-2 group relative cursor-pointer">
                  <span className="text-slate-500 text-sm">ⓘ</span>
                  <div className="absolute left-0 bottom-full mb-2 w-64 p-2 bg-white shadow-lg rounded text-xs text-slate-700 hidden group-hover:block z-10">
                    A personal access token allows access to your private repositories. Create one at GitHub &gt; Settings &gt; Developer settings &gt; Personal access tokens with the &quot;repo&quot; scope.
                    <br /><br />
                    For permanent settings, add your token to <code>.env.local</code> as:<br />
                    <code>NEXT_PUBLIC_GITHUB_TOKEN=your_token_here</code>
                  </div>
                </div>
              </div>
              
              {showTokenInput && !accessToken && (
                <div>
                  <input
                    type="password"
                    value={accessToken}
                    onChange={(e) => setAccessToken(e.target.value)}
                    placeholder="GitHub Personal Access Token"
                    className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Your token is never stored on our servers and is only sent directly to GitHub API.
                  </p>
                </div>
              )}
            </form>
          </div>

          {error && (
            <div className="w-full max-w-3xl mb-8 p-4 bg-red-100 text-red-700 rounded">
              Error: {error}
            </div>
          )}

          <div className="w-full max-w-3xl">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800">
                  Current Streak: <span className="text-emerald-500">{streak} days</span>
                </h2>
                <a 
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-500 hover:text-emerald-600 underline"
                >
                  View GitHub Profile
                </a>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-slate-700">Official GitHub Calendar</h3>
                <div className="github-calendar-container bg-white rounded p-2" ref={calendarRef}>
                  <div className="text-center text-slate-500">Loading GitHub calendar...</div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-slate-700">Activity Heatmap (Including Private Repos)</h3>
                <div className="flex flex-wrap gap-1 max-w-3xl">
                  {activityData.map((day) => (
                    <div 
                      key={day.date} 
                      className={`w-3 h-3 rounded-sm ${getActivityColor(day.count)}`}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                  ))}
                </div>
                <div className="flex justify-end mt-2 text-xs text-slate-500">
                  <span className="mr-1">Less</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-100"></div>
                    <div className="w-2 h-2 bg-emerald-200"></div>
                    <div className="w-2 h-2 bg-emerald-300"></div>
                    <div className="w-2 h-2 bg-emerald-400"></div>
                    <div className="w-2 h-2 bg-emerald-500"></div>
                  </div>
                  <span className="ml-1">More</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-slate-700">Recent Activity</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {events
                    .filter(event => event.type === "PushEvent")
                    .slice(0, 10)
                    .map(event => (
                      <div key={event.id} className="p-3 bg-slate-50 rounded">
                        <p className="text-slate-700">
                          <span className="font-medium">Repository:</span> {event.repo.name}
                        </p>
                        <p className="text-sm text-slate-500">
                          {new Date(event.created_at).toLocaleString()}
                        </p>
                      </div>
                    ))}
                    
                  {events.filter(event => event.type === "PushEvent").length === 0 && (
                    <p className="text-slate-500 italic">No recent push events found</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}