
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Copy, Home } from 'lucide-react';
import { toast } from 'sonner';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { registrationData, transactionId } = location.state || {};

  // Add this to handle both naming conventions
  const totalAmount = registrationData?.totalAmount || registrationData?.total_amount || 0;

  useEffect(() => {
    // If the page is accessed directly without data, redirect to home
    if (!registrationData) {
      console.log("No registration data found, redirecting to home");
      navigate('/');
      return;
    }
    
    console.log("Success page loaded with data:", registrationData);
    console.log("Transaction ID:", transactionId);
  }, [registrationData, transactionId, navigate]);
  
  // Add this check to prevent rendering with undefined data
  if (!registrationData || !totalAmount) {
    return null; // Will redirect in the useEffect
  }
  
  const copyTransactionId = () => {
    if (transactionId) {
      navigator.clipboard.writeText(transactionId);
      toast("Transaction ID copied to clipboard");
    }
  };
  
  return (
    <motion.div 
      className="min-h-screen py-12 px-4 sm:px-6 flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-md w-full mx-auto">
        <motion.div
          className="bg-green-600 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <Check className="h-10 w-10 text-white" />
        </motion.div>
        
        <motion.h1 
          className="text-3xl font-bold text-center mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Registration Complete!
        </motion.h1>
        
        <motion.p 
          className="text-muted-foreground text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Your payment was successfully processed.
        </motion.p>
        
        <motion.div
          className="space-y-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="rounded-xl overflow-hidden shadow-medium">
            <CardHeader className="bg-primary/5 pb-3">
              <CardTitle>Registration Details</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">{registrationData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium">{registrationData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Participants:</span>
                  <span className="font-medium">
                    {registrationData.adultCount} adults, {registrationData.kidsCount} kids
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Paid:</span>
                  <span className="font-medium">${totalAmount.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground">Transaction ID</p>
                  <p className="font-mono text-sm">{transactionId}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={copyTransactionId}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="w-full rounded-xl h-12"
              onClick={() => {
                window.print();
              }}
            >
              Print Receipt
            </Button>
            <Button 
              className="w-full rounded-xl h-12"
              onClick={() => navigate('/')}
            >
              <Home className="mr-2 h-4 w-4" /> Return Home
            </Button>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            A confirmation email has been sent to your inbox.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Success;
