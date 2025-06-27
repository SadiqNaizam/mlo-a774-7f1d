import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SubmitButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ className, onClick, disabled }) => {
  return (
    <Button
      type="submit"
      className={cn('w-full', className)}
      onClick={onClick}
      disabled={disabled}
    >
      Log in
    </Button>
  );
};

export default SubmitButton;
