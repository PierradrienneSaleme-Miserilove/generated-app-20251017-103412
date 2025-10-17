import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Target, Eye } from 'lucide-react';
import { leadershipTeam } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: "Nous sommes passionnés par la mode et l'éducation, et nous mettons tout notre cœur pour aider nos clients à atteindre leurs objectifs.",
  },
  {
    icon: Target,
    title: 'Excellence',
    description: "Nous visons l'excellence dans tout ce que nous faisons, de la sélection de nos produits à la qualité de notre accompagnement.",
  },
  {
    icon: Eye,
    title: 'Vision',
    description: "Notre vision est de devenir la référence pour les femmes qui cherchent à allier style personnel et ambitions académiques.",
  },
];
export function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative bg-saro-dark text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop"
            alt="Atelier de mode"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-display font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Notre Histoire
          </motion.h1>
          <motion.p
            className="mt-4 max-w-3xl mx-auto text-lg text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Saro Chic & Conseil est né d'une double passion : la célébration de la beauté féminine et l'accompagnement vers la réussite.
          </motion.p>
        </div>
      </div>
      {/* Founder's Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-saro-dark">La Vision de Saro</h2>
              <p className="mt-4 text-lg text-saro-dark/70 leading-relaxed">
                Fondée par Saro, une entrepreneure passionnée par la mode et convaincue du pouvoir de l'éducation, notre entreprise a pour mission d'offrir aux femmes les outils pour s'épanouir, tant sur le plan personnel que professionnel.
              </p>
              <p className="mt-4 text-lg text-saro-dark/70 leading-relaxed">
                "J'ai toujours cru que l'élégance et l'ambition n'étaient pas exclusives. Avec Saro Chic & Conseil, je veux créer un espace où chaque femme peut trouver l'inspiration pour son style et le soutien nécessaire pour réaliser ses rêves d'études en France."
              </p>
              <p className="mt-4 text-lg font-semibold text-saro-dark">- Saro, Fondatrice</p>
              <p className="mt-4 text-lg text-saro-dark/70 leading-relaxed">
                L'entreprise est présidée par FANOU Pierradrienne Saleme Miserilove, qui partage la même passion et vision pour l'autonomisation des femmes à travers l'élégance et l'éducation.
              </p>
            </motion.div>
            <motion.div
              className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af10?q=80&w=1974&auto=format&fit=crop"
                alt="Saro, la fondatrice"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-16 md:py-24 bg-saro-rose/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-saro-dark">Nos Valeurs</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-saro-dark/70">
              Ce qui nous guide chaque jour.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-saro-gold text-saro-dark">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-saro-dark">{value.title}</h3>
                <p className="mt-2 text-saro-dark/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-saro-dark">Notre Équipe</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-saro-dark/70">
              Les visages derrière Saro Services, dédiés à votre succès.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-w-1 aspect-h-1">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-saro-dark">{member.name}</h3>
                      <p className="text-saro-gold font-medium">{member.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-saro-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Rejoignez l'aventure Saro</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Que vous cherchiez la tenue parfaite ou le bon conseil pour votre avenir, nous sommes là pour vous.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-saro-gold text-saro-dark hover:bg-saro-gold/90">
              <Link to="/boutique">Explorer la boutique</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-saro-dark">
              <Link to="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}