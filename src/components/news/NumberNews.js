import React from 'react'

class NumberNews extends React.Component{
    render() {
        return(
            <section className="number_news">
                <ul className="cols">
                    {
                        this.props.numberNews.map((post, index) => {
                            return(
                                <li key={index}>
                                    <b>08</b>
                                    <h6>{post.title}</h6>
                                    <p>{post.description}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default NumberNews;