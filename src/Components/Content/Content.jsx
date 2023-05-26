import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import Schedule from '../Schedule/Schedule';
import SignUp from '../SignUp/SignUp';
import Film from '../Schedule/Films/Film';

const Content = () => {
    return (
        <main>
        {/* OLD react-router-dom V5 logic (needs import of Switch)
             <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/schedule" component={Schedule} />
                <Route path="/signup" component={SignUp} />
                <Route path="/film/:id" component={Film} />
            </Switch> */}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/film/id/:id" element={<Film />} />
                <Route path="/film/id/:id/*" element={<Film />} />
            </Routes>

        </main>
    );
}

export default Content;