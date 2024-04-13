import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './pages/Main/Main';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
import Board from './pages/Board/Board';
import PostDetail from './pages/PostDetail/PostDetail';
import MyPage from './pages/MyPage/MyPage';
import FindTeam from './pages/FindTeam/FindTeam';
import TeamDetail from './pages/TeamDetail/TeamDetail';
import NewPost from './pages/NewPost/NewPost';
import NewTeam from './pages/NewTeam/NewTeam';
import ApplyList from './pages/ApplyList/ApplyList';
import LeaveTeam from './pages/MyTeam/LeaveTeam/LeaveTeam';
import TeamInfo from './pages/MyTeam/TeamInfo/TeamInfo';
import ProtectedRoute from './pages/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Main /> },
      { path: 'join', element: <Join /> },
      { path: 'login', element: <Login /> },
      { path: 'board', element: <Board /> },
      { path: 'teams', element: <FindTeam /> },
      {
        path: 'board/:postId',
        element: (
          <ProtectedRoute>
            <PostDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: 'board/new',
        element: (
          <ProtectedRoute>
            <NewPost />
          </ProtectedRoute>
        ),
      },
      {
        path: 'mypage',
        element: (
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'teams/:teamId',
        element: (
          <ProtectedRoute>
            <TeamDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: 'teams/new',
        element: (
          <ProtectedRoute>
            <NewTeam />
          </ProtectedRoute>
        ),
      },
      {
        path: 'teams/:teamId/admission',
        element: (
          <ProtectedRoute>
            <ApplyList />
          </ProtectedRoute>
        ),
      },
      {
        path: 'myteam/:teamId/info',
        element: (
          <ProtectedRoute>
            <TeamInfo />
          </ProtectedRoute>
        ),
      },
      {
        path: 'myteam/:teamId/leave',
        element: (
          <ProtectedRoute>
            <LeaveTeam />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();
