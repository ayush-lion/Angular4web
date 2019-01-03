import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "India";
  items = ["Angular 4", "ReactJs", "UnderScore"];
  newItem = "";
  
  pushItem = function(){
    if(this.newItem != ""){
      this.items.push(this.newItem);
      this.newItem="";
    } 
  }
  removeItem = function(index){
    this.items.splice(index, 1);
  }
}