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
    cover: any
    author: {
        name: string
        publishedAt: string
        avatar: string
    }
    body: string
    locale: string
}

export type FetchedArticle = {
    data: Article
    meta: Meta
}

export type FetchedArticles = {
    data: Article[]
    meta: Meta
}