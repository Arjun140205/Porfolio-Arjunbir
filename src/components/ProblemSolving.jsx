import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { FaCode, FaGithub } from 'react-icons/fa';
import { TbRefresh } from 'react-icons/tb';
import { 
  fetchGitHubContributions, 
  fetchLeetCodeStats,
  transformGitHubContributions,
  generateLeetCodeContributions 
} from '../utils/platformAPI';
import { PLATFORM_CONFIG } from '../config/platformConfig';
import { cacheManager } from '../utils/cacheManager';
import AnimatedCounter from './ui/AnimatedCounter';

// Merge contribution data from both platforms for collective view
const mergeContributionData = (githubData, leetcodeData) => {
  if (!githubData || !leetcodeData) return null;
  
  const weeks = Math.max(githubData.length, leetcodeData.length);
  const merged = [];
  
  for (let week = 0; week < weeks; week++) {
    const weekData = [];
    const githubWeek = githubData[week] || [];
    const leetcodeWeek = leetcodeData[week] || [];
    
    for (let day = 0; day < 7; day++) {
      const githubCount = githubWeek[day] || 0;
      const leetcodeCount = leetcodeWeek[day] || 0;
      weekData.push(githubCount + leetcodeCount);
    }
    merged.push(weekData);
  }
  
  return merged;
};

const getContributionColor = (count) => {
  if (count === 0) return 'bg-neutral-900';
  if (count <= 2) return 'bg-cyan-900/40';
  if (count <= 4) return 'bg-cyan-700/60';
  if (count <= 7) return 'bg-cyan-500/80';
  return 'bg-cyan-400';
};

const ContributionGraph = ({ platform = 'collective', realData = null, isLoading = false }) => {
  const contributionData = realData;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  if (isLoading || !contributionData) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-neutral-500">Loading contribution data...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px] p-6">
        {/* Month labels */}
        <div className="flex mb-2 ml-8">
          {months.map((month, i) => (
            <div key={i} className="text-xs text-neutral-500 flex-1 text-left">
              {month}
            </div>
          ))}
        </div>
        
        {/* Contribution grid */}
        <div className="flex gap-1">
          {/* Day labels */}
          <div className="flex flex-col gap-1 text-xs text-neutral-500 justify-around pr-2">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>
          
          {/* Weeks */}
          {contributionData.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((count, dayIndex) => (
                <motion.div
                  key={`${weekIndex}-${dayIndex}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(count)} border border-neutral-800 cursor-pointer`}
                  title={`${count} problems solved`}
                />
              ))}
            </div>
          ))}
        </div>
        
        {/* Legend */}
        <div className="flex items-center gap-2 mt-4 text-xs text-neutral-500">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-neutral-900 border border-neutral-800" />
            <div className="w-3 h-3 rounded-sm bg-cyan-900/40 border border-neutral-800" />
            <div className="w-3 h-3 rounded-sm bg-cyan-700/60 border border-neutral-800" />
            <div className="w-3 h-3 rounded-sm bg-cyan-500/80 border border-neutral-800" />
            <div className="w-3 h-3 rounded-sm bg-cyan-400 border border-neutral-800" />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

