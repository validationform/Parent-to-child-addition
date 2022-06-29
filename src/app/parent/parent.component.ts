import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  
  firstNumber : string;
  secondNumber :string;
  result : number;
  

  addNumber(){

      this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
      console.log(typeof this.firstNumber)
      console.log(typeof this.secondNumber)
      console.log(typeof this.result)
  }
  constructor() { 
    
  }

  ngOnInit(): void {

  }
  

}
