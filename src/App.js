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
            menuTop: [
                {url: '', name: 'Home'},
                {url: 'research', name: 'Research'},
                {url: 'education', name: 'Education'},
                {url: 'industry', name: 'Industry & Innovation'},
            ],

            content: {
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
            }

        }
    }


    render() {
        return (
            <div className="outside_wrapper">
                <div className="inside_wrapper">
                    <Navigation navigation={this.state.menuTop}/>
                </div>

                <Switch>
                    <Route exact path="/" component={Main}/>
                </Switch>

                <div className="inside_wrapper">
                    <Switch>
                        <Route path="/research" component={Research}/>
                        <Route path="/education" component={Education}/>
                        <Route path="/industry" component={Industry}/>

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
