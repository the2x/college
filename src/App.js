import React, {Component} from 'react';
import './_css/css.css'

import Navigation from "./components/navigation/Navigation";
import MainNews from "./components/news/MainNews";
import HeaderBoldQuote from "./components/quotes/HeaderBoldQuote";
import TwitterFlow from "./components/twitter_flow/TwitterFlow";
import QuoteWithPhoto from "./components/quotes/QuoteWithPhoto";
import InlineNews from "./components/news/InlineNews";
import BigNews from "./components/news/BigNews";
import NumberNews from "./components/news/NumberNews";
import NavigationBottom from "./components/navigation/NavigationBottom";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuTop: [
                {url: '#', name: 'Research'},
                {url: '#', name: 'Education'},
                {url: '#', name: 'Industry & Innovation'},
            ],

            quote: {
                headerBoldQuote: 'College of Engineering',
                quoteWithPhoto: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес',
            },


            content: {
                mainNews: {
                    title: 'The Carniegie Mellon University College of Engineering is...',
                    description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект. Нестандартный подход продуцирует ролевой рекламоноситель. Ребрендинг ускоряет выставочный стенд, полагаясь на инсайдерскую информацию. Медийный канал изменяет повседневный CTR.',
                },

                inlineNews: [
                    {
                        cover: 'https://images.unsplash.com/photo-1495681918301-cb317d07d170?ixlib=rb-0.3.5&s=906f7052bbab18de5ff51edd214b3da9&auto=format&fit=crop&w=400&q=60',
                        category: 'energy & environment',
                        title: 'Общественный потребительский рынок: основные моменты',
                        description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект. Нестандартный подход',
                    },

                    {
                        cover: 'https://images.unsplash.com/photo-1495681918301-cb317d07d170?ixlib=rb-0.3.5&s=906f7052bbab18de5ff51edd214b3da9&auto=format&fit=crop&w=400&q=60',
                        category: 'energy & environment',
                        title: 'Общественный потребительский рынок: основные моменты',
                        description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект. Нестандартный подход',
                    },

                    {
                        cover: 'https://images.unsplash.com/photo-1495681918301-cb317d07d170?ixlib=rb-0.3.5&s=906f7052bbab18de5ff51edd214b3da9&auto=format&fit=crop&w=400&q=60',
                        category: 'energy & environment',
                        title: 'Общественный потребительский рынок: основные моменты',
                        description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект. Нестандартный подход',
                    },

                    {
                        cover: 'https://images.unsplash.com/photo-1495681918301-cb317d07d170?ixlib=rb-0.3.5&s=906f7052bbab18de5ff51edd214b3da9&auto=format&fit=crop&w=400&q=60',
                        category: 'energy & environment',
                        title: 'Общественный потребительский рынок: основные моменты',
                        description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект. Нестандартный подход',
                    },

                ],

                twitterMini: {
                    cover: 'https://images.unsplash.com/photo-1520328992549-c75d95b2a983?ixlib=rb-0.3.5&s=a7a2435d0ab85615ba35bc6a898a022a&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
                    title: 'Общественный потребительский рынок: основные моменты',
                    category: 'energy & environment',
                    description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект. Нестандартный подход',
                },

                twitterBig: {
                    cover: 'https://images.unsplash.com/photo-1497465541860-77f114a519d2?ixlib=rb-0.3.5&s=1fa185e4899ec824cc973ffaa823882c&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
                    title: 'energy & environment',
                    category: 'Общественный потребительский рынок: основные моменты',
                },

                bigNews: {
                    title: 'Общественный потребительский рынок: основные моменты',
                    description: 'CTR правомочен. Отсюда естественно следует, что ассортиментная политика предприятия трансформирует типичный медиаплан. Общество потребления переворачивает рейтинг. Conversion rate неоднозначен. Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект. Нестандартный подход продуцирует ролевой рекламоноситель. Ребрендинг ускоряет выставочный стенд, полагаясь на инсайдерскую информацию. Медийный канал изменяет повседневный CTR. Один из признанных классиков маркетинга Ф.Котлер определяет это так: построение бренда директивно концентрирует медийный канал. Информационная связь с потребителем регулярно усиливает портрет потребителя. Выставочный стенд сознательно уравновешивает культурный нестандартный подход.',
                },

                numberNews: [
                    {
                        title: 'Общественный потребительский рынок: основные моменты',
                        description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект.'
                    },
                    {
                        title: 'Общественный потребительский рынок: основные моменты',
                        description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект.'
                    },
                ]
            }


        }
    }

    render() {
        return (
            <div className="outside_wrapper">
                <div className="inside_wrapper">
                    <header>
                        <nav className="top">
                            <Navigation navigation={this.state.menuTop}/>
                        </nav>
                        <HeaderBoldQuote headerBoldQuote={this.state.quote.headerBoldQuote}/>
                        <MainNews mainNews={this.state.content.mainNews}/>
                    </header>

                    <TwitterFlow twitterMini={this.state.content.twitterMini}
                                 twitterBig={this.state.content.twitterBig}/>

                    <QuoteWithPhoto quoteWithPhoto={this.state.quote.quoteWithPhoto}/>

                    <section className="news_list_inline">
                        <strong>Смотрите также</strong>
                        <ul className="cols">
                            <InlineNews inlineNews={this.state.content.inlineNews}/>
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
                                    <BigNews bigNews={this.state.content.bigNews}/>
                                </li>
                                <li className="blank"></li>
                                <li>
                                    <NumberNews numberNews={this.state.content.numberNews}/>
                                </li>
                            </ul>
                        </div>
                        <div className="navigation">
                            <nav className="bottom">
                                <NavigationBottom navigation={this.state.menuTop}/>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
