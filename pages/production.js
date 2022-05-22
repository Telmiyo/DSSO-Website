import {
    Box,
    Container
} from "@chakra-ui/react"
import PageLayout from "../components/layouts/page-layout"

const Production = () => {
    return (
        <PageLayout title="production">
            <Container>
                <Box>
                    Hello To Production!
                </Box>
            </Container>
        </PageLayout>
    )
}

export default Production
