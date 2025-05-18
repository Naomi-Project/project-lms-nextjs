"use client";
/* eslint-disable */
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLoginMutation } from "@/graphql/generated";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
// import { loginPage } from "@/lib/apiservice/authservice";

export default function LoginPage() {
  // const { login } = useAuthStore();
  const [role, setRole] = useState<"manager" | "admin" | "teacher" | "student">(
    "manager"
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  // const [login, { loading }] = useLoginMutation();
  const [login, { loading }] = useLoginMutation();


  // new code from react auth login
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      setIsError(false);
      let response;

      if (role === 'manager' && !username.includes('staff')) return setIsError(true)
      if (role === 'admin' && !username.includes('admin')) return setIsError(true)
  
      if (role === "manager" || role === "admin") {
        response = await login({
          variables: {
            data: { username, password },
          },
        });
      } else if (role === "teacher" || role === "student") {
        response = await login({
          variables: {
            data: { username: number, password: "" },
          },
        });
      }
  
      if (response?.data?.login.authToken) {
        localStorage.setItem("authToken", response?.data.login.authToken);
  
        // Kirim token ke API untuk menyimpan ke cookies
        await fetch("/api/set-cookie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: response?.data.login.authToken }),
        });
  
        Swal.fire({
          title: "Berhasil Login!",
          text: "Anda telah berhasil login!",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {

            if (role === 'admin' || role === 'manager') {
              window.location.href = "/dashboard/managers";
            } else if (role === 'student' || role === 'teacher') {
              window.location.href = "/dashboard/" + role + "s";
            }
          }
        });
      }
    } catch (err) {
      setIsError(true);
      console.error("Login error:", err);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl">Yapendik LMS</CardTitle>
          <CardDescription>
            Masuk ke akun anda untuk melanjutkan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => handleLogin(e)}>
            <Tabs
              defaultValue="manager"
              value={role}
              onValueChange={(value) =>
                setRole(value as "manager" | "admin" | "teacher" | "student")
              }
            >
              <TabsList className="flex justify-around">
                <TabsTrigger value="manager">Head Office</TabsTrigger>
                <TabsTrigger value="admin">Cabang</TabsTrigger>
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
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleLogin(e);
                        }
                      }}
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
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleLogin(e);
                        }
                      }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="teacher">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="number">
                      {/* Nomor Identitas Pegawai Negeri Sipil (NIP) */}
                      Nomor Unik Pendidik dan Tenaga Kependidikan (NUPTK)
                    </Label>
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
                    <Label htmlFor="number">Nomor Induk Siswa Nasional (NISN)</Label>
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
        <CardFooter className="flex flex-col gap-3">
          <Label className={isError ? "text-red-600" : "hidden"}>Credential Akun Salah, Akun Tidak Ditemukan.</Label>
          <Button disabled={loading} className="w-full" onClick={handleLogin}>
            {loading && (
              <svg
                className="w-5 h-5 mr-2 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C6.48 0 0 6.48 0 12h4z"
                ></path>
              </svg>
            )}
            {loading ? "Processing..." : "Masuk"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
