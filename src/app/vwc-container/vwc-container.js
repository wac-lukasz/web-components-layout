import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import slotted from '../slotted-cols.scss';

class VwcLayout extends LitElement {
  static get styles() {
    return [slotted];
  }

  static get properties() {
    return {
      direction: {
        type: String,
      },
      reverse: {
        type: Boolean,
      },
      xs: {
        type: Array,
      },
      sm: {
        type: Array,
      },
      md: {
        type: Array,
      },
      lg: {
        type: Array,
      },
    };
  }

  mapStylesFromProps(resolution) {
    if (this[resolution]) {
      let styles = {};
      this[resolution].forEach((prop) => {
        styles[`${prop}-${resolution}`] = true;
      });
      return styles;
    }
    return {};
  }

  applyStylesFromProps() {
    const resolutions = ['xs', 'sm', 'md', 'lg'];
    let stylesFromProps = {};

    resolutions.forEach((res) => {
      stylesFromProps = { ...stylesFromProps, ...this.mapStylesFromProps(res) };
    });

    return stylesFromProps;
  }

  getFlexDirection() {
    if (!this.direction) {
      return { row: true };
    }

    return this.direction === 'row' ? { row: true } : { column: true };
  }

  render() {
    return html`
      <div
        class=${classMap({
          reverse: this.reverse,
          ...this.applyStylesFromProps(),
          ...this.getFlexDirection()
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('vwc-layout', VwcLayout);
