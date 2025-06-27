import React from 'react';
import AuthCard from '@/components/layout/AuthCard';
import MainAppLayout from '@/components/layout/MainAppLayout';

/**
 * Represents the main login page of the application.
 * This page component uses the `MainAppLayout` to create a centered layout
 * and renders the `AuthCard` which contains the login form.
 * It serves as the entry point for user authentication.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <AuthCard />
    </MainAppLayout>
  );
};

export default LoginPage;
