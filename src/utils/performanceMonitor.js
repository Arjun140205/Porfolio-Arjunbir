// Performance monitoring utilities

export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Log performance metrics to console in development
export const logPerformanceMetrics = () => {
  if (process.env.NODE_ENV === 'development') {
    reportWebVitals((metric) => {
      console.log(`[Performance] ${metric.name}:`, metric.value, metric.rating);
      
      // Warn if metrics are poor
      if (metric.name === 'LCP' && metric.value > 2500) {
        console.warn('⚠️ LCP is high! Target: <2.5s, Current:', (metric.value / 1000).toFixed(2) + 's');
      }
      if (metric.name === 'FID' && metric.value > 100) {
        console.warn('⚠️ FID is high! Target: <100ms, Current:', metric.value.toFixed(2) + 'ms');
      }
      if (metric.name === 'CLS' && metric.value > 0.1) {
        console.warn('⚠️ CLS is high! Target: <0.1, Current:', metric.value.toFixed(3));
      }
    });
  }
};

// Mark performance milestones
export const markPerformance = (name) => {
  if (window.performance && window.performance.mark) {
    window.performance.mark(name);
  }
};

// Measure performance between marks
export const measurePerformance = (name, startMark, endMark) => {
  if (window.performance && window.performance.measure) {
    try {
      window.performance.measure(name, startMark, endMark);
      const measure = window.performance.getEntriesByName(name)[0];
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${name}:`, measure.duration.toFixed(2) + 'ms');
      }
      return measure.duration;
    } catch (e) {
      console.error('Performance measurement failed:', e);
    }
  }
};

// FPS Monitor
export class FPSMonitor {
  constructor() {
    this.fps = 0;
    this.frames = 0;
    this.lastTime = performance.now();
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    this.tick();
  }

  stop() {
    this.isRunning = false;
  }

  tick = () => {
    if (!this.isRunning) return;

    this.frames++;
    const currentTime = performance.now();
    
    if (currentTime >= this.lastTime + 1000) {
      this.fps = Math.round((this.frames * 1000) / (currentTime - this.lastTime));
      this.frames = 0;
      this.lastTime = currentTime;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`[FPS] ${this.fps}`);
        if (this.fps < 30) {
          console.warn('⚠️ Low FPS detected:', this.fps);
        }
      }
    }
    
    requestAnimationFrame(this.tick);
  };

  getFPS() {
    return this.fps;
  }
}

// Detect long tasks (>50ms)
export const observeLongTasks = () => {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('⚠️ Long task detected:', entry.duration.toFixed(2) + 'ms', entry);
          }
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // Long task API not supported
    }
  }
};

// Resource timing analysis
export const analyzeResourceTiming = () => {
  if (window.performance && window.performance.getEntriesByType) {
    const resources = window.performance.getEntriesByType('resource');
    
    const largeResources = resources
      .filter(r => r.transferSize > 100000) // >100KB
      .sort((a, b) => b.transferSize - a.transferSize)
      .slice(0, 10);
    
    if (largeResources.length > 0 && process.env.NODE_ENV === 'development') {
      console.group('📦 Large Resources (>100KB)');
      largeResources.forEach(r => {
        console.log(
          `${(r.transferSize / 1024).toFixed(2)}KB - ${r.duration.toFixed(2)}ms`,
          r.name
        );
      });
      console.groupEnd();
    }
  }
};

// Initialize all monitoring
export const initPerformanceMonitoring = () => {
  if (process.env.NODE_ENV === 'development') {
    logPerformanceMetrics();
    observeLongTasks();
    
    // Analyze resources after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        analyzeResourceTiming();
      }, 2000);
    });
  }
};
