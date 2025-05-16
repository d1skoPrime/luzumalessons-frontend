import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './global/index.css';
import AuthLayout from './pages/Auth/AuthLayout.tsx';
import SignUpL from './pages/Auth/SignUpL.tsx';
import CodingL from './pages/CodingPage/CodingL.tsx';
import HomeL from './pages/Home/HomeL.tsx';
import QuizHardL from './pages/quizpage/quizes/quizHardL.tsx';
import QuizEsL from './pages/quizpage/quizes/quizL.tsx';
import QuizMedL from './pages/quizpage/quizes/quizMedL.tsx';
import QuizL from './pages/quizpage/quizlayout.tsx';
import QuizSelectL from './pages/quizpage/quizselect/QuizSelectL.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ToastContainer position="top-right" autoClose={3000} />
        <Router>
          <Routes>
            <Route path="" element={<HomeL />} />
            <Route path="/signup" element={<SignUpL />} />
            <Route path="/dashboard" element={<HomeL />} />
            <Route path="/coding/sandbox" element={<CodingL />} />
            <Route path="/coding/quiz" element={<QuizL />} />
            <Route path="/coding/quiz/level/select" element={<QuizSelectL />} />
            <Route path="/coding/quiz/level/easy" element={<QuizEsL />} />
            <Route path="/coding/quiz/level/hard" element={<QuizHardL />} />
            <Route path="/coding/quiz/level/medium" element={<QuizMedL />} />
            <Route path="/signin" element={<AuthLayout />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>,
);
