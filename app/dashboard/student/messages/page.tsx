"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, MessageSquare, Search, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function StudentMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<
    number | null
  >(1);
  const [messageText, setMessageText] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const conversations = [
    {
      id: 1,
      name: "M. Jean Dupont",
      role: "Professeur de Mathématiques",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Bonjour Amadou, avez-vous terminé les exercices?",
      time: "10:30",
      unread: 2,
    },
    {
      id: 2,
      name: "Mme. Marie Koné",
      role: "Professeur de Français",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Votre dissertation était excellente!",
      time: "Hier",
      unread: 0,
    },
    {
      id: 3,
      name: "M. Ibrahim Hassan",
      role: "Professeur de Physique",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "N'oubliez pas le rapport de laboratoire pour lundi.",
      time: "Mer",
      unread: 1,
    },
    {
      id: 4,
      name: "Fatou Diallo",
      role: "Camarade de classe",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Est-ce que tu as les notes du cours d'hier?",
      time: "Mar",
      unread: 0,
    },
    {
      id: 5,
      name: "Administration",
      role: "Secrétariat",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Rappel: Réunion des parents d'élèves le 25 mai.",
      time: "Lun",
      unread: 2,
    },
  ];

  const messages = [
    {
      id: 1,
      conversationId: 1,
      sender: "M. Jean Dupont",
      content: "Bonjour Amadou, j'espère que vous allez bien.",
      time: "10:15",
      isMe: false,
    },
    {
      id: 2,
      conversationId: 1,
      sender: "M. Jean Dupont",
      content:
        "Je voulais savoir si vous avez terminé les exercices que j'ai donnés la semaine dernière?",
      time: "10:16",
      isMe: false,
    },
    {
      id: 3,
      conversationId: 1,
      sender: "Moi",
      content:
        "Bonjour Monsieur, oui j'ai presque terminé. Il me reste juste le dernier exercice.",
      time: "10:20",
      isMe: true,
    },
    {
      id: 4,
      conversationId: 1,
      sender: "M. Jean Dupont",
      content:
        "Très bien. N'hésitez pas à me poser des questions si vous rencontrez des difficultés.",
      time: "10:22",
      isMe: false,
    },
    {
      id: 5,
      conversationId: 1,
      sender: "M. Jean Dupont",
      content: "Bonjour Amadou, avez-vous terminé les exercices?",
      time: "10:30",
      isMe: false,
    },
  ];

  const filteredMessages = messages.filter(
    (message) => message.conversationId === selectedConversation
  );

  const selectedConversationData = conversations.find(
    (conv) => conv.id === selectedConversation
  );

  const handleSendMessage = () => {
    if (messageText.trim() === "") return;
    // Here you would normally send the message to the server
    // For now, we'll just clear the input
    setMessageText("");
  };

  return (
    <motion.div
      className="flex flex-col gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Breadcrumb */}
      <motion.div
        variants={itemVariants}
        className="flex items-center text-sm text-muted-foreground mb-2"
      >
        <Link
          href="/"
          className="flex items-center hover:text-primary transition-colors"
        >
          <Home className="h-4 w-4 mr-1" />
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <Link
          href="/dashboard/student"
          className="hover:text-primary transition-colors"
        >
          Tableau de bord
        </Link>
        <span className="mx-2">/</span>
        <span>Messages</span>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between"
      >
        <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Conversations</CardTitle>
              <Badge>
                {conversations.reduce((acc, conv) => acc + conv.unread, 0)}
              </Badge>
            </div>
            <div className="relative w-full mt-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher..."
                className="pl-8"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-[500px] overflow-y-auto">
              {conversations.map((conversation) => (
                <motion.div
                  key={conversation.id}
                  whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
                  className={`flex items-center gap-3 p-4 cursor-pointer border-b transition-colors ${
                    selectedConversation === conversation.id
                      ? "bg-accent/50"
                      : ""
                  }`}
                  onClick={() => setSelectedConversation(conversation.id)}
                >
                  <Avatar>
                    <AvatarImage
                      src={conversation.avatar || "/placeholder.svg"}
                      alt={conversation.name}
                    />
                    <AvatarFallback>
                      {conversation.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium truncate">
                        {conversation.name}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {conversation.time}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {conversation.role}
                    </p>
                    <p className="text-sm truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread > 0 && (
                    <Badge className="ml-2">{conversation.unread}</Badge>
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          {selectedConversation ? (
            <>
              <CardHeader className="border-b">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={
                        selectedConversationData?.avatar || "/placeholder.svg"
                      }
                      alt={selectedConversationData?.name}
                    />
                    <AvatarFallback>
                      {selectedConversationData?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{selectedConversationData?.name}</CardTitle>
                    <CardDescription>
                      {selectedConversationData?.role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col h-[400px]">
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {filteredMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.isMe ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.isMe
                              ? "bg-primary text-primary-foreground"
                              : "bg-accent"
                          }`}
                        >
                          <p>{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.isMe
                                ? "text-primary-foreground/80"
                                : "text-muted-foreground"
                            }`}
                          >
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Écrivez votre message..."
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        className="min-h-[80px]"
                      />
                      <Button onClick={handleSendMessage} className="self-end">
                        <Send className="h-4 w-4 mr-2" />
                        Envoyer
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex flex-col items-center justify-center h-[500px] text-center">
              <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">
                Aucune conversation sélectionnée
              </h3>
              <p className="text-muted-foreground">
                Sélectionnez une conversation pour commencer à discuter
              </p>
            </CardContent>
          )}
        </Card>
      </motion.div>
    </motion.div>
  );
}