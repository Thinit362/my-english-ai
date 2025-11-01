// types/pdf-parse.d.ts
declare module 'pdf-parse' {
  export interface PDFParseResult {
    text: string;
    numpages?: number;
    info?: any;
    metadata?: any;
    version?: string;
  }

  // Buffer cho Node; Uint8Array để linh hoạt
  function pdfParse(data: Buffer | Uint8Array): Promise<PDFParseResult>;
  export default pdfParse;
}
