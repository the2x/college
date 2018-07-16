import React from 'react'

import {Link} from "react-router-dom";

class InlineNews extends React.Component {

    render() {
        return (
            this.props.inlineNews.map((post, index) => {
                return (
                    <li key={index}>
                        <br/>
                        <Link to={'news/' + post.id}>
                            <div className="content_list">
                                <div className="news_cover">
                                    <img src={post.cover} alt={post.title}/>
                                </div>
                                <b className="category">{post.category}</b>
                                <h6>{post.title}</h6>
                                <p>{post.description.substr(0, 150) + '...'}</p>
                            </div>
                        </Link>
                    </li>
                )
            })
        )
    }
}

export default InlineNews;