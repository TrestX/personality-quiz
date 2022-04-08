import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import CompletedPage from "../completed_page";
import HomeBlankPage from "./home_blank";
import HomePage from "./home_page";
import QuizPage from "./quiz_page";
import QuizTypePage from "./quiz_type_page";
const MainPage = () => {
    return <>
        <Router>
            <Routes>
                <Route path="/" element={<HomeBlankPage />} />
                <Route path="/:id" element={<HomePage />} />
                <Route path="/quiztypes" element={<QuizTypePage />} />
                <Route path="/quiz/:id" element={<QuizPage />} />
                <Route path="/completed/:id" element={<CompletedPage />} />

            </Routes>
        </Router>
    </>;
}
export default MainPage;