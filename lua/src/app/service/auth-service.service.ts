import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private AFAuth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string){
    return this.AFAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logout(){
    this.AFAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  cadastro(displayname: string, email: string, password: string){
    return this.AFAuth.auth.createUserWithEmailAndPassword(email, password).then(res =>{
      res.user.updateProfile({displayName: displayname});
    });
  }
}
