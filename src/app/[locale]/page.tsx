import Screen from "@/src/components/Base/Screen/Screen";
import { Title, Text, Stack, Container, Code, Highlight, Blockquote, Box, SimpleGrid, Flex, Image, Anchor, AspectRatio, Alert, ActionIcon, Group } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconInfoHexagon, IconMail } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function HomePage() {
  const t = await getTranslations('homepage');

  return (
    <Screen>
      <Container h='100%'>
        <SimpleGrid h='100%' cols={{ sm: 1, md: 2 }}>
          <Flex w="100%" direction='column' justify='center' align={{ base: 'flex-end', md: 'center' }}>
            <AspectRatio ratio={1 / 1} maw={500} mx="auto">
              <Image
                fit="contain"
                src='./me.png' />
            </AspectRatio>
          </Flex>
          <Stack justify="center" gap='xl'>
            <Stack gap='xs'>
              <Title fz={{ xs: 40, sm: 70 }} fw={700}>
                {t('name')}
              </Title>
              <Highlight highlight={['React', 'Next.js', "Sveltekit"]} fz={{ xs: 15, sm: 18 }} color='gray'>
                {t('description')}
              </Highlight>
            </Stack>
            <Blockquote fz={{ xs: 12, sm: 14 }} color="teal" icon={<IconInfoHexagon />} >
              {t('activeWorking')}{' '}
              <Anchor fz={{ xs: 12, sm: 14 }} href="https://rollingglory.com/" target="_blank">
                Rolling Glory
              </Anchor>
            </Blockquote>
            <Group>
              <ActionIcon component={Link} target="_blank" href="mailto:amyar32@gmail.com" variant="transparent">
                <IconMail />
              </ActionIcon>
              <ActionIcon component={Link} target="_blank" href="https://www.linkedin.com/in/amin-yarits-firdaus-649849140/" variant="transparent">
                <IconBrandLinkedin />
              </ActionIcon>
              <ActionIcon component={Link} target="_blank" href="https://github.com/amyar32" variant="transparent">
                <IconBrandGithub />
              </ActionIcon>
            </Group>
          </Stack>
        </SimpleGrid>
      </Container>
    </Screen >
  )
}
