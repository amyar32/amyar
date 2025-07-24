import Card from "@/src/components/Blog/Card/Card";
import { Container } from "@mantine/core";
import { FetchedArticles } from "../types/Article";
import { fetchClient } from "@/lib/fetchClient";

export default async function BlogIndex({ params }: { params: Promise<{ locale: string }> }) {
    const populateQuery = `[locale]=${(await params).locale}&populate=*`;
    const fetchedArticles: FetchedArticles = await fetchClient('/api/articles?' + populateQuery);

    return (
        <Container py={100} size='sm'>
            {fetchedArticles.data.map(article => (
                <Card
                    key={article.documentId}
                    description={article.description}
                    documentId={article.documentId}
                    title={article.title}
                    cover={article.cover.url}
                    author={article.author}
                />
            ))}
        </Container >
    )
}