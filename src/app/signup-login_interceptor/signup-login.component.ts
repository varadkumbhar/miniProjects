import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    EmailId: '',
    Password: ''
  }

  constructor(private router:Router,private accSrv: AccountService) { }

  ngOnInit(): void {
    // const localData = localStorage.getItem('signUpUsers');
    // if (localData != null) {
    //   this.signupUsers = JSON.parse(localData);
    // }
  }


  onLogin() {
    debugger;

    if(this.loginObj.EmailId == "varad0024@gmail.com" && this.loginObj.Password == "Varad@0024") {
      localStorage.setItem('EmailId',this.loginObj.EmailId);
      this.router.navigateByUrl("dashboard")
    } else {
      alert("wrong credentials")
    }


    // const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    // if (isUserExist != undefined) {
    //   alert('User Login SuccessFully');
    // }else{
    //   alert('Wrong credentials');
    // }
    // this.loginObj = {
    //   email: '',
    //   password: ''
    // }

    // this.accSrv.onLogin(this.loginObj).subscribe((result:any)=>{
    //   debugger;
    //   console.log('result',result)
    //   localStorage.setItem('token',result.token)
    // })
  }

  onSignup() {
    // this.signupUsers.push(this.signupObj);
    // localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));

    // this.signupObj = {
    //   userName: '',
    //   email: '',
    //   password: ''
    // };
  }

}
