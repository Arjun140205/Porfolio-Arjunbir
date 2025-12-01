// Quick test script to verify API endpoints
// Run with: node test-apis.js

const PLATFORM_CONFIG = {
  leetcode: {
    username: 'arjunbirsingh1699',
  },
  github: {
    username: 'Arjun140205',
  },
  codolio: {
    username: 'Arjunbirsingh',
  },
};

// Test LeetCode API
async function testLeetCode() {
  console.log('\n🧪 Testing LeetCode API...');
  try {
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
          }
        }
      }
    `;

    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        query, 
        variables: { username: PLATFORM_CONFIG.leetcode.username } 
      }),
    });

    const data = await response.json();
    
    if (data.data?.matchedUser) {
      const stats = data.data.matchedUser;
      const totalSolved = stats.submitStats.acSubmissionNum.find(
        item => item.difficulty === 'All'
      )?.count || 0;
      
      console.log('✅ LeetCode API Working!');
      console.log(`   Username: ${stats.username}`);
      console.log(`   Total Solved: ${totalSolved}`);
      console.log(`   Ranking: ${stats.profile.ranking?.toLocaleString() || 'N/A'}`);
      return true;
    } else {
      console.log('❌ LeetCode API Failed - No data returned');
      console.log('   Response:', JSON.stringify(data, null, 2));
      return false;
    }
  } catch (error) {
    console.log('❌ LeetCode API Error:', error.message);
    return false;
  }
}

// Test GitHub API
async function testGitHub() {
  console.log('\n🧪 Testing GitHub API...');
  try {
    const response = await fetch(`https://api.github.com/users/${PLATFORM_CONFIG.github.username}`);
    const data = await response.json();
    
    if (data.login) {
      console.log('✅ GitHub API Working!');
      console.log(`   Username: ${data.login}`);
      console.log(`   Public Repos: ${data.public_repos}`);
      console.log(`   Followers: ${data.followers}`);
      return true;
    } else {
      console.log('❌ GitHub API Failed');
      console.log('   Response:', JSON.stringify(data, null, 2));
      return false;
    }
  } catch (error) {
    console.log('❌ GitHub API Error:', error.message);
    return false;
  }
}

// Test Codolio API
async function testCodolio() {
  console.log('\n🧪 Testing Codolio API...');
  try {
    // Try different possible endpoints
    const endpoints = [
      `https://codolio.com/api/profile/${PLATFORM_CONFIG.codolio.username}`,
      `https://api.codolio.com/profile/${PLATFORM_CONFIG.codolio.username}`,
      `https://codolio.com/api/v1/profile/${PLATFORM_CONFIG.codolio.username}`,
    ];

    for (const endpoint of endpoints) {
      console.log(`   Trying: ${endpoint}`);
      try {
        const response = await fetch(endpoint);
        console.log(`   Status: ${response.status}`);
        
        if (response.ok) {
          const data = await response.json();
          console.log('✅ Codolio API Working!');
          console.log('   Response:', JSON.stringify(data, null, 2));
          return true;
        }
      } catch (err) {
        console.log(`   Error: ${err.message}`);
      }
    }
    
    console.log('❌ Codolio API - No working endpoint found');
    console.log('   Note: Codolio may not have a public API or requires authentication');
    console.log('   Profile URL: https://codolio.com/profile/Arjunbirsingh');
    return false;
  } catch (error) {
    console.log('❌ Codolio API Error:', error.message);
    return false;
  }
}

// Run all tests
async function runTests() {
  console.log('🚀 Testing Platform APIs...');
  console.log('================================');
  
  const results = {
    leetcode: await testLeetCode(),
    github: await testGitHub(),
    codolio: await testCodolio(),
  };
  
  console.log('\n================================');
  console.log('📊 Test Results:');
  console.log(`   LeetCode: ${results.leetcode ? '✅' : '❌'}`);
  console.log(`   GitHub: ${results.github ? '✅' : '❌'}`);
  console.log(`   Codolio: ${results.codolio ? '✅' : '❌'}`);
  console.log('================================\n');
}

runTests();
