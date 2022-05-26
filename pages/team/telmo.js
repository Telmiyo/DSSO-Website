import {
    Box,
    Container,
} from "@chakra-ui/react"
import PageLayout from "../../components/layouts/page-layout"
import ReactMarkdown from "react-markdown";
import React, {Component, useState, useEffect} from "react"


class Telmo extends Component {

    constructor()
    {
        super();
        this.state = {markdown:''};
    }

    componentWillMount(){
        fetch("https://raw.githubusercontent.com/Telmiyo/DSSO-Website/Dev/public/markdown/telmo.md").then(res =>res.text()).then(text=>this.setState({markdown:text}))
    }

    render (){
        const {markdown} = this.state;
        return <PageLayout title="telmo">
        <Container>
            <Box>
                I am Telmo Beroiz!
            </Box>
            <ReactMarkdown children={markdown}/>
      
        </Container>
    </PageLayout>
    }
       
    
}

export default Telmo
