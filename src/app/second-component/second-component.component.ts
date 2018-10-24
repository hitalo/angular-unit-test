import { Component, OnInit } from '@angular/core';
import { MathService } from '../services/math.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponent implements OnInit {

  private myNumber: number;
  private sum: number = 0;

  constructor(private mathService: MathService) { }

  ngOnInit() {
    this.sum = this.mathService.add(1, 2);
  }


  setMyNumber(newNumber: number) {
    this.myNumber = newNumber;
  }

  getMyNumber() {
    return this.myNumber;
  }
}
