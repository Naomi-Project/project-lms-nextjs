"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import useAuthStore from "@/hooks/use-auth";

export default function LoginPage() {
  const { login } = useAuthStore();
  const [role, setRole] = useState<"manager" | "admin" | "teacher" | "student">(
    "manager"
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(role);
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl">Yapendik LMS</CardTitle>
          <CardDescription>
            Masuk ke akun anda untuk melanjutkan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <Tabs
              defaultValue="manager"
              value={role}
              onValueChange={(value) =>
                setRole(value as "manager" | "admin" | "teacher" | "student")
              }
            >
              <TabsList className="flex justify-around">
                <TabsTrigger value="manager">Manager</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
                <TabsTrigger value="teacher">Guru</TabsTrigger>
                <TabsTrigger value="student">Murid</TabsTrigger>
              </TabsList>
              <div className="mt-4">
                <TabsContent value="manager">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 mt-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="admin">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 mt-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="teacher">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="number">Nomor Identitas</Label>
                    <Input
                      id="number"
                      placeholder="Masukkan nomor identitas"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="student">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="number">Nomor Identitas</Label>
                    <Input
                      id="number"
                      placeholder="Masukkan nomor identitas"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleLogin}>
            Masuk
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
