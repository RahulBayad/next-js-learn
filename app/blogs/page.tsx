import Link from 'next/link'
import React from 'react'
import { PageProps } from '../../.next/types/app/layout'

export const metadata = {
  title: "Blogs"
}

export default async function blogs({params}: PageProps) {
  const { blog } = await params
  console.log(blog)
  return (
    <div>
        <Link href="/blogs/1">Blog {blog}</Link>
    </div>
  )
}
