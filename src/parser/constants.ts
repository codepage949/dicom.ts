export enum TransferSyntax {
	ImplicitLittle = "1.2.840.10008.1.2",
	ExplicitLittle = "1.2.840.10008.1.2.1",
	ExplicitBig = "1.2.840.10008.1.2.2",
	CompressionJpeg = "1.2.840.10008.1.2.4",
	CompressionJpegLossless = "1.2.840.10008.1.2.4.57",
	CompressionJpegLosslessSel1 = "1.2.840.10008.1.2.4.70",
	CompressionJpegBaseline8bit = "1.2.840.10008.1.2.4.50",
	CompressionJpegBaseline12bit = "1.2.840.10008.1.2.4.51",
	CompressionJpegLsLossless = "1.2.840.10008.1.2.4.80",
	CompressionJpegLs = "1.2.840.10008.1.2.4.81",
	CompressionJpeg2000Lossless = "1.2.840.10008.1.2.4.90",
	CompressionJpeg2000 = "1.2.840.10008.1.2.4.91",
	CompressionRLE = "1.2.840.10008.1.2.5",
	CompressionDeflate = "1.2.840.10008.1.2.1.99"
}

export type Charset = string | null;

export const DefaultCharset:Charset = "ISO 2022 IR 6";

export const AnotherParserConst = 0;
