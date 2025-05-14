"use client";

import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Home,
  Users,
  Calendar,
  FileText,
  FlaskRoundIcon as Flask,
  LogOut,
  Menu,
  X,
  PillIcon,
  Building2,
  Camera,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

// Define user type based on AuthContext
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  patientId?: string;
  specialty?: string;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();
  const router = useRouter();

  // Create avatar fallback from first letters of user's name
  const avatarFallback = user
    ? `${(user as User).firstName?.charAt(0) || ""}${
        (user as User).lastName?.charAt(0) || ""
      }`
    : "UN";

  const handleLogout = (): void => {
    logout();
    router.push("/");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 sm:max-w-none">
            <div className="flex h-full flex-col">
              <div className="flex h-14 items-center border-b px-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Shield className="h-6 w-6 text-teal-600" />
                  <span className="text-lg font-bold">SehatNama</span>
                </Link>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <nav className="grid gap-2 px-2 py-4">
                <Link href="/dashboard">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    <Home className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
                <Link href="/dashboard/patients">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    <Users className="h-4 w-4" />
                    Patients
                  </Button>
                </Link>
                <Link href="/dashboard/appointments">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Appointments
                  </Button>
                </Link>
                <Link href="/dashboard/prescriptions">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Prescriptions
                  </Button>
                </Link>
                <Link href="/dashboard/lab-reports">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    <Flask className="h-4 w-4" />
                    Lab Reports
                  </Button>
                </Link>
                <Link href="/dashboard/medicines">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    <PillIcon className="h-4 w-4" />
                    Medicines
                  </Button>
                </Link>
                <Link href="/dashboard/hospitals">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    <Building2 className="h-4 w-4" />
                    Hospitals & Labs
                  </Button>
                </Link>
                <Link href="/dashboard/document-scanner">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    <Camera className="h-4 w-4" />
                    Document Scanner
                  </Button>
                </Link>
              </nav>
              <div className="mt-auto border-t p-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-teal-600" />
          <span className="text-lg font-bold hidden md:inline-flex">
            SehatNama
          </span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="/placeholder-user.jpg"
              alt={user ? (user as User).firstName : "User"}
            />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <div className="text-sm font-medium">
              {user
                ? `${(user as User).firstName} ${(user as User).lastName}`
                : "User"}
            </div>
            <div className="text-xs text-gray-500">
              {user && (user as User).role === "doctor"
                ? (user as User).specialty || "Doctor"
                : user
                ? (user as User).role
                : ""}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="hidden md:inline-flex"
          >
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-gray-50/40 md:block">
          <nav className="grid gap-2 p-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Home className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/patients">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Users className="h-4 w-4" />
                Patients
              </Button>
            </Link>
            <Link href="/dashboard/appointments">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Appointments
              </Button>
            </Link>
            <Link href="/dashboard/prescriptions">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" />
                Prescriptions
              </Button>
            </Link>
            <Link href="/dashboard/lab-reports">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Flask className="h-4 w-4" />
                Lab Reports
              </Button>
            </Link>
            <Link href="/dashboard/medicines">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <PillIcon className="h-4 w-4" />
                Medicines
              </Button>
            </Link>
            <Link href="/dashboard/hospitals">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Building2 className="h-4 w-4" />
                Hospitals & Labs
              </Button>
            </Link>
            <Link href="/dashboard/document-scanner">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Camera className="h-4 w-4" />
                Document Scanner
              </Button>
            </Link>
            <div className="mt-auto pt-4">
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </nav>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
