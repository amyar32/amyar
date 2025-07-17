import Cardo from "@/src/components/Project/Cardo/Cardo";
import { Container, SimpleGrid } from "@mantine/core";

export default function BlogIndex() {
    return (
        <Container py={100} size='sm'>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <Cardo
                    key='dad-joke'
                    alt="Dad Jokes"
                    title="Dad Jokes Generator"
                    description="English, Indonesia, Sundanese Dad Jokes Generator. A dad joke is a short joke, typically a pun, presented as a one-liner or a question and answer, but not a narrative."
                    href="https://dadjokes-git-master-tikosewads.vercel.app/"
                    imageSrc="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/3073ec4b-8489-4845-901e-91c1e4fa5735?w=200&h=200"
                />
                <Cardo
                    key='mawaqit'
                    alt="Mawaqit"
                    title="Mawaqit"
                    description="Situs untuk menghitung waktu sholat sekaligus dalam satu waktu. Dikembangkan oleh Amin Yarits Firdaus berdarkan library yang dibuat oleh Hamid Zarrabi-Zadeh."
                    href="https://mawaqit-uvo1-git-master-tikosewads-projects.vercel.app/"
                    imageSrc="https://1.bp.blogspot.com/-n0vgseRm7r8/VY5nPWyeq0I/AAAAAAAABsQ/7soUyD7m7b4/s1600/10491211_955025801184770_6289149407762319684_n.jpg"
                />
            </SimpleGrid>

        </Container >
    )
}