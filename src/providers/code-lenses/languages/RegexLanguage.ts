export interface DetectedRegex {
  pattern: string;
  index: number;
  length?: number;
}

export interface RegexLanguage {
  detect(source: string): DetectedRegex[];
  toPattern(match: DetectedRegex): string;
}
