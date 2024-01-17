import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usermodals } from '../modals/user.modal';
import { apiservice } from './api.service';

@Injectable({ providedIn: 'root' })
export class accountservice {
  auth: boolean = false;
  user: usermodals | null = null;
  constructor(public apiservice: apiservice, private router: Router) {}
  senduserdata(u: usermodals) {
    this.user = u;
  }
  onAuths() {
    this.router.navigate(['/login']);
  }
  onsignup(
    un: string,
    ps: string,
    psc: string,
    n: string,
    pn: number | null,
    adr: string
  ) {
    if (un && ps && psc && n && pn && adr) {
      if (pn.toString().length == 10) {
        let user: usermodals = {
          username: un,
          password: ps,
          name: n,
          pnumber: pn,
          address: adr,
          order: [],
        };
        let userexist = this.apiservice.userdata.find(
          (usere) => usere.username == un
        );
        console.log(userexist);
        console.log(this.apiservice.userdata);
        if (userexist) {
          alert('username already exist');
          this.router.navigate(['/login']);
        } else {
          if (user.password == psc) {
            this.apiservice.userdata.push(user);
            alert('user registered');
            this.router.navigate(['/login']);
          } else {
            alert('password mismatched');
          }
        }
      } else {
        alert('number must be 10 digit');
      }
    } else {
      alert('fill data properly');
    }
  }
  onflag(f: boolean) {
    this.auth = f;
  }
}
