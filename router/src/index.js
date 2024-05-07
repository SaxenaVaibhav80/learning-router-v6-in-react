import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>
);


// by wraping app with broweser router indicate that --->


/* <BrowserRouter> is a component from the react-router-dom library used in React applications for client-side routing. When you wrap your main application component with <BrowserRouter>, it allows your app to support navigation and URL-based routing, much like a traditional multi-page website but without full page reloads.

Here's a breakdown of what <BrowserRouter> does and why you'd wrap your App component with it:

Routing with Browser History:-->
<BrowserRouter> manages the routing in a React application using the browser's history API. It allows you to use the typical browser navigation features (like the back and forward buttons, and direct URL navigation) without reloading the entire page.

Single Page Application (SPA) Routing:---->
In a single-page application, content changes dynamically without a full page reload. By using <BrowserRouter>, you can implement different routes or paths within your app and dynamically load different components based on the current URL.

URL-Based Navigation:--->
With <BrowserRouter>, you can use components like <Route>, <Switch>, and <Link> to define navigation logic in your application. This enables you to change the content of your app by changing the URL, and vice versa. */


reportWebVitals();
