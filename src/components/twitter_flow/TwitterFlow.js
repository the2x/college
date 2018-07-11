import React from 'react'

class TwitterFlow extends React.Component{
    render() {
        return(
            <section className="twitter_flow">
                <ul className="cols">
                    <li>
                        <div className="content_list">
                            <img src={this.props.twitterMini.cover} alt=""/>
                            <b className="category">{this.props.twitterMini.category}</b>
                            <h6>{this.props.twitterMini.title}</h6>
                            <p>{this.props.twitterMini.description.substr(0, 100) + '...'}</p>
                        </div>
                    </li>
                    <li className="blank"></li>
                    <li>
                        <h5>Twitter</h5>
                        <p>Креатив, пренебрегая деталями, одновременно притягивает межличностный
                            медиабизнес.</p>
                        <small>@nametwitter</small>
                        <br/><br/>
                        <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-512.png" alt=""/>
                    </li>
                    <li className="blank"></li>
                    <li>
                        <div className="content_list">
                            <img src={this.props.twitterBig.cover} alt=""/>
                            <b className="category">{this.props.twitterMini.category}</b>
                            <h6>{this.props.twitterMini.title}</h6>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}

export default TwitterFlow;