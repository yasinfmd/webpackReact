import React, {useEffect} from 'react'
import Utility from "Utilities"

const Helloworld = () => {
    useEffect(() => {
        Utility.consoleLog("Merhaba")
        Utility.consoleWarning("Warning")
    }, [])
    return (<div>
        <h1>Merhaba</h1><p>Dünya</p><b>!</b>
    </div>)
}
export default Helloworld
