import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss'
})
export class ResetPasswordComponent implements OnInit {
  token: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  message: string = '';
  error: string = '';
  loading: boolean = false;
  success: boolean = false;
  showPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get('token') || '';
    if (!this.token) {
      this.error = 'Lien invalide ou expiré. Veuillez refaire une demande.';
    }
  }

  get passwordStrength(): { level: number; label: string; color: string } {
    const p = this.newPassword;
    if (!p) return { level: 0, label: '', color: '' };
    let score = 0;
    if (p.length >= 8) score++;
    if (p.length >= 12) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;

    if (score <= 1) return { level: 1, label: 'Très faible', color: '#f43f5e' };
    if (score === 2) return { level: 2, label: 'Faible',     color: '#f97316' };
    if (score === 3) return { level: 3, label: 'Moyen',      color: '#f59e0b' };
    if (score === 4) return { level: 4, label: 'Fort',       color: '#10b981' };
    return              { level: 5, label: 'Très fort',   color: '#06b6d4' };
  }

  onSubmit() {
    this.error = '';

    if (!this.newPassword) {
      this.error = 'Le mot de passe est requis';
      return;
    }
    if (this.newPassword.length < 8) {
      this.error = 'Le mot de passe doit contenir au moins 8 caractères';
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.error = 'Les mots de passe ne correspondent pas';
      return;
    }

    this.loading = true;

    this.authService.resetPassword(this.token, this.newPassword).subscribe({
      next: (res) => {
        this.loading = false;
        this.success = true;
        this.message = res.message;
        setTimeout(() => this.router.navigate(['/login']), 3000);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || 'Erreur lors de la réinitialisation';
      }
    });
  }
}