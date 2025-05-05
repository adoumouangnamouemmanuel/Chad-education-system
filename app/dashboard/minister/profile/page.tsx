"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  Building2,
  Calendar,
  Check,
  Edit2,
  FileText,
  Globe,
  GraduationCap,
  Lock,
  Mail,
  MapPin,
  Phone,
  Shield,
  User,
  Users,
} from "lucide-react";

export default function MinisterProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Minister Profile
          </h1>
          <p className="text-muted-foreground">
            Manage your personal information and account settings
          </p>
        </div>
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Save Changes
            </>
          ) : (
            <>
              <Edit2 className="mr-2 h-4 w-4" /> Edit Profile
            </>
          )}
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="md:col-span-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-400"></div>
              <CardContent className="p-6 -mt-12 relative">
                <div className="absolute right-6 top-0">
                  <Badge className="bg-green-500 hover:bg-green-600">
                    Active
                  </Badge>
                </div>
                <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Minister"
                  />
                  <AvatarFallback className="text-2xl">MoE</AvatarFallback>
                </Avatar>
                <div className="mt-4 space-y-2">
                  <h2 className="text-2xl font-bold">Dr. Ibrahim Moussa</h2>
                  <p className="text-muted-foreground">Minister of Education</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    N'Djamena, Chad
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">ibrahim.moussa@education.td</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">+235 66 XX XX XX</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Appointed: January 15, 2022</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <h3 className="font-medium">Ministry Statistics</h3>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
                      <div className="flex justify-center">
                        <Building2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold">5,234</div>
                      <div className="text-xs text-muted-foreground">
                        Schools
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                      <div className="flex justify-center">
                        <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="mt-1 font-semibold">24,567</div>
                      <div className="text-xs text-muted-foreground">
                        Teachers
                      </div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-lg">
                      <div className="flex justify-center">
                        <GraduationCap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="mt-1 font-semibold">487,932</div>
                      <div className="text-xs text-muted-foreground">
                        Students
                      </div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950 p-3 rounded-lg">
                      <div className="flex justify-center">
                        <FileText className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div className="mt-1 font-semibold">23</div>
                      <div className="text-xs text-muted-foreground">
                        Regions
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="personal">
                  <User className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Personal</span>
                </TabsTrigger>
                <TabsTrigger value="security">
                  <Lock className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Security</span>
                </TabsTrigger>
                <TabsTrigger value="notifications">
                  <Bell className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Notifications</span>
                </TabsTrigger>
                <TabsTrigger value="ministry">
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Ministry</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal details and contact information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          defaultValue="Dr. Ibrahim Moussa"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Official Title</Label>
                        <Input
                          id="title"
                          defaultValue="Minister of Education"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="ibrahim.moussa@education.td"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          defaultValue="+235 66 XX XX XX"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="appointmentDate">
                          Appointment Date
                        </Label>
                        <Input
                          id="appointmentDate"
                          type="date"
                          defaultValue="2022-01-15"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          defaultValue="N'Djamena, Chad"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Biography</Label>
                      <Textarea
                        id="bio"
                        rows={5}
                        defaultValue="Dr. Ibrahim Moussa has been serving as the Minister of Education since January 2022. With over 20 years of experience in education policy and administration, he has implemented several key reforms to improve educational outcomes across Chad. Dr. Moussa holds a PhD in Educational Policy from the University of Paris and has previously served as the Regional Director of Education for the Lake Chad region."
                        disabled={!isEditing}
                        className="resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="languages">Languages</Label>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">French (Native)</Badge>
                        <Badge variant="secondary">Arabic (Fluent)</Badge>
                        <Badge variant="secondary">
                          English (Intermediate)
                        </Badge>
                        {isEditing && (
                          <Button variant="outline" size="sm">
                            + Add Language
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Manage your account security and authentication methods
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Password</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">
                            Current Password
                          </Label>
                          <Input
                            id="currentPassword"
                            type="password"
                            disabled={!isEditing}
                            placeholder="••••••••"
                          />
                        </div>
                        <div></div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input
                            id="newPassword"
                            type="password"
                            disabled={!isEditing}
                            placeholder="••••••••"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">
                            Confirm New Password
                          </Label>
                          <Input
                            id="confirmPassword"
                            type="password"
                            disabled={!isEditing}
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Two-Factor Authentication
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="font-medium">SMS Authentication</div>
                          <div className="text-sm text-muted-foreground">
                            Receive a code via SMS to verify your identity
                          </div>
                        </div>
                        <Switch checked={true} disabled={!isEditing} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="font-medium">
                            Email Authentication
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Receive a code via email to verify your identity
                          </div>
                        </div>
                        <Switch checked={false} disabled={!isEditing} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="font-medium">Authenticator App</div>
                          <div className="text-sm text-muted-foreground">
                            Use an authenticator app to generate verification
                            codes
                          </div>
                        </div>
                        <Switch checked={true} disabled={!isEditing} />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Session Management
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">Current Session</div>
                              <div className="text-sm text-muted-foreground">
                                N'Djamena, Chad • Chrome on Windows • IP:
                                154.73.XX.XX
                              </div>
                              <div className="text-xs text-green-600 mt-1">
                                Active now
                              </div>
                            </div>
                            <Badge>Current</Badge>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">Mobile Session</div>
                              <div className="text-sm text-muted-foreground">
                                N'Djamena, Chad • Ministry App on iPhone • IP:
                                154.73.XX.XX
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                Last active: 2 hours ago
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              disabled={!isEditing}
                            >
                              Revoke
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Manage how you receive notifications and alerts
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Email Notifications
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">Critical Alerts</div>
                            <div className="text-sm text-muted-foreground">
                              Emergency situations and critical system
                              notifications
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">
                              School Performance Reports
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Weekly and monthly performance summaries
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">Teacher Transfers</div>
                            <div className="text-sm text-muted-foreground">
                              Notifications about teacher transfer requests
                            </div>
                          </div>
                          <Switch checked={false} disabled={!isEditing} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">
                              Infrastructure Updates
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Updates on school infrastructure projects
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">SMS Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">Emergency Alerts</div>
                            <div className="text-sm text-muted-foreground">
                              Critical emergency situations requiring immediate
                              attention
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">Security Alerts</div>
                            <div className="text-sm text-muted-foreground">
                              Security incidents and suspicious activities
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        In-App Notifications
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">
                              All System Notifications
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Receive all system notifications within the
                              application
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">Daily Digest</div>
                            <div className="text-sm text-muted-foreground">
                              Receive a daily summary of important events
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ministry">
                <Card>
                  <CardHeader>
                    <CardTitle>Ministry Settings</CardTitle>
                    <CardDescription>
                      Configure ministry-specific settings and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Regional Focus</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="priorityRegion">
                            Priority Region
                          </Label>
                          <Input
                            id="priorityRegion"
                            defaultValue="Lake Chad Region"
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="secondaryRegion">
                            Secondary Focus
                          </Label>
                          <Input
                            id="secondaryRegion"
                            defaultValue="Eastern Border Regions"
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Delegation Settings
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">
                              Deputy Minister Access
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Allow Deputy Minister to approve routine matters
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">
                              Regional Inspector Autonomy
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Allow Regional Inspectors to make local decisions
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">
                              School Director Autonomy
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Allow School Directors to manage local budgets
                            </div>
                          </div>
                          <Switch checked={false} disabled={!isEditing} />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        System Preferences
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">Language</div>
                            <div className="text-sm text-muted-foreground">
                              Default system language
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            <span>French</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">Data Privacy</div>
                            <div className="text-sm text-muted-foreground">
                              Control data sharing and privacy settings
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={!isEditing}
                          >
                            Configure
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}