import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bh-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showFiller = true;

  constructor() { }

  ngOnInit() {
  }

}
