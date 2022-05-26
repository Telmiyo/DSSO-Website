import {
    Box,
    Container,
} from "@chakra-ui/react"
import PageLayout from "../../components/layouts/page-layout"
import Markdown from "markdown-to-jsx"
import React, { useState, useEffect} from "react"


const Telmo = () => {
    
    const telmoFile = "../../public/markdown/telmo.md"
    const [post, setPost] = useState("")

       useEffect(() => { 
        fetch(telmoFile)
        .then(res => res.text())
        .then(response => setPost(response))
        .catch(err => setPost(err))
        })
    

    return (
        <PageLayout title="telmo">
            <Container>
                <Box>
                    I am Telmo Beroiz!
                </Box>
        
                <Markdown>
                    {post}
                </Markdown>
          
            </Container>
        </PageLayout>
    )
}

export default Telmo
