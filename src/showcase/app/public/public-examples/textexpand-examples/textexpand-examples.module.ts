import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SbbTextexpandModule } from '@sbb-esta/angular-public/textexpand';

import { provideExamples } from '../../../shared/example-provider';

import { TextexpandExampleComponent } from './textexpand-example/textexpand-example.component';

const EXAMPLES = [TextexpandExampleComponent];

const EXAMPLE_INDEX = {
  'textexpand-example': TextexpandExampleComponent,
};

@NgModule({
  imports: [CommonModule, SbbTextexpandModule],
  declarations: EXAMPLES,
  exports: EXAMPLES,
  providers: [provideExamples('public', 'textexpand', EXAMPLE_INDEX)],
})
export class TextexpandExamplesModule {}
