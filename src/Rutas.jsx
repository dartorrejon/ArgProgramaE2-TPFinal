import React from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import routes from './Constants/routes';
import Completed from './Pages/Completed';
import TodoList from './Components/TodoList/TodoList';
import Remaining from './Pages/Remaining';

const Rutas = ({ tasks }) => {
    return (
        <Router>
            <Routes>
                <Route exact path={routes.HOME} element={<TodoList todos={tasks} />} />
                <Route path={routes.COMPLETAS} element={<Completed todos={tasks} />} />
                <Route path={routes.PENDIENTES} element={<Remaining todos={tasks} />} />
            </Routes>
        </Router>

    )
};

export default Rutas;