import React, { useState } from "react";
const Markdown = () => {

    const [markdownText, setMarkdownText] = useState("")
    const [htmlText, setHtmlText] = useState("");

    useEffect( ()=>{
        console.log(marked.parse(markdownText))
  } , [markdownText])

    return (
        <div className="markdown">
            <div className="mark">
                <textarea 
                placeholder="Enter your markdown here"
                onChange={e=>setMarkdownText(e.target.value)}
                value={markdownText}
                />
            </div>

        </div>
    )
}
export default Markdown;