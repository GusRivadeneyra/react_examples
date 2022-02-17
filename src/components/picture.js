import React from "react";

export function Picture(props) {
    console.log(props)
    const srcFuente = props.fuente
    return(
        <>
            <div>this could be a picture {srcFuente}</div>
            <img src={srcFuente} style={{
          width: '100px'
        }}/>
        </>
    )
}

