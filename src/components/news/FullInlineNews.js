import React from 'react'

import {Link} from "react-router-dom";

class FullInlineNews extends React.Component{

    render() {

        let article = this.props.inlineNews.filter(post => post.id === Number(this.props.match.params.id))[0];

        return(

            <div className="fullstory">
                <ul className="cols">
                    <li>
                        <img src={article.cover} alt=""/>
                    </li>
                    <li className="blank"></li>
                    <li>
                        <h6><Link to="/news">Новости</Link> <span>/</span> Новость — {this.props.match.params.id}</h6><br/>
                        <h1>{article.title}</h1>
                        <b className="category">{article.category}</b>
                        <p>{article.description}</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default FullInlineNews;