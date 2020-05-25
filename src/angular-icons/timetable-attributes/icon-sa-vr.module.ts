import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-vr',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M7.792 4.959H6.75v-.647H9.3v.647h-.722l.226.452h3.962l-.353-.809H11.28v-.666h1.551l1.402 2.95c.157-.044.296-.075.415-.097.117-.022.253-.033.403-.033.738 0 1.37.257 1.89.771.52.514.78 1.143.78 1.883 0 .734-.258 1.359-.774 1.877-.519.52-1.145.777-1.886.777a2.548 2.548 0 01-1.873-.777 2.555 2.555 0 01-.775-1.877 2.62 2.62 0 011.194-2.223L13.38 6.7 10.625 9.76H9.01c-.108.674-.405 1.228-.892 1.658a2.534 2.534 0 01-1.735.646c-.74 0-1.368-.258-1.883-.777a2.559 2.559 0 01-.777-1.877c0-.734.26-1.36.777-1.878a2.573 2.573 0 011.887-.776c.25 0 .55.058.895.176l.883-1.304-.372-.67zM6.415 7.436c-.567 0-1.045.19-1.433.571-.387.38-.581.85-.581 1.403 0 .547.193 1.014.576 1.4.384.384.853.576 1.405.576.481 0 .903-.151 1.26-.453.36-.3.586-.691.68-1.173H6.219l-.366-.667L6.89 7.52a1.339 1.339 0 00-.475-.085zm.248 1.646h1.659l-.119-.42a1.778 1.778 0 00-.696-.847l-.844 1.267zM8.58 7.931c.136.193.233.365.291.516.058.15.103.362.14.635h.97l-1.466-2.78-.624.939c.158.122.29.234.394.333.103.102.202.22.295.357zm.576-1.865l1.451 2.75 2.478-2.75H9.155zm3.938 3.344c0 .547.19 1.013.576 1.4.383.384.847.576 1.392.576.546 0 1.013-.19 1.401-.573.387-.381.582-.849.582-1.402 0-.554-.195-1.022-.582-1.404-.385-.382-.863-.571-1.427-.571a2.07 2.07 0 00-.26.01c-.049.006-.126.028-.235.062l.974 2.081-.63.303-.975-2.08c-.545.404-.816.936-.816 1.598z"
        />
        <path d="M1 1h19.444v14H1V1zm1.296 12.709h16.852V2.296H2.296V13.71z" />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaVrComponent extends IconBase {
  constructor() {
    super({ width: '22px', height: '16px', ratio: 1.375 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaVrComponent],
  exports: [IconSaVrComponent],
})
export class IconSaVrModule {}
