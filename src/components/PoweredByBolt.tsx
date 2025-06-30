import React from 'react';

interface PoweredByBoltProps {
  className?: string;
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center' | 'footer';
}

const PoweredByBolt: React.FC<PoweredByBoltProps> = ({ 
  className = '', 
  position = 'bottom-right' 
}) => {
  const positionClasses = {
    'bottom-right': 'fixed bottom-4 right-4 z-50',
    'bottom-left': 'fixed bottom-4 left-4 z-50',
    'bottom-center': 'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50',
    'footer': 'relative'
  };

  return (
    <a
      href="https://bolt.new/"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-all duration-300 hover:opacity-90 hover:scale-105 ${positionClasses[position]} ${className}`}
    >
      <img 
        src="/black_circle_360x360 copy.png" 
        alt="Powered by Bolt" 
        className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      />
    </a>
  );
};

export default PoweredByBolt;