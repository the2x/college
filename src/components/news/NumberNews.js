import React from 'react'

import {Link} from "react-router-dom";


class NumberNews extends React.Component {
    render() {
        return (
            <section className="number_news">
                <ul className="cols">
                    {
                        this.props.numberNews.map((post, index) => {
                            return (
                                <li key={index}>
                                    <Link to={'number/' + post.id}>
                                        <b>{Math.ceil(Math.random() * 10)}</b>
                                        <h6>{post.title}</h6>
                                        <p>{post.description}</p>
                                    </Link>
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