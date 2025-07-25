import { Avatar, Container, Divider, Group, Stack, Text, Title } from "@mantine/core";
import { FetchedArticle, FetchedArticles } from "../../../../types/Article";
import { fetchClient } from "@/lib/fetchClient";
import type { Metadata } from 'next';
import Markdown from "@/src/components/Base/Markdown/Markdown";

export async function generateMetadata({ params }: { params: Promise<{ slug: string, locale: string }> }): Promise<Metadata> {
    const populateQuery = `filters[slug][$eq]=${(await params).slug}&[locale]=${(await params).locale}&populate=*`;
    const fetchedArticle: FetchedArticles = await fetchClient('/api/articles/' + '?' + populateQuery);
    const article = fetchedArticle.data[0];

    const imageUrl = `${article.cover?.formats?.large?.url || article.cover?.url}`;

    return {
        title: article.title,
        description: article.description,
        authors: [{ name: article.author.name }],
        openGraph: {
            title: article.title,
            description: article.description,
            url: `/api/blog/${article.slug}`,
            type: 'article',
            images: [{
                url: imageUrl,
                width: article.cover?.width,
                height: article.cover?.height,
                alt: article.cover?.alternativeText || article.title
            }],
            locale: article.locale,
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.description,
            images: [imageUrl],
        },
    };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string, locale: string }> }) {
    const populateQuery = `filters[slug][$eq]=${(await params).slug}&[locale]=${(await params).locale}&populate=*`;
    const fetchedArticle: FetchedArticles = await fetchClient('/api/articles/' + '?' + populateQuery);
    const article = fetchedArticle.data[0];

    return (
        <Container py={100} size='sm'>
            <Stack>
                <Title>{article.title}</Title>
                <Text c='dimmed'>{article.description}</Text>
                <Divider />
                <Group>
                    <Avatar radius="xl" />
                    <Stack gap={0}>
                        <Text size="xs">{article.author.name}</Text>
                        <Text c='dimmed' size="xs">{new Date(article.author.publishedAt).toLocaleString()}</Text>
                    </Stack>
                </Group>
                <Divider />
                <Markdown body={article.body} />
            </Stack>
        </Container>
    )
}