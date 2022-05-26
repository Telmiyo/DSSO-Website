import {unified} from 'unified'
import markdown from 'remark-parse'
import prism from 'remark-prism'
const parseMarkdown = content => {
    const engine = unified().use(markdown).use(prism)
    
    const ast = engine.parse(content)
    return engine.runSync(ast)
    
}
export default parseMarkdown