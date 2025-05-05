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

export default function TeacherMessagesClientPage() {
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
      name: "Abakar Mahamat",
      role: "Élève - Terminale A",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Bonjour Monsieur, j'ai une question sur l'exercice 3.",
      time: "10:30",
      unread: 2,
      type: "student",
    },
    {
      id: 2,
      name: "Fatima Ali",
      role: "Élève - Terminale A",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Merci pour vos explications, c'est plus clair maintenant.",
      time: "Hier",
      unread: 0,
      type: "student",
    },
    {
      id: 3,
      name: "M. Ousmane Issoufou",
      role: "Directeur Académique",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage:
        "Veuillez soumettre vos rapports de fin de trimestre avant vendredi.",
      time: "Mer",
      unread: 1,
      type: "staff",
    },
    {
      id: 4,
      name: "Mme. Aisha Deby",
      role: "Coordinatrice Pédagogique",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage:
        "Pouvons-nous discuter des résultats des élèves de Terminale A?",
      time: "Mar",
      unread: 0,
      type: "staff",
    },
    {
      id: 5,
      name: "Parents d'Ibrahim Adoum",
      role: "Parents - Seconde A",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage:
        "Nous aimerions prendre rendez-vous pour discuter des progrès d'Ibrahim.",
      time: "Lun",
      unread: 2,
      type: "parent",
    },
    {
      id: 6,
      name: "Secrétariat",
      role: "Administration",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Les nouveaux manuels que vous avez demandés sont arrivés.",
      time: "28 Avr",
      unread: 0,
      type: "staff",
    },
  ];

  const messages = [
    {
      id: 1,
      conversationId: 1,
      sender: "Abakar Mahamat",
      content: "Bonjour Monsieur, j'espère que vous allez bien.",
      time: "10:15",
      isMe: false,
      date: "Aujourd'hui",
    },
    {
      id: 2,
      conversationId: 1,
      sender: "Abakar Mahamat",
      content:
        "J'ai une question concernant l'exercice 3 que vous nous avez donné hier. Je ne comprends pas comment résoudre l'équation différentielle.",
      time: "10:16",
      isMe: false,
      date: "Aujourd'hui",
    },
    {
      id: 3,
      conversationId: 1,
      sender: "Moi",
      content:
        "Bonjour Abakar, pour résoudre cette équation, vous devez d'abord identifier qu'il s'agit d'une équation différentielle du premier ordre à variables séparables.",
      time: "10:20",
      isMe: true,
      date: "Aujourd'hui",
    },
    {
      id: 4,
      conversationId: 1,
      sender: "Moi",
      content:
        "Essayez de réorganiser l'équation pour avoir toutes les variables y d'un côté et toutes les variables x de l'autre côté, puis intégrez les deux côtés.",
      time: "10:22",
      isMe: true,
      date: "Aujourd'hui",
    },
    {
      id: 5,
      conversationId: 1,
      sender: "Abakar Mahamat",
      content:
        "Ah, je comprends mieux maintenant. Je vais essayer cette approche. Merci beaucoup pour votre aide!",
      time: "10:25",
      isMe: false,
      date: "Aujourd'hui",
    },
    {
      id: 6,
      conversationId: 1,
      sender: "Abakar Mahamat",
      content: "Bonjour Monsieur, j'ai une question sur l'exercice 3.",
      time: "10:30",
      isMe: false,
      date: "Aujourd'hui",
    },
    {
      id: 7,
      conversationId: 3,
      sender: "M. Ousmane Issoufou",
      content: "Bonjour, j'espère que vous allez bien.",
      time: "09:15",
      isMe: false,
      date: "Mercredi",
    },
    {
      id: 8,
      conversationId: 3,
      sender: "M. Ousmane Issoufou",
      content:
        "Je vous rappelle que les rapports de fin de trimestre doivent être soumis avant vendredi. Merci de respecter ce délai.",
      time: "09:16",
      isMe: false,
      date: "Mercredi",
    },
    {
      id: 9,
      conversationId: 3,
      sender: "Moi",
      content:
        "Bonjour Monsieur le Directeur, je prends note et je vous soumettrai mon rapport demain au plus tard.",
      time: "10:30",
      isMe: true,
      date: "Mercredi",
    },
    {
      id: 10,
      conversationId: 5,
      sender: "Parents d'Ibrahim Adoum",
      content:
        "Bonjour Monsieur, nous sommes les parents d'Ibrahim Adoum, élève en Seconde A.",
      time: "14:20",
      isMe: false,
      date: "Lundi",
    },
    {
      id: 11,
      conversationId: 5,
      sender: "Parents d'Ibrahim Adoum",
      content:
        "Nous aimerions prendre rendez-vous pour discuter des progrès d'Ibrahim et de ses difficultés en mathématiques.",
      time: "14:22",
      isMe: false,
      date: "Lundi",
    },
    {
      id: 12,
      conversationId: 5,
      sender: "Parents d'Ibrahim Adoum",
      content: "Quand seriez-vous disponible pour une rencontre?",
      time: "14:23",
      isMe: false,
      date: "Lundi",
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
    if (activeTab === "students")
      return matchesSearch && conversation.type === "student";
    if (activeTab === "parents")
      return matchesSearch && conversation.type === "parent";
    if (activeTab === "staff")
      return matchesSearch && conversation.type === "staff";

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
            href="/dashboard/teacher"
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
              Gérez vos conversations avec les élèves, parents et collègues
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
                  value="students"
                  className="text-xs data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Élèves
                </TabsTrigger>
                <TabsTrigger
                  value="parents"
                  className="text-xs data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Parents
                </TabsTrigger>
                <TabsTrigger
                  value="staff"
                  className="text-xs data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Personnel
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

        <Card className="md:col-span-2 border-blue-100 dark:border-blue-900 overflow-hidden">
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
              <CardContent className="p-0">
                <div className="flex flex-col h-[400px]">
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
                  <div className="p-4 border-t border-blue-100 dark:border-blue-900">
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