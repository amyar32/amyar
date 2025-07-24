import { Text } from "@mantine/core";
import ReactMarkdown from "react-markdown";
import classes from './Markdown.module.css';

export default function Markdown(props: { body: string }) {
    return (
        <Text component="div" className={classes.root}>
            <ReactMarkdown>
                {props.body}
            </ReactMarkdown>
        </Text>
    )
}