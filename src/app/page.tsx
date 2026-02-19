"use client";

import { useState } from "react";
import { Brain, Cpu, GraduationCap, Users, BookOpen, Clock, Globe, Lightbulb, ChevronRight, ChevronLeft, Sparkles, Target, Shield } from "lucide-react";

export default function AIHigherEdPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "title",
      component: TitleSlide
    },
    {
      id: "what-is-ai",
      component: WhatIsAISlide
    },
    {
      id: "history",
      component: HistorySlide
    },
    {
      id: "student-benefits",
      component: StudentBenefitsSlide
    },
    {
      id: "activity",
      component: ActivitySlide
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Brain className="w-10 h-10 text-cyan-400 animate-pulse" />
              <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI in Higher Education
              </h1>
              <p className="text-xs text-slate-400">EDUC-1300 Presentation</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-400">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </header>

        {/* Slide Content */}
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-5xl">
            <CurrentSlideComponent />
          </div>
        </main>

        {/* Navigation */}
        <footer className="p-6">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 disabled:opacity-30 disabled:cursor-not-allowed rounded-xl transition-all border border-slate-700"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-cyan-400 w-8"
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 disabled:opacity-30 disabled:cursor-not-allowed rounded-xl transition-all border border-cyan-500/30"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Slide 1: Title
function TitleSlide() {
  return (
    <div className="text-center space-y-8">
      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl mb-4 border border-cyan-500/30">
        <Cpu className="w-12 h-12 text-cyan-400" />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Artificial Intelligence
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-300">
        in Higher Education
      </h2>

      <div className="flex items-center justify-center gap-4 text-slate-400">
        <Shield className="w-5 h-5" />
        <span>Responsibility</span>
        <span className="text-slate-600">•</span>
        <Target className="w-5 h-5" />
        <span>Academic Accountability</span>
      </div>

      <div className="pt-8 border-t border-slate-800">
        <p className="text-lg text-slate-400">Presented by</p>        <p className="text-2xl font-semibold text-white mt-2">Kahlil, Julie, Lina & Ali</p>
      </div>
    </div>
  );
}

// Slide 2: What is AI
function WhatIsAISlide() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
          <Brain className="w-8 h-8 text-cyan-400" />
        </div>
        <h2 className="text-4xl font-bold text-white">Decoding the Machine: What is AI?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">Definition</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              Artificial intelligence is the technology that enables computers and machines to <span className="text-cyan-400 font-semibold">simulate human learning, comprehension, problem-solving, and decision-making</span>.
            </p>
          </div>

          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">Capabilities</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                Performing mathematical calculations
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                Correcting grammatical errors
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full" />
                Generating creative content
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <Cpu className="w-32 h-32 text-cyan-400 mx-auto mb-4" />
              <p className="text-center text-lg text-slate-400 italic">
                "The technology I am today... was once just a theory?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 3: History
function HistorySlide() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
          <Clock className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-4xl font-bold text-white">The Birth of AI: 1950</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <span className="text-3xl font-bold text-cyan-400">1950</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Alan Turing</h3>                <p className="text-slate-400">English mathematician and computer science pioneer</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
            <blockquote className="text-2xl font-medium text-slate-300 italic border-l-4 border-cyan-400 pl-6">
              "Can machines think?"
            </blockquote>
            <p className="mt-4 text-slate-400">
              This question, posed by Turing in his paper <span className="text-cyan-400">"Computing Machinery and Intelligence"</span>, 
              introduced the famous <span className="text-purple-400 font-semibold">Turing Test</span> (also known as the Imitation Game) 
              to determine if a machine can think.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-cyan-300 mb-4">The Turing Test</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold">1</div>
              <p className="text-sm text-slate-300">Human evaluator judges conversations</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">2</div>
              <p className="text-sm text-slate-300">One with human, one with machine</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 font-bold">3</div>
              <p className="text-sm text-slate-300">If evaluator can't distinguish → machine passes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 4: Why Students Should Care
function StudentBenefitsSlide() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-pink-500/10 rounded-xl border border-pink-500/20">
          <GraduationCap className="w-8 h-8 text-pink-400" />
        </div>
        <h2 className="text-4xl font-bold text-white">Why Should College Students Care?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-semibold text-cyan-300">Academic Support</h3>
          </div>
          <p className="text-slate-300">
            AI tools help with studying, writing, tutoring, time management, and understanding difficult concepts — 
            especially valuable for students without extra academic support.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-semibold text-purple-300">Career Readiness</h3>
          </div>
          <p className="text-slate-300">
            As industries become AI-driven, students who learn AI responsibly gain valuable skills, 
            increasing career opportunities and economic mobility.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 border border-pink-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-pink-400" />
            <h3 className="text-xl font-semibold text-pink-300">Equity & Inclusion</h3>
          </div>
          <p className="text-slate-300">
            AI promotes equity by providing support to historically excluded voices, 
            potentially improving college completion rates when implemented thoughtfully.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-semibold text-yellow-300">Future Competitiveness</h3>
          </div>
          <p className="text-slate-300">
            Colleges embracing AI help students stay competitive in tomorrow's job market — 
            preparing them today for the workforce of tomorrow.
          </p>
        </div>
      </div>

      <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 text-center">
        <p className="text-slate-400">
          Source: <a href="https://completecollege.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Complete College America</a> — AI for Student Success Initiative
        </p>
      </div>
    </div>
  );
}

// Slide 5: Activity
function ActivitySlide() {
  return (
    <div className="text-center space-y-8">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl mb-4 border border-green-500/30">
        <Users className="w-10 h-10 text-green-400" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white">Class Activity</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center border-2 border-slate-800">
                <span className="text-cyan-400 font-bold">1</span>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border-2 border-slate-800">
                <span className="text-purple-400 font-bold">2</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-cyan-300">Step 1: Pick a Partner</h3>
          </div>          <p className="text-lg text-slate-300">Find a classmate to discuss with. Teams of 2 work best!</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Step 2: Discuss</h3>          
          <blockquote className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            "Do you think AI is beneficial or detrimental to society?"
          </blockquote>
        </div>
      </div>

      <a
        href="https://ai-opinion-drop.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold rounded-xl transition-all transform hover:scale-105"
      >
        <Sparkles className="w-5 h-5" />
        Share Your Opinion
        <ChevronRight className="w-5 h-5" />
      </a>
    </div>
  );
}
