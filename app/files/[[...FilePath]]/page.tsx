import React from 'react'

export default async function File({params}){
    const {FilePath} = await params
    console.log(FilePath)
  return (
    <div className='text-red-400'>File {FilePath?.join("/")}</div>
  )
}