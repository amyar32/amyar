import { Meta } from "./Common"

export type Articles = {
    createdAt: string
    description: string
    documentId: string
    id: number
    publishedAt: Date
    slug: string
    title: string
    updatedAt: Date
}

export type FetchedArticles = {
    data: Articles[]
    meta: Meta
}