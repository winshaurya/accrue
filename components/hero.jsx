"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { useEffect, useRef } from "react";


const HeroSection = () => {
  const imageRef = useRef()
  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {

      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add('scrolled')
      } else {
        imageElement.classList.remove('scrolled')
      }
    };



    window.addEventListener("scroll", handleScroll);


    return () => window.removeEventListener("scroll", handleScroll)
  }, []);
  return (
    <div className="pb-20  px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title" >
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto ">
          an AI-powered financial management platform that helps ou track,
          analyze, and optimize your spending with real-time insights.
        </p>

        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://open.spotify.com/track/1jKXjxMWlq4BhH6f9GtZbu?si=737e41427ce04753">
            <Button size="lg" variant="outline" className="px-8">
              Anthem
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
            <Image
            src= "/poster.jpg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2x1 border mx-auto"
              priority
            />
          </div>
        </div>


      </div>
    </div>
  )
}


export default HeroSection