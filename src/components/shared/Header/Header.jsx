import React, { useLayoutEffect, useState } from "react";
import "./Header.pcss"
import axios from "axios"
import { API_SERVER } from '/src/Variables';

const Header = () => {
    const [who, setWho] = useState("")

    const whoami = () => {
        let url = API_SERVER + '/api/whoami/'
        axios.get(url
        ).then(data => {
            setWho(data.data.response)
        })
    }

    useLayoutEffect(() => {
        whoami()
    }, [])


    return (
        <div className="main-header">
            <h1>{who}</h1>
        </div>
    );
};

export default Header