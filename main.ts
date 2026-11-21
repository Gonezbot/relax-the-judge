import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one fixed text, written exactly as it is, with no trailing
// newline. It is the same on every run: no randomness, no network, no clock.
const TEXT =
  "The moon climbs over the water, slow as a thought, and the whole bay turns silver, wave by wave, until the dark itself seems to rest.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
