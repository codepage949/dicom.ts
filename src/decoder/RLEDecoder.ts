import Decoder from "./Decoder";
import RLE from "./codecs/rle";
import { getEncapsulatedData } from "./util";

class RLEDecoder extends Decoder {
	private rleData: Array<ArrayBuffer> | null = null

	protected decode(frameNo: number): Promise<DataView> {
		const { image } = this;
		if (!this.rleData) {
			const encapTags = getEncapsulatedData(image.data);
			const numTags = encapTags?.length || 0;
			const data = new Array(numTags);
			// the first sublist item contains offsets - ignore
			for (let ctr = 1; ctr < numTags; ctr += 1) {
				const dataView = encapTags[ctr].value as DataView;
				data[ctr - 1] = dataView?.buffer || null;
			}
			this.rleData = data;
		}
		const decompressed = RLE(image, this.rleData[frameNo]);
		return Promise.resolve(decompressed);
	}
}

export default RLEDecoder;
