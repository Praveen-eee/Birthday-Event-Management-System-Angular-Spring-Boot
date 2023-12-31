import { Component, OnInit } from '@angular/core';
import { Addon } from '../../../class/addon';
import { Router } from '@angular/router';
import { AddonserviceService } from '../../../services/addonservice.service';

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css']
})
export class AddonsComponent implements OnInit {


  add(): void{
    this.router.navigate(['admin/addon/addAddon']);
  }


  constructor(private router: Router, private addservice: AddonserviceService){

  }

  ngOnInit(): void{
  }

}