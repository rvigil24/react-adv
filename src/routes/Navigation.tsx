import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

import logo from '../logo.svg'
import { routes } from './routes';
import { Suspense } from 'react';

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>
      {children}
    </NavLink>
  </li>
);

export const Navigation = () => {
  return (
    <Suspense fallback={<div className='loader'>Loading...</div>} >
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map(({ to, name }) => (
                  <NavItem key={to} to={to}>
                    {name}
                  </NavItem>
                ))
              }
            </ul>
          </nav>


          <Routes>
            {routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            )
            )}

            <Route path="/*" element={<Navigate to="/lazy1" replace />} />
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  )
}