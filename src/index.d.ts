/**
 * aws-s3-sdk TypeScript declarations
 */
export interface AwsS3Options {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class AwsS3 {
  constructor(options?: AwsS3Options);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default AwsS3;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
