"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  MessageSquare,
  Search,
  Send,
  Trash2,
  User,
} from "lucide-react";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function StudentMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<
    number | null
  >(1);
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
      type: "teacher",
    },
    {
      id: 2,
      name: "Mme. Marie Koné",
      role: "Professeur de Français",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Votre dissertation était excellente!",
      time: "Hier",
      unread: 0,
      type: "teacher",
    },
    {
      id: 3,
      name: "M. Ibrahim Hassan",
      role: "Professeur de Physique",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "N'oubliez pas le rapport de laboratoire pour lundi.",
      time: "Mer",
      unread: 1,
      type: "teacher",
    },
    {
      id: 4,
      name: "Fatou Diallo",
      role: "Camarade de classe",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Est-ce que tu as les notes du cours d'hier?",
      time: "Mar",
      unread: 0,
      type: "student",
    },
    {
      id: 5,
      name: "Administration",
      role: "Secrétariat",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Rappel: Réunion des parents d'élèves le 25 mai.",
      time: "Lun",
      unread: 2,
      type: "admin",
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
      date: "Aujourd'hui",
    },
    {
      id: 2,
      conversationId: 1,
      sender: "M. Jean Dupont",
      content:
        "Je voulais savoir si vous avez terminé les exercices que j'ai donnés la semaine dernière?",
      time: "10:16",
      isMe: false,
      date: "Aujourd'hui",
    },
    {
      id: 3,
      conversationId: 1,
      sender: "Moi",
      content:
        "Bonjour Monsieur, oui j'ai presque terminé. Il me reste juste le dernier exercice.",
      time: "10:20",
      isMe: true,
      date: "Aujourd'hui",
    },
    {
      id: 4,
      conversationId: 1,
      sender: "M. Jean Dupont",
      content:
        "Très bien. N'hésitez pas à me poser des questions si vous rencontrez des difficultés.",
      time: "10:22",
      isMe: false,
      date: "Aujourd'hui",
    },
    {
      id: 5,
      conversationId: 1,
      sender: "M. Jean Dupont",
      content: "Bonjour Amadou, avez-vous terminé les exercices?",
      time: "10:30",
      isMe: false,
      date: "Aujourd'hui",
    },
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedConversation]);

  const filteredConversations = conversations.filter((conversation) => {
    // Filter by search query
    const matchesSearch =
      conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.lastMessage
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    // Filter by tab
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "unread") return matchesSearch && conversation.unread > 0;
    if (activeTab === "teachers")
      return matchesSearch && conversation.type === "teacher";
    if (activeTab === "students")
      return matchesSearch && conversation.type === "student";
    if (activeTab === "admin")
      return matchesSearch && conversation.type === "admin";

    return matchesSearch;
  });

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

  const groupMessagesByDate = (messages: any[]) => {
    const groups: Record<string, any[]> = {};

    messages.forEach((message) => {
      if (!groups[message.date]) {
        groups[message.date] = [];
      }
      groups[message.date].push(message);
    });

    return groups;
  };

  const messageGroups = groupMessagesByDate(filteredMessages);

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/student"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Retour au Tableau de Bord</span>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-50">
              Messages
            </h1>
            <p className="text-muted-foreground">
              Communiquez avec vos professeurs et camarades
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
          >
            <Bell className="mr-2 h-4 w-4 text-blue-600" />
            Notifications
          </Button>
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
            <MessageSquare className="mr-2 h-4 w-4" />
            Nouveau message
          </Button>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Card className="md:col-span-1 border-blue-100 dark:border-blue-900 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
            <div className="flex items-center justify-between">
              <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-500" />
                Conversations
              </CardTitle>
              <Badge className="bg-blue-600">
                {conversations.reduce((acc, conv) => acc + conv.unread, 0)}
              </Badge>
            </div>
            <div className="relative w-full mt-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher..."
                className="pl-8 rounded-lg border-blue-200 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <div className="p-2">
            <Tabs
              defaultValue="all"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="grid grid-cols-5 p-1 bg-blue-50 dark:bg-blue-900 rounded-full">
                <TabsTrigger
                  value="all"
                  className="text-xs data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Tous
                </TabsTrigger>
                <TabsTrigger
                  value="unread"
                  className="text-xs data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Non lus
                </TabsTrigger>
                <TabsTrigger
                  value="teachers"
                  className="text-xs data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Profs
                </TabsTrigger>
                <TabsTrigger
                  value="students"
                  className="text-xs data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Élèves
                </TabsTrigger>
                <TabsTrigger
                  value="admin"
                  className="text-xs data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Admin
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <CardContent className="p-0">
            <div className="max-h-[500px] overflow-y-auto">
              {filteredConversations.length > 0 ? (
                filteredConversations.map((conversation) => (
                  <motion.div
                    key={conversation.id}
                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                    className={`flex items-center gap-3 p-4 cursor-pointer border-b border-blue-100 dark:border-blue-900 transition-colors ${
                      selectedConversation === conversation.id
                        ? "bg-blue-50 dark:bg-blue-900/30"
                        : ""
                    }`}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <Avatar className="h-10 w-10 border border-blue-100">
                      <AvatarImage
                        src={conversation.avatar || "/placeholder.svg"}
                        alt={conversation.name}
                      />
                      <AvatarFallback className="bg-blue-100 text-blue-800">
                        {conversation.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium truncate text-blue-900 dark:text-blue-50">
                          {conversation.name}
                        </p>
                        <span className="text-xs text-muted-foreground">
                          {conversation.time}
                        </span>
                      </div>
                      <p className="text-xs text-blue-600 dark:text-blue-400 truncate">
                        {conversation.role}
                      </p>
                      <p className="text-sm truncate text-muted-foreground">
                        {conversation.lastMessage}
                      </p>
                    </div>
                    {conversation.unread > 0 && (
                      <Badge className="ml-2 bg-blue-600">
                        {conversation.unread}
                      </Badge>
                    )}
                  </motion.div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <MessageSquare className="h-12 w-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                    Aucune conversation
                  </h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    Aucune conversation ne correspond à votre recherche
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 border-blue-100 dark:border-blue-900 overflow-hidden flex flex-col">
          {selectedConversation ? (
            <>
              <CardHeader className="border-b border-blue-100 dark:border-blue-900 bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-blue-100">
                      <AvatarImage
                        src={
                          selectedConversationData?.avatar || "/placeholder.svg"
                        }
                        alt={selectedConversationData?.name}
                      />
                      <AvatarFallback className="bg-blue-100 text-blue-800">
                        {selectedConversationData?.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-blue-900 dark:text-blue-50">
                        {selectedConversationData?.name}
                      </CardTitle>
                      <CardDescription>
                        {selectedConversationData?.role}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-blue-100 hover:text-blue-600"
                          >
                            <User className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Voir le profil</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-blue-100 hover:text-blue-600"
                          >
                            <Calendar className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Planifier un rendez-vous</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-red-100 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Supprimer la conversation</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                  {Object.entries(messageGroups).map(([date, messages]) => (
                    <div key={date} className="space-y-4">
                      <div className="flex justify-center">
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-600 border-blue-200"
                        >
                          {date}
                        </Badge>
                      </div>
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 24,
                          }}
                          className={`flex ${
                            message.isMe ? "justify-end" : "justify-start"
                          }`}
                        >
                          {!message.isMe && (
                            <Avatar className="h-8 w-8 mr-2 mt-1 border border-blue-100">
                              <AvatarImage
                                src={
                                  selectedConversationData?.avatar ||
                                  "/placeholder.svg"
                                }
                                alt={selectedConversationData?.name}
                              />
                              <AvatarFallback className="bg-blue-100 text-blue-800 text-xs">
                                {selectedConversationData?.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              message.isMe
                                ? "bg-blue-600 text-white"
                                : "bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-50"
                            }`}
                          >
                            <p>{message.content}</p>
                            <div className="flex items-center justify-end gap-1 mt-1">
                              <Clock
                                className={`h-3 w-3 ${
                                  message.isMe
                                    ? "text-white/70"
                                    : "text-muted-foreground"
                                }`}
                              />
                              <p
                                className={`text-xs ${
                                  message.isMe
                                    ? "text-white/70"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {message.time}
                              </p>
                              {message.isMe && (
                                <CheckCircle className="h-3 w-3 text-white/70 ml-1" />
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                <div className="p-4 border-t border-blue-100 dark:border-blue-900 mt-auto">
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Écrivez votre message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="min-h-[80px] rounded-lg border-blue-200 focus:ring-blue-500 resize-none"
                    />
                    <Button
                      onClick={handleSendMessage}
                      className="self-end bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                      disabled={!messageText.trim()}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex flex-col items-center justify-center h-[500px] text-center">
              <MessageSquare className="h-16 w-16 text-blue-200 mb-4" />
              <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                Aucune conversation sélectionnée
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Sélectionnez une conversation pour commencer à discuter ou créez
                une nouvelle conversation
              </p>
              <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                <MessageSquare className="mr-2 h-4 w-4" />
                Nouveau message
              </Button>
            </CardContent>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
