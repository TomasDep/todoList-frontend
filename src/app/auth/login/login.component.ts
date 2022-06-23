import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';
import Swal from 'sweetalert2';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private primeConfig: PrimeNGConfig, 
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.primeConfig.ripple = true;
  }

  login(): void {
    this.authService.login(this.loginForm.value)
        .subscribe({
          next: (resp: any) => {
            this.router.navigateByUrl('/dashboard');
          },
          error: (e: any) => Swal.fire('Error', e.error.message, 'error')
        });
  }
}
