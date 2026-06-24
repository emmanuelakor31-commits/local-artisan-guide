import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories, Category } from '@/data/mockArtisans';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

interface CategoryStepProps {
  onSelect: (category: Category) => void;
  onBack: () => void;
}

export function CategoryStep({ onSelect, onBack }: CategoryStepProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="w-full flex justify-start">
          <Button variant="ghost" onClick={onBack}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">What service do you need?</h2>
          <p className="text-muted-foreground">Select a category to find the right expert for your job.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card 
            key={category.id}
            className="overflow-hidden cursor-pointer transition-all hover:ring-2 hover:ring-primary hover:shadow-lg group"
            onClick={() => onSelect(category)}
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
