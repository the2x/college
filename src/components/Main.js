import React from 'react'

import MainNews from "../components/news/MainNews";
import HeaderBoldQuote from "../components/quotes/HeaderBoldQuote";
import TwitterFlow from "../components/twitter_flow/TwitterFlow";
import QuoteWithPhoto from "../components/quotes/QuoteWithPhoto";
import InlineNews from "../components/news/InlineNews";
import BigNews from "../components/news/BigNews";
import NumberNews from "../components/news/NumberNews";
import NavigationBottom from "../components/navigation/NavigationBottom";

class Main extends React.Component {
    render() {
        return (
            <div className="outside_wrapper">
                <div className="inside_wrapper">
                    <header>
                        <HeaderBoldQuote quoteTop={this.props.quoteTop}/>

                        <MainNews mainNews={this.props.mainNews}/>
                    </header>

                    <TwitterFlow twitterMini={this.props.twitterMini}
                                 twitterBig={this.props.twitterBig}/>

                    <QuoteWithPhoto quoteCenter={this.props.quoteCenter}/>

                    <section className="news_list_inline">
                        <strong>Смотрите также</strong>
                        <ul className="cols">
                            <InlineNews inlineNews={this.props.inlineNews}/>
                        </ul>
                    </section>
                </div>
                <div className="black_wrapper">
                    <div className="inside_wrapper">
                        <div className="big_news">
                            <h2>Общественный потребительский рынок</h2>
                            <hr/>
                            <ul className="cols">
                                <li>
                                    <BigNews bigNews={this.props.bigNews}/>
                                </li>
                                <li className="blank"></li>
                                <li>
                                    <NumberNews numberNews={this.props.numberNews}/>
                                </li>
                            </ul>
                        </div>
                        <div className="navigation">
                            <nav className="bottom">
                                <NavigationBottom menuBottom={this.props.menuBottom}/>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;