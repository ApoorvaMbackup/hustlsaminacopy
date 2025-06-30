import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Users, 
  DollarSign, 
  Shield, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  MapPin,
  Coffee,
  BookOpen,
  Package,
  Heart,
  Award,
  TrendingUp,
  Sparkles,
  Target,
  Globe,
  MessageCircle
} from 'lucide-react';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import toast from 'react-hot-toast';
import LearnMoreModal from './LearnMoreModal';

const LandingPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Testimonial rotation
  const testimonials = [
    {
      text: "Hustl saved me so much time during finals week. Got my coffee delivered while I studied!",
      author: "Sarah M.",
      major: "Computer Science",
      rating: 5
    },
    {
      text: "Made $200 last month just helping other students with quick tasks. Perfect for my schedule!",
      author: "Mike R.",
      major: "Business",
      rating: 5
    },
    {
      text: "The community here is amazing. Everyone is so helpful and friendly!",
      author: "Jessica L.",
      major: "Psychology",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('Welcome to Hustl!');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Account created successfully!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Welcome back!');
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-orange-100 rounded-full opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-100 rounded-full opacity-15"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header */}
      <motion.header 
        className="relative z-10 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-[#0038FF] to-[#0021A5] rounded-lg flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#0038FF] to-[#0021A5] bg-clip-text text-transparent">
                Hustl
              </span>
            </motion.div>
            
            <motion.button
              onClick={() => setShowLearnMore(true)}
              className="text-gray-600 hover:text-[#0038FF] font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="relative z-10 pt-20 pb-32"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                UF's #1 Campus Task Platform
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                variants={itemVariants}
              >
                Get Help.{' '}
                <motion.span 
                  className="bg-gradient-to-r from-[#0038FF] to-[#0021A5] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  Earn Money.
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Connect with fellow Gators for quick tasks around campus. From coffee runs to study help, 
                make student life easier while earning extra cash.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.button
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="bg-gradient-to-r from-[#0038FF] to-[#0021A5] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      Get Started Free
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
                
                <motion.button
                  onClick={() => setShowLearnMore(true)}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-[#0038FF] hover:text-[#0038FF] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
                variants={floatingVariants}
                animate="animate"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Quick Task</h3>
                  <motion.div
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    $8.00
                  </motion.div>
                </div>
                
                <div className="flex items-center mb-4">
                  <motion.div
                    className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Coffee className="w-6 h-6 text-orange-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Coffee Run to Starbucks</h4>
                    <p className="text-gray-600 text-sm">Library West → Reitz Union</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    15 min
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    0.3 miles
                  </div>
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-[#0038FF] to-[#0021A5] text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Accept Task
                </motion.button>
              </motion.div>
              
              {/* Floating elements around the card */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Star className="w-8 h-8 text-yellow-500" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <DollarSign className="w-7 h-7 text-green-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="relative z-10 py-20 bg-white/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Students Love Hustl
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by students, for students. We understand campus life and created the perfect solution.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Get help in minutes, not hours. Perfect for urgent tasks.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: Shield,
                title: "Safe & Secure",
                description: "Verified students only. Secure payments. Your safety first.",
                color: "from-green-400 to-blue-500"
              },
              {
                icon: DollarSign,
                title: "Fair Pricing",
                description: "Set your own rates. No hidden fees. Keep what you earn.",
                color: "from-green-400 to-green-600"
              },
              {
                icon: Users,
                title: "Campus Community",
                description: "Connect with fellow Gators. Build lasting friendships.",
                color: "from-purple-400 to-pink-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="relative z-10 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Gators Are Saying
            </h2>
          </motion.div>
          
          <div className="relative h-64 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="absolute inset-0 flex items-center justify-center"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].major}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-[#0038FF]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="relative z-10 py-20 bg-gradient-to-r from-[#0038FF] to-[#0021A5]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "5,000+", label: "Active Students", icon: Users },
              { number: "25,000+", label: "Tasks Completed", icon: CheckCircle },
              { number: "$150K+", label: "Earned by Students", icon: DollarSign },
              { number: "4.9/5", label: "Average Rating", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <motion.div
                  className="text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="relative z-10 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Join the Hustl Community?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start earning money or getting help with tasks in just minutes.
            </p>
            
            <motion.button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="bg-gradient-to-r from-[#0038FF] to-[#0021A5] text-white px-12 py-4 rounded-xl font-semibold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <motion.div
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <Sparkles className="w-6 h-6 mr-3" />
              )}
              Get Started Free
              <motion.div
                className="ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Learn More Modal */}
      {showLearnMore && (
        <LearnMoreModal onClose={() => setShowLearnMore(false)} />
      )}
    </div>
  );
};

export default LandingPage;