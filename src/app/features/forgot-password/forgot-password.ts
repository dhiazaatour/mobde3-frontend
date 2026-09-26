import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss'
})
export class ForgotPasswordComponent {
  email: string = '';
  message: string = '';
  error: string = '';
  loading: boolean = false;
  submitted: boolean = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (!this.email) {
      this.error = "L'email est requis";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.error = "Veuillez entrer un email valide";
      return;
    }

    this.loading = true;
    this.error = '';
    this.message = '';

    this.authService.forgotPassword(this.email).subscribe({
      next: (res) => {
        this.loading = false;
        this.submitted = true;
        this.message = res.message;
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || 'Erreur lors de la demande';
      }
    });
  }
}
