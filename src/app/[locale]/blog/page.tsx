import Card from "@/src/components/Blog/Card/Card";
import { Container } from "@mantine/core";
import { FetchedArticles } from "../types/Article";

export default async function BlogIndex() {
    const requestArticles = await fetch('http://localhost:1337/api/articles?populate=cover');
    const fetchedArticles: FetchedArticles = await requestArticles.json();

    return (
        <Container py={100} size='sm'>
            {fetchedArticles.data.map(article => (
                <Card key={article.documentId} description={article.description} slug={article.slug} title={article.title} />
            ))}
        </Container >
    )
}