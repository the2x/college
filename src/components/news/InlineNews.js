import React from 'react'

class InlineNews extends React.Component {

    render() {
        return (
            this.props.inlineNews.map((post, index) => {
                return (
                    <li key={index}>
                        <div className="content_list">
                            <div className="news_cover">
                                <img src={post.cover} alt={post.title}/>
                            </div>
                            <b className="category">{post.category}</b>
                            <h6>{post.title}</h6>
                            <p>{post.description.substr(0, 150) + '...'}</p>
                        </div>
                    </li>
                )
            })
        )
    }
}

export default InlineNews;