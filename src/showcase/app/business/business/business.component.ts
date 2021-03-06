import { Component } from '@angular/core';

@Component({
  selector: 'sbb-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent {
  formComponents = {
    autocomplete: 'Autocomplete',
    checkbox: 'Checkbox',
    chip: 'Chip Input',
    datepicker: 'Datepicker',
    'form-field': 'Form Field',
    'file-selector': 'File Selector',
    'radio-button': 'Radiobutton',
    select: 'Select',
    textarea: 'Textarea',
    'time-input': 'Time Input',
  };
  navigationComponents = {
    header: 'Header',
    sidebar: 'Sidebar',
  };
  layoutComponents = {
    accordion: 'Accordion',
    breadcrumb: 'Breadcrumb',
    pagination: 'Pagination',
    notification: 'Notification',
    processflow: 'Processflow',
    tabs: 'Tabs',
    textexpand: 'Textexpand',
    usermenu: 'Usermenu',
    table: 'Table',
  };
  buttonAndIndicatorComponents = {
    button: 'Button',
    contextmenu: 'Contextmenu',
    links: 'Links',
    loading: 'Loading',
    status: 'Status',
  };
  popupsAndModals = {
    dialog: 'Dialog',
    dropdown: 'Dropdown',
    'notification-toast': 'Notification Toast',
    tooltip: 'Tooltip',
  };
}
