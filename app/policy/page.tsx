"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Clock,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

export default function PolicyPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sections = [
    {
      id: "information-collected",
      title: "Informations Collectées",
      content: `
        <p>Nous collectons les types d'informations suivants :</p>
        <ul>
          <li><strong>Informations personnelles</strong> : Nom, prénom, adresse email, numéro de téléphone, et autres informations similaires que vous nous fournissez volontairement.</li>
          <li><strong>Informations d'identification</strong> : Identifiants de connexion, mots de passe et informations similaires nécessaires pour l'authentification et l'accès au compte.</li>
          <li><strong>Informations sur les écoles</strong> : Données relatives aux écoles, y compris leur emplacement, leurs infrastructures, leur personnel et leurs élèves.</li>
          <li><strong>Informations d'utilisation</strong> : Données sur la façon dont vous interagissez avec notre plateforme, y compris les pages visitées, les fonctionnalités utilisées et le temps passé sur la plateforme.</li>
        </ul>
      `,
    },
    {
      id: "use-of-information",
      title: "Utilisation des Informations",
      content: `
        <p>Nous utilisons les informations collectées pour :</p>
        <ul>
          <li>Fournir, maintenir et améliorer notre plateforme et ses fonctionnalités.</li>
          <li>Traiter et gérer les comptes des utilisateurs.</li>
          <li>Communiquer avec vous concernant votre compte, les mises à jour de la plateforme et les informations importantes.</li>
          <li>Analyser l'utilisation de la plateforme pour améliorer l'expérience utilisateur et développer de nouvelles fonctionnalités.</li>
          <li>Protéger la sécurité et l'intégrité de notre plateforme et de nos utilisateurs.</li>
          <li>Se conformer aux obligations légales et réglementaires.</li>
        </ul>
      `,
    },
    {
      id: "data-sharing",
      title: "Partage des Données",
      content: `
        <p>Nous ne vendons pas vos informations personnelles à des tiers. Nous pouvons partager vos informations dans les circonstances suivantes :</p>
        <ul>
          <li><strong>Avec le Ministère de l'Éducation</strong> : En tant que plateforme officielle du système éducatif tchadien, les données sont partagées avec le Ministère de l'Éducation pour la gestion et l'amélioration du système éducatif.</li>
          <li><strong>Avec les prestataires de services</strong> : Nous pouvons partager des informations avec des tiers qui nous aident à exploiter, fournir, améliorer, intégrer, personnaliser, soutenir et commercialiser nos services.</li>
          <li><strong>Pour des raisons légales</strong> : Nous pouvons divulguer des informations si nous estimons de bonne foi que cette divulgation est nécessaire pour se conformer à la loi, protéger nos droits ou assurer la sécurité de nos utilisateurs.</li>
        </ul>
      `,
    },
    {
      id: "data-security",
      title: "Sécurité des Données",
      content: `
        <p>Nous prenons la sécurité de vos données très au sérieux et mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations contre tout accès, utilisation ou divulgation non autorisés. Ces mesures comprennent :</p>
        <ul>
          <li>Le chiffrement des données sensibles.</li>
          <li>Des contrôles d'accès stricts pour limiter l'accès aux informations.</li>
          <li>Des audits de sécurité réguliers.</li>
          <li>La formation du personnel sur les pratiques de sécurité des données.</li>
        </ul>
        <p>Cependant, aucun système n'est totalement sécurisé, et nous ne pouvons garantir la sécurité absolue de vos informations.</p>
      `,
    },
    {
      id: "user-rights",
      title: "Droits des Utilisateurs",
      content: `
        <p>Vous avez certains droits concernant vos informations personnelles, notamment :</p>
        <ul>
          <li>Le droit d'accéder aux informations que nous détenons sur vous.</li>
          <li>Le droit de rectifier les informations inexactes.</li>
          <li>Le droit de demander la suppression de vos informations dans certaines circonstances.</li>
          <li>Le droit de limiter ou de vous opposer au traitement de vos informations.</li>
          <li>Le droit à la portabilité des données dans certaines circonstances.</li>
        </ul>
        <p>Pour exercer ces droits, veuillez nous contacter à l'adresse indiquée ci-dessous.</p>
      `,
    },
    {
      id: "cookies",
      title: "Cookies et Technologies Similaires",
      content: `
        <p>Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre plateforme, comprendre comment vous interagissez avec elle et personnaliser le contenu. Vous pouvez contrôler l'utilisation des cookies via les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités de notre plateforme.</p>
      `,
    },
    {
      id: "changes",
      title: "Modifications de la Politique",
      content: `
        <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre pour refléter les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires. Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la façon dont nous protégeons vos informations.</p>
      `,
    },
    {
      id: "contact",
      title: "Nous Contacter",
      content: `
        <p>Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou nos pratiques en matière de données, veuillez nous contacter à :</p>
        <p>
          Ministère de l'Éducation<br>
          Avenue Charles de Gaulle<br>
          N'Djamena, Tchad<br>
          Email: privacy@education.td<br>
          Téléphone: +235 00 00 00 00
        </p>
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-5 dark:opacity-10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="h-8 w-8 text-blue-600" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-blue-950 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Politique de{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Confidentialité
              </span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto prose prose-blue dark:prose-invert"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Cette politique de confidentialité décrit comment nous collectons,
              utilisons et partageons vos informations personnelles lorsque vous
              utilisez la plateforme Tchad Education. Nous nous engageons à
              protéger votre vie privée et à traiter vos données personnelles
              conformément aux lois et réglementations applicables en matière de
              protection des données.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              En utilisant notre plateforme, vous acceptez les pratiques
              décrites dans cette politique de confidentialité. Si vous
              n'acceptez pas cette politique, veuillez ne pas utiliser notre
              plateforme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-blue-950 dark:text-white mb-6 flex items-center">
              <FileText className="mr-3 h-6 w-6 text-blue-600" />
              Sommaire
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={`#${section.id}`}
                    className="flex items-center text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {section.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    {index === 0 ? (
                      <Eye className="h-6 w-6 text-blue-600" />
                    ) : index === 1 ? (
                      <FileText className="h-6 w-6 text-blue-600" />
                    ) : index === 2 ? (
                      <Lock className="h-6 w-6 text-blue-600" />
                    ) : index === 3 ? (
                      <Shield className="h-6 w-6 text-blue-600" />
                    ) : index === 4 ? (
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    ) : index === 5 ? (
                      <Clock className="h-6 w-6 text-blue-600" />
                    ) : (
                      <FileText className="h-6 w-6 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-blue-950 dark:text-white mb-4">
                      {section.title}
                    </h2>
                    <div
                      className="prose prose-blue dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-6">
              Des Questions sur Notre Politique?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Si vous avez des questions ou des préoccupations concernant notre
              politique de confidentialité, n'hésitez pas à nous contacter.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <Link href="/contact" className="flex items-center">
                  Contactez-nous
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}