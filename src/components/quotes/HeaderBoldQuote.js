import React from 'react'

class HeaderBoldQuote extends React.Component {

    render() {
        return (
            <span>
                <h1>— {this.props.headerBoldQuote}</h1>
            </span>
        )
    }
}

export default HeaderBoldQuote;