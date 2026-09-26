import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalysisResult, ImageCompatibilityResult, ImproveForImageResult } from '../models/analysis-result';
import { HistoryItem } from '../models/history';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  analyzeContent(text: string, type: string, lang: string = 'fr'): Observable<AnalysisResult> {
    return this.http.post<AnalysisResult>(`${this.apiUrl}/analyze`, { text, type, lang });
  }

  improveContent(text: string, recommendations: string[], lang: string = 'fr'): Observable<{ improvedText: string }> {
    return this.http.post<{ improvedText: string }>(`${this.apiUrl}/improve`, { text, recommendations, lang });
  }

  /**
   * Analyse combinée texte + image via Gemini Vision.
   * Envoie les données en multipart/form-data.
   */
  analyzeWithImage(text: string, type: string, image: File, lang: string = 'fr'): Observable<ImageCompatibilityResult> {
    const formData = new FormData();
    formData.append('text', text);
    formData.append('type', type);
    formData.append('lang', lang);
    formData.append('image', image);
    return this.http.post<ImageCompatibilityResult>(`${this.apiUrl}/analyze-with-image`, formData);
  }

  /**
   * Réécrit le texte pour qu'il corresponde à l'image, via Gemini Vision.
   */
  improveTextForImage(text: string, imageUrl: string, type: string, lang: string = 'fr'): Observable<ImproveForImageResult> {
    return this.http.post<ImproveForImageResult>(`${this.apiUrl}/improve-text-for-image`, { text, imageUrl, type, lang });
  }

  getHistory(): Observable<HistoryItem[]> {
    return this.http.get<HistoryItem[]>(`${this.apiUrl}/history`);
  }

  deleteHistoryItem(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/history/${id}`);
  }
}
