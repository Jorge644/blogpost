import React from "react"

import CardNew from '../components/CardNew';
import HelloWord from '../components/HelloWorld';

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return(
        <div>
            <HelloWord />
            <CardNew />  
        </div>      
    )
}

export default App;