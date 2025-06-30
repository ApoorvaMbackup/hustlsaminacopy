import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import toast from 'react-hot-toast';
import { 
  Zap, 
  Shield, 
  DollarSign, 
  Users, 
  Star, 
  Clock, 
  Mail, 
  Phone, 
  Award, 
  Trophy, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Coffee, 
  Package, 
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle,
  MapPin,
  MessageCircle,
  CreditCard
} from 'lucide-react';
import LearnMoreModal from './LearnMoreModal';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!isLogin && password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Welcome back!');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Account created successfully!');
      }
      navigate('/app');
    } catch (error: any) {
      console.error('Auth error:', error);
      if (error.code === 'auth/user-not-found') {
        toast.error('No account found with this email');
      } else if (error.code === 'auth/wrong-password') {
        toast.error('Incorrect password');
      } else if (error.code === 'auth/email-already-in-use') {
        toast.error('An account with this email already exists');
      } else if (error.code === 'auth/invalid-email') {
        toast.error('Please enter a valid email address');
      } else if (error.code === 'auth/weak-password') {
        toast.error('Password should be at least 6 characters');
      } else {
        toast.error(error.message || 'Authentication failed');
      }
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: <Package className="w-8 h-8 text-[#0038FF]" />,
      title: "Quick Tasks",
      description: "Get help with coffee runs, note sharing, and campus errands in minutes."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#0038FF]" />,
      title: "Safe & Secure",
      description: "Verified student network with secure payments and safety features."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#0038FF]" />,
      title: "Earn Money",
      description: "Make extra income helping fellow students with flexible scheduling."
    },
    {
      icon: <Users className="w-8 h-8 text-[#0038FF]" />,
      title: "Campus Community",
      description: "Connect with verified UF students and build lasting relationships."
    }
  ];

  const steps = [
    {
      icon: <Package className="w-12 h-12 text-white" />,
      title: "Post Your Task",
      description: "Describe what you need help with, set your budget, and choose a location."
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Get Matched",
      description: "Connect with verified students nearby who are ready to help."
    },
    {
      icon: <Star className="w-12 h-12 text-white" />,
      title: "Complete & Pay",
      description: "Once your task is done, rate your helper and pay securely."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-[#0038FF]" />,
      title: "Save Time",
      description: "Focus on what matters while others handle your tasks"
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#0038FF]" />,
      title: "Campus Convenience",
      description: "Everything happens on or near campus for maximum convenience"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#0038FF]" />,
      title: "Real-time Updates",
      description: "Stay informed with live tracking and instant messaging"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#0038FF]" />,
      title: "Secure Payments",
      description: "Safe, encrypted transactions with multiple payment options"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0038FF] to-[#0021A5] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#0038FF]" />
              </div>
              <h1 className="text-2xl font-bold">Hustl</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setShowLearnMore(true)}
                className="hover:text-gray-200 transition-colors"
              >
                About
              </button>
              <a href="#features" className="hover:text-gray-200 transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-gray-200 transition-colors">How It Works</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0038FF] to-[#0021A5] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Campus Tasks Made
                <span className="block text-[#FA4616]">Simple</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Connect with fellow Gators to get help with quick tasks or earn money helping others on the University of Florida campus.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setIsLogin(false)}
                  className="bg-white text-[#0038FF] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Get Started Free
                </button>
                <button 
                  onClick={() => setShowLearnMore(true)}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0038FF] transition-colors"
                >
                  Learn More
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-blue-100">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  UF Students Only
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  Secure Payments
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  24/7 Support
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {isLogin ? 'Welcome Back' : 'Join Hustl'}
                  </h2>
                  <p className="text-gray-600">
                    {isLogin ? 'Sign in to your account' : 'Create your account'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0038FF] focus:border-transparent transition-colors"
                      placeholder="your.email@ufl.edu"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0038FF] focus:border-transparent transition-colors pr-12"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0038FF] focus:border-transparent transition-colors pr-12"
                          placeholder="Confirm your password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#0038FF] to-[#0021A5] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-[#0038FF] hover:underline font-medium"
                  >
                    {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Hustl?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for University of Florida students, Hustl makes campus life easier through community collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How Hustl Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting help or earning money is simple with our three-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Built for Student Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is designed with the unique needs of college students in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0038FF] to-[#0021A5] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Hustl Community?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start getting help with your tasks or earning money by helping others today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setIsLogin(false)}
              className="bg-white text-[#0038FF] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </button>
            <button 
              onClick={() => setShowLearnMore(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0038FF] transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#0038FF] rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Hustl</h3>
              </div>
              <p className="text-gray-400">
                Connecting UF students to make campus life easier through community collaboration.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setShowLearnMore(true)} className="hover:text-white transition-colors">About Us</button></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:hustlapp@outlook.com" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="mailto:hustlapp@outlook.com" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="mailto:hustlapp@outlook.com" className="hover:text-white transition-colors">Safety</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:hustlapp@outlook.com" className="hover:text-white transition-colors">
                    hustlapp@outlook.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hustl. All rights reserved. Built for the University of Florida community.</p>
          </div>
        </div>
      </footer>

      {/* Learn More Modal */}
      {showLearnMore && (
        <LearnMoreModal onClose={() => setShowLearnMore(false)} />
      )}
    </div>
  );
};

export default LandingPage;