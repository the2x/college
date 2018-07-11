import React from 'react'

class MainNews extends React.Component {
    render() {
        return (
            <div className="main_news">
                <ul className="cols">
                    <li>
                        <h3>{this.props.mainNews.title}</h3>
                        <p>{this.props.mainNews.description.substr(0, 300) + '...'}</p>
                    </li>
                    <li className="blank"></li>
                    <li>
                        <i>Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес</i>
                        <hr/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MainNews