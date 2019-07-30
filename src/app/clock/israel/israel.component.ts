import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-israel',
  templateUrl: './israel.component.html',
  styleUrls: ['./israel.component.css']
})
export class IsraelComponent implements OnInit {

  @Input() bg;

  constructor() { }

  ngOnInit() {
  }

}
