import React from 'react'

import {Link} from "react-router-dom";

class FullNumberNews extends React.Component{

    render() {
        let article = this.props.numberNews.filter(post => post.id === Number(this.props.match.params.id))[0];

        return(
            <div className="fullstory">
                <ul className="cols">
                    <li>
                        {<b>{Math.ceil(Math.random()*10)}</b>}
                    </li>
                    <li className="blank"></li>
                    <li>
                        <h6><Link to="/number">Новости</Link> <span>/</span> Новость — {this.props.match.params.id}</h6><br/>
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default FullNumberNews;