const PlatformCard = ({ icon: Icon, name, solved, total, rank, color, profileUrl, onClick, isActive, loading, showPlus, threshold }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    onClick={onClick}
    className={`bg-gradient-to-br from-neutral-900 via-black to-neutral-950 border rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer ${
      isActive ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' : 'border-white/10'
    }`}
  >
    <div className="flex items-center gap-4 mb-6">
      <div className={`p-4 rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
        <Icon className="text-3xl text-white" />
      </div>
      <div className="flex-1">
        <a 
          href={profileUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="group"
        >
          <h3 className="text-2xl font-bold text-white group-hover:underline decoration-cyan-400 decoration-2 underline-offset-4 transition-all">
            {name}
          </h3>
        </a>
        {rank && <p className="text-sm text-neutral-400 mt-1">{rank}</p>}
      </div>
    </div>
    
    <div className="space-y-4">
      {/* Big Number Display */}
      <div className="text-center py-6">
        <p className="text-sm text-neutral-500 uppercase tracking-wider mb-2">
          {name === 'GitHub' ? 'Total Contributions' : 'Problems Solved'}
        </p>
        <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
          {loading ? (
            <span className="animate-pulse">...</span>
          ) : (
            <AnimatedCounter value={solved} duration={2} showPlus={showPlus} threshold={threshold} />
          )}
        </div>
      </div>
      
      {total && (
        <>
          <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(solved / total) * 100}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full"
            />
          </div>
          <p className="text-xs text-neutral-500 text-center">{solved} / {total}</p>
        </>
      )}
    </div>
  </motion.div>
);

const ProblemSolving = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('collective');
  const [platformData, setPlatformData] = useState({
    leetcode: { solved: 0, rank: 'Loading...', loading: true },
    github: { contributions: 0, rank: 'Loading...', loading: true },
  });
  const [contributionGraphs, setContributionGraphs] = useState({
    github: null,
    leetcode: null,
    collective: null,
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchAllData = async (forceRefresh = false) => {
    if (!forceRefresh) {
      // Try to load from cache first
      const cachedData = cacheManager.get('platformData');
      const cachedGraphs = cacheManager.get('contributionGraphs');
      
      if (cachedData && cachedGraphs) {
        console.log('Loading data from cache');
        setPlatformData(cachedData);
        setContributionGraphs(cachedGraphs);
        setLastUpdated(cacheManager.getAge('platformData'));
        return;
      }
    }

    setIsRefreshing(true);
    // Fetch LeetCode data
    try {
      console.log('Fetching LeetCode data...');
      const leetcodeStats = await fetchLeetCodeStats(PLATFORM_CONFIG.leetcode.username);
      if (leetcodeStats) {
        setPlatformData(prev => ({
          ...prev,
          leetcode: {
            solved: leetcodeStats.totalSolved,
            rank: leetcodeStats.ranking > 0 ? `Rank ${leetcodeStats.ranking.toLocaleString()}` : 'Active Solver',
            loading: false,
          },
        }));
        
        const leetcodeGraph = generateLeetCodeContributions(leetcodeStats.totalSolved);
        setContributionGraphs(prev => ({ ...prev, leetcode: leetcodeGraph }));
      }
    } catch (error) {
      console.error('LeetCode fetch error:', error);
      setPlatformData(prev => ({
        ...prev,
        leetcode: { solved: 258, rank: 'Rank 509,240', loading: false },
      }));
      // Use fallback graph
      const fallbackGraph = generateLeetCodeContributions(258);
      setContributionGraphs(prev => ({ ...prev, leetcode: fallbackGraph }));
    }

    // Fetch GitHub data
    try {
      console.log('Fetching GitHub data...');
      const githubContributions = await fetchGitHubContributions(PLATFORM_CONFIG.github.username);
      
      if (githubContributions) {
        const totalContributions = githubContributions.totalContributions;
        setPlatformData(prev => ({
          ...prev,
          github: {
            contributions: totalContributions,
            rank: `${totalContributions} Contributions This Year`,
            loading: false,
          },
        }));
        
        const githubGraph = transformGitHubContributions(githubContributions);
        setContributionGraphs(prev => ({ ...prev, github: githubGraph }));
      }
    } catch (error) {
      console.error('GitHub fetch error:', error);
      setPlatformData(prev => ({
        ...prev,
        github: { contributions: 0, rank: 'Unable to load', loading: false },
      }));
    }

    setIsRefreshing(false);
    setLastUpdated(0); // Just updated
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  // Create collective graph when both platform graphs are available
  useEffect(() => {
    if (contributionGraphs.github && contributionGraphs.leetcode && !contributionGraphs.collective) {
      const collective = mergeContributionData(contributionGraphs.github, contributionGraphs.leetcode);
      setContributionGraphs(prev => ({ ...prev, collective }));
    }
  }, [contributionGraphs.github, contributionGraphs.leetcode, contributionGraphs.collective]);

  // Save to cache whenever data changes
  useEffect(() => {
    if (!platformData.leetcode.loading && !platformData.github.loading) {
      cacheManager.set('platformData', platformData);
      cacheManager.set('contributionGraphs', contributionGraphs);
      console.log('Data saved to cache');
    }
  }, [platformData, contributionGraphs]);

  const handlePlatformClick = (platform) => {
    setSelectedPlatform(selectedPlatform === platform ? 'collective' : platform);
  };

  const handleRefresh = () => {
    console.log('Refreshing data...');
    cacheManager.clearAll();
    setPlatformData({
      leetcode: { solved: 0, rank: 'Loading...', loading: true },
      github: { contributions: 0, rank: 'Loading...', loading: true },
    });
    setContributionGraphs({
      github: null,
      leetcode: null,
      collective: null,
    });
    fetchAllData(true);
  };

  const getGraphData = () => {
    if (selectedPlatform === 'github') {
      return contributionGraphs.github;
    }
    if (selectedPlatform === 'leetcode') {
      return contributionGraphs.leetcode;
    }
    if (selectedPlatform === 'collective') {
      return contributionGraphs.collective;
    }
    return null;
  };
  
  const isGraphLoading = () => {
    if (selectedPlatform === 'collective') {
      return !contributionGraphs.collective;
    }
    return !getGraphData();
  };

  return (
    <section className="relative bg-black py-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
              Problem Solving
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            Consistent practice and problem-solving across multiple platforms
          </p>
        </motion.div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-neutral-900 via-black to-neutral-950 border border-white/10 rounded-3xl p-8 mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <FaCode className="text-2xl text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">
                {selectedPlatform === 'collective' ? 'Combined Coding Activity' : 
                 selectedPlatform === 'leetcode' ? 'LeetCode Activity' :
                 'GitHub Activity'}
              </h3>
            </div>
            
            {/* Reload Button */}
            <div className="flex items-center gap-3">
              {lastUpdated !== null && (
                <span className="text-xs text-neutral-500">
                  {lastUpdated === 0 ? 'Just updated' : `Updated ${lastUpdated}m ago`}
                </span>
              )}
              <motion.button
                onClick={handleRefresh}
                disabled={isRefreshing}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  isRefreshing 
                    ? 'bg-neutral-800 border-neutral-700 text-neutral-500 cursor-not-allowed' 
                    : 'bg-black border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400'
                }`}
              >
                <TbRefresh className={`text-lg ${isRefreshing ? 'animate-spin' : ''}`} />
                <span className="text-sm font-medium">
                  {isRefreshing ? 'Refreshing...' : 'Refresh'}
                </span>
              </motion.button>
            </div>
          </div>
          <ContributionGraph platform={selectedPlatform} realData={getGraphData()} isLoading={isGraphLoading()} />
        </motion.div>

        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlatformCard
            icon={SiLeetcode}
            name="LeetCode"
            solved={platformData.leetcode.solved}
            rank="C++, Python, SQL"
            color="from-orange-600 to-orange-400"
            profileUrl={PLATFORM_CONFIG.leetcode.profileUrl}
            onClick={() => handlePlatformClick('leetcode')}
            isActive={selectedPlatform === 'leetcode'}
            loading={platformData.leetcode.loading}
            showPlus={true}
            threshold={250}
          />
          <PlatformCard
            icon={FaGithub}
            name="GitHub"
            solved={platformData.github.contributions}
            rank={platformData.github.rank}
            color="from-purple-600 to-purple-400"
            profileUrl={PLATFORM_CONFIG.github.profileUrl}
            onClick={() => handlePlatformClick('github')}
            isActive={selectedPlatform === 'github'}
            loading={platformData.github.loading}
            showPlus={true}
            threshold={1500}
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
