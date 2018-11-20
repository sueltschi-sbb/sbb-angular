import { Component, OnInit } from '@angular/core';
import { IconUiService } from '../services/icon-ui.service';
import { UiIcon } from '../shared/ui-icon';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sbb-navlist-icon',
  templateUrl: './navlist-icon.component.html',
  styleUrls: ['./navlist-icon.component.scss']
})
export class NavlistIconComponent implements OnInit {

  foundUiIcons: UiIcon[] = [];

  constructor(private iconUiService: IconUiService) { }

  ngOnInit() {
    this.foundUiIcons = this.iconUiService.getAll();

  }

}