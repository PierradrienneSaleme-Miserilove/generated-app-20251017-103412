import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Boutique', href: '/boutique' },
  { name: 'Campus France', href: '/campus-france' },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];
const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];
export function Footer() {
  return (
    <footer className="bg-saro-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display tracking-tight">Saro Services</h3>
            <p className="text-sm text-gray-300">Élégance, style et accompagnement pour la femme moderne.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-saro-gold">Navigation</h4>
              <ul className="mt-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-base text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-saro-gold">Légal</h4>
              <ul className="mt-4 space-y-2">
                <li><Link to="/politique-de-confidentialite" className="text-base text-gray-300 hover:text-white transition-colors">Politique de confidentialité</Link></li>
                <li><Link to="/conditions-d-utilisation" className="text-base text-gray-300 hover:text-white transition-colors">Conditions d'utilisation</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-saro-gold">Suivez-nous</h4>
              <div className="flex mt-4 space-x-6">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">{social.name}</span>
                    <social.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Saro Services. Tous droits réservés.</p>
          <p className="text-sm text-gray-400 mt-4 sm:mt-0">Built with ❤ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}