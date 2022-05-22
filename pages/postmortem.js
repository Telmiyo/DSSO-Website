import {
    Box,
    Container
} from "@chakra-ui/react"
import PageLayout from "../components/layouts/page-layout"

const PostMortem = () => {
    return (
        <PageLayout title="postmortem">
            <Container>
                <Box>
                    Hello To Post Mortem!
                </Box>
            </Container>
        </PageLayout>
    )
}

export default PostMortem
