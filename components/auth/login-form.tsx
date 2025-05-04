"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import type { UserRole } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LoginFormProps {
  onCancel: () => void;
}

export function LoginForm({ onCancel }: LoginFormProps) {
  const [role, setRole] = useState<UserRole | "">("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!role || !username || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);

      // Set a cookie to remember the user role
      document.cookie = `userRole=${role}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days

      // Redirect based on role
      router.push(`/dashboard/${role}`);
    }, 1500);
  };

  return (
    <Card className="border-none shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-poppins text-center">
          Login
        </CardTitle>
        <CardDescription className="text-center">
          Access the Chad National School Digital Management System
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select
              value={role}
              onValueChange={(value) => setRole(value as UserRole)}
            >
              <SelectTrigger id="role">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="minister">Minister of Education</SelectItem>
                <SelectItem value="inspector">Regional Inspector</SelectItem>
                <SelectItem value="director">School Director</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="student">Student</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="link" className="text-blue-600">
          Forgot password?
        </Button>
      </CardFooter>
    </Card>
  );
}
