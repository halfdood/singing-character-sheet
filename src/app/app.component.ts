import { Component, OnInit } from '@angular/core';

import { ToolbarService } from './../services/toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private title = '';

  constructor(
    private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.toolbarService.getTitle().subscribe(title => this.title = title);
  }
}
