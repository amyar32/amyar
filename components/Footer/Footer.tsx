'use client'

import { ActionIcon, Button, Center, Container, Divider, Group, SimpleGrid, Stack, Text, TextInput, useMantineTheme } from "@mantine/core";
import classes from './Footer.module.css';
import globalClasses from '@/styles/global.module.css';
import clsx from "clsx";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail } from "@tabler/icons-react";
import { NAVIGATION_LIST, RESOURCES_LIST } from "@/constants";
import Link from "next/link";
import { motion } from "motion/react"

export default function Footer() {
    const theme = useMantineTheme();

    const handleSubscribeButton = () => {
        // eslint-disable-next-line no-alert
        alert('why you subscribing this shit?');
    }

    return (
        <Container component={motion.div} className={clsx(classes.root, globalClasses.glassify)} fluid>
            <Container>
                <motion.div
                    style={{ position: 'relative' }}
                    initial={{ bottom: -50, opacity: 0 }}
                    transition={{ type: 'tween' }}
                    whileInView={{ bottom: 0, opacity: 1 }}
                >
                    <SimpleGrid cols={{ xs: 1, sm: 3 }} spacing={35}>
                        <Stack>
                            <Text size="xl" fw={700} >Amin Yarits Firdaus</Text>
                            <Text size="xs" fw={100}>Sometimes hese ngarti gancang poho in software engineering. So i made this personal website to save and share my thoughts.</Text>
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
                    <Divider color={theme.colors.gray[6]} classNames={{ root: classes.divider }} />
                    <Center>
                        <Text size="sm" fw={100} ta="center">Copyright © 2025 Amin Yarits. All rights reserved.</Text>
                    </Center>
                </motion.div>

            </Container>
        </Container >
    )
}