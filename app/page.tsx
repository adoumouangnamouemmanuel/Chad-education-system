"use client";

import { LoginForm } from "@/components/auth/login-form";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
            <span className="text-blue-600 dark:text-blue-400">
              Education
            </span>
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

      <footer className="bg-blue-950 text-white py-12 mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Chad National School Digital Management System
              </h3>
              <p className="text-blue-200">
                Digitizing and centralizing educational data for schools across
                Chad.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <address className="not-italic text-blue-200">
                <p>Ministry of Education</p>
                <p>N'Djamena, Chad</p>
                <p className="mt-2">Email: contact@education.td</p>
                <p>Phone: +235 00 00 00 00</p>
              </address>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
            <p>
              &copy; {new Date().getFullYear()} Ministry of Education, Republic
              of Chad. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
