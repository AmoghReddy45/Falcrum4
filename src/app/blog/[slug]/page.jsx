import BlogDetail from '@/common/module/Blog/component/BlogDetail'
import React from 'react'
import { BlogContent } from '@/common/constant/BlogContent'

export async function generateStaticParams() {
  return BlogContent.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const blog = BlogContent.find((item) => item.slug === params.slug)
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    }
  }

  return {
    title: blog.title,
    description: blog.desc,
  }
}

const page = () => {
  return (
    <div className='flex justify-center'>
      <BlogDetail />
    </div>
  )
}

export default page
