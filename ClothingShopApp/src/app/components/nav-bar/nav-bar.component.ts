import {  Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() dataToChild: string;
  dataToChildDisplay:any
  constructor() { }
  name() {
    this.dataToChildDisplay = this.dataToChild
 }
  ngOnInit(): void {
    this.name()
  }
}
