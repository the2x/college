import React from 'react'

class Industry extends React.Component{
    render() {
        return(
            <section className="static">
                <h6>{this.props.location.pathname.substr(1)}</h6>
                <h1>{this.props.industry.title}</h1>
                <p>{this.props.industry.description}</p>
            </section>
        )
    }
}

export default Industry;