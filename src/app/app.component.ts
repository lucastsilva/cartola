import { Component } from "@angular/core";
import { AppService } from "./app.service";
import { Login, LoginAuth, AuthResponse } from "./app.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],

})
export class AppComponent {
  title = "app";
  login: Login = {
    email: "lucastsilva88@hotmail.com",
    password: "mengodf17",
    serviceId: 438
  };
  loginAuth: LoginAuth = {
    payload: this.login,
    captcha: ""
  };

  constructor(private appService: AppService){
    this.loginGlobo();
  }
  
  loginGlobo() {
    this.appService
      .loginGlobo(this.loginAuth)
      .subscribe((res: AuthResponse) => {
        this.appService.setToken(res.glbId);
      });
  }
}
