// js files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import { handleSubmit } from './js/formHandler'

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('ServiceWorker registered:', registration);
        })
        .catch((error) => {
          console.error('ServiceWorker registration failed:', error);
        });
    });
  }
console.log("CHANGE!!");

// sass files
