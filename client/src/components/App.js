import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Header />}>
                        <Route index element={<Landing/>}/>
                        <Route path='/surveys' element={<Dashboard/>} />
                        <Route path='/surveys/new' element={<SurveyNew/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;