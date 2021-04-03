import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../model/user.model';
import { AuthService } from '../../model/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  public user: User;
  public errorMessage: string;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  authenticate(form: NgForm): void {
    if (form.valid) {
      console.log('jjjjjj')

      // perform authentication
      this.auth.authenticate(this.user).subscribe(data => {
        if (data.success) {
          this.auth.storeUserData(data.token, data.user);
          this.router.navigateByUrl('books');
        }
      });
    }
    else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
