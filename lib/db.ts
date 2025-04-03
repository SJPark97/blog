import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export type BlogPost = {
  id: string
  title: string
  slug: string
  summary: string
  createdAt: string | null
}

const notion = new Client({
  auth: process.env.NOTION_SECRET,
})

export async function getAllPostsFromNotion(): Promise<BlogPost[]> {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'published',
      checkbox: { equals: true },
    },
    sorts: [
      {
        property: 'createAt',
        direction: 'descending',
      },
    ],
  })

  const pages = response.results as PageObjectResponse[]
  return pages.map((page) => {
    const title = (page.properties['Name'] as {
      type: 'title';
      title: Array<{ plain_text: string }>;
    })?.title?.[0]?.plain_text ?? 'Untitled'
  
    const slug = (page.properties['slug'] as {
      type: 'rich_text';
      rich_text: Array<{ plain_text: string }>;
    })?.rich_text?.[0]?.plain_text ?? page.id
  
    const summary = (page.properties['summary'] as {
      type: 'rich_text';
      rich_text: Array<{ plain_text: string }>;
    })?.rich_text?.[0]?.plain_text ?? ''
  
    const createdAt = (page.properties['createAt'] as {
      type: 'date';
      date: { start: string } | null;
    })?.date?.start ?? null
  
    return {
      id: page.id,
      title,
      slug,
      summary,
      createdAt,
    }
  })
}