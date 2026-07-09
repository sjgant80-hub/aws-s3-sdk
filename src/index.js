/**
 * aws-s3-sdk · sovereign wrapper for AWS S3
 * Cloud Storage
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://docs.aws.amazon.com/AmazonS3/latest/API/
 * Homepage: https://aws.amazon.com/s3
 */

export class AwsS3 {
  constructor({ apiKey, baseURL = 'https://aws.amazon.com/s3', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://docs.aws.amazon.com/AmazonS3/latest/API/. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('aws-s3 ' + res.status);
    return res.json();
  }
}

export default AwsS3;

// Metadata
export const meta = {
  "name": "AWS S3",
  "category": "Cloud Storage",
  "homepage": "https://aws.amazon.com/s3",
  "docs_url": "https://docs.aws.amazon.com/AmazonS3/latest/API/",
  "endpoints_count": 0
};
