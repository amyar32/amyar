import Screen from "@/components/Base/Screen/Screen";
// import Squircle from "@/components/Base/Squricle/Squircle";
import { Title, Text, Stack, Container, Button, Group } from "@mantine/core";
import { IconBook2, IconHome } from "@tabler/icons-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <Screen>
      {/* <Squircle /> */}
      <Container h='100vh'>
        <Stack maw={{ xs: '70%', sm: '70%' }} h='100%' justify="center" gap='xs'>
          <Title c="teal" order={1} fz={{ xs: 40, sm: 70 }} fw={100}>I'm Amin Yarits</Title>
          <Text fz={{ xs: 15, sm: 18 }} c='gray'>
            I build fast, modern web apps with React, Vue, Next.js, and Nuxt. Clean code, smooth UX, and solid performance—that’s my thing for now lul.
          </Text>
          <Group mt={20}>
            <Button component={Link} href='/blog' color='teal' rightSection={<IconBook2 size={16} />}>
              Blog
            </Button>
            <Button component={Link} href='/about' color='teal' variant="outline" rightSection={<IconHome size={16} />}>
              About
            </Button>
          </Group>
        </Stack>
      </Container>
    </Screen>
  )
}
