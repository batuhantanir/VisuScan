type AnalyzeResultItem = {
  label: string;
  confidence: number;
};

interface AnalyzeResult {
  imageBlob: Blob | null;
  results: Array<AnalyzeResultItem>;
}

export { AnalyzeResult, AnalyzeResultItem };
