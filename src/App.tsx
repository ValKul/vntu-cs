import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import Navigation from './components/Navigation';
import firstImage from './img/1.png';
import secondImage from './img/2.png';
import { ArticleContext } from './ArticleContext';
import {Article} from "./models/Article";

// This is the main component of the application. It sets up routing for the app.
function App() {
    const articles: Article[] = [
        {
            id: 1,
            title: 'Ence: Повернення до Чемпіонства',
            summary: 'Ence знову в грі з вражаючим поверненням після низки поразок.',
            content: "Після довгого періоду боротьби, Ence знову демонструє свій високий рівень у CS:GO. З командою, що відновлює свою форму, вони з нетерпінням чекають на свої наступні матчі.",
            image: firstImage
        },
        {
            id: 2,
            title: 'Heroic: Новий етап розвитку',
            summary: 'Команда Heroic анонсувала новий склад гравців.',
            content: "Команда Heroic привітала нових учасників свого складу. З метою зміцнення своєї позиції на глобальній CS:GO сцені, Heroic надіється, що ці зміни принесуть їм нові перемоги.",
            image: secondImage
        },
    ];


    return (
        <Router>
            <ArticleContext.Provider value={articles}>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/article/:id" element={<ArticlePage/>}/>
                </Routes>
            </ArticleContext.Provider>
        </Router>
    );
}

export default App;
