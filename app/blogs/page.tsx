import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Blogs"
}

export default function blogs(props) {
  console.log(props)
  return (
    <div>
        <Link href="/blogs/1">Blog1</Link>
    </div>
  )
}
