import { LitElement, html, css } from 'lit-element';

import style from '../app.scss';

class VwcCell extends LitElement {
  static get styles() {
    return [style];
  }

  static get properties() {
    return {
      span: {
        type: Number,
      },
    };
  }

  render() {
    return html`
      <div class="mdc-layout-grid__cell--span-${this.span || 2}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('vwc-cell', VwcCell);
