import React from 'react'
import { PageProps } from '../../../.next/types/app/layout'

export default async function File({params}: PageProps){
    const {FilePath} = await params
    console.log(FilePath)
  return (
    <div className='text-red-400'>File {FilePath?.join("/")}</div>
  )
}