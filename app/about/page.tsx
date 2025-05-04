import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au tableau de bord
        </Link>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          À Propos du Système de Gestion Éducative du Tchad
        </h1>

        <div className="prose max-w-none dark:prose-invert">
          <h2>Notre Mission</h2>
          <p>
            Le Système de Gestion Éducative du Tchad est une plateforme
            numérique conçue pour moderniser et améliorer la gestion du système
            éducatif tchadien. Notre mission est de fournir aux acteurs de
            l'éducation - du Ministre aux élèves - des outils efficaces pour
            suivre, analyser et améliorer les performances éducatives à travers
            le pays.
          </p>

          <h2>Objectifs</h2>
          <ul>
            <li>
              Centraliser les données éducatives pour une meilleure prise de
              décision
            </li>
            <li>
              Améliorer la communication entre les différents niveaux
              administratifs
            </li>
            <li>
              Faciliter le suivi des performances des élèves et des
              établissements
            </li>
            <li>Optimiser l'allocation des ressources éducatives</li>
            <li>Réduire les inégalités d'accès à l'éducation</li>
          </ul>

          <h2>Fonctionnalités Principales</h2>
          <ul>
            <li>
              Tableaux de bord personnalisés pour chaque type d'utilisateur
            </li>
            <li>Gestion complète des écoles, enseignants et élèves</li>
            <li>Suivi des performances académiques</li>
            <li>Gestion des besoins matériels et humains</li>
            <li>Génération de rapports statistiques</li>
            <li>Support multilingue (français, anglais, arabe)</li>
          </ul>

          <h2>Contact</h2>
          <p>
            Pour toute question ou assistance concernant cette plateforme,
            veuillez contacter:
          </p>
          <p>
            <strong>Direction des Systèmes d'Information</strong>
            <br />
            Ministère de l'Éducation Nationale
            <br />
            N'Djamena, Tchad
            <br />
            Email: support@edutchad.gov.td
            <br />
            Téléphone: +235 22 52 45 87
          </p>

          <h2>Développement</h2>
          <p>
            Cette plateforme a été développée en collaboration avec des experts
            en éducation tchadiens et des spécialistes en technologies
            éducatives, avec le soutien de partenaires internationaux.
          </p>

          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            © 2023 Ministère de l'Éducation Nationale du Tchad. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
