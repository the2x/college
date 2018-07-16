import React from 'react'

class QuoteWithPhoto extends React.Component {
    render() {
        return (
            <section className="quotes">
                <ul className="cols">
                    <li>
                        <div className="news_cover">
                            <img src="https://images.unsplash.com/photo-1513673054901-2b5f51551112?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a1d6a15c11651045821dcf22ebb8d4dd&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" alt=""/>
                        </div>
                    </li>
                    <li className="blank"></li>
                    <li>
                        <strong>{this.props.quoteCenter}</strong><br/>
                        <i>Caroline Picard — CEO Engeniring Company</i>
                    </li>
                </ul>
            </section>
        )
    }
}

export default QuoteWithPhoto;