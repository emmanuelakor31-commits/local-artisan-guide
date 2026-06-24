import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LocationStep } from './LocationStep';
import { CategoryStep } from './CategoryStep';
import { QuestionStep } from './QuestionStep';
import { ResultsStep } from './ResultsStep';
import { Category, questionsByCategory } from '@/data/mockArtisans';
import { Toaster } from '@/components/ui/sonner';

type SearchStep = 'location' | 'category' | 'questions' | 'results';

export function ArtisanSearchFlow() {
  const [step, setStep] = useState<SearchStep>('location');
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleLocationNext = (loc: string) => {
    setLocation(loc);
    setStep('category');
  };

  const handleCategorySelect = (cat: Category) => {
    setSelectedCategory(cat);
    setStep('questions');
  };

  const handleQuestionsComplete = (ans: Record<string, string>) => {
    setAnswers(ans);
    setStep('results');
  };

  const handleBack = () => {
    if (step === 'results') setStep('questions');
    else if (step === 'questions') setStep('category');
    else if (step === 'category') setStep('location');
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 flex flex-col">
      <Toaster position="top-center" />
      <div className="max-w-6xl mx-auto py-8 md:py-16 flex-1 w-full">
        <AnimatePresence mode="wait">
          {step === 'location' && (
            <LocationStep key="location" onNext={handleLocationNext} />
          )}
          {step === 'category' && (
            <CategoryStep key="category" onSelect={handleCategorySelect} />
          )}
          {step === 'questions' && selectedCategory && (
            <QuestionStep 
              key="questions" 
              questions={questionsByCategory[selectedCategory.id] || []} 
              onComplete={handleQuestionsComplete}
              onBack={handleBack}
            />
          )}
          {step === 'results' && selectedCategory && (
            <ResultsStep 
              key="results" 
              category={selectedCategory} 
              location={location}
              answers={answers}
              onBack={() => setStep('category')}
            />
          )}
        </AnimatePresence>
      </div>

      <footer className="max-w-6xl mx-auto w-full py-8 border-t text-center text-sm text-muted-foreground">
        <div className="flex flex-col items-center gap-2">
          <p className="font-bold text-primary">PeaceMak</p>
          <p>© {new Date().getFullYear()} All rights reserved. Connecting craftsmanship with your needs.</p>
        </div>
      </footer>
    </div>
  );
}
