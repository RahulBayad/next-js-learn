import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export async function generateMetadata({params}){
  const {blog} = await params

  return {
    title: `Blog ${blog}`
  }
}

const page = async ({params}) => {
  const {blog} = await params
  
  if(!/^\d+$/.test(blog)){
    notFound()
  } 
  return (
    <div>This is blog 1 
        <Link href="/blog/1/comments">View Comments</Link>
    </div>
  )
}

export default page