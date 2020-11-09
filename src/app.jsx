import React from "react"
import Helloworld from "./components/helloworld";

const App = () => {
    return (
        <div>
            Selam App.js
            <Helloworld/>
        </div>
    )
}
export default React.memo(App)
