"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  BarChart,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Database,
  Globe,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    {
      icon: <Database className="h-10 w-10 text-blue-500" />,
      title: "Centralisation des Données",
      description:
        "Toutes les données éducatives sont centralisées dans une base de données sécurisée et accessible.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      title: "Analyses et Rapports",
      description:
        "Générez des rapports détaillés et des analyses pour prendre des décisions éclairées.",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "Gestion des Utilisateurs",
      description:
        "Différents niveaux d'accès pour les administrateurs, directeurs, enseignants et autres parties prenantes.",
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-500" />,
      title: "Accessibilité",
      description:
        "Accessible depuis n'importe où avec une connexion Internet, même dans les zones rurales.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-blue-500" />,
      title: "Compatible Mobile",
      description:
        "Interface responsive qui fonctionne sur tous les appareils, des ordinateurs aux smartphones.",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      title: "Sécurité Avancée",
      description:
        "Protection des données sensibles avec des protocoles de sécurité de pointe.",
    },
  ];

  const stats = [
    { value: "5,000+", label: "Écoles" },
    { value: "25,000+", label: "Enseignants" },
    { value: "500,000+", label: "Élèves" },
    { value: "23", label: "Régions" },
  ];

  const team = [
    {
      name: "Dr. Amadou Koné",
      role: "Directeur du Projet",
      image: "/images/emma.png",
    },
    {
      name: "Mme. Fatima Hassan",
      role: "Responsable Technique",
      image: "/images/emma.png",
    },
    {
      name: "M. Ibrahim Ousmane",
      role: "Spécialiste en Éducation",
      image: "/images/emma.png",
    },
    {
      name: "Mme. Aisha Deby",
      role: "Analyste de Données",
      image: "/images/emma.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Home Button */}
      <div className="container mx-auto px-4 pt-6">
        <motion.div
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link href="/">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Rest of the page content */}
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 dark:bg-blue-900/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-blue-950 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              À Propos de{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Tchad Education
              </span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transformons ensemble le système éducatif tchadien grâce à la
              numérisation et à la centralisation des données.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <Link href="/contact">Contactez-nous</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white dark:fill-gray-950"
            ></path>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/place-de-la-nation.png"
                alt="Notre Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-6 flex items-center">
                <BookOpen className="mr-3 h-8 w-8 text-blue-600" />
                Notre Mission
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Notre mission est de transformer le système éducatif tchadien en
                fournissant une plateforme numérique complète qui centralise les
                données éducatives de toutes les écoles du pays.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nous visons à améliorer la qualité de l'éducation en facilitant
                l'accès aux informations en temps réel, en permettant une
                meilleure prise de décision et en renforçant la transparence
                dans le secteur éducatif.
              </p>

              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Centraliser les données éducatives",
                  "Améliorer la prise de décision",
                  "Renforcer la transparence",
                  "Faciliter le suivi des progrès",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    variants={fadeIn}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-4">
              Fonctionnalités Principales
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Notre plateforme offre une gamme complète de fonctionnalités
              conçues pour répondre aux besoins du système éducatif tchadien.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-blue-100 dark:bg-blue-900/50 p-3 w-16 h-16 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-950 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900">
                  <CardContent className="p-6">
                    <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-4">
              Notre Équipe
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Une équipe dévouée de professionnels travaillant pour améliorer
              l'éducation au Tchad.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">Voir le profil</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-blue-950 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-10 dark:opacity-20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-6">
              Rejoignez-nous dans cette Transformation Éducative
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Ensemble, nous pouvons créer un avenir meilleur pour l'éducation
              au Tchad. Contactez-nous pour en savoir plus sur notre initiative.
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

      {/* Awards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-4 flex items-center justify-center">
              <Award className="mr-3 h-8 w-8 text-blue-600" />
              Reconnaissances
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Notre initiative a été reconnue pour son impact sur l'éducation au
              Tchad.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Prix de l'Innovation Éducative 2023",
              "Reconnaissance du Ministère de l'Éducation",
              "Partenaire de l'UNESCO",
              "Prix d'Excellence Numérique",
            ].map((award, index) => (
              <motion.div key={index} variants={fadeIn} whileHover={{ y: -5 }}>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center h-full flex items-center justify-center">
                  <p className="text-blue-800 dark:text-blue-300 font-medium">
                    {award}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
