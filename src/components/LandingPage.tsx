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
  Coffee,
  BookOpen,
  Package,
  Heart,
  Award,
  TrendingUp,
  Globe,
  Smartphone,
  CreditCard,
  Mic
} from 'lucide-react';
import LearnMoreModal from './LearnMoreModal';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-[#0038FF] to-[#0021A5] text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Zap className="w-8 h-8 text-[#FA4616] mr-2" />
                <span className="text-2xl font-bold">Hustl</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button 
                  onClick={() => setShowLearnMore(true)}
                  className="nav-link px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  About
                </button>
                <a href="#features" className="nav-link px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors">Features</a>
                <a href="#how-it-works" className="nav-link px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors">How It Works</a>
                <a href="#tech-stack" className="nav-link px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors">Tech Stack</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0021A5]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => {
                  setShowLearnMore(true);
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 w-full text-left"
              >
                About
              </button>
              <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="#tech-stack" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Tech Stack</a>
            </div>
          </div>
        )}
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
                <a
                  href="/app"
                  className="bg-[#FA4616] hover:bg-[#E63A0B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-200 shadow-xl flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={() => setShowLearnMore(true)}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                  alt="University of Florida campus"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-xl mb-2">University of Florida</h3>
                  <p className="text-white/90">Connecting Gators across campus</p>
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
              Built by students, for students. We understand the unique challenges of campus life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="task-card group">
              <div className="task-card-header"></div>
              <div className="task-card-body">
                <div className="task-icon-container">
                  <Zap className="w-8 h-8 text-[#0038FF]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quick & Easy</h3>
                <p className="text-gray-600">
                  Post a task in seconds and get matched with nearby students ready to help.
                </p>
              </div>
            </div>

            <div className="task-card group">
              <div className="task-card-header"></div>
              <div className="task-card-body">
                <div className="task-icon-container">
                  <Shield className="w-8 h-8 text-[#0038FF]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Safe & Secure</h3>
                <p className="text-gray-600">
                  All users are verified UF students. Secure payments and ratings ensure trust.
                </p>
              </div>
            </div>

            <div className="task-card group">
              <div className="task-card-header"></div>
              <div className="task-card-body">
                <div className="task-icon-container">
                  <DollarSign className="w-8 h-8 text-[#0038FF]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Earn Money</h3>
                <p className="text-gray-600">
                  Turn your free time into income by helping fellow students with simple tasks.
                </p>
              </div>
            </div>

            <div className="task-card group">
              <div className="task-card-header"></div>
              <div className="task-card-body">
                <div className="task-icon-container">
                  <Users className="w-8 h-8 text-[#0038FF]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Build Community</h3>
                <p className="text-gray-600">
                  Connect with students across campus and build lasting friendships.
                </p>
              </div>
            </div>

            <div className="task-card group">
              <div className="task-card-header"></div>
              <div className="task-card-body">
                <div className="task-icon-container">
                  <Clock className="w-8 h-8 text-[#0038FF]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Save Time</h3>
                <p className="text-gray-600">
                  Focus on what matters most while others handle your everyday tasks.
                </p>
              </div>
            </div>

            <div className="task-card group">
              <div className="task-card-header"></div>
              <div className="task-card-body">
                <div className="task-icon-container">
                  <MapPin className="w-8 h-8 text-[#0038FF]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Campus-Wide</h3>
                <p className="text-gray-600">
                  From dorms to libraries, get help anywhere on the UF campus.
                </p>
              </div>
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
              Getting help or earning money is just three simple steps away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">1. Post Your Task</h3>
              <p className="text-gray-600 text-lg">
                Describe what you need help with, set your budget, and choose a convenient location on campus.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">2. Get Matched</h3>
              <p className="text-gray-600 text-lg">
                Connect with verified students nearby who are ready to help with your task.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">3. Complete & Pay</h3>
              <p className="text-gray-600 text-lg">
                Once your task is done, rate your helper and pay securely through our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tasks Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Tasks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what students are helping each other with every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" 
                  alt="Coffee delivery" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Coffee className="w-6 h-6 text-[#FA4616] mb-2" />
                  <h3 className="text-white font-bold">Coffee Runs</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Quick coffee deliveries during study sessions</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80" 
                  alt="Note sharing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <BookOpen className="w-6 h-6 text-[#FA4616] mb-2" />
                  <h3 className="text-white font-bold">Note Sharing</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Share class notes when someone misses</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80" 
                  alt="Food delivery" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Package className="w-6 h-6 text-[#FA4616] mb-2" />
                  <h3 className="text-white font-bold">Food Delivery</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Grab food from campus dining halls</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80" 
                  alt="Pet care" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Heart className="w-6 h-6 text-[#FA4616] mb-2" />
                  <h3 className="text-white font-bold">Pet Care</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Dog walking and pet sitting services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built with Modern Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hustl is powered by cutting-edge technologies to ensure reliability, security, and performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* React */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#61DAFB]" fill="currentColor">
                  <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 17.97 9.74c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26M6.92 9.74c.54-2.21 1.56-3.65 2.65-3.65.07 0 .15.01.22.02-.56-.78-1.25-1.27-1.78-1.27-.53 0-.04.48-.09 1.4-.03.49-.05.98-.05 1.5 0 .52.02 1.01.05 1.5.05.92-.44 1.4.09 1.4.53 0 1.22-.49 1.78-1.27-.07.01-.15.02-.22.02-1.09 0-2.11-1.44-2.65-3.65"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">React</h3>
              <p className="text-sm text-gray-600 text-center mt-1">Frontend Framework</p>
            </div>

            {/* TypeScript */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#3178C6]" fill="currentColor">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">TypeScript</h3>
              <p className="text-sm text-gray-600 text-center mt-1">Type Safety</p>
            </div>

            {/* Tailwind CSS */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#06B6D4]" fill="currentColor">
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Tailwind CSS</h3>
              <p className="text-sm text-gray-600 text-center mt-1">Styling</p>
            </div>

            {/* Firebase */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#FFCA28]" fill="currentColor">
                  <path d="M5.229 4.382l3.821 3.848-.888-1.618c-.894-1.618-2.407-1.618-2.933 0zm8.568 9.348L7.679 7.5l-2.45 4.5 9.068 5.229c.523.302 1.233.302 1.756 0L24 12z"/>
                  <path d="M7.679 7.5L5.229 4.382l-.888 1.618L2.893 9.348 7.679 7.5z" fill="#FFA000"/>
                  <path d="M7.679 7.5l6.118 6.23 1.203-2.23L7.679 7.5z" fill="#F57C00"/>
                  <path d="M15.053 17.729L24 12l-8.947 5.729z" fill="#FF8F00"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Firebase</h3>
              <p className="text-sm text-gray-600 text-center mt-1">Backend & Auth</p>
            </div>

            {/* Stripe */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <CreditCard className="w-12 h-12 text-[#635BFF]" />
              </div>
              <h3 className="font-semibold text-gray-900">Stripe</h3>
              <p className="text-sm text-gray-600 text-center mt-1">Payments</p>
            </div>

            {/* RevenueCat */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-[#FF6B35]" />
              </div>
              <h3 className="font-semibold text-gray-900">RevenueCat</h3>
              <p className="text-sm text-gray-600 text-center mt-1">Subscriptions</p>
            </div>

            {/* ElevenLabs */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Mic className="w-12 h-12 text-[#8B5CF6]" />
              </div>
              <h3 className="font-semibold text-gray-900">ElevenLabs</h3>
              <p className="text-sm text-gray-600 text-center mt-1">Voice AI</p>
            </div>

            {/* Entri */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Shield className="w-12 h-12 text-[#00D4AA]" />
              </div>
              <h3 className="font-semibold text-gray-900">Entri</h3>
              <p className="text-sm text-gray-600 text-center mt-1">Identity Verification</p>
            </div>

            {/* Netlify */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Globe className="w-12 h-12 text-[#00C7B7]" />
              </div>
              <h3 className="font-semibold text-gray-900">Netlify</h3>
              <p className="text-sm text-gray-600 text-center mt-1">Hosting & Deployment</p>
            </div>

            {/* Google Maps */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-[#4285F4]" />
              </div>
              <h3 className="font-semibold text-gray-900">Google Maps</h3>
              <p className="text-sm text-gray-600 text-center mt-1">Location Services</p>
            </div>

            {/* Sentry */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Award className="w-12 h-12 text-[#362D59]" />
              </div>
              <h3 className="font-semibold text-gray-900">Sentry</h3>
              <p className="text-sm text-gray-600 text-center mt-1">Error Monitoring</p>
            </div>

            {/* Vite */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Zap className="w-12 h-12 text-[#646CFF]" />
              </div>
              <h3 className="font-semibold text-gray-900">Vite</h3>
              <p className="text-sm text-gray-600 text-center mt-1">Build Tool</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0038FF] to-[#0021A5] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Hustl Community?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Start getting help with your tasks or earning money by helping others today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/app"
              className="bg-[#FA4616] hover:bg-[#E63A0B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-200 shadow-xl flex items-center justify-center group"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => setShowLearnMore(true)}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition duration-200"
            >
              Learn More
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
                Connecting University of Florida students to make campus life easier through community-driven task sharing.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Users className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Globe className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Smartphone className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setShowLearnMore(true)} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#tech-stack" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="mailto:hustlapp@outlook.com" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Hustl. All rights reserved. Made with ❤️ for the University of Florida community.
            </p>
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