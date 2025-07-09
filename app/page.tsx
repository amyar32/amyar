import Screen from "@/components/Base/Screen/Screen";
import { Title, Text, Stack, Container } from "@mantine/core";

export default function HomePage() {
  return (
    <Screen>
      {/* <Squircle /> */}
      <Container h='100vh'>
        <Stack maw={{ xs: '70%', sm: '70%' }} h='100%' justify="center" gap='xs'>
          <Title order={1} fz={{ xs: 40, sm: 70 }} fw={700}>Amin Yarits</Title>
          <Text fz={{ xs: 15, sm: 18 }} c='gray'>
            I am frontend developer focused on building simple, functional interfaces with React and Next.js. I'm also learning SvelteKit.
          </Text>
        </Stack>
      </Container>
    </Screen>
  )
}
