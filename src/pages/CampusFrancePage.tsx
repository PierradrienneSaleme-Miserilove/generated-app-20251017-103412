import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { campusFranceServices, campusFranceFaqs, testimonials } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ContactForm } from '@/components/shared/ContactForm';
import { Toaster } from 'sonner';
import { Star } from 'lucide-react';
export function CampusFrancePage() {
  return (
    <MainLayout>
      <Toaster richColors position="top-center" />
      {/* Hero Section */}
      <div className="relative bg-saro-dark text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="Étudiants"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-display font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Accompagnement Campus France
          </motion.h1>
          <motion.p
            className="mt-4 max-w-3xl mx-auto text-lg text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Réalisez votre rêve d'étudier en France avec un accompagnement sur mesure, de la constitution de votre dossier à la préparation de votre départ.
          </motion.p>
        </div>
      </div>
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-saro-rose/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-saro-dark">Nos Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-saro-dark/70">
              Nous vous proposons un accompagnement complet pour maximiser vos chances de succès.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusFranceServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-saro-gold text-saro-dark">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4 text-xl font-semibold text-saro-dark">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-saro-dark/70">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-saro-dark">Questions Fréquentes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-saro-dark/70">
              Trouvez les réponses aux questions les plus courantes sur la procédure Campus France.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full mt-12">
            {campusFranceFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-saro-dark/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-saro-rose/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-saro-dark">Ce que nos étudiants disent</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-saro-dark/70">
              La réussite de nos étudiants est notre plus grande fierté.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-saro-gold fill-saro-gold' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <blockquote className="italic text-saro-dark/80">"{testimonial.quote}"</blockquote>
                  </CardContent>
                  <CardHeader>
                    <CardTitle className="text-base font-semibold text-saro-dark">- {testimonial.name}</CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-saro-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Prêt à commencer ?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Contactez-nous dès aujourd'hui pour une première consultation gratuite et sans engagement.
            </p>
          </div>
          <Card className="mt-12">
            <CardContent className="p-6 md:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}