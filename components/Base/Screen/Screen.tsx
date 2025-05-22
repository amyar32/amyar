'use client'

import { Box } from "@mantine/core";
import { PropsWithChildren } from "react";
import classes from './Screen.module.css';


export default function Screen({ children }: PropsWithChildren) {

    return (
        <Box className={classes.root}>
            {children}
        </Box >
    )
}