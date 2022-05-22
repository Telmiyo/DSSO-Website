import { Box } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../navbar"


const Main = ({ children, router }) => {

    return (
        <Box as="main" >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>DSSO - Home</title>
            </Head>
        <Navbar path={router.asPath}/>
        {children}
        </Box>
    )
}

export default Main