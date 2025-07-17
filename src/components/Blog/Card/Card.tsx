'use client'

import { Link, useRouter } from "@/i18n/navigation";
import { AspectRatio, Divider, Group, Image, Stack, Text, Title } from "@mantine/core";

export default function Card() {
    const router = useRouter();
    const handleTitleClick = () => { router.push('/blog/test') };

    return (
        <>
            <Group wrap="nowrap">
                <Stack gap='xs' >
                    <Title order={4} lineClamp={2} onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
                        What Caused the 'Baby Boom’? What Would It Take to Have Another?
                    </Title>
                    <Text size="sm" lineClamp={2}>Governments worldwide are trying to increase fertility with cash. But the most famous birthrate "boom" had a lot to do with </Text>
                    <Text c='dimmed' fz={10} fw={600} tt='uppercase'>17 Juli 2025 - Amin Yarits - 15 Minutes to Read</Text>
                </Stack>
                <Stack>
                    <AspectRatio ratio={1080 / 720} miw={140} maw={300}>
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