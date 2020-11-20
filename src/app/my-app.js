import { LitElement, html } from 'lit-element';

import style from './app.scss';

class MyApp extends LitElement {
  static get styles() {
    return [style];
  }
  render() {
    return html`
      <vwc-container
        reverse
        .xs=${['middle', 'center']}
      >
        <div 
          class="one"
          col="xs-8 sm-4"
        >
         <p>No 1</p>
        </div>
        <div 
          class="two"
          col="xs-4 sm-2 lg-5"
        >
          <p>No 2</p>
        </div>
      </vwc-container>
    `;
  }
}

customElements.define('my-app', MyApp);
