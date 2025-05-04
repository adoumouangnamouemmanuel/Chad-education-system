"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

export function LanguageSwitcher() {
  const [language, setLanguage] = useState("fr"); // Default to French

  // Load language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "fr";
    setLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);

    // In a real application, you would update the UI language here
    // For example, by using i18n libraries like next-intl or react-i18next
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleLanguageChange("en")}
          className={language === "en" ? "bg-muted" : ""}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("fr")}
          className={language === "fr" ? "bg-muted" : ""}
        >
          Français
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("ar")}
          className={language === "ar" ? "bg-muted" : ""}
        >
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
