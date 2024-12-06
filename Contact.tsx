import React from 'react';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Nous con',
      action: 'mailto:contact@gru-security.com',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 0 00 00 00 00',
      action: 'tel:+ pas encore à disposition',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: "Pour plus d'informations sur nos services, consultez notre page LinkedIn.",
      action: 'https://www.linkedin.com/company/guardia-recon-unit/',
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
              className="p-6 border border-gray-800 rounded-lg hover:border-red-300 transition-all duration-300 transform hover:-translate-y-1 group"
              target={method.icon === MapPin ? '_blank' : undefined}
              rel={method.icon === MapPin ? 'noopener noreferrer' : undefined}
            >
              <method.icon className="w-12 h-12 text-red-300 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-xl font-bold mb-2">{method.title}</h2>
              <p className="text-gray-300">{method.value}</p>
            </a>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Demande d'Intervention</h2>
          <div className="p-6 bg-grey-300 rounded-lg">
            <p className="text-white mb-6">
              Pour toute demande d'intervention dans votre établissement ou entreprise, 
              n'hésitez pas à nous contacter par email ou téléphone. Nous vous répondrons 
              dans les plus brefs délais avec une proposition adaptée à vos besoins.
            </p>
            <button
              onClick={() => window.location.href = 'mailto:interventions@gru-security.com'}
              className="bg-red-300 hover:bg-grey-300 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-bold"
            >
              Cliquer Ici
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}