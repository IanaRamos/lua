import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  displayname: string;
  email: string;
  password: string;

  constructor(private authService: AuthServiceService, private router:Router) { }

  ngOnInit() {
  }

  cadastro(){
    this.authService.cadastro(this.displayname, this.email, this.password).then(res =>{
      this.router.navigate(['/login']);
    });
  }

}
