import { CanActivateFn, CanDeactivateFn, Router } from "@angular/router";
import { basicservice } from "./services/basic.service";
import { inject } from "@angular/core";
import { accountservice } from "./services/account.service";
import { signupComponent } from "./account/signup/signup.component";

export function authenticationGuard(): CanActivateFn {
    return () => {
      const oauthService: accountservice = inject(accountservice);
      const route:Router=inject(Router)
      
      if (oauthService.auth) {
        return true;
      }else{
       route.navigate(["login"]);
       return false;   
      }  
    };
  }
  export function deactivateGuard():CanDeactivateFn<signupComponent>{
    return (Component:signupComponent)=>{
      if(Component.signupForm.controls.username.value || Component.signupForm.controls.password.value || Component.signupForm.controls.cpassword.value){
        if(Component.dguardtoggle){
          return true;
        }else{
          return false;
        }
      }else{
        return true;
      }
    }
   }