import { promisify } from 'util';
import * as zlib from 'zlib';

// Promisify the zlib methods for use with async/await
const gzip = promisify(zlib.gzip);
const gunzip = promisify(zlib.gunzip);

const COMPRESSION_THRESHOLD = 100; // Example: 100 bytes
const answerValue = JSON.stringify({
    type: "Static",
    value: [
        ["iron", 29, "No"],
        ["copper", 63, "Yes"],
        ["gold", 79, "Yes"],
        ["silver", 47, "No"],
        ["platinum", 78, "Yes"],
        ["zinc", 30, "No"],
        ["nickel", 28, "No"],
        ["titanium", 22, "No"],
        ["cobalt", 27, "No"],
        ["chromium", 24, "No"],
        ["manganese", 25, "No"],
        ["aluminum", 13, "No"],
        ["lead", 82, "Yes"],
        ["tin", 50, "Yes"],
        ["tungsten", 74, "Yes"],
        ["mercury", 80, "Yes"],
        ["silicon", 14, "No"],
        ["boron", 5, "No"],
        ["sulfur", 16, "No"],
        ["phosphorus", 15, "No"],
        ["arsenic", 33, "No"],
        ["antimony", 51, "Yes"],
        ["bismuth", 83, "Yes"],
    ]

});


async function compressAnswerValue(value: string) {
    const buffer = Buffer.from(value);
    if (buffer.length > COMPRESSION_THRESHOLD) {
        const compressed = await gzip(buffer);
        return { data: compressed, compressed: true };
    } else {
        // Return the original buffer if below threshold, marked as not compressed
        return { data: buffer, compressed: false };
    }
}

async function decompressAnswerValue(compressedValue: { data: Buffer; compressed: boolean }) {
    if (compressedValue.compressed) {
        const buffer = await gunzip(compressedValue.data);
        return buffer.toString();
    } else {
        // If the data was not compressed, just return it as a string
        return compressedValue.data.toString();
    }
}

// Adjust the main function accordingly
async function main() {
    const compressedValue = await compressAnswerValue(answerValue);
    console.log("Compressed value:", compressedValue.data);

    const decompressedValue = await decompressAnswerValue(compressedValue);
    console.log("Decompressed value:", decompressedValue);

    // Adjust size comparison logic if needed
    console.log("Original size:", Buffer.from(answerValue).length);
    console.log("Compressed size:", compressedValue.data.length);
}

main().catch(console.error);