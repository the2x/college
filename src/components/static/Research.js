import React from 'react'

class Research extends React.Component{
    render() {
        return(
            <section className="static">
                <h6>{this.props.location.pathname.substr(1)}</h6>
                <h1>{this.props.research.title}</h1>
                <p>{this.props.research.description}</p>
            </section>
        )
    }
}

export default Research;