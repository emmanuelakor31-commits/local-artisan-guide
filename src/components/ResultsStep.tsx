import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Artisan, Category, mockArtisans } from '@/data/mockArtisans';
import { motion } from 'framer-motion';
import { Star, MapPin, CheckCircle, Phone, MessageSquare, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';

interface ResultsStepProps {
  category: Category;
  location: string;
  answers: Record<string, string>;
  onBack: () => void;
}

export function ResultsStep({ category, location, onBack }: ResultsStepProps) {
  // Simple filtering logic
  const filteredArtisans = mockArtisans.filter(a => a.category === category.id);

  const handleContact = (name: string) => {
    toast.success(`Contacting ${name}...`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Top {category.name}s near you</h2>
          <p className="text-muted-foreground flex items-center mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            Showing results for {location}
          </p>
        </div>
        <Button variant="outline" onClick={onBack}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Change Search
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredArtisans.length > 0 ? (
          filteredArtisans.map((artisan, index) => (
            <motion.div
              key={artisan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0 flex flex-col sm:flex-row">
                  <div className="w-full sm:w-48 h-48 sm:h-auto relative">
                    <img 
                      src={artisan.image} 
                      alt={artisan.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold">{artisan.name}</h3>
                          {artisan.verified && (
                            <CheckCircle className="h-4 w-4 text-blue-500" fill="currentColor" />
                          )}
                        </div>
                        <p className="text-sm text-primary font-medium">{artisan.specialty}</p>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {artisan.rating}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {artisan.distance} away
                      </span>
                      <span>•</span>
                      <span>{artisan.reviews} reviews</span>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button className="flex-1" onClick={() => handleContact(artisan.name)}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </Button>
                      <Button variant="outline" className="flex-1" onClick={() => handleContact(artisan.name)}>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center space-y-4">
            <p className="text-xl text-muted-foreground">No artisans found for this category in your area.</p>
            <Button variant="link" onClick={onBack}>Try another search</Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
