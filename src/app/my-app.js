import { LitElement, html } from 'lit-element';

import style from './app.scss';

class MyApp extends LitElement {
  static get styles() {
    return [style];
  }
  render() {
    return html`
      <div class="main-container">
        <vwc-container .xs=${['middle', 'center']}>
          <div col="xs-12">
            <p>Base Grid system</p>
          </div>

          <div class="one" col="xs-4">
            <p>Col 4</p>
          </div>
          <div class="two" col="xs-8">
            <p>Col 8</p>
          </div>
        </vwc-container>

        <vwc-container .xs=${['bottom', 'end']}>
          <div col="xs-12">
            <p>Align bottom, Justify End</p>
          </div>

          <div class="one" col="xs-3">
            <p>Col 3</p>
          </div>
          <div class="two" col="xs-5">
            <p>Col 5</p>
          </div>
        </vwc-container>

        <vwc-container .xs=${['bottom', 'start']}>
          <div col="xs-12">
            <p>Align center, Justify start, Nested, Reversed</p>
          </div>

          <div class="darkorange" col="xs-8">
            <vwc-container reverse .xs=${['center', 'middle']}>
              <div class="two" col="xs-4">
                <p>Col 4</p>
              </div>
              <div class="purple" col="xs-2">
                <p>Col 2</p>
              </div>
            </vwc-container>
          </div>
          <div class="two" col="xs-5">
            <p>Col 5</p>
          </div>
        </vwc-container>

        <vwc-container column .xs=${['center', 'middle']}>
          <div col="xs-12">
            <p>Column</p>
          </div>

          <div class="one" col="xs-3">
            <p>Col 3</p>
          </div>
          <div class="two" col="xs-5">
            <p>Col 5</p>
          </div>
        </vwc-container>
      </div>
    `;
  }
}

customElements.define('my-app', MyApp);
