'use client'

import { Button, Center, Group } from "@mantine/core"
import globalClasses from '@/styles/global.module.css'
import classes from "./NavigationBar.module.css"
import { motion } from "motion/react"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"

const NAVIGATION_LIST = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/projects', label: 'Project' },
    { href: '/about', label: 'About' },
];

export default function NavigationBar() {
    const pathname = usePathname();

    return (
        <Center>
            <motion.div
                className={classes.motionRoot}
                initial={{ top: -60 }}
                transition={{ type: 'spring', bounce: 0.5 }}
                animate={{ top: 25 }}
            >
                <Group
                    classNames={{ root: clsx(classes.root, globalClasses.glassify) }}
                    gap='xs'
                >
                    {NAVIGATION_LIST.map(navigation => (
                        <Button
                            classNames={{ label: clsx(classes.btnLabel, pathname !== navigation.href && classes.btnLabelInactive) }}
                            key={navigation.label}
                            href={navigation.href}
                            component={Link}
                            size='compact-sm'
                            variant="transparent"
                        >
                            {navigation.label}
                        </Button>))}
                </Group>
            </motion.div>
        </Center>
    )
}