import { Avatar, Container, Divider, Group, Stack, Text, Title } from "@mantine/core";

export default function BlogDetail() {
    return (
        <Container py={100} size='sm'>
            <Stack>
                <Title>What Caused the 'Baby Boom’? What Would It Take to Have Another?</Title>
                <Text c='dimmed'>Governments worldwide are trying to increase fertility with cash. But the most famous birthrate "boom" had a lot to do with science and technology, as well.</Text>
                <Divider />
                <Group>
                    <Avatar radius="xl" />
                    <Stack gap={0}>
                        <Text size="xs">Amin Yarits Firdaus</Text>
                        <Text c='dimmed' size="xs">17 Juli 2025</Text>
                    </Stack>
                </Group>
                <Divider />

                <Text ta='justify'>
                    In rich countries around the world, birth rates have fallen to historically low levels. Governments have responded with a confetti cannon of policy ideas to increase the number of babies, including parental leave plans, preschool programs, tax credits for parents, and even government-sponsored speed-dating events. To the extent that these programs have worked, their success has been mixed and, at best, moderate. Even a country like France, with its famously robust support for infants, still has a fertility rate significantly below the replacement level of 2.1 children per woman.

                    So, what would it take to actually engineer a new baby boom in the U.S. and throughout the world?

                    The official baby boom—the period between the 1930s and 1960s when birth rates soared in the West—is so famous that its fame obscures its strangeness. Imagine being a journalist or demographer in 1925. For the previous 100 years, going back to the early 1800s, the fertility rate in the U.S. and practically every other rich country had steadily declined toward the replacement rate of 2.1.1 Nothing in the history of western family life or economics could have predicted what happened next.

                    In the 1930s and 1940s, fertility in the U.S. surged suddenly by more than 70 percent. It happened in cities and in rural areas; among working women and non-working women; among college graduates and couples who didn’t finish high school; among white and nonwhite couples; in the U.S., Europe, and beyond. In Birth Quake, the Barnard economist Diane J. Macunovich called the baby boom "a totally unexpected, earth-shattering, and ground-breaking event experienced not just in the United States, but in virtually the entire Western industrialized world."

                    The enigma of the baby boom is profound. It didn’t just reverse a century-long trend. It also unfolded during a period of “rising income, urbanization, [and] educational attainment … many of the factors that economists and demographers typically associate with declining fertility,” the economists Martha J. Bailey and William J. Collins wrote. Nearly a full century later, one of the most famous social phenomena of the last 100 years is still one of the most mysterious.
                </Text>
            </Stack>

        </Container>
    )
}