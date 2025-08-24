import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Apply only on this page
export const  metadata: Metadata = {
  title: "Home"
} 

export default function Home({params}) {
  console.log("params", params)
  return (
    <div>
      <h1>Hello</h1>
      <Link href="/about">About</Link>
      <Link href="/blogs">Blog</Link>
    </div>
  );
}