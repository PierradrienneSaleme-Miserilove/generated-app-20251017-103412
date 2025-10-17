import { MainLayout } from '@/components/layout/MainLayout';
import { ContactForm } from '@/components/shared/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Toaster } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';
import { leadershipTeam } from '@/data/mockData';
import { motion } from 'framer-motion';
const contactDetails = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@saroservices.com',
    href: 'mailto:contact@saroservices.com',
  },
  {
    icon: Phone,
    title: 'Téléphone Gén��ral',
    value: '+33 6 38 03 79 56 / +229 01 68 70 44 38 / +229 01 92 92 17 99 / +33 7 44 47 10 97 / +2290152055261',
    href: 'tel:+33638037956',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    value: '123 Rue de la Mode, 75001 Paris, France',
  },
];
const keyContacts = leadershipTeam.filter(member => member.keyContact);
export function ContactPage() {
  return (
    <MainLayout>
      <Toaster richColors position="top-center" />
      <div className="bg-saro-rose/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-saro-dark">
            Contactez-nous
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-saro-dark/70">
            Nous sommes l�� pour répondre à toutes vos questions. N'hésitez pas à nous écrire.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-saro-dark">Nos Coordonnées</h2>
              <p className="mt-4 text-lg text-saro-dark/70">
                Vous pouvez nous joindre via les canaux suivants. Nous nous efforçons de répondre rapidement à toutes les demandes.
              </p>
              <div className="mt-6 space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-saro-gold text-saro-dark">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-saro-dark">{detail.title}</h3>
                      {detail.href ? (
                        <a href={detail.href} className="text-saro-dark/80 hover:text-saro-gold transition-colors">
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-saro-dark/80">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-saro-dark">Vos Interlocuteurs Privilégiés</h2>
              <p className="mt-4 text-lg text-saro-dark/70">
                Pour des questions spécifiques, n'hésitez pas à contacter directement nos fondateurs.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {keyContacts.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="text-center overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                      <CardContent className="p-4 flex flex-col items-center">
                        <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover" />
                        <div className="mt-4 flex flex-col items-center space-y-2">
                          <h3 className="text-lg font-semibold text-saro-dark">{member.name}</h3>
                          <p className="text-saro-gold text-sm font-medium">{member.title}</p>
                          <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="inline-flex items-center text-sm text-saro-dark/70 hover:text-saro-dark">
                            <Phone className="mr-2 h-4 w-4" />
                            {member.phone}
                          </a>
                          {member.email && (
                            <a href={`mailto:${member.email}`} className="inline-flex items-center text-sm text-saro-dark/70 hover:text-saro-dark break-all">
                              <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                              <span>{member.email}</span>
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg sticky top-24">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-display font-bold text-saro-dark mb-6">Envoyez-nous un message</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}