"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Adresse",
      details: [
        "Ministère de l'Éducation",
        "Avenue Charles de Gaulle",
        "N'Djamena, Tchad",
      ],
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Téléphone",
      details: ["+235 00 00 00 00", "+235 00 00 00 01"],
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      details: ["contact@education.td", "support@education.td"],
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Heures d'ouverture",
      details: [
        "Lundi - Vendredi: 8h00 - 16h00",
        "Fermé les weekends et jours fériés",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
              Contactez-
              <span className="text-blue-600 dark:text-blue-400">Nous</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Nous sommes là pour répondre à vos questions et vous aider à tirer
              le meilleur parti de notre plateforme.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-blue-950 dark:text-white mb-6">
                    Envoyez-nous un message
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Message envoyé avec succès!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Merci de nous avoir contactés. Nous vous répondrons dans
                        les plus brefs délais.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Envoyer un autre message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-gray-700 dark:text-gray-300"
                          >
                            Nom complet
                          </Label>
                          <Input
                            id="name"
                            placeholder="Votre nom"
                            required
                            className="border-gray-300 focus:border-blue-400 focus:ring-blue-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-gray-700 dark:text-gray-300"
                          >
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="votre@email.com"
                            required
                            className="border-gray-300 focus:border-blue-400 focus:ring-blue-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="subject"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Sujet
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Sujet de votre message"
                          required
                          className="border-gray-300 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Votre message"
                          required
                          className="min-h-[150px] border-gray-300 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Envoi en cours...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <Send className="mr-2 h-4 w-4" />
                              Envoyer le message
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-blue-950 dark:text-white mb-6">
                Informations de contact
              </h2>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950 dark:text-white mb-2">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-700 dark:text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-[300px] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Carte interactive ici
                </p>
              </div>
            </motion.div>
          </div>
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
              Questions Fréquentes
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Trouvez rapidement des réponses aux questions les plus courantes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "Comment puis-je accéder à la plateforme?",
                answer:
                  "Vous pouvez accéder à la plateforme en utilisant les identifiants fournis par le Ministère de l'Éducation. Si vous n'avez pas encore d'identifiants, veuillez contacter votre superviseur ou notre équipe de support.",
              },
              {
                question: "La plateforme est-elle accessible sur mobile?",
                answer:
                  "Oui, notre plateforme est entièrement responsive et peut être utilisée sur ordinateurs, tablettes et smartphones.",
              },
              {
                question: "Comment signaler un problème technique?",
                answer:
                  "Vous pouvez signaler un problème technique en utilisant le formulaire de contact sur cette page ou en envoyant un email à support@education.td.",
              },
              {
                question:
                  "Proposez-vous des formations pour utiliser la plateforme?",
                answer:
                  "Oui, nous organisons régulièrement des sessions de formation pour les utilisateurs. Contactez-nous pour connaître les prochaines dates.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-blue-950 dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}