import React from 'react'

class NavigationBottom extends React.Component {
    render() {
        return (
            <ul className="cols">
                {
                    this.props.navigation.map((nav, index) => {
                        return <li key={index}><a href={nav.url}>{nav.name}</a></li>
                    })
                }
            </ul>
        )
    }
}

export default NavigationBottom;