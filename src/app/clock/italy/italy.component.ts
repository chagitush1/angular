import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-italy',
  templateUrl: './italy.component.html',
  styleUrls: ['./italy.component.css']
})
export class ItalyComponent implements OnInit {

  @Input() bg;

  constructor() { }

  ngOnInit() {
  }

}
