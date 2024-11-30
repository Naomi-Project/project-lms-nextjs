// /dashboard

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LoginPage() {
  const [role, setRole] = useState<"admin" | "teacher" | "student">("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "Logging in as",
      role,
      "with",
      role === "admin" ? "username and password" : "number"
    );
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
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="role">Sebagai</Label>
                <Select
                  value={role}
                  onValueChange={(value: "admin" | "teacher" | "student") =>
                    setRole(value)
                  }
                >
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="teacher">Guru</SelectItem>
                    <SelectItem value="student">Murid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {role === "admin" ? (
                <>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="number">Nomor Identitas</Label>
                  <Input
                    id="number"
                    placeholder="Masukkan nomor identitas"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
              )}
            </div>
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
