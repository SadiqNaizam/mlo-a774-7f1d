import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SignupLinkProps {
  className?: string;
}

const SignupLink: React.FC<SignupLinkProps> = ({ className }) => {
  return (
    <div className={cn('text-center', className)}>
       <Button variant="link" className="p-0 h-auto font-normal text-sm text-muted-foreground hover:text-primary">
        Or sign up
      </Button>
    </div>
  );
};

export default SignupLink;