import { JAVASCRIPT_REGEX_DETECT } from '../utils';
import { DetectedRegex, RegexLanguage } from './RegexLanguage';

class JavaScriptRegexLanguage implements RegexLanguage {
  detect(source: string): DetectedRegex[] {
    const detector = new RegExp(JAVASCRIPT_REGEX_DETECT.source, JAVASCRIPT_REGEX_DETECT.flags);
    const matches: DetectedRegex[] = [];
    let match: RegExpExecArray | null;
    while ((match = detector.exec(source)) !== null) matches.push({ pattern: match[0], index: match.index, length: match[0].length });
    return matches;
  }
  toPattern(match: DetectedRegex): string { return match.pattern.trim(); }
}
export default JavaScriptRegexLanguage;
