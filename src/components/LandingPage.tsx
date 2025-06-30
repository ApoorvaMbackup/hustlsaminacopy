import React, { useState } from 'react';
import { 
  Zap, 
  Users, 
  Shield, 
  DollarSign, 
  Star, 
  Clock, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X, 
  Mail, 
  Phone,
  Award,
  Trophy,
  BookOpen,
  Briefcase,
  GraduationCap,
  Coffee,
  Package,
  Heart,
  Target,
  Smartphone,
  Globe,
  Lock,
  CreditCard,
  MessageSquare,
  Bell,
  Search,
  Filter,
  Calendar,
  Navigation,
  UserCheck,
  Headphones,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import LearnMoreModal from './LearnMoreModal';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-[#0038FF] to-[#0021A5] text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Zap className="w-8 h-8 text-[#FA4616] mr-2" />
              <span className="text-2xl font-bold">Hustl</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
              <button onClick={() => scrollToSection('how-it-works')} className="nav-link">How It Works</button>
              <button onClick={() => scrollToSection('tech-stack')} className="nav-link">Tech Stack</button>
              <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
              <button onClick={() => setShowLearnMore(true)} className="nav-link">About</button>
              <a href="/app" className="nav-button">Get Started</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white hover:text-gray-200">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#0021A5] border-t border-white/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('features')} className="block px-3 py-2 text-white hover:text-gray-200 w-full text-left">Features</button>
                <button onClick={() => scrollToSection('how-it-works')} className="block px-3 py-2 text-white hover:text-gray-200 w-full text-left">How It Works</button>
                <button onClick={() => scrollToSection('tech-stack')} className="block px-3 py-2 text-white hover:text-gray-200 w-full text-left">Tech Stack</button>
                <button onClick={() => scrollToSection('pricing')} className="block px-3 py-2 text-white hover:text-gray-200 w-full text-left">Pricing</button>
                <button onClick={() => setShowLearnMore(true)} className="block px-3 py-2 text-white hover:text-gray-200 w-full text-left">About</button>
                <a href="/app" className="block px-3 py-2 bg-[#002B7F] text-white rounded-lg font-semibold hover:bg-[#001F5C] transition duration-200 text-center mt-4">Get Started</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0038FF] via-[#0021A5] to-[#001F5C] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Campus Tasks Made
                <span className="block text-[#FA4616]">Simple</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-blue-100 leading-relaxed">
                Connect with fellow Gators to get help with quick tasks or earn money helping others on the University of Florida campus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/app" className="bg-[#FA4616] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E63A0B] transition duration-200 shadow-xl flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <button 
                  onClick={() => setShowLearnMore(true)}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition duration-200 shadow-xl"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Students collaborating on campus"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-xl mb-2">Join 1,000+ Gators</h3>
                  <p className="text-white/90">Making campus life easier together</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Hustl?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for University of Florida students, by students who understand campus life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-[#0038FF]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Get help within minutes. Our platform connects you instantly with nearby students ready to assist.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safe & Secure</h3>
              <p className="text-gray-600">
                UF student verification, secure payments, and safety features ensure peace of mind for every interaction.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Earn Money</h3>
              <p className="text-gray-600">
                Turn your free time into income. Help fellow students and earn money that fits your schedule.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Build Community</h3>
              <p className="text-gray-600">
                Connect with fellow Gators, make new friends, and strengthen our campus community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Hustl Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting help or earning money is simple with our three-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Package className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Post Your Task</h3>
              <p className="text-gray-600 text-lg">
                Describe what you need help with, set your budget, and choose a convenient location on campus.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Get Matched</h3>
              <p className="text-gray-600 text-lg">
                Connect with verified UF students nearby who are ready to help with your task.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Star className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Complete & Pay</h3>
              <p className="text-gray-600 text-lg">
                Once your task is done, rate your helper and pay securely through our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built with Modern Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hustl is powered by cutting-edge technologies to ensure reliability, security, and performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                  alt="React" 
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-semibold text-gray-900">React</h3>
              <p className="text-sm text-gray-600 mt-2">Frontend Framework</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                  alt="TypeScript" 
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-semibold text-gray-900">TypeScript</h3>
              <p className="text-sm text-gray-600 mt-2">Type Safety</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/tailwind-icon.svg" 
                  alt="Tailwind CSS" 
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-semibold text-gray-900">Tailwind CSS</h3>
              <p className="text-sm text-gray-600 mt-2">Styling</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
                  alt="Firebase" 
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-semibold text-gray-900">Firebase</h3>
              <p className="text-sm text-gray-600 mt-2">Backend & Auth</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-lg">
                <CreditCard className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Stripe</h3>
              <p className="text-sm text-gray-600 mt-2">Payments</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-lg">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Google Maps</h3>
              <p className="text-sm text-gray-600 mt-2">Location Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tasks Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Tasks on Campus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what fellow Gators are helping each other with every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=500&q=80" 
                  alt="Coffee Run" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-white">
                    <Coffee className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Coffee Runs</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Quick Coffee Delivery</h3>
                <p className="text-gray-600 mb-4">Get your favorite coffee delivered during study sessions or between classes.</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#0038FF] font-semibold">$3-8 typical</span>
                  <span className="text-sm text-gray-500">5-15 min</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80" 
                  alt="Note Sharing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-white">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Academic Help</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Note Sharing & Study Help</h3>
                <p className="text-gray-600 mb-4">Get class notes when you're sick or find study partners for difficult subjects.</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#0038FF] font-semibold">$5-15 typical</span>
                  <span className="text-sm text-gray-500">Same day</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=500&q=80" 
                  alt="Food Delivery" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-white">
                    <Package className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Food Delivery</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Campus Food Delivery</h3>
                <p className="text-gray-600 mb-4">Get meals delivered from campus dining halls or nearby restaurants.</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#0038FF] font-semibold">$4-12 typical</span>
                  <span className="text-sm text-gray-500">15-30 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees. Pay only when you get help or earn money helping others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Task Posters</h3>
                <div className="text-4xl font-bold text-[#0038FF] mb-2">5%</div>
                <p className="text-gray-600">Service fee on completed tasks</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Post unlimited tasks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Secure payment processing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Verified helper network</span>
                </li>
              </ul>
              <a href="/app" className="w-full bg-[#0038FF] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0021A5] transition duration-200 text-center block">
                Start Posting Tasks
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#0038FF] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#0038FF] text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Helpers</h3>
                <div className="text-4xl font-bold text-[#FA4616] mb-2">Free</div>
                <p className="text-gray-600">Keep 100% of what you earn</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Browse available tasks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Instant payment after completion</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Build your reputation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Flexible schedule</span>
                </li>
              </ul>
              <a href="/app" className="w-full bg-[#FA4616] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#E63A0B] transition duration-200 text-center block">
                Start Helping & Earning
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0038FF] to-[#0021A5] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Gator Community?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Thousands of UF students are already using Hustl to make campus life easier and more connected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/app" className="bg-[#FA4616] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E63A0B] transition duration-200 shadow-xl flex items-center justify-center">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <button 
              onClick={() => setShowLearnMore(true)}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition duration-200 shadow-xl"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-[#FA4616] mr-2" />
                <span className="text-2xl font-bold">Hustl</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The campus task platform built by UF students, for UF students. Making Gator life easier, one task at a time.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:hustlapp@outlook.com" className="text-gray-400 hover:text-white transition">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition">Features</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition">How It Works</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition">Pricing</button></li>
                <li><a href="/app" className="hover:text-white transition">Get Started</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setShowLearnMore(true)} className="hover:text-white transition">About Us</button></li>
                <li><a href="mailto:hustlapp@outlook.com" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hustl. Built with ❤️ by UF students for the Gator community.</p>
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