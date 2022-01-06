import React from 'react';
import {Link} from 'react-router-dom';
import schemat from './schemat.png';
import d1 from './d1.png';
import d2 from './d2.png';

export default () => {
    return (
        <div>
            <Link to="/">Go back home</Link>
            <h3>Architekura aplikacji jest identyczna jak w przypadku lab 9.</h3>
            <h3>W projekcie zostały zmienione namiary na Travis'a, Docker Hub'a oraz AWS'a oraz dodane odpowiednie podstrony.</h3>
            <img src={schemat} alt="architecture"/>
            <h3>Aplikacja w trybie developerskim jest uruchamiana poleceniem: </h3><i>docker-compose -f docker-compose.dev.yml up</i>
            <img src={d1} alt="result"/>
            <img src={d2} alt="result2"/>
        </div>
    );
};
