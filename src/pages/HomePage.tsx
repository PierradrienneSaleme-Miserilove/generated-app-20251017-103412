import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { featuredCategories, campusFranceService } from '@/data/mockData';
export function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };
  const createFadeInWithDelay = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
        delay,
      },
    },
  });
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2070&auto=format&fit=crop"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>
        <motion.div
          className="relative z-10 px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-balance">
            Saro Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 text-balance">
            Votre destination pour la mode femme et enfant, cosmétiques, parfums, et un accompagnement expert pour vos études en France.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-saro-gold text-saro-dark hover:bg-saro-gold/90 transition-all duration-300 transform hover:scale-105">
              <Link to="/boutique">Explorer la boutique</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-saro-dark transition-all duration-300 transform hover:scale-105">
              <Link to="/campus-france">En savoir plus</Link>
            </Button>
          </div>
        </motion.div>
      </section>
      {/* Featured Categories Section */}
      <section className="bg-saro-rose/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-saro-dark">Nos Collections</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-saro-dark/70">
              Des pièces sélectionnées avec soin pour toute la famille.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={createFadeInWithDelay(index * 0.15)}
              >
                <Card className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                  <CardContent className="p-0 relative h-full flex flex-col">
                    <div className="aspect-w-3 aspect-h-4">
                      <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
                      <h3 className="text-2xl font-display font-semibold text-white">{category.name}</h3>
                      <p className="mt-2 text-sm text-gray-200">{category.description}</p>
                      <Button asChild variant="secondary" className="mt-4 bg-white/90 text-saro-dark hover:bg-white">
                        <Link to={category.href}>Découvrir <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Campus France Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-saro-dark">{campusFranceService.title}</h2>
              <p className="mt-4 text-lg text-saro-dark/70 leading-relaxed">
                {campusFranceService.description}
              </p>
              <Button asChild size="lg" className="mt-8 bg-saro-dark text-white hover:bg-saro-dark/90">
                <Link to={campusFranceService.href}>
                  Commencer mon projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img src={campusFranceService.imageUrl} alt="Étudiants en France" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}