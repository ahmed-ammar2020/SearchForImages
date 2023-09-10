export interface ImageResponse {
  total_pages: string;
  results: {
    description: string;
    urls: {
      small: string;
    };
  }[];
}
