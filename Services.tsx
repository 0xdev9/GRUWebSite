import React from 'react';
import { School, Building2, GraduationCap, Briefcase } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: School,
      title: 'Collèges',
      description: 'Sensibilisation adaptée aux adolescents sur les réseaux sociaux et la cybersécurité basique.',
      //mettre redirection vers contact//
    },
    {
      icon: GraduationCap,
      title: 'Lycées',
      description: 'Formation approfondie sur la protection des données et les bonnes pratiques en ligne.',
      
    },
    {
      icon: Building2,
      title: 'Universités',
      description: 'Workshops techniques sur l\'OSINT et la sécurité informatique avancée.',
 
    },
    {
      icon: Briefcase,
      title: 'Entreprises',
      description: 'Formations personnalisées sur la sécurité des données et la sensibilisation des employés.',

      
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Nos Services</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-800 rounded-lg hover:border-red-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <service.icon className="w-12 h-12 text-red-300 mb-4" />
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Notre Approche</h2>
          <div className="space-y-6">
            <div className="p-6 border border-gray-800 rounded-lg hover:border-red-300 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4">Présentations Interactives</h3>
              <p className="text-white">
                Nos sessions sont conçues pour être engageantes et participatives, utilisant des cas réels et des démonstrations pratiques.
              </p>
            </div>
            <div className="p-6 border border-gray-800 rounded-lg hover:border-red-300 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl  font-bold mb-4">Contenu Personnalisé</h3>
              <p className="text-white">
                Chaque présentation est adaptée au niveau et aux besoins spécifiques de votre public.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}