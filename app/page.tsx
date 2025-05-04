"use client";

import { LoginForm } from "@/components/auth/login-form";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Heart,
} from "lucide-react";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Chad National School System"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <h1 className="text-xl font-poppins font-bold text-blue-950 dark:text-white">
            Tchad{" "}
            <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button variant="outline" onClick={() => setShowLogin(true)}>
            Login
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {showLogin ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <LoginForm onCancel={() => setShowLogin(false)} />
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-blue-950 dark:text-white mb-6">
                Transforming Education Management in Chad
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                A comprehensive digital platform for centralizing educational
                data across all schools in Chad, making real-time information
                accessible to authorized users at every level.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setShowLogin(true)}
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => router.push("/about")}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { title: "Schools", count: "5,000+", icon: "🏫" },
                { title: "Teachers", count: "25,000+", icon: "👨‍🏫" },
                { title: "Students", count: "500,000+", icon: "👨‍🎓" },
                { title: "Regions", count: "23", icon: "🗺️" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <h3 className="text-xl font-semibold text-blue-950 dark:text-white">
                        {stat.title}
                      </h3>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {stat.count}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </main>

      {/* Enhanced Footer */}
      <footer className="relative mt-24 overflow-hidden">
        {/* Wave SVG */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform">
          <svg
            className="relative block w-full h-24 transform"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-blue-950"
            ></path>
          </svg>
        </div>

        <div className="bg-blue-950 text-white pt-32 pb-12 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Logo and Description */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="/images/logo.png"
                    alt="Chad Education"
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                  <h3 className="text-xl font-bold">
                    Tchad <span className="text-blue-400">Education</span>
                  </h3>
                </div>
                <p className="text-blue-200 mb-6">
                  Numérisation et centralisation des données éducatives pour les
                  écoles à travers le Tchad.
                </p>
                <div className="flex space-x-4 mb-8">
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
                  >
                    <Facebook size={18} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
                  >
                    <Twitter size={18} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
                  >
                    <Instagram size={18} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
                  >
                    <Youtube size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-2">
                <h4 className="text-lg font-semibold mb-6 flex items-center">
                  <span className="w-8 h-0.5 bg-blue-400 inline-block mr-2"></span>
                  Liens Rapides
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "Accueil", href: "/" },
                    { name: "À Propos", href: "/about" },
                    { name: "Contact", href: "/contact" },
                    { name: "Support", href: "/support" },
                  ].map((link) => (
                    <motion.li key={link.name} whileHover={{ x: 5 }}>
                      <Link
                        href={link.href}
                        className="text-blue-200 hover:text-white flex items-center transition-colors"
                      >
                        <ChevronRight size={14} className="mr-1" />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="md:col-span-2">
                <h4 className="text-lg font-semibold mb-6 flex items-center">
                  <span className="w-8 h-0.5 bg-blue-400 inline-block mr-2"></span>
                  Ressources
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "FAQ", href: "#" },
                    { name: "Documentation", href: "#" },
                    { name: "Politique de Confidentialité", href: "/policy" },
                    { name: "Conditions d'Utilisation", href: "#" },
                  ].map((link) => (
                    <motion.li key={link.name} whileHover={{ x: 5 }}>
                      <Link
                        href={link.href}
                        className="text-blue-200 hover:text-white flex items-center transition-colors"
                      >
                        <ChevronRight size={14} className="mr-1" />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="md:col-span-4">
                <h4 className="text-lg font-semibold mb-6 flex items-center">
                  <span className="w-8 h-0.5 bg-blue-400 inline-block mr-2"></span>
                  Contact
                </h4>
                <ul className="space-y-4">
                  <motion.li whileHover={{ x: 5 }} className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-white">Ministère de l'Éducation</p>
                      <p className="text-blue-200">N'Djamena, Tchad</p>
                    </div>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                    <p className="text-blue-200">+235 00 00 00 00</p>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                    <p className="text-blue-200">contact@education.td</p>
                  </motion.li>
                </ul>

                {/* Newsletter */}
                <div className="mt-8">
                  <h5 className="text-white font-medium mb-3">
                    Abonnez-vous à notre newsletter
                  </h5>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="px-4 py-2 rounded-l-md text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
                      S'abonner
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-300 text-center md:text-left">
                &copy; {new Date().getFullYear()} Ministère de l'Éducation,
                République du Tchad. Tous droits réservés.
              </p>
              <motion.p
                className="text-blue-300 mt-4 md:mt-0 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Développé avec <Heart className="h-4 w-4 text-red-400 mx-1" />{" "}
                pour l'éducation au Tchad
              </motion.p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
