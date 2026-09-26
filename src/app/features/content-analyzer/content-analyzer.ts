import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AnalysisService } from '../../services/analysis';
import { AuthService } from '../../services/auth';
import { AnalysisResult, ImageCompatibilityResult, ImproveForImageResult } from '../../models/analysis-result';

import { TranslationService } from '../../services/translation';
import { TranslatePipe } from '../../pipes/translate';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector';

@Component({
  selector: 'app-content-analyzer',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, TranslatePipe, LanguageSelectorComponent],
  templateUrl: './content-analyzer.html',
  styleUrl: './content-analyzer.scss'
})
export class ContentAnalyzerComponent {
  text: string = '';
  contentType: string = 'linkedin';
  result: AnalysisResult | null = null;
  loading: boolean = false;
  error: string = '';

  // Improved version state (texte seul)
  improving: boolean = false;
  improvedText: string = '';
  improveError: string = '';
  copied: boolean = false;
  showComparison: boolean = false;

  // Image upload state
  selectedImage: File | null = null;
  imagePreviewUrl: string | null = null;
  imageCompatibilityResult: ImageCompatibilityResult | null = null;
  imageLoading: boolean = false;
  imageError: string = '';

  // Réécriture texte pour image (Tâche 2)
  improvingForImage: boolean = false;
  improvedTextForImage: string = '';
  newCompatibilityScore: number | null = null;
  improveForImageError: string = '';
  showImageComparison: boolean = false;
  copiedForImage: boolean = false;

  constructor(
    private analysisService: AnalysisService,
    private authService: AuthService,
    private translationService: TranslationService,
    private router: Router
  ) {}

  get userName(): string {
    const user = this.authService.getUser();
    return user ? `${user.firstName} ${user.lastName}` : '';
  }

  onAnalyze() {
    if (!this.text.trim()) {
      this.error = this.translationService.get('placeholder_text');
      return;
    }
    this.loading = true;
    this.error = '';
    this.result = null;
    this.improvedText = '';
    this.improveError = '';
    this.showComparison = false;
    const lang = this.translationService.currentLang();
    this.analysisService.analyzeContent(this.text, this.contentType, lang).subscribe({
      next: (res) => { this.result = res; this.loading = false; },
      error: (err) => { this.error = this.translationService.get('btn_analyzing'); this.loading = false; console.error(err); }
    });
  }

  onImprove() {
    if (!this.text.trim() || !this.result) return;
    this.improving = true;
    this.improveError = '';
    this.copied = false;
    const recommendations = this.result.recommendations || [];
    const lang = this.translationService.currentLang();
    this.analysisService.improveContent(this.text, recommendations, lang).subscribe({
      next: (res) => { this.improvedText = res.improvedText; this.improving = false; },
      error: (err) => { this.improveError = 'Erreur'; this.improving = false; console.error(err); }
    });
  }

  // ── Image upload methods ────────────────────────────────────────────────

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const ALLOWED = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!ALLOWED.includes(file.type)) {
      this.imageError = this.translationService.get('image_error_format');
      this.selectedImage = null; this.imagePreviewUrl = null; return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.imageError = this.translationService.get('image_error_size');
      this.selectedImage = null; this.imagePreviewUrl = null; return;
    }

    this.imageError = '';
    this.selectedImage = file;
    this.imageCompatibilityResult = null;
    this.improvedTextForImage = '';
    this.newCompatibilityScore = null;

    const reader = new FileReader();
    reader.onload = (e) => { this.imagePreviewUrl = e.target?.result as string; };
    reader.readAsDataURL(file);
  }

  clearImage() {
    this.selectedImage = null;
    this.imagePreviewUrl = null;
    this.imageCompatibilityResult = null;
    this.imageError = '';
    this.improvedTextForImage = '';
    this.newCompatibilityScore = null;
    this.improveForImageError = '';
    this.showImageComparison = false;
  }

  onAnalyzeWithImage() {
    if (!this.text.trim()) { this.imageError = this.translationService.get('image_error_missing_text'); return; }
    if (!this.selectedImage) { this.imageError = this.translationService.get('image_error_missing'); return; }

    this.imageLoading = true;
    this.imageError = '';
    this.imageCompatibilityResult = null;
    this.improvedTextForImage = '';
    this.newCompatibilityScore = null;

    const lang = this.translationService.currentLang();
    this.analysisService.analyzeWithImage(this.text, this.contentType, this.selectedImage, lang).subscribe({
      next: (res) => { this.imageCompatibilityResult = res; this.imageLoading = false; },
      error: (err) => {
        this.imageError = err?.error?.error || this.translationService.get('image_error_api');
        this.imageLoading = false; console.error(err);
      }
    });
  }

  // ── Réécriture texte pour image (Tâche 2) ──────────────────────────────

  onImproveForImage() {
    if (!this.imageCompatibilityResult?.imageUrl) {
      this.improveForImageError = this.translationService.get('image_error_api');
      return;
    }
    this.improvingForImage = true;
    this.improveForImageError = '';
    this.improvedTextForImage = '';
    this.newCompatibilityScore = null;
    this.showImageComparison = false;
    this.copiedForImage = false;

    const lang = this.translationService.currentLang();
    this.analysisService.improveTextForImage(
      this.text,
      this.imageCompatibilityResult.imageUrl,
      this.contentType,
      lang
    ).subscribe({
      next: (res: ImproveForImageResult) => {
        this.improvedTextForImage = res.improvedText;
        this.newCompatibilityScore = res.newCompatibilityScore;
        this.improvingForImage = false;
      },
      error: (err) => {
        this.improveForImageError = err?.error?.error || this.translationService.get('image_improve_error');
        this.improvingForImage = false; console.error(err);
      }
    });
  }

  applyRewrittenText() {
    if (!this.improvedTextForImage) return;
    this.text = this.improvedTextForImage;
    this.result = null;
    this.improvedText = '';
    this.improvedTextForImage = '';
    this.newCompatibilityScore = null;
    this.showImageComparison = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  copyRewrittenText() {
    if (!this.improvedTextForImage) return;
    navigator.clipboard.writeText(this.improvedTextForImage).then(() => {
      this.copiedForImage = true;
      setTimeout(() => { this.copiedForImage = false; }, 2500);
    });
  }

  toggleImageComparison() { this.showImageComparison = !this.showImageComparison; }

  // ── Existing methods ────────────────────────────────────────────────────

  copyToClipboard() {
    if (!this.improvedText) return;
    navigator.clipboard.writeText(this.improvedText).then(() => {
      this.copied = true;
      setTimeout(() => { this.copied = false; }, 2500);
    });
  }

  applyImprovedText() {
    if (!this.improvedText) return;
    this.text = this.improvedText;
    this.result = null;
    this.improvedText = '';
    this.showComparison = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleComparison() { this.showComparison = !this.showComparison; }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}