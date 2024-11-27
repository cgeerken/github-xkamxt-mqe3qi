import React from 'react';
import { CompanyCard } from './CompanyCard';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export const CompanyShowcase: React.FC = () => {
  const companies = [
    {
      name: 'OCD/InBev',
      url: 'https://www.oestecentro.com.ar/',
      description: 'Distribuidora de cervezas',
      icon: 'beer',
    },
    {
      name: 'INS Servicios',
      url: 'https://ins-servicios.com.ar/',
      description: 'Empresa instaladora telecomunicaciones',
      icon: 'radio',
    },
    {
      name: 'Bimbo',
      url: 'https://www.bimbo.com.ar/',
      description: 'Panificadora, bimbo',
      icon: 'cookie',
    },
    {
      name: 'Grosselli',
      url: 'http://www.grosselli.com.ar/es/',
      description: 'Empresa instaladora telecomunicaciones',
      icon: 'wrench',
    },
    {
      name: 'Vaxel',
      url: 'https://vaxel.maspedidos.com.ar/#/login',
      description: 'Venta mayorista motopartes',
      icon: 'gauge',
    },
    {
      name: 'Founderz',
      url: 'https://founderz.com/es/',
      description: 'Masters en inteligencia artificial',
      icon: 'brain',
    },
    {
      name: 'Blueink',
      url: 'https://blueink.com.ar/',
      description: 'Concesionaria oficial de polaris (UTVs y repuestos)',
      icon: 'car',
    },
    {
      name: 'CLSA',
      url: 'https://www.loginter.com.ar/',
      description: 'Operador portuario ecommerce',
      icon: 'ship',
    },
  ] as const;

  // Duplicar el array para crear el efecto infinito
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="mt-12">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-5 h-5 text-blue-400" />
        <h2 className="text-lg font-semibold text-gray-200">Trabajamos Juntos</h2>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          animate={{
            x: [0, -50 * companies.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex gap-3"
        >
          {duplicatedCompanies.map((company, index) => (
            <div key={`${company.name}-${index}`} className="flex-shrink-0" style={{ width: '250px' }}>
              <CompanyCard {...company} />
            </div>
          ))}
        </motion.div>

        {/* Gradiente para suavizar los bordes */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};