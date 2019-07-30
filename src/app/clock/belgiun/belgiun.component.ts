import { Component, OnInit, DefaultIterableDiffer, Input } from '@angular/core';

@Component({
  selector: 'belgiun',
  templateUrl: './belgiun.component.html',
  styleUrls: ['./belgiun.component.css']
})
export class BelgiunComponent implements OnInit {

  @Input() bg; 


  constructor() { }

  ngOnInit() {
  }

  a = 'blablabla'
  b = 'fdfgdgf'
  c = 'djfjdfghdfj'
  d = 'fhdkjfhs'

}
