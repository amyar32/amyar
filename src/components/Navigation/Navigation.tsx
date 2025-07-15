'use client'

import { ActionIcon, Button, Center, Divider, Group, useMantineColorScheme, useMantineTheme } from "@mantine/core"
import globalClasses from '@/styles/global.module.css'
import classes from "./Navigation.module.css"
import { motion } from "motion/react"

import clsx from "clsx"
import { IconLanguage, IconMoon, IconSun } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { NAVIGATION_LIST } from "@/constants"
import { useLocale } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"


export default function NavigationBar() {
    const locale = useLocale();

    const pathname = usePathname();
    const [isClient, setIsClient] = useState<boolean>(false);

    const theme = useMantineTheme();
    const { toggleColorScheme, colorScheme } = useMantineColorScheme();
    const isDarkMode = colorScheme === 'dark';

    useEffect(() => { setIsClient(true) }, [])

    return (
        <Center>
            {isClient && <motion.div
                className={classes.motionRoot}
                initial={{ top: -60 }}
                transition={{ type: 'spring', bounce: 0.5 }}
                animate={{ top: 25 }}
                whileHover={{ scale: 1.03 }}
            >
                <Group
                    classNames={{ root: clsx(classes.root, globalClasses.glassify) }}
                    gap='xs'
                >
                    {NAVIGATION_LIST.map(navigation => (
                        <Button
                            classNames={{
                                label: clsx(isDarkMode ? classes.btnLabel : classes.btnLabelDark,
                                    pathname !== navigation.href && classes.btnLabelInactive)
                            }}
                            key={navigation.label}
                            href={navigation.href}
                            component={Link}
                            size='compact-sm'
                            variant="transparent"
                        >
                            {navigation.label}
                        </Button>))}
                    <Divider
                        color={isDarkMode ? theme.colors.gray[6] : theme.colors.gray[3]}
                        size='xs'
                        orientation="vertical"

                    />
                    <ActionIcon size='sm' variant="transparent" onClick={toggleColorScheme}>
                        {isDarkMode ? <IconSun color="orange" /> : <IconMoon color="teal" />}
                    </ActionIcon>
                    <ActionIcon size='sm' variant="transparent" component={Link} href={pathname} locale={locale === 'id-ID' ? 'en-US' : 'id-ID'}>
                        <IconLanguage />
                    </ActionIcon>
                </Group>
            </motion.div>}
        </Center>
    )
}