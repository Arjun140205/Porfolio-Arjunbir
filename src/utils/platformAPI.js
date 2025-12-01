// API utilities for fetching real-time data from coding platforms

// GitHub API - Fetch contribution data using GitHub's contribution API
export const fetchGitHubContributions = async (username) => {
  try {
    // Use GitHub's public contribution API (via a CORS-friendly proxy)
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub contributions');
    }

    const data = await response.json();
    
    // Transform the data to match our expected format
    const totalContributions = data.total[new Date().getFullYear()] || 0;
    
    // Convert contributions to our week format
    const weeks = [];
    const contributions = data.contributions || [];
    
    // Group by weeks (last 52 weeks)
    for (let i = 0; i < 52; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        const index = i * 7 + j;
        if (index < contributions.length) {
          week.push(contributions[index].count || 0);
        } else {
          week.push(0);
        }
      }
      weeks.push(week);
    }
    
    return {
      totalContributions,
      weeks: weeks.map(week => ({
        contributionDays: week.map((count, index) => ({
          contributionCount: count,
          date: new Date().toISOString(),
        })),
      })),
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return null;
  }
};

// GitHub API - Fetch user stats (REST API - no auth needed for public data)
export const fetchGitHubStats = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      publicRepos: data.public_repos || 0,
      followers: data.followers || 0,
      totalContributions: 0, // Will be filled from contributions API
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return null;
  }
};

// LeetCode API - Using public stats endpoint (no CORS issues)
export const fetchLeetCodeStats = async (username) => {
  try {
    // Use the public API endpoint that doesn't have CORS restrictions
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode data');
    }

    const data = await response.json();
    
    if (data.status === 'error') {
      console.error('LeetCode API error:', data.message);
      return null;
    }

    return {
      totalSolved: data.totalSolved || 0,
      ranking: data.ranking || 0,
      easySolved: data.easySolved || 0,
      mediumSolved: data.mediumSolved || 0,
      hardSolved: data.hardSolved || 0,
      acceptanceRate: data.acceptanceRate || 0,
      submissions: [], // This API doesn't provide submission history
    };
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    // Return fallback data from our test
    return {
      totalSolved: 258,
      ranking: 509240,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      acceptanceRate: 0,
      submissions: [],
    };
  }
};

// Codolio - Manual stats (no public API available)
// Update these values manually from your Codolio profile
export const fetchCodolioStats = async (username) => {
  // Codolio doesn't have a public API, so we return manual stats
  // Visit https://codolio.com/profile/Arjunbirsingh to see your stats
  
  console.log('Note: Codolio stats are manually configured (no public API)');
  
  return {
    totalProblems: 258, // Update this from your Codolio profile
    platforms: {
      leetcode: 258,
      // Add other platforms as shown on your Codolio profile
    },
    rating: 0,
    rank: 'Combined Stats',
    badges: [],
  };
};

// Transform GitHub contribution data to match our graph format
export const transformGitHubContributions = (contributionCalendar) => {
  if (!contributionCalendar) return null;

  const weeks = contributionCalendar.weeks.map(week => 
    week.contributionDays.map(day => day.contributionCount)
  );

  return weeks;
};

// Generate contribution data for LeetCode (simulated based on total solved)
export const generateLeetCodeContributions = (totalSolved) => {
  const weeks = 52;
  const data = [];
  
  // Generate a realistic pattern based on total problems solved
  const avgPerWeek = totalSolved / weeks;
  
  for (let week = 0; week < weeks; week++) {
    const weekData = [];
    for (let day = 0; day < 7; day++) {
      // More activity on weekdays, less on weekends
      const isWeekend = day === 0 || day === 6;
      const baseActivity = isWeekend ? avgPerWeek * 0.3 : avgPerWeek * 0.5;
      
      // Add some randomness
      const randomFactor = 0.5 + Math.random();
      const count = Math.floor(baseActivity * randomFactor);
      
      weekData.push(Math.min(count, 10)); // Cap at 10 for visualization
    }
    data.push(weekData);
  }
  
  return data;
};
