import React from 'react'
import {Link} from "react-router-dom";

class Navigation extends React.Component {

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

                ]
            }

        }
    }


    render() {
        return (
            <nav className="top">
                <ul className="cols">
                    {
                        this.props.navigation.map((nav, index) => {
                            return <li key={index}>
                                <strong>0{index + 1}</strong>
                                <Link to={'/' + nav.url}>{nav.name}</Link>
                            </li>
                        })
                    }
                </ul>
            </nav>
        )
    }
}

export default Navigation;