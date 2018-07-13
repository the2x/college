import React from 'react'

class Education extends React.Component{
    render() {
        return(
            <section className="static">
                <h6>{this.props.location.pathname.substr(1)}</h6>
                <h1>{this.props.education.title}</h1>
                <p>{this.props.education.description}</p>
            </section>
        )
    }
}

export default Education;