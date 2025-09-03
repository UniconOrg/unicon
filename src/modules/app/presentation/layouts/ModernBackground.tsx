import React from 'react';
import './ModernBackground.css';

const ModernBackground: React.FC = () => {
  return (
    <div className="modern-background">
      {/* Floating orbs */}
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
      </div>
      
      {/* Geometric shapes */}
      <div className="geometric-shapes">
        <div className="shape shape-triangle"></div>
        <div className="shape shape-hexagon"></div>
        <div className="shape shape-circle"></div>
      </div>
      
      {/* Subtle noise texture */}
      <div className="noise-overlay"></div>
    </div>
  );
};

export default ModernBackground;
