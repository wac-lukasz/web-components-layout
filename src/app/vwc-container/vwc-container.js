import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import slotted from '../slotted-cols.scss';

class VwcContainer extends LitElement {
  static get styles() {
    return [slotted];
  }

  static get properties() {
    return {
      column: {
        type: Boolean
      },
      reverse: {
        type: Boolean
      },
      xs: {
        type: Array
      },
      sm: {
        type: Array
      },
      md: {
        type: Array
      },
      lg: {
        type: Array
      },
    };
  }

  mapStylesFromProps(resolution) {
    if (this[resolution]) {
      let styles = {};
      this[resolution].forEach(prop => {
        styles[`${prop}-${resolution}`] = true;
      });
      return styles;
    }
    return {}
  }

  alignItems() {
    return this.align ? `${this.align}` : 'top-xs';
  }

  justifyContent() {
    return this.justify ? `${this.justify}` : 'start-xs';
  }

  render() {
    return html`
      <div class="container">
        <div
          class=${classMap({
            row: true,
            column: this.column,
            reverse: this.reverse,
            ...this.mapStylesFromProps('xs'),
            ...this.mapStylesFromProps('lg')
          })}
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('vwc-container', VwcContainer);
