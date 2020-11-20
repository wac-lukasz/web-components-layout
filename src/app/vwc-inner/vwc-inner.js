import { LitElement, html } from 'lit-element';

import style from '../app.scss';

class VwcInner extends LitElement {
  static get styles() {
    return [style];
  }

  render() {
    return html`
      <div class="mdc-layout-grid__inner">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('vwc-inner', VwcInner);
