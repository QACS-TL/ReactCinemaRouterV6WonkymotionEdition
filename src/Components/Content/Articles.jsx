import React from 'react';
import { CONTENTARTICLETEXT } from '../../js/constants/contentArticleText';

const Paragraph = () => (
    <p>{CONTENTARTICLETEXT}</p>
);

const Articles = props => {
    const paragraphs = [];
    console.log(props.article.paragraphs);
    for (let i = 0; i < props.article.paragraphs; i++) {
        paragraphs.push(<Paragraph key={i} />)
    };
    return (
        <section>
            <h2>{props.article.title}</h2>
            <article>
                {paragraphs}
            </article>
        </section>
    );
}

export default Articles;