'use client'

import { useRouter } from "@/i18n/navigation";
import { AspectRatio, Divider, Group, Image, Stack, Text, Title } from "@mantine/core";

type CardProps = {
    title: string,
    description: string,
    slug: string,
}

export default function Card(props: CardProps) {
    const router = useRouter();
    const handleTitleClick = () => { router.push('/blog/' + props.slug) };

    return (
        <>
            <Group wrap="nowrap" justify="space-between">
                <Stack gap='xs' >
                    <Title order={4} lineClamp={2} onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
                        {props.title}
                    </Title>
                    <Text size="sm" lineClamp={2}>{props.description}</Text>
                    <Text c='dimmed' fz={10} fw={600} tt='uppercase'>17 Juli 2025 - Amin Yarits - 15 Minutes to Read</Text>
                </Stack>
                <Stack>
                    <AspectRatio ratio={1080 / 720} w={180}>
                        <Image
                            radius='md'
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
                            alt="Panda"
                        />
                    </AspectRatio>
                </Stack>
            </Group>
            <Divider my={30} />
        </>
    )
}