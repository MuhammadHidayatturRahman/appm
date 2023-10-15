import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private router:Router) { }

  ngOnInit() {
  }

  checkLoginAuth(){
    //alert("username : " +this.username+" password : "+ this.password)
    if(this.username=="dayat" && this.password=="12345"){
      alert("Masuklah")
      this.router.navigateByUrl('/home',{state:{userRole : "kania"}});
    }
    else if(this.username=="latip" && this.password=="12345") {
      this.router.navigateByUrl('/home',{state:{userRole : "latip"}});
    }
    else
      alert("SALAH COK");
    }
  }

  