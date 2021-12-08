import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
  ) {}

  ngOnInit(): void {
    if (this.tokenStorageService.getToken() !== null) {
      this.router.navigate(['/dashboard']);
    }
  }

    onClickSubmit(data: any) {
    this.authService.login(data).subscribe(
      (data) => {
        console.log(data);
        // this.navbarComponent.value(data);
        this.tokenStorageService.saveToken(data.accessToken);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(err);
        alert("Sorry, we could not find this account. Please check username and password..!")
      }
    );
    console.log(data);
  }
}
