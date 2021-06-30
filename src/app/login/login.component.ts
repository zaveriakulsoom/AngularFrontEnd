import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Login{
  public userName: string='';
  public password:string='';
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login=new Login();
  constructor(
    private httpClient : HttpClient, 
   ) { 
 
   }

  ngOnInit(): void {

  }
  onSubmit(){
    this.httpClient.post<Login>(`http://localhost:9005/portal/login`,this.login);
  }

}
