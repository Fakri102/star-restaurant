import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#navbar-mobile-button'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
  jumbotron: document.querySelector('.jumbotron'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
