"use client";
import { ThemeProvider } from "next-themes";

function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}

export default Theme;
