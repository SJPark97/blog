import { getAllPostsFromNotion } from '@/lib/db'
import { getPageContent } from '@/lib/page'
import NotionPage from '@/components/NotionPage'
import { notFound } from 'next/navigation'

// export const revalidate = Number(process.env.REVALIDATE_INTERVAL ?? 300)

export async function generateStaticParams() {
  const posts = await getAllPostsFromNotion()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
    const posts = await getAllPostsFromNotion()
    const post = posts.find((p) => p.slug === slug)
  
    if (!post) return {}
  
    const recordMap = await getPageContent(post.id)
    return {
      title: recordMap.block[post.id].value.properties.title[0][0],
      description: recordMap.block[post.id].value.properties.title[0][0],
    }
  }

export default async function BlogPostPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
    const posts = await getAllPostsFromNotion()
    const post = posts.find((p) => p.slug === slug)
  
    if (!post) return notFound()
  
    const recordMap = await getPageContent(post.id)
  
    return <NotionPage recordMap={recordMap} />
  }