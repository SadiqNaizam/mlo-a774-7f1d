import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import Heading from '../Authentication/Heading';
import InputFields from '../Authentication/InputFields';
import SubmitButton from '../Authentication/SubmitButton';
import SignupLink from '../Authentication/SignupLink';

interface AuthCardProps {
  className?: string;
}

/**
 * A card component that wraps the authentication form elements.
 * It follows the layout specified in the project requirements, providing a structured
 * container for the login interface.
 */
const AuthCard: React.FC<AuthCardProps> = ({ className }) => {
  return (
    <Card className={cn('w-[400px]', className)}>
      <CardContent className="flex flex-col gap-4 p-6 pt-8">
        <Heading />
        <InputFields />
        <SubmitButton />
        <SignupLink />
      </CardContent>
    </Card>
  );
};

export default AuthCard;
