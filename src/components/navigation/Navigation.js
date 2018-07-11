import React from 'react'

class Navigation extends React.Component {

    render() {
        return (
            <ul className="cols">
                {
                    this.props.navigation.map((nav, index) => {
                        return <li key={index}><strong>0{index + 1}</strong><a href={nav.url}>{nav.name}</a></li>
                    })
                }
            </ul>
        )
    }
}

export default Navigation;