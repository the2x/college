import React from 'react'
import {Link} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <nav className="top">
                <ul className="cols">
                    {
                        this.props.navigation.map((nav, index) => {
                            return <li key={index}>
                                <strong>0{index + 1}</strong>
                                <Link to={'/' + nav.url}>{nav.name}</Link>
                            </li>
                        })
                    }
                </ul>
            </nav>
        )
    }
}

export default Navigation;