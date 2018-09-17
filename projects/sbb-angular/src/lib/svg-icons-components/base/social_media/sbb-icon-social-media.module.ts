import { NgModule } from '@angular/core';
import { IconTwitterComponent } from './sbb-icon-twitter.component';
import { IconFacebookComponent } from './sbb-icon-facebook.component';
import { IconInstagramComponent } from './sbb-icon-instagram.component';
import { IconGoogleplusComponent } from './sbb-icon-googleplus.component';
import { IconYoutubeComponent } from './sbb-icon-youtube.component';
import { IconLinkedinComponent } from './sbb-icon-linkedin.component';
import { IconPinterestComponent } from './sbb-icon-pinterest.component';
import { IconXingComponent } from './sbb-icon-xing.component';

@NgModule({
  imports: [],
  // tslint:disable-next-line:max-line-length
  declarations: [IconTwitterComponent, IconFacebookComponent, IconInstagramComponent, IconGoogleplusComponent, IconYoutubeComponent, IconLinkedinComponent, IconPinterestComponent, IconXingComponent],
  // tslint:disable-next-line:max-line-length
  exports: [IconTwitterComponent, IconFacebookComponent, IconInstagramComponent, IconGoogleplusComponent, IconYoutubeComponent, IconLinkedinComponent, IconPinterestComponent, IconXingComponent],
  // tslint:disable-next-line:max-line-length
  entryComponents: [IconTwitterComponent, IconFacebookComponent, IconInstagramComponent, IconGoogleplusComponent, IconYoutubeComponent, IconLinkedinComponent, IconPinterestComponent, IconXingComponent]
})
export class IconSocialMediaModule { }
