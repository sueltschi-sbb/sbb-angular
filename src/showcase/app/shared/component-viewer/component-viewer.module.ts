import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SbbIconModule } from '@sbb-esta/angular-core/icon';
import { SbbTabsModule } from '@sbb-esta/angular-public/tabs';

import { ComponentViewerComponent } from './component-viewer/component-viewer.component';
import { ExampleViewerComponent } from './example-viewer/example-viewer.component';
import { StackblitzWriterService } from './stackblitz-writer/stackblitz-writer.service';

@NgModule({
  declarations: [ExampleViewerComponent, ComponentViewerComponent],
  providers: [StackblitzWriterService],
  imports: [CommonModule, PortalModule, SbbIconModule, SbbTabsModule],
})
export class ComponentViewerModule {}
