import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../model/auth.service';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  isLoggedIn(): boolean {
    const result = this.authService.authenticated;
    if (result){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return result;
  }

  onLogoutClick(): void {
    this.authService.logout().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

}
