import { useEffect } from "react";


const NoMatch =() => {

    useEffect(() => {
        document.title = `404 ERROR`
    })

    return(
        <>
            <h1>404 Not Found</h1>
        </>
    )
}

export default NoMatch;