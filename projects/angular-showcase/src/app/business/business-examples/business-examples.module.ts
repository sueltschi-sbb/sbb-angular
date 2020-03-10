import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AutocompleteModule } from '@sbb-esta/angular-business';
import { ButtonModule } from '@sbb-esta/angular-business/button';
import { CheckboxModule } from '@sbb-esta/angular-business/checkbox';
import { ChipModule } from '@sbb-esta/angular-business/chip';
import { ContextmenuModule } from '@sbb-esta/angular-business/contextmenu';
import { DialogModule } from '@sbb-esta/angular-business/dialog';
import { FieldModule } from '@sbb-esta/angular-business/field';
import { HeaderModule } from '@sbb-esta/angular-business/header';
import { NotificationsModule } from '@sbb-esta/angular-business/notification';
import { PaginationModule } from '@sbb-esta/angular-business/pagination';
import { ProcessflowModule } from '@sbb-esta/angular-business/processflow';
import { RadioButtonModule } from '@sbb-esta/angular-business/radio-button';
import { TableModule } from '@sbb-esta/angular-business/table';
import { TabsModule } from '@sbb-esta/angular-business/tabs';
import { TooltipModule } from '@sbb-esta/angular-business/tooltip';
import { UserMenuModule } from '@sbb-esta/angular-business/usermenu';
import { IconCollectionModule } from '@sbb-esta/angular-icons';

import { AutocompleteChipInputComponent } from './chip-showcase/autocomplete-chip-input/autocomplete-chip-input.component';
import { DisabledChipInputComponent } from './chip-showcase/disabled-chip-input/disabled-chip-input.component';
import { SimpleChipInputComponent } from './chip-showcase/simple-chip-input/simple-chip-input.component';
import {
  DialogShowcaseComponent,
  DialogShowcaseExample2Component,
  DialogShowcaseExample2ContentComponent,
  DialogShowcaseExample3Component,
  DialogShowcaseExampleComponent,
  DialogShowcaseExampleContentComponent
} from './dialog-showcase/dialog-showcase.component';
import { ClosableNotificationComponent } from './notification-showcase/closable-notification/closable-notification.component';
import { CustomIconNotificationComponent } from './notification-showcase/custom-icon-notification/custom-icon-notification.component';
import { JumpmarkNotificationComponent } from './notification-showcase/jumpmark-notification/jumpmark-notification.component';
import { SimpleNotificationComponent } from './notification-showcase/simple-notification/simple-notification.component';
import { PaginationShowcaseComponent } from './pagination-showcase/pagination-showcase.component';
import { SimpleContextmenuComponent } from './simple-contextmenu/simple-contextmenu.component';
import { SkippableProcessflowComponent } from './skippable-processflow/skippable-processflow.component';
import { GroupedColumnsTableComponent } from './table-showcase/grouped-columns-table/grouped-columns-table.component';
import { GroupedRowsTableComponent } from './table-showcase/grouped-rows-table/grouped-rows-table.component';
import { SimpleTableComponent } from './table-showcase/simple-table/simple-table.component';
import { SortableTableComponent } from './table-showcase/sortable-table/sortable-table.component';
import { PersonListComponent } from './tabs-showcase/person/person-list/person-list.component';
import { TabsShowcaseComponent } from './tabs-showcase/tabs-showcase.component';
import { TooltipShowcaseComponent } from './tooltip-showcase/tooltip-showcase.component';
import { UsermenuShowcaseComponent } from './usermenu-showcase/usermenu-showcase.component';

const exampleComponents = [
  SimpleContextmenuComponent,
  SkippableProcessflowComponent,
  TooltipShowcaseComponent,
  UsermenuShowcaseComponent,
  PersonListComponent,
  TabsShowcaseComponent,
  UsermenuShowcaseComponent,
  DialogShowcaseComponent,
  DialogShowcaseExampleComponent,
  DialogShowcaseExampleContentComponent,
  DialogShowcaseExample2Component,
  DialogShowcaseExample2ContentComponent,
  DialogShowcaseExample3Component,
  PaginationShowcaseComponent,
  CustomIconNotificationComponent,
  SimpleNotificationComponent,
  JumpmarkNotificationComponent,
  ClosableNotificationComponent,
  SimpleTableComponent,
  GroupedRowsTableComponent,
  SortableTableComponent,
  GroupedColumnsTableComponent,
  SimpleChipInputComponent,
  DisabledChipInputComponent,
  AutocompleteChipInputComponent
];

@NgModule({
  declarations: exampleComponents,
  entryComponents: exampleComponents,
  exports: exampleComponents,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IconCollectionModule,
    ButtonModule,
    CheckboxModule,
    ContextmenuModule,
    FieldModule,
    HeaderModule,
    ProcessflowModule,
    TooltipModule,
    TabsModule,
    UserMenuModule,
    DialogModule,
    RadioButtonModule,
    PaginationModule,
    NotificationsModule,
    UserMenuModule,
    TableModule,
    ChipModule,
    AutocompleteModule
  ]
})
export class BusinessExamplesModule {}
