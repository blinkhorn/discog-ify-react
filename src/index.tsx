import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root') as HTMLElement;

if (!container) {
  throw new Error('no container to render to');
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <main className='appBodyContainer'>
      <div className='appBodyCircleContainer'>
        <header className='appHeader'>
          <h2>Discog-ify</h2>
          <h4>Create Record Label Playlists</h4>
        </header>
        <App signOut={undefined} user={undefined} />
      </div>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
