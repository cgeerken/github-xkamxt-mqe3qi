import React from 'react';
import { motion } from 'framer-motion';
import { Beer, Radio, Cookie, Wrench, Gauge, Brain, Car, Ship } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface CompanyCardProps {
  name: string;
  url: string;
  description: string;
  icon: 'beer' | 'radio' | 'cookie' | 'wrench' | 'gauge' | 'brain' | 'car' | 'ship';
}

const icons: Record<string, LucideIcon> = {
  beer: Beer,
  radio: Radio,
  cookie: Cookie,
  wrench: Wrench,
  gauge: Gauge,
  brain: Brain,
  car: Car,
  ship: Ship,
};

export const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  url,
  description,
  icon,
}) => {
  const Icon = icons[icon];

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group block bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-500/5 rounded-lg group-hover:bg-blue-500/10 transition-colors">
          <Icon className="w-4 h-4 text-blue-400/80 group-hover:text-blue-400 transition-colors" />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-medium text-gray-300 group-hover:text-gray-200 transition-colors truncate">
            {name}
          </h3>
          <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors mt-0.5 truncate">
            {description}
          </p>
        </div>
      </div>
    </motion.a>
  );
};