'use client'

import { ActionIcon, Button, Container, Group, SimpleGrid, Stack, Text, TextInput } from "@mantine/core";
import classes from './Footer.module.css';
import globalClasses from '@/styles/global.module.css';
import clsx from "clsx";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail } from "@tabler/icons-react";
import { NAVIGATION_LIST, RESOURCES_LIST } from "@/constants";
import Link from "next/link";

export default function Footer() {
    const handleSubscribeButton = () => {
        alert('not yet ready');
    }

    return (
        <Container className={clsx(classes.root, globalClasses.glassify)} fluid>
            <Container>
                <SimpleGrid cols={{ xs: 1, sm: 3 }} spacing={35}>
                    <Stack>
                        <Text size="xl" fw={700} >Amin Yarits Firdaus</Text>
                        <Text size="xs" fw={100}>Sometimes hese ngarti gancang poho. So i made this personal website to save and share my thoughts.</Text>
                        <Group>
                            <ActionIcon c='teal' variant="transparent">
                                <IconMail />
                            </ActionIcon>
                            <ActionIcon c='teal' variant="transparent">
                                <IconBrandLinkedin />
                            </ActionIcon>
                            <ActionIcon c='teal' variant="transparent">
                                <IconBrandGithub />
                            </ActionIcon>
                            <ActionIcon c='teal' variant="transparent">
                                <IconBrandTwitter />
                            </ActionIcon>
                        </Group>
                    </Stack>
                    <Group justify="space-between" pr={50}>
                        <Stack>
                            <Text size="sm" fw={100}>Navigation</Text>
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
                            <Text size="sm" fw={100}>Resources</Text>
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
                        <Text size="md" fw={700} >Subscribe </Text>
                        <Text size="xs" fw={100}>In case you miss me, no spam surely.</Text>
                        <Group gap='xs'>
                            <TextInput size="xs" placeholder="Your Email" />
                            <Button color="teal" size="xs" rightSection={<IconMail size={14} />} onClick={handleSubscribeButton}>Subscribe</Button>
                        </Group>
                    </Stack>
                    <Stack />
                </SimpleGrid>
            </Container>
        </Container >
    )
}