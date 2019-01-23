import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sbb-pagination-showcase',
  templateUrl: './pagination-showcase.component.html',
  styleUrls: ['./pagination-showcase.component.scss']
})
export class PaginationShowcaseComponent {

  constructor(private route: ActivatedRoute) {}

  maxPage = 7;
  initialPage = 5;

  onPageChange($event) {
    console.log($event);
  }

  linkGenerator = (page: { displayNumber: number, index: number }): NavigationExtras & { routerLink: string | any[] } => {
    return {
      routerLink: ['.'],
      queryParams: { page: page.index },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    };
  }

}
