export declare enum MessageSeverity {
    Warning = 1,
    Error = 2
}
interface LintMessage {
    ruleId: string | null;
    severity: 1 | 2;
    message: string;
    line: number;
    column: number;
}
interface LintResult {
    filePath: string;
    messages: LintMessage[];
    errorCount: number;
    warningCount: number;
    output?: string;
    source?: string;
}
export declare function formatResults(baseDir: string, results: LintResult[]): string;
export {};
