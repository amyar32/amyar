import { AspectRatio, Divider, Group, Image, Stack, Text, Title } from "@mantine/core";
import NavigationLink from "../../Base/NavigationLink/NavigationLink";

type CardProps = {
    title: string,
    description: string,
    documentId: string,
    cover: string,
    author: {
        name: string,
        publishedAt: string,
    }
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
                    <Text c='dimmed' fz={10} fw={600} tt='uppercase'>{props.author.name} - {new Date(props.author.publishedAt).toLocaleString()}</Text>
                </Stack>
                <Stack>
                    <AspectRatio ratio={1080 / 720} w={150}>
                        <Image
                            radius='md'
                            src={props.cover}
                            alt="Panda"
                        />
                    </AspectRatio>
                </Stack>
            </Group>
            <Divider my={30} />
        </>
    )
}