'use client'
import React, {useEffect} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";


const Home: React.FC = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const token = searchParams.get('token');
        if (!token) {
            router.push("/login");
        } else {
                sessionStorage.setItem('token', token);
                router.push("/welcome");
        }
    }, [searchParams]);


    return (
        <div>
            <div className="loading-container"
                 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div className="loader">
                    <Image
                        src='/image/loader.gif'
                        alt="loading..."
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home