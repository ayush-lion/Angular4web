import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {  DataService } from '../data.service';
import { Observable } from 'rxjs/Rx';
import {variable} from "@angular/compiler/src/output/output_ast";
import {letProto} from "rxjs/operator/let";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [DataService]
})
export class MembersComponent implements OnInit {
  
  constructor(private dataservice:DataService) { }
  category :any;
  ngOnInit() {
    this.dataservice.finddiet()
      .subscribe(
      data => this.category = data,
      error => console.log("checking"+error),
      () => console.log("checked"+this.category),
      );
  }
}
