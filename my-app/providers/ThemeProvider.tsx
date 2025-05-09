"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";


export default function ThemeProvider({children , ...props } : ThemeProviderProps ) {
  return (
    <NextThemesProvider {...props}>{children}</NextThemesProvider>
  )
}
