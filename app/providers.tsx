"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

import { ModalProvider } from "@/components/modal/provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Toaster className="dark:hidden" />
      <Toaster className="hidden dark:block" theme="dark" />
      <ModalProvider>{children}</ModalProvider>
    </SessionProvider>
  );
}
