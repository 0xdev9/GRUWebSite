import React from 'react';
import { Shield, Eye, Users } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="fondhome.webp"
            alt="Cybersecurity Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="text-center">
            <div className="inline-block relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-red-300 to-red-300">
                Ghost Recon Unit
              </h1>
              <div className="absolute -inset-1 blur-2xl bg-red-300/20 rounded-full opacity-75"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up max-w-2xl mx-auto">
              Sensibilisation à la sécurité numérique et à l'OSINT
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      <section className="py-16 bg-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-800 rounded-lg hover:border-red-300 transition-colors duration-300">
              <Shield className="w-12 h-12 text-red-300 mb-4" />
              <h3 className="text-xl font-bold mb-4">Protection</h3>
              <p className="text-gray-300">
                Nous protégeons vos données personnelles en vous sensibilisant aux risques du numérique.
              </p>
            </div>
            <div className="p-6 border border-gray-800 rounded-lg hover:border-red-300 transition-colors duration-300">
              <Eye className="w-12 h-12 text-red-300 mb-4" />
              <h3 className="text-xl font-bold mb-4">Sensibilisation</h3>
              <p className="text-gray-300">
                Nous formons à la reconnaissance des menaces en ligne et à la protection de la vie privée.
              </p>

            </div>
            <div className="p-6 border border-gray-800 rounded-lg hover:border-red-300 transition-colors duration-300">
              <Users className="w-12 h-12 text-red-300 mb-4" />
              <h3 className="text-xl font-bold mb-4">Formation</h3>
              <p className="text-gray-300">
                Nous adaptons nos interventions à tous les publics : écoles, entreprises, institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black to-red-300/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Réalisations</h2>
          <div className="space-y-8">
            <div className="p-6 border border-gray-800 rounded-lg hover:border-red-300 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4">Programme OYE (OpenYourEyes)</h3>
              <p className="text-gray-300">
                Initiative de sensibilisation mobile visant à sensibiliser et proteger le grand publique.
              </p>
             
            </div>
            <div className="p-6 border border-gray-800 rounded-lg hover:border-red-300 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4">Ateliers Pratiques</h3>
              <p className="text-gray-300">
                Sessions interactives sur la sécurité en ligne et la protection des données personnelles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}