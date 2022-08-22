import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component(
  {
    selector: 'app-textcomponent',
    templateUrl: './textcomponent.component.html',
    styleUrls: ['./textcomponent.component.css'],
    providers: [DataService]
  })

export class TextcomponentComponent implements OnInit
{

  infoRecieved1: string[] = []; //It is typescript because types are defined. A array of string.
  infoRecieved2: string[] = [];
  infoRecieved3: string[] = [];

  getInfoFromService1()//code for retriving employee information and storing in infoRecieved array
  {
    this.infoRecieved1 = this.dservice.getInfo1();
  } 
  getInfoFromService2()
  {
    this.infoRecieved2 = this.dservice.getInfo2();
  }
  getInfoFromService3()
  {
      this.infoRecieved3 = this.dservice.getInfo3();
  }

  constructor(private dservice: DataService) { }

  ngOnInit(): void {}

  updateInfo(frm: any)
  {
    this.dservice.addInfo(frm.value.location);
  }

}
