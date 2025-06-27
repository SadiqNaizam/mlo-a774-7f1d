import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const InputFields: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" placeholder="Username" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
    </div>
  );
};

export default InputFields;
