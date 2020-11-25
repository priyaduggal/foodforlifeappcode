import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tribes',
  templateUrl: './tribes.page.html',
  styleUrls: ['./tribes.page.scss'],
})
export class TribesPage implements OnInit {
 tribetab: string = "projects";
  isAndroid: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
