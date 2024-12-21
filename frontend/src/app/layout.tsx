'use client'
import "./globals.css";
import {Inter} from "next/font/google";
import Header from "@/components/Layout/Header";
import LeftSide from "@/components/Layout/LeftSide";
import {usePathname} from "next/navigation";
import React from "react";
import Scroll from "@/components/Scroll";

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

    const hiddenHeaderPaths = "/";
    const hiddenLeftSidePaths = "/";

    // Check if the pathname matches hidden layout paths
    const isLoginPath = pathname.startsWith("/login");
    const isResetPage = pathname.startsWith("/reset");

    // Hide layout components if it's login or reset page
    const showLayout = !(isLoginPath || isResetPage || pathname === hiddenHeaderPaths || pathname === hiddenLeftSidePaths);


    return (
        <html lang="en">
        <Scroll />
        <body className={`${inter.className} antialiased`}>
        {showLayout && <Header/>}
        <div className="flex">
            {showLayout && <LeftSide/>}
            <div className={showLayout ? "pl-[270px] p-5 w-full" : "w-full"}>
                {children}
            </div>
        </div>
        </body>
        </html>
    );
}
