type AnalyzeResultItem = {
  description: string;
  is_safe_for_work: boolean;
  main_subject: string;
  quality_score: number;
  tags: Array<string>;
};

interface AnalyzeResult {
  imageBlobUrl: string | null;
  imageName: string | null;
  results: Array<AnalyzeResultItem>;
}

export { AnalyzeResult, AnalyzeResultItem };
