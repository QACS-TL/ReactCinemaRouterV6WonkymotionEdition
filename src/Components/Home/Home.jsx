import React from 'react';

import { IMAGES } from '../../js/constants/images';
import { HOMEARTICLEINFO } from '../../js/constants/contentArticleText';

import Articles from '../Content/Articles';
import ImageContainer from '../Content/ImageContainer';

const Home = () => {
    const articles = HOMEARTICLEINFO.map(article => <Articles article={article} key={article.id} />);
    return (
        <>
            <div className="container">
                <ImageContainer image={IMAGES.popcorn} width="100%" />
            </div>
            <div className="container">
                <h1>QA Cinemas</h1>
                {articles[0]}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <ImageContainer image={IMAGES.london} width="100%" />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <ImageContainer image={IMAGES.manchester} width="100%" />
                    </div>
                </div>
            </div>
            <div className="container">
                {articles[1]}
            </div>
        </>
    );
}

export default Home;