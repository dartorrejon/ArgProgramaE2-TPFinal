import React from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import routes from './Constants/routes';
import Completed from './Pages/Completed';
import TodoList from './Components/TodoList/TodoList';
import Remaining from './Pages/Remaining';

const Rutas = ({ tasks, handleSetComplete, handleDelTask }) => {
    return (
        <Router>
            <Routes>
                <Route exact path={routes.HOME} element={<TodoList todos={tasks} handleSetComplete={handleSetComplete} handleDelTask={handleDelTask} />} />
                <Route path={routes.COMPLETAS} element={<Completed todos={tasks} handleSetComplete={handleSetComplete} handleDelTask={handleDelTask} />} />
                <Route path={routes.PENDIENTES} element={<Remaining todos={tasks} handleSetComplete={handleSetComplete} handleDelTask={handleDelTask} />} />
            </Routes>
        </Router>

    )
};

export default Rutas;