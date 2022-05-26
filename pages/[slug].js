import {MDXRemote} from 'next-mdx-remote'
import { getFileBySlug, getFiles } from "../utils/mdx"
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

export default function TeamMember({source, frontmatter}){
    return <MDXRemote components={ChakraUIRenderer()} {...source}/>
}
export async function getStaticProps({params}){
    const {source, frontmatter} = await getFileBySlug(params.slug)
    return {
        props:{source,frontmatter}
    }
}

export async function getStaticPaths(){
    const members = await getFiles()
    const paths = members.map((member)=>({
        params: {
            slug: member.replace(/\.mdx/,""),
        }
    }))
    return{
        paths,
        fallback: false,
    }
}