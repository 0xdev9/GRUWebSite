import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@gru-security.com',
      action: 'mailto:contact@gru-security.com',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 1 23 45 67 89',
      action: 'tel:+33123456789',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Paris, France',
      action: 'https://maps.google.com/?q=Paris,France',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Contactez-nous</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              className="p-6 border border-gray-800 rounded-lg hover:border-brown-400 transition-all duration-300 transform hover:-translate-y-1 group"
              target={method.icon === MapPin ? '_blank' : undefined}
              rel={method.icon === MapPin ? 'noopener noreferrer' : undefined}
            >
              <method.icon className="w-12 h-12 text-brown-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-xl font-bold mb-2">{method.title}</h2>
              <p className="text-gray-300">{method.value}</p>
            </a>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Demande d'Intervention</h2>
          <div className="p-6 bg-brown-400 rounded-lg">
            <p className="text-white mb-6">
              Pour toute demande d'intervention dans votre établissement ou entreprise, 
              n'hésitez pas à nous contacter par email ou téléphone. Nous vous répondrons 
              dans les plus brefs délais avec une proposition adaptée à vos besoins.
            </p>
            <button
              onClick={() => window.location.href = 'mailto:interventions@gru-security.com'}
              className="bg-brown-300 hover:bg-black-400 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-bold"
            >
              Cliquer Ici
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}