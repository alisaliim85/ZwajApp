import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authSrivce:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authSrivce.login(this.model).subscribe(
      next=>{console.log('log in sucess')},
      error=>{console.log('error')}
    )
    
  };

}
