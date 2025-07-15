import Screen from "@/src/components/Base/Screen/Screen";
import { Title, Text, Stack, Container } from "@mantine/core";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations('homepage');

  return (
    <Screen>
      {/* <Squircle /> */}
      <Container h='100vh'>
        <Stack maw={{ xs: '70%', sm: '70%' }} h='100%' justify="center" gap='xs'>
          <Title order={1} fz={{ xs: 40, sm: 70 }} fw={700}>Amin Yarits</Title>
          <Text fz={{ xs: 15, sm: 18 }} c='gray'>
            {t('description')}
          </Text>
        </Stack>
      </Container>
    </Screen>
  )
}
