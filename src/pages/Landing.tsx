import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone, Mail, Info, Check, CreditCard, ShoppingBag, Heart } from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Landing = () => {
  const [formStep, setFormStep] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute top-1/4 -left-20 h-60 w-60 rounded-full bg-blue-500/5 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl"></div>
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-6"
          >
            <Badge variant="outline" className="px-4 py-1.5 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm">
              <span className="mr-1.5">✨</span> Hosted by Tulip Kids Foundation
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 leading-tight"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Tulip Trot – A Family Fun Walk
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join us for an exciting 5K Family Fun Walk that brings together families, friends, and the community for a day of fun, fitness, and togetherness!
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 border-0"
              onClick={() => document.getElementById('registration-section').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="mr-2">🏃</span> Register Now
            </Button>
            
            {/* <Button 
              size="lg" 
              variant="outline"
              className="rounded-full px-8 py-6 text-lg shadow-sm hover:shadow-md transition-all border-primary/20 hover:bg-primary/5"
              onClick={() => document.getElementById('event-details').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="mr-2">📅</span> Event Details
            </Button> */}
          </motion.div>
          
          {/* Event highlights */}
          <motion.div 
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex flex-col items-center p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 shadow-sm">
              <span className="text-2xl mb-2">🏆</span>
              <span className="text-sm font-medium">Fun Prizes</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 shadow-sm">
              <span className="text-2xl mb-2">👕</span>
              <span className="text-sm font-medium">T-Shirt Included</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 shadow-sm">
              <span className="text-2xl mb-2">🍎</span>
              <span className="text-sm font-medium">Healthy Snacks</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 shadow-sm">
              <span className="text-2xl mb-2">🤝</span>
              <span className="text-sm font-medium">Community Event</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Event Details Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Event Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background/90 to-background/70 p-8 shadow-sm border border-primary/10 backdrop-blur-sm transition-all hover:shadow-md group">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Date</h3>
                <p className="text-muted-foreground">4th May 2025</p>
                <p className="text-sm text-muted-foreground mt-1">(Sunday)</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background/90 to-background/70 p-8 shadow-sm border border-primary/10 backdrop-blur-sm transition-all hover:shadow-md group">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Time</h3>
                <p className="text-muted-foreground">9:30 AM</p>
                <p className="text-sm text-muted-foreground mt-1">(Registration starts at 8:30 AM)</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background/90 to-background/70 p-8 shadow-sm border border-primary/10 backdrop-blur-sm transition-all hover:shadow-md group">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <p className="text-muted-foreground">Santa Clara High School</p>
                <p className="text-sm text-muted-foreground mt-1">3000 Benton St, Santa Clara, CA 95051</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <motion.div 
              className="inline-block"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registration-section" className="py-16 px-4 sm:px-6 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Register Now</h2>
          
          <motion.div 
            className="glass rounded-2xl p-1 overflow-hidden shadow-medium mx-auto max-w-2xl bg-background"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Elements stripe={stripePromise}>
              <RegistrationForm formStep={formStep} setFormStep={setFormStep} />
            </Elements>
          </motion.div>
        </div>
      </section>

      {/* Registration Details Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Registration Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  What's Included
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Free T-Shirts for all participants <strong>(Kids' T-shirts will be available only for children aged 5 years and above.)</strong></span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Snacks & Refreshments to keep you energized</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Lots of Fun & Exercise for the whole family</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Group Warm-up Session at 9:30 AM before the walk</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Info className="h-5 w-5 text-primary mr-2" />
                  Registration Details
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <span><strong>Registration Timing:</strong> 8:30 AM - 9:30 AM</span>
                  </p>
                  <p className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span><strong>Walk Begins:</strong> 9:30 AM</span>
                  </p>
                  <p className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span><strong>Registration Fee:</strong> $20 per participant</span>
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background/60 backdrop-blur-sm border-primary/10 md:col-span-2 mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Info className="h-5 w-5 text-primary mr-2" />
                  Important Registration Notes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/10 blur-xl"></div>
                    <div className="relative z-10">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <ShoppingBag className="h-6 w-6" />
                      </div>
                      <h4 className="mb-2 font-medium">T-Shirt Availability</h4>
                      <p className="text-sm text-muted-foreground">
                        Registrations after 15th April are not guaranteed a T-shirt.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/10 blur-xl"></div>
                    <div className="relative z-10">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <CreditCard className="h-6 w-6" />
                      </div>
                      <h4 className="mb-2 font-medium">Payment Required</h4>
                      <p className="text-sm text-muted-foreground">
                        Payment is mandatory to complete your registration. Don't miss out—secure your spot today!
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/10 blur-xl"></div>
                    <div className="relative z-10">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Heart className="h-6 w-6" />
                      </div>
                      <h4 className="mb-2 font-medium">Supporting a Cause</h4>
                      <p className="text-sm text-muted-foreground">
                        All proceeds from this event will support the Adopt-a-School Project.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 sm:px-6 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-background/80 p-8 shadow-sm border border-primary/10 backdrop-blur-sm transition-all hover:shadow-md group">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-all">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sneha Vedula</h3>
                <p className="text-muted-foreground">408-930-1862</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-background/80 p-8 shadow-sm border border-primary/10 backdrop-blur-sm transition-all hover:shadow-md group">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-all">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Deepti</h3>
                <p className="text-muted-foreground">408-687-5823</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-background/80 p-8 shadow-sm border border-primary/10 backdrop-blur-sm transition-all hover:shadow-md group">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-all">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-muted-foreground">sneha@tulipkidsinc.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full shadow-sm">
              <Info className="h-5 w-5 mr-2" />
              <p className="font-medium">Note: This event is not a SCUSD event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Join us for an unforgettable day filled with joy, movement, and community bonding! 🎉</h2>
          <Button 
            size="lg" 
            className="rounded-full px-8 mt-4"
            onClick={() => document.getElementById('registration-section').scrollIntoView({ behavior: 'smooth' })}
          >
            Register Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© 2025 Tulip Kids Foundation. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/admin" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Admin Login
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
