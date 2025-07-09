
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EmailCreator from '@/components/EmailCreator';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import MessengerWidget from '@/components/MessengerWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <EmailCreator />
      <Features />
      <Footer />
      <MessengerWidget />
    </div>
  );
};

export default Index;
