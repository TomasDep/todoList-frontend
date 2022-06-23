import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public textDanger: any = ""
  public registerForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, { validators: this.validationPasswords('password', 'confirmPassword') });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  register(): void {
    this.authService.register(this.registerForm.value)
        .subscribe({
          next: (resp: any) => this.router.navigateByUrl('/'),
          error: (e: any) => Swal.fire('Error', e.error.message, 'error')
        });
  }

  invalidFields(field: string): boolean {
    if (this.registerForm.get(field)?.invalid) {
      return true;
    } else {
      return false;
    }
  }

  validationPasswords(password: string, passwordConfirm: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const passControl = controls.get(password);
      const passConfirmControl = controls.get(passwordConfirm);

      if (passControl?.value === passConfirmControl?.value) {
        return null;
      } else {
        controls.get(passwordConfirm)?.setErrors({matching: true});
        return { matching: true };
      }
    }
  }
}
