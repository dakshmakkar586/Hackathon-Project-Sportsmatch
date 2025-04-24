import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick, 
  hoverEffect = false 
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-md overflow-hidden';
  const hoverClasses = hoverEffect ? 'transform transition duration-200 hover:scale-105 hover:shadow-lg' : '';
  const clickClasses = onClick ? 'cursor-pointer' : '';
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${clickClasses} ${className}`} 
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ className?: string; children: ReactNode }> = ({ children, className = '' }) => {
  return (
    <div className={`p-4 border-b ${className}`}>
      {children}
    </div>
  );
};

export const CardBody: React.FC<{ className?: string; children: ReactNode }> = ({ children, className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{ className?: string; children: ReactNode }> = ({ children, className = '' }) => {
  return (
    <div className={`p-4 border-t ${className}`}>
      {children}
    </div>
  );
};

export default Card;