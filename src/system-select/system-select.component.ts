import { Component, OnInit } from '@angular/core';

import { ToolbarService } from './../services/toolbar.service';

@Component({
  selector: 'app-system-select',
  templateUrl: './system-select.component.html',
  styleUrls: ['./system-select.component.css']
})
export class SystemSelectComponent implements OnInit {

  constructor(
    private toolbarService: ToolbarService) { }

  ngOnInit() {
    this.toolbarService.setTitle('Please select your roleplay system');
  }

}
