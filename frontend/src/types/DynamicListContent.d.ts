interface ContentItem {
  title?: string;
  description?: string;
  alert?: boolean;
  children?: Array<{
    title?: string;
    description?: string;
  }>;
  list?: string[];
}

export interface DynamicListContent {
  content: ContentItem[];
}