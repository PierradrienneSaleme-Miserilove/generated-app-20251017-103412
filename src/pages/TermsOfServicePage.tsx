import { MainLayout } from '@/components/layout/MainLayout';
export function TermsOfServicePage() {
  return (
    <MainLayout>
      <div className="bg-saro-rose/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-saro-dark">
            Conditions d'Utilisation
          </h1>
          <p className="mt-4 text-lg text-saro-dark/70">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none text-saro-dark/80">
          <p>
            Veuillez lire attentivement ces conditions d'utilisation avant d'utiliser le site web de Saro Services. Votre accès et votre utilisation du service sont conditionnés par votre acceptation et votre respect de ces conditions.
          </p>
          <h2>1. Acceptation des conditions</h2>
          <p>
            En accédant ou en utilisant le service, vous acceptez d'être lié par ces conditions. Si vous n'êtes pas d'accord avec une partie des conditions, vous ne pouvez pas accéder au service.
          </p>
          <h2>2. Contenu</h2>
          <p>
            Notre service vous permet de consulter des informations sur nos produits et services. Tout le contenu présent sur ce site, y compris les textes, images et logos, est la propriété de Saro Services et est protégé par les lois sur le droit d'auteur.
          </p>
          <h2>3. Utilisation du site</h2>
          <p>
            Vous vous engagez à ne pas utiliser le site à des fins illégales ou interdites par ces conditions. Vous ne pouvez pas utiliser le site d'une manière qui pourrait endommager, désactiver, surcharger ou nuire au site.
          </p>
          <h2>4. Liens vers d'autres sites web</h2>
          <p>
            Notre service peut contenir des liens vers des sites web ou des services tiers qui ne sont pas détenus ou contrôlés by Saro Services. Nous n'avons aucun contrôle sur, et n'assumons aucune responsabilité pour, le contenu, les politiques de confidentialité ou les pratiques des sites ou services tiers.
          </p>
          <h2>5. Limitation de responsabilité</h2>
          <p>
            En aucun cas Saro Services, ni ses directeurs, employés ou partenaires, ne pourront être tenus responsables de tout dommage indirect, accidentel, spécial, consécutif ou punitif résultant de votre accès ou de votre utilisation du service.
          </p>
          <h2>6. Modifications</h2>
          <p>
            Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces conditions à tout moment. Nous nous efforcerons de fournir un préavis d'au moins 30 jours avant l'entrée en vigueur de nouvelles conditions.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}