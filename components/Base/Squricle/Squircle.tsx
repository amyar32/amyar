"use client"

import { useMantineTheme } from "@mantine/core"
import { frame, motion, useSpring } from "motion/react"
import React, { RefObject, useEffect, useRef } from "react"

export default function Squircle() {
    const ref = useRef<HTMLDivElement>(null)
    const { x, y } = useFollowPointer(ref)
    const theme = useMantineTheme();

    const ball: React.CSSProperties = {
        width: 80,
        height: 80,
        backgroundColor: theme.colors.blue[5],
        borderRadius: "50%",
        zIndex: -10,
        position: 'fixed',
    }

    return <motion.div
        ref={ref}
        style={{ ...ball, x, y }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
    />
}

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 }

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
    const x = useSpring(0, spring)
    const y = useSpring(0, spring)

    useEffect(() => {
        if (!ref.current) { return }

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!

            frame.read(() => {
                x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
                y.set(clientY - element.offsetTop - element.offsetHeight / 2)
            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () =>
            window.removeEventListener("pointermove", handlePointerMove)
    }, [])

    return { x, y }
}


