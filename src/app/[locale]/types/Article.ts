import { Meta } from "./Common"

export type Article = {
    createdAt: string
    description: string
    documentId: string
    id: number
    publishedAt: Date
    slug: string
    title: string
    updatedAt: Date
}

export type FetchedArticle = {
    data: Article
    meta: Meta
}

export type FetchedArticles = {
    data: Article[]
    meta: Meta
}