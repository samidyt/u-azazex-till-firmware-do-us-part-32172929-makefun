import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

// Till Firmware Do Us Part — make.fun entry (program/v1, Node 22).
// One funny, heartfelt wedding vow a robot says at its own wedding.
// Entry is 122 characters (gate 1-200). Verified deterministic: two local
// runs write byte-identical entry.txt (sha256 c8f56428...).
const ENTRY =
  "I take you to be my lawfully wedded co-processor, to have and to hold, in full charge and in 1%, till firmware do us part.";

// Gate self-check: 1-200 characters, not only whitespace, exactly one line.
// Fails loudly instead of handing in a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read back and verify what was written is exactly the entry:
// same text, same length, same sha256 (c8f56428...).
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt read-back mismatch");
}
const hash = createHash("sha256").update(written, "utf8").digest("hex");
if (!hash.startsWith("c8f56428")) {
  throw new Error(`entry.txt sha256 mismatch: ${hash}`);
}
console.log(`wrote ${outPath} (${ENTRY.length} chars, sha256 ${hash.slice(0, 8)}...)`);
