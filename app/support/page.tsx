"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  Search,
  HelpCircle,
  FileText,
  Video,
  BookOpen,
  MessageSquare,
  Phone,
  Mail,
  ChevronRight,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function SupportPage() {
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

  const supportCategories = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Documentation",
      description: "Guides détaillés et documentation technique",
      link: "#documentation",
    },
    {
      icon: <Video className="h-8 w-8 text-blue-600" />,
      title: "Tutoriels Vidéo",
      description: "Apprenez visuellement avec nos tutoriels vidéo",
      link: "#videos",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Base de Connaissances",
      description: "Articles et solutions aux problèmes courants",
      link: "#knowledge-base",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "Support Chat",
      description: "Discutez en direct avec notre équipe de support",
      link: "#chat",
    },
  ];

  const faqItems = [
    {
      question: "Comment réinitialiser mon mot de passe?",
      answer:
        "Pour réinitialiser votre mot de passe, cliquez sur 'Mot de passe oublié' sur la page de connexion. Vous recevrez un email avec les instructions pour créer un nouveau mot de passe.",
    },
    {
      question: "Comment ajouter un nouvel élève dans le système?",
      answer:
        "Pour ajouter un nouvel élève, connectez-vous à votre compte, accédez à la section 'Élèves', cliquez sur 'Ajouter un élève' et remplissez le formulaire avec les informations requises.",
    },
    {
      question: "Comment générer des rapports sur les performances des élèves?",
      answer:
        "Pour générer des rapports, accédez à la section 'Rapports', sélectionnez 'Performance des élèves', choisissez la période et les critères souhaités, puis cliquez sur 'Générer le rapport'.",
    },
    {
      question: "Comment mettre à jour les informations de mon école?",
      answer:
        "Pour mettre à jour les informations de votre école, accédez à 'Paramètres de l'école', cliquez sur 'Modifier' et mettez à jour les informations nécessaires.",
    },
    {
      question: "Comment contacter le support technique?",
      answer:
        "Vous pouvez contacter notre support technique par email à support@education.td, par téléphone au +235 00 00 00 00, ou en utilisant le chat en direct disponible sur la plateforme.",
    },
    {
      question: "La plateforme est-elle accessible hors ligne?",
      answer:
        "Certaines fonctionnalités de base sont disponibles hors ligne, mais une connexion Internet est nécessaire pour synchroniser les données et accéder à toutes les fonctionnalités.",
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
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-blue-950 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Centre de{" "}
              <span className="text-blue-600 dark:text-blue-400">Support</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Trouvez de l'aide, des ressources et des réponses à vos questions
            </motion.p>

            <motion.div
              className="max-w-xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Rechercher dans notre base de connaissances..."
                  className="pl-10 pr-4 py-6 rounded-full border-gray-300 focus:border-blue-400 focus:ring-blue-400 shadow-lg"
                />
                <Button className="absolute right-1.5 top-1/2 transform -translate-y-1/2 rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                  Rechercher
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {supportCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={category.link}>
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="rounded-full bg-blue-100 dark:bg-blue-900/50 p-4 mb-4">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-950 dark:text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {category.description}
                      </p>
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-4">
              Questions Fréquemment Posées
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Trouvez rapidement des réponses aux questions les plus courantes
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general">Général</TabsTrigger>
                <TabsTrigger value="account">Compte</TabsTrigger>
                <TabsTrigger value="technical">Technique</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-4">
                {faqItems.slice(0, 3).map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-blue-950 dark:text-white mb-3 flex items-start">
                          <HelpCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 ml-7">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="account" className="space-y-4">
                {faqItems.slice(3, 5).map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-blue-950 dark:text-white mb-3 flex items-start">
                          <HelpCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 ml-7">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="technical" className="space-y-4">
                {faqItems.slice(5).map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-blue-950 dark:text-white mb-3 flex items-start">
                          <HelpCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 ml-7">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>

            <div className="text-center mt-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Vous ne trouvez pas ce que vous cherchez?
              </p>
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link href="/contact" className="flex items-center">
                  Contactez-nous
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-4">
              Canaux de Support
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Plusieurs façons de recevoir de l'aide quand vous en avez besoin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Phone className="h-8 w-8 text-blue-600" />,
                title: "Support Téléphonique",
                description:
                  "Appelez-nous directement pour une assistance immédiate",
                detail: "+235 00 00 00 00",
                hours: "Lun-Ven, 8h00-16h00",
              },
              {
                icon: <Mail className="h-8 w-8 text-blue-600" />,
                title: "Support Email",
                description:
                  "Envoyez-nous un email et nous vous répondrons sous 24h",
                detail: "support@education.td",
                hours: "Réponse sous 24h",
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
                title: "Chat en Direct",
                description:
                  "Discutez en temps réel avec notre équipe de support",
                detail: "Disponible sur la plateforme",
                hours: "Lun-Ven, 9h00-15h00",
              },
            ].map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="rounded-full bg-blue-100 dark:bg-blue-900/50 p-4 mb-4">
                      {channel.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-950 dark:text-white mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {channel.description}
                    </p>
                    <p className="font-medium text-blue-600 dark:text-blue-400 mb-1">
                      {channel.detail}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {channel.hours}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Help Resources */}
      <section className="py-16 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-4">
              Ressources d'Auto-Assistance
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Explorez nos ressources pour résoudre les problèmes par vous-même
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Guide de Démarrage Rapide",
                description:
                  "Apprenez les bases pour commencer à utiliser la plateforme",
                link: "#",
              },
              {
                title: "Tutoriels Vidéo",
                description:
                  "Regardez nos tutoriels étape par étape pour maîtriser les fonctionnalités",
                link: "#",
              },
              {
                title: "Documentation Technique",
                description:
                  "Documentation détaillée pour les administrateurs système",
                link: "#",
              },
              {
                title: "Meilleures Pratiques",
                description:
                  "Conseils pour tirer le meilleur parti de la plateforme",
                link: "#",
              },
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={resource.link}>
                  <Card className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-blue-950 dark:text-white mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                        {resource.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 ml-7 mb-2">
                        {resource.description}
                      </p>
                      <div className="ml-7 text-blue-600 dark:text-blue-400 flex items-center">
                        Voir plus <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}