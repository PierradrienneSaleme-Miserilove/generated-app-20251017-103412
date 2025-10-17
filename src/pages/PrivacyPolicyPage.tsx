import { MainLayout } from '@/components/layout/MainLayout';
export function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <div className="bg-saro-rose/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-saro-dark">
            Politique de Confidentialité
          </h1>
          <p className="mt-4 text-lg text-saro-dark/70">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none text-saro-dark/80">
          <p>
            Bienvenue sur la politique de confidentialité de Saro Services. Votre vie privée est importante pour nous. Cette politique explique quelles informations nous collectons, comment nous les utilisons et les choix que vous avez concernant vos informations.
          </p>
          <h2>1. Informations que nous collectons</h2>
          <p>
            Nous collectons des informations que vous nous fournissez directement, telles que votre nom, votre adresse e-mail et votre message lorsque vous utilisez notre formulaire de contact. Nous pouvons également collecter des informations automatiquement lorsque vous naviguez sur notre site, comme votre adresse IP et votre type de navigateur.
          </p>
          <h2>2. Utilisation de vos informations</h2>
          <p>
            Les informations que nous collectons sont utilisées pour :
          </p>
          <ul>
            <li>Fournir, exploiter et maintenir notre site web</li>
            <li>Améliorer, personnaliser et développer notre site web</li>
            <li>Comprendre et analyser la manière dont vous utilisez notre site web</li>
            <li>Vous envoyer des communications, si vous y avez consenti</li>
            <li>Répondre à vos demandes et questions</li>
          </ul>
          <h2>3. Partage de vos informations</h2>
          <p>
            Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager des informations avec des fournisseurs de services de confiance qui nous aident à exploiter notre site, à condition que ces parties acceptent de garder ces informations confidentielles.
          </p>
          <h2>4. Sécurité</h2>
          <p>
            Nous mettons en œuvre une variété de mesures de sécurité pour maintenir la sécurité de vos informations personnelles. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est sûre à 100 %.
          </p>
          <h2>5. Vos droits</h2>
          <p>
            Vous avez le droit d'accéder, de corriger ou de supprimer vos informations personnelles que nous détenons. Pour exercer ces droits, veuillez nous contacter à l'adresse e-mail fournie sur notre page de contact.
          </p>
          <h2>6. Modifications de cette politique</h2>
          <p>
            Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous notifierons de tout changement en publiant la nouvelle politique de confidentialité sur cette page.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}