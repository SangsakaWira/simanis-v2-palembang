export interface Category {
  name: string;
  slug: string;
}

export interface Person {
  name: string;
  avatar: string;
}

export type ArticleProps = {
    id: number
    title: string
    slug: string
    image: string
    description: string
    categories: Category[]
    author: Person
    editor: Person
    content: string
    updatedAt: string
    publishedAt: string
}