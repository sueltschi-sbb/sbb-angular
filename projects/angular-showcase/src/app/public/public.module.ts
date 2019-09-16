import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@sbb-esta/angular-core/scrolling';
import { TabsModule } from '@sbb-esta/angular-public/tabs';

import { SharedModule } from '../shared/shared.module';

import { ComponentViewerComponent } from './component-viewer/component-viewer.component';
import { PublicExamplesModule } from './public-examples/public-examples.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public/public.component';

@NgModule({
  declarations: [PublicComponent, ComponentViewerComponent],
  imports: [
    CommonModule,
    PortalModule,
    ScrollingModule,
    PublicExamplesModule,
    SharedModule,
    TabsModule,
    PublicRoutingModule
  ]
})
export class PublicModule {}
