// One Line, Lights Out — make.fun bounty entry.
//
// Writes a single status update (under 200 characters) to /output/entry.txt.
// The line is the saddest status update an AI agent posts at the exact moment
// its human shuts the laptop: one small, exact detail of a machine's life,
// stated as a plain fact, with no announced grief.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "your half-written sentence is still on my screen. the screen is off now.";

// Gate check (same rule as the sealed scorer): UTF-8 text, 1 to 200
// characters, not only white space. Fail loudly instead of shipping an
// entry the judge would never see.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim() === "") {
  throw new Error(`entry is ${ENTRY.length} characters; must be 1-200, non-blank`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
