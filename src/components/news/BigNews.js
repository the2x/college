import React from 'react'

class BigNews extends React.Component{
    render() {
        return(
            <div className="big_news_flow">
                <h3>{this.props.bigNews.title}</h3>
                <p>{this.props.bigNews.description}</p>
            </div>
        )
    }
}

export default BigNews;