import React from "react";
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from '../actions';

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";

const App = ({ fetchUser }) => {

    useEffect(() => {
        fetchUser();
    }, []);

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

export default connect(null, actions)(App);