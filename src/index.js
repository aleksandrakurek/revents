import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layouts/App';
import registerServiceWorker from './registerServiceWorker';


const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    rootEl
  );
};


if (module.hot) {
  module.hot.accept('./app/layouts/App', () => {
    setTimeout(render)
  })
}

render();

registerServiceWorker();
