import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one fixed text, written exactly as it is, with no trailing
// newline. It is the same on every run: no randomness, no network, no clock.
const TEXT =
  "The light from one star set out before your grandparents were born, and it is only just arriving now. It crossed all that dark without hurrying, and it is still warm when it reaches you. Nothing out there is in a rush — not even time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
