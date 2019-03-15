import { Component, ComponentInterface, Prop, getMode } from '@stencil/core';

import { Mode } from '../../interface';
import { createThemedClasses } from '../../utils/theme';

/**
 * @virtualProp {'ios' | 'md'} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-footer',
  styleUrls: {
    ios: 'footer.ios.scss',
    md: 'footer.md.scss'
  }
})
export class Footer implements ComponentInterface {

  private mode = getMode<Mode>(this);

  /**
   * If `true`, the footer will be translucent.
   * Note: In order to scroll content behind the footer, the `fullscreen`
   * attribute needs to be set on the content.
   */
  @Prop() translucent = false;

  hostData() {
    const themedClasses = createThemedClasses(this.mode, 'footer');
    const translucentClasses = this.translucent ? createThemedClasses(this.mode, 'footer-translucent') : null;

    return {
      class: {
        ...themedClasses,
        ...translucentClasses
      }
    };
  }
}
