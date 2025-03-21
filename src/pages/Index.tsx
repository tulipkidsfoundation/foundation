
import React, { useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const Index = () => {
  const [formStep, setFormStep] = useState(1);
  
  return (
    <motion.div 
      className="min-h-screen py-12 px-4 sm:px-6 flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <header className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-3 py-1 bg-primary/10 text-primary border-primary/20 backdrop-blur-xs animate-fade-in">
          Tulip Trot, A Family Fun Walk
          </Badge>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
             Registration Form
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Complete your registration in a few simple steps and join our community event.
          </motion.p>
        </header>
        
        <motion.div 
          className="glass rounded-2xl p-1 overflow-hidden shadow-medium mx-auto max-w-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <RegistrationForm formStep={formStep} setFormStep={setFormStep} />
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>Need help? <a href="#" className="text-primary underline hover:text-primary/80 transition-colors">Contact support</a></p>
          <p className="mt-2">
            <a href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">Admin Panel</a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
