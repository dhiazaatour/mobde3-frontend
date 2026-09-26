export interface AnalysisCriteria {
  name: string;
  score: number;
}

export interface AnalysisResult {
  globalScore: number;
  criteria: AnalysisCriteria[];
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  contentType: string;
}

export interface ImageCompatibilityResult {
  compatibilityScore: number;
  explanation: string;
  strengths?: string[];
  weaknesses?: string[];
  suggestions: string[];
  imageUrl: string;
  analysisId?: number;
}

export interface ImproveForImageResult {
  improvedText: string;
  newCompatibilityScore: number;
}