'use client'
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Layout/Header";
import LeftSide from "@/components/Layout/LeftSide";
import { usePathname } from "next/navigation";
import React from "react";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    // Define paths to hide the Header and LeftSide components
    const hiddenHeaderPaths = ["/", "/login"];
    const hiddenLeftSidePaths = ["/", "/login" ];

    // Check if the pathname matches /reset/[id] pattern
    const isResetPage = pathname.startsWith("/reset");

    // Hide the layout components if it's the reset page
    const showHeader = !isResetPage && !hiddenHeaderPaths.includes(pathname);
    const showLeftSide = !isResetPage && !hiddenLeftSidePaths.includes(pathname);

    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>
        {showHeader && <Header />}
        <div className="flex">
            {showLeftSide && <LeftSide />}
            <div className={showLeftSide ? "pl-[270px] p-3 w-full" : "w-full"}>
                {children}
            </div>
        </div>
        </body>
        </html>
    );
}
