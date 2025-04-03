import { getAllPostsFromNotion } from '@/lib/db'
import Link from 'next/link'

export default async function HomePage() {
  const posts = await getAllPostsFromNotion();
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">📝 블로그 글 목록</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="border-b border-gray-200 pb-4">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-600">{post.summary}</p>
            <p className="text-xs text-gray-400 mt-1">
              {post.createdAt?.slice(0, 10)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}