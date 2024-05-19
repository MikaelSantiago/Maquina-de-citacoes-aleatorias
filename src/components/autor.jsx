import React from "react"

export default function Escritor(props) {
    
    return (
        <div id="quote-author">
            <h6 id="author">{props.autor}</h6>
        </div>
    )
}