import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { PageProps } from '../../../.next/types/app/layout'

export async function generateMetadata({ params }: PageProps) {
  const { blog } = await params

  return {
    title: `Blog ${blog}`
  }
}
// Static site generation 
// if we want few blog already loaded 
// it will generate 3 page for blog 1, 2 and 3, if 200 then 200 html will be generated
// it happen on build time and also happen user keep visiting not generated new blogs, like 10, 11, and then it will be 
// generated and same file will beserver to other users when they search same page (blog)
//this will work only in production mode, not in development
export function generateStaticParams() {
  return [
    { blog: '1' },
    { blog: '2' },
    { blog: '3' },
  ]
}

// when user try to search blog other then 1,2 and 3 then html 
// will not generate, and gets not found page
export const dynamicParams = false

// this will regenerate the page after given time, by default it is false
// it not regerates after every 5 second(given value), it will regenerate when user visites after 5 seconds, 
// if user come after an hour , then it will regenerate
//useful when page content keeps changing
// this id ISR == Incremental Site generation
export const revalidate = 5 //seconds 
// export const revalidate = 60 * 60 * 24 * 30 // 1 month

const page = async ({ params }: PageProps) => {
  const { blog } = await params

  if (!/^\d+$/.test(blog)) {
    notFound()
  }
  return (
    <div>This is blog {blog}
      <Link href="/blog/1/comments">View Comments</Link>
    </div>
  )
}

export default page