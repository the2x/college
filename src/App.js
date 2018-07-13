import React, {Component} from 'react';
import './_css/css.css'
import Main from "./components/Main";
import Research from "./components/static/Research";
import Navigation from "./components/navigation/Navigation";
import Education from "./components/static/Education";
import Industry from "./components/static/Industry";
import FullInlineNews from "./components/news/FullInlineNews";

import {Switch, Route} from "react-router-dom";
import FullNumberNews from "./components/news/FullNumberNews";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

            moderate: false,

            menuTop: [
                {url: '', name: 'Home'},
                {url: 'research', name: 'Research'},
                {url: 'education', name: 'Education'},
                {url: 'industry', name: 'Industry & Innovation'},
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

                inlineNews: [
                    {
                        id: 1,
                        cover: 'https://images.unsplash.com/photo-1495681918301-cb317d07d170?ixlib=rb-0.3.5&s=906f7052bbab18de5ff51edd214b3da9&auto=format&fit=crop&w=400&q=60',
                        category: 'energy & environment',
                        title: 'Общественный потребительский рынок: основные моменты',
                        description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект. Нестандартный подход',
                    },

                    {
                        id: 2,
                        cover: 'https://images.unsplash.com/photo-1495681918301-cb317d07d170?ixlib=rb-0.3.5&s=906f7052bbab18de5ff51edd214b3da9&auto=format&fit=crop&w=400&q=60',
                        category: 'energy & environment',
                        title: 'Общественный потребительский рынок: основные моменты',
                        description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект. Нестандартный подход',
                    },

                    {
                        id: 3,
                        cover: 'https://images.unsplash.com/photo-1495681918301-cb317d07d170?ixlib=rb-0.3.5&s=906f7052bbab18de5ff51edd214b3da9&auto=format&fit=crop&w=400&q=60',
                        category: 'energy & environment',
                        title: 'Общественный потребительский рынок: основные моменты',
                        description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект. Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект.',
                    },

                    {
                        id: 4,
                        cover: 'https://images.unsplash.com/photo-1495681918301-cb317d07d170?ixlib=rb-0.3.5&s=906f7052bbab18de5ff51edd214b3da9&auto=format&fit=crop&w=400&q=60',
                        category: 'energy & environment',
                        title: 'Общественный потребительский рынок: основные моменты',
                        description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект. Нестандартный подход',
                    },

                ],

                numberNews: [
                    {
                        id: 1,
                        title: 'Общественный потребительский рынок: основные моменты',
                        description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект.'
                    },
                    {
                        id: 2,
                        title: 'Общественный потребительский рынок: основные моменты',
                        description: 'Креатив, пренебрегая деталями, одновременно притягивает межличностный медиабизнес. Стратегия предоставления скидок и бонусов тормозит типичный побочный PR-эффект.'
                    },
                ],

                education: {
                    title: 'Типичный мониторинг активности глазами современников',
                    description: 'Рыночная информация индуктивно консолидирует эмпирический портрет потребителя. Инвестиция, вопреки мнению П.Друкера, слабо стабилизирует бизнес-план, осознав маркетинг как часть производства. VIP-мероприятие, на первый взгляд, трансформирует комплексный сегмент рынка, осознав маркетинг как часть производства. Точечное воздействие конструктивно. По мнению ведущих маркетологов, концепция развития нейтрализует межличностный медиаплан, используя опыт предыдущих кампаний.'
                },

                industry: {
                    title: 'Эмпирический медиамикс: гипотеза и теории',
                    description: 'Рыночная информация индуктивно консолидирует эмпирический портрет потребителя. Инвестиция, вопреки мнению П.Друкера, слабо стабилизирует бизнес-план, осознав маркетинг как часть производства. VIP-мероприятие, на первый взгляд, трансформирует комплексный сегмент рынка, осознав маркетинг как часть производства. Точечное воздействие конструктивно. По мнению ведущих маркетологов, концепция развития нейтрализует межличностный медиаплан, используя опыт предыдущих кампаний.'
                },

                research: {
                    title: 'Почему основан на анализе телесмотрения департамент маркетинга и продаж?',
                    description: 'Рыночная информация индуктивно консолидирует эмпирический портрет потребителя. Инвестиция, вопреки мнению П.Друкера, слабо стабилизирует бизнес-план, осознав маркетинг как часть производства. VIP-мероприятие, на первый взгляд, трансформирует комплексный сегмент рынка, осознав маркетинг как часть производства. Точечное воздействие конструктивно. По мнению ведущих маркетологов, концепция развития нейтрализует межличностный медиаплан, используя опыт предыдущих кампаний.'
                }
            }

        }
    }


    render() {

        return (
            <div className="outside_wrapper">
                <div className="inside_wrapper">
                    <Navigation
                        navigation={this.state.menuTop} />
                </div>

                <Switch>
                    <Route exact path="/" render={(props) => (
                        <Main {...props}
                              headerBoldQuote={this.state.quote.headerBoldQuote}
                              mainNews={this.state.content.mainNews}
                              twitterMini={this.state.content.twitterMini}
                              twitterBig={this.state.content.twitterBig}
                              quoteWithPhoto={this.state.quote.quoteWithPhoto}
                              inlineNews={this.state.content.inlineNews}
                              bigNews={this.state.content.bigNews}
                              numberNews={this.state.content.numberNews}
                              menuBottom={this.state.menuTop}/>
                    )}/>
                </Switch>

                <div className="inside_wrapper">
                    <Switch>
                        <Route path="/research" render={(props) => (
                            <Research {...props} research={this.state.content.research}/>
                        )}/>

                        <Route path="/education" render={(props) => (
                            <Education {...props} education={this.state.content.education}/>
                        )}/>/>

                        <Route path="/industry" render={(props) => (
                            <Industry {...props} industry={this.state.content.industry}/>
                        )}/>

                        <Route path="/news/:id" render={(props) => (
                            <FullInlineNews {...props} inlineNews={this.state.content.inlineNews}/>)}/>

                        <Route path="/number/:id" render={(props) => (
                            <FullNumberNews {...props} numberNews={this.state.content.numberNews}/>)}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
