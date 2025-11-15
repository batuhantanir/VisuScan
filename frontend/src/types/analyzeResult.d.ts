type AnalyzeResultItem = {
  label: string;
  confidence: number;
};

interface AnalyzeResult {
  imageBlobUrl: string | null;
  imageName: string | null;
  results: Array<AnalyzeResultItem>;
}

export { AnalyzeResult, AnalyzeResultItem };
