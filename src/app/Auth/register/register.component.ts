import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onClickSubmit(data: any) {
    this.authService.register(data).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
        alert('Entered details already taken..!');
      }
    );
    console.log(data);
  }
}
