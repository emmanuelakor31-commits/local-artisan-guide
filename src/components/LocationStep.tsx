import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Navigation, Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationStepProps {
  onNext: (location: string) => void;
}

export function LocationStep({ onNext }: LocationStepProps) {
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUseMyLocation = () => {
    setIsLoading(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, we'd reverse geocode this
          setLocation(`Lat: ${position.coords.latitude.toFixed(2)}, Long: ${position.coords.longitude.toFixed(2)}`);
          setIsLoading(false);
        },
        () => {
          setIsLoading(false);
          // Handle error
        }
      );
    } else {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center space-y-8 text-center"
    >
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          PeaceMak
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Connecting you with trusted local artisans in minutes. Reliable, verified, and close to you.
        </p>
      </div>

      <div className="w-full max-w-md space-y-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Enter your city or area"
            className="pl-10 py-6 text-lg"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="flex-1 py-6 text-lg"
            onClick={() => location && onNext(location)}
            disabled={!location}
          >
            <Search className="mr-2 h-5 w-5" />
            Find Artisan
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 py-6 text-lg"
            onClick={handleUseMyLocation}
            disabled={isLoading}
          >
            <Navigation className={`mr-2 h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
            Near Me
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
        <div className="flex flex-col items-center space-y-2">
          <div className="p-3 bg-secondary rounded-full">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <span className="text-sm font-medium">Local Experts</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="p-3 bg-secondary rounded-full">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <span className="text-sm font-medium">Verified Pros</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="p-3 bg-secondary rounded-full">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <span className="text-sm font-medium">Quick Response</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="p-3 bg-secondary rounded-full">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <span className="text-sm font-medium">Peace of Mind</span>
        </div>
      </div>
    </motion.div>
  );
}
