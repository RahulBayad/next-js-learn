import { Metadata } from "next";
import Link from "next/link";
import { PageProps } from "../.next/types/app/layout";

// Apply only on this page
export const  metadata: Metadata = {
  title: "Home"
} 

export default function Home({params}: PageProps) {
  console.log("params", params)
  return (
    <div>
      <h1>Hello</h1>
      <Link href="/about">About</Link>
      <Link href="/blogs">Blog</Link>
    </div>
  );
}