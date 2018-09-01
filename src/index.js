import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layouts/App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './app/store/configureStore';
import  ScrollToTop  from './app/common/util/ScrollToTop';

const store = configureStore();


const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App/>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
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
