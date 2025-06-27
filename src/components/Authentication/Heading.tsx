import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ className }) => {
  return (
    <h1 className={cn('text-3xl font-bold text-card-foreground', className)}>
      Log in
    </h1>
  );
};

export default Heading;
