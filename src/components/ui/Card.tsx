import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  variant?: 'default' | 'elevated' | 'bordered' | 'glass';
}

export function Card({ 
  children, 
  className = '', 
  interactive = true, 
  variant = 'default' 
}: CardProps) {
  const [hovered, setHovered] = useState(false);
  
  // Base styles that apply to all variants
  let baseStyles = "rounded-xl overflow-hidden";
  
  // Variant specific styles
  const variantStyles = {
    default: "bg-[#0F1729]/90 border border-[#1E1B4B]/50",
    elevated: "bg-[#0F1729]/90 border border-[#1E1B4B]/50 shadow-lg shadow-[var(--primary-dark)]/10",
    bordered: "bg-[#0F1729]/90 border border-purple-900/30",
    glass: "bg-[#0F1729]/80 backdrop-blur-md border border-purple-900/20"
  };
  
  // Combine base and variant styles
  baseStyles = `${baseStyles} ${variantStyles[variant]}`;
  
  if (!interactive) {
    return (
      <div className={`${baseStyles} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      initial={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
      animate={{ 
        boxShadow: hovered 
          ? '0 8px 15px -5px rgba(139, 92, 246, 0.15), 0 0 5px 2px rgba(139, 92, 246, 0.05)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ 
        translateY: -2,
      }}
    >
      <div className="relative z-10">
      {children}
    </div>
      
      {hovered && (
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/10 to-[var(--secondary)]"></div>
        </div>
      )}
    </motion.div>
  );
}