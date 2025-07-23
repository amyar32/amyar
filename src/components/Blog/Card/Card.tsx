import { AspectRatio, Divider, Group, Image, Stack, Text, Title } from "@mantine/core";
import NavigationLink from "../../Base/NavigationLink/NavigationLink";

type CardProps = {
    title: string,
    description: string,
    documentId: string,
}

export default function Card(props: CardProps) {


    return (
        <>
            <Group wrap="nowrap" justify="space-between">
                <Stack gap='xs' >
                    <NavigationLink href={'/blog/' + props.documentId}>
                        <Title order={4} lineClamp={2} >
                            {props.title}
                        </Title>
                    </NavigationLink>

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