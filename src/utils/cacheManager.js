// Cache manager for platform data
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const CACHE_PREFIX = 'platform_data_';

export const cacheManager = {
  // Save data to cache
  set: (key, data) => {
    try {
      const cacheData = {
        data,
        timestamp: Date.now(),
      };
      localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(cacheData));
      return true;
    } catch (error) {
      console.error('Error saving to cache:', error);
      return false;
    }
  },

  // Get data from cache
  get: (key) => {
    try {
      const cached = localStorage.getItem(CACHE_PREFIX + key);
      if (!cached) return null;

      const { data, timestamp } = JSON.parse(cached);
      const age = Date.now() - timestamp;

      // Check if cache is still valid
      if (age > CACHE_DURATION) {
        localStorage.removeItem(CACHE_PREFIX + key);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error reading from cache:', error);
      return null;
    }
  },

  // Clear specific cache
  clear: (key) => {
    try {
      localStorage.removeItem(CACHE_PREFIX + key);
      return true;
    } catch (error) {
      console.error('Error clearing cache:', error);
      return false;
    }
  },

  // Clear all platform caches
  clearAll: () => {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith(CACHE_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
      return true;
    } catch (error) {
      console.error('Error clearing all caches:', error);
      return false;
    }
  },

  // Check if cache exists and is valid
  isValid: (key) => {
    const data = cacheManager.get(key);
    return data !== null;
  },

  // Get cache age in minutes
  getAge: (key) => {
    try {
      const cached = localStorage.getItem(CACHE_PREFIX + key);
      if (!cached) return null;

      const { timestamp } = JSON.parse(cached);
      const age = Date.now() - timestamp;
      return Math.floor(age / (60 * 1000)); // Return age in minutes
    } catch (error) {
      return null;
    }
  },
};
