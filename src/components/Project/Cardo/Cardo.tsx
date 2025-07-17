'use client'

import { useRouter } from '@/i18n/navigation';
import { Card, Image, Text, Button, Group } from '@mantine/core';

interface ICardoProps {
    imageSrc: string,
    title: string,
    description: string,
    href: string,
    alt: string,
}

export default function Cardo(props: ICardoProps) {
    const router = useRouter();
    const handleOpenApp = () => { router.push(props.href) }

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={props.imageSrc}
                    height={160}
                    alt={props.alt}
                />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{props.title}</Text>
            </Group>
            <Text size="sm" c="dimmed">
                {props.description}
            </Text>
            <Button color="blue" fullWidth mt="md" radius="md" onClick={handleOpenApp}>
                Open
            </Button>
        </Card >
    );
}