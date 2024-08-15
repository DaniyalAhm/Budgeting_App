import Image from "next/image";

// COMPONENT IMPORTS
import Nav from "./Nav";
import Hero from "./Hero";
import Features from "./Features";
import './signup_page.css'

export default function Signup() {
  return (
    <main className="flex flex-col gap-20 p-6">
      <Nav />
      <Hero />
      <Features />
    </main>
  );
}
