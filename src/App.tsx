import React, { useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './components/Navigation';
import AuthPage from './pages/auth/AuthPage';
import GridPage from './pages/grid/GridPage';
import TeamsPage from './pages/teams/TeamsPage';
import TicTacToePage from './pages/ticTacToe/TicTacToePage';
import CV from './pages/CV/CV'

const Protected = () => {
  const isLoggedIn = useSelector((state: any) => !!state.token.token)
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" />;
}

const LayoutWithNavbar = () => {
  return (
    <React.Fragment>
      <Navigation />

      <Outlet />
    </React.Fragment>
  )
}

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<LayoutWithNavbar />}>
          <Route path='/' element={<Protected />} >
            <Route path='/' element={<Navigate to="/grid" />} />
            <Route path='/grid' element={<GridPage />} />
            <Route path='/teams' element={<TeamsPage />} />
            <Route path='/tictactoe' element={<TicTacToePage/>}/>
            <Route path='/About' element={<CV/>}/>
          </Route>
        </Route>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/CV' element={<CV/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
