import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SbbIconModule } from '@sbb-esta/angular-core/icon';
import { SbbCheckboxModule } from '@sbb-esta/angular-public/checkbox';
import { SbbRadioButtonPanelModule } from '@sbb-esta/angular-public/radio-button-panel';

import { provideExamples } from '../../../shared/example-provider';

import { RadioButtonPanelGroupExampleComponent } from './radio-button-panel-group-example/radio-button-panel-group-example.component';
import { RadioButtonPanelIconExampleComponent } from './radio-button-panel-icon-example/radio-button-panel-icon-example.component';
import { RadioButtonPanelImgExampleComponent } from './radio-button-panel-img-example/radio-button-panel-img-example.component';

const EXAMPLES = [
  RadioButtonPanelGroupExampleComponent,
  RadioButtonPanelIconExampleComponent,
  RadioButtonPanelImgExampleComponent,
];

const EXAMPLE_INDEX = {
  'radio-button-panel-img-example': RadioButtonPanelImgExampleComponent,
  'radio-button-panel-icon-example': RadioButtonPanelIconExampleComponent,
  'radio-button-panel-group-example': RadioButtonPanelGroupExampleComponent,
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SbbIconModule,
    SbbCheckboxModule,
    SbbRadioButtonPanelModule,
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
  providers: [provideExamples('public', 'radio-button-panel', EXAMPLE_INDEX)],
})
export class RadioButtonPanelExamplesModule {}
