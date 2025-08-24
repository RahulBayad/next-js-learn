import React from 'react'

const page = async ({params}) => {
  const {blog} = await params
  console.log(blog)
  return (
    <div>This are comments</div>
  )
}

export default page