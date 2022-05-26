import {
    Box,
    Container,
} from "@chakra-ui/react"
import PageLayout from "../../components/layouts/page-layout"
import ReactMarkdown from "react-markdown";
import React, {Component} from "react"
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeToc from 'rehype-toc'


class Telmo extends Component {

    constructor()
    {
        super();
        this.state = {markdown:''};
    }

    componentDidMount(){
        // fetch("https://raw.githubusercontent.com/Omicrxn/Wasabi-Warriors-RPG/master/README.md").then(res =>res.text()).then(text=>this.setState({markdown:text}))
        fetch("https://raw.githubusercontent.com/Telmiyo/DSSO-Website/Dev/public/markdown/telmo.md").then(res =>res.text()).then(text=>this.setState({markdown:text}))
    }

    render (){
        const {markdown} = this.state;
        return <PageLayout title="telmo">
        <Container>
            <Box>
                I am Telmo Beroiz!
            </Box>
            <ReactMarkdown children={markdown} remarkPlugins = {[remarkToc,[remarkGfm,{stringLength:true,tableCellPadding:false,tablePipeAlign:true}]]} rehypePlugins ={[rehypeToc]}/>
      
        </Container>
    </PageLayout>
    }
       
    
}

export default Telmo
