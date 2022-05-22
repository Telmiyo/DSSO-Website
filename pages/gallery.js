import {
    Box,
    Container
} from "@chakra-ui/react"
import PageLayout from "../components/layouts/page-layout"

const Gallery = () => {
    return (
        <PageLayout title="gallery">
            <Container>
                <Box>
                    Hello To Gallery!
                </Box>
            </Container>
        </PageLayout>

    )
}

export default Gallery
