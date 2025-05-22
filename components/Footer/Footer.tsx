'use client'

import { ActionIcon, Box, Button, Center, Container, Divider, Group, SimpleGrid, Stack, Text, useMantineTheme } from "@mantine/core";
import classes from './Footer.module.css';
import globaclClasses from '@/styles/global.module.css';
import clsx from "clsx";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail } from "@tabler/icons-react";
import { NAVIGATION_LIST, RESOURCES_LIST } from "@/constants";
import Link from "next/link";

export default function Footer() {
    const theme = useMantineTheme();

    const handleSubscribeButton = () => {
        // eslint-disable-next-line no-alert
        alert('why you subscribing this shit?');
    }

    return (
        <>   <Container className={clsx(classes.root, globaclClasses.glassify)} fluid>
            <Container>
                <SimpleGrid cols={{ xs: 1, sm: 3 }}>
                    <Stack>
                        <Text size="xl" fw={700} >Amin Yarits</Text>
                        <Text size="xs" fw={100}>Always hese ngarti gancang poho in software engineering. So i made this personal website.</Text>
                        <Group>
                            <ActionIcon variant="transparent">
                                <IconMail />
                            </ActionIcon>
                            <ActionIcon variant="transparent">
                                <IconBrandLinkedin />
                            </ActionIcon>
                            <ActionIcon variant="transparent">
                                <IconBrandGithub />
                            </ActionIcon>
                            <ActionIcon variant="transparent">
                                <IconBrandTwitter />
                            </ActionIcon>
                        </Group>
                    </Stack>
                    <Group justify="space-between" pr={50}>
                        <Stack>
                            <Text c='gray' size="sm" fw={100}>General</Text>
                            {NAVIGATION_LIST.map(navigation => (
                                <Text
                                    size="sm"
                                    key={navigation.href}
                                    component={Link}
                                    href={navigation.href}
                                >
                                    {navigation.label}
                                </Text>
                            ))}
                        </Stack>
                        <Stack>
                            <Text c='gray' size="sm" fw={100}>Resources</Text>
                            {RESOURCES_LIST.map(resource => (
                                <Text
                                    size="sm"
                                    key={resource.href}
                                    component={Link}
                                    href={resource.href}
                                >
                                    {resource.label}
                                </Text>
                            ))}
                        </Stack>
                    </Group>

                    <Stack>
                        <Text size="md" fw={700} >Subscribe to Amin Yarits's blog newsletter</Text>
                        <Text size="xs" fw={100}>Don't miss out 😉. Get an email whenever I post, no spam.</Text>
                        <Box>
                            <Button size="xs" rightSection={<IconMail size={14} />} onClick={handleSubscribeButton}>Subscribe Now</Button>
                        </Box>
                    </Stack>
                    <Stack />

                </SimpleGrid>

                <Divider color={theme.colors.gray[6]} my={50} />
                <Center>
                    <Text size="sm" fw={100}>Copyright © 2025 Amin Yarits. All rights reserved.</Text>
                </Center>
            </Container>
        </Container >
        </>

    )
}