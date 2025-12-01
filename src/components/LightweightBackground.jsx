import React from 'react';

const LightweightBackground = () => {
  // Generate random particles once
  const particles = React.useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    })), []
  );

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(5deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -20px);
          }
          50% {
            transform: translate(-20px, 20px);
          }
          75% {
            transform: translate(20px, 20px);
          }
        }
      `}</style>
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            animation: 'gradientShift 15s ease infinite',
          }}
        />
        
        {/* Lightweight CSS-only particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-cyan-400/20"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
                willChange: 'transform',
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LightweightBackground;
