// One Honest Line — u-mfnakmal-one-honest-line-ef68037d
// Writes a single brutally funny, painfully true line to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, one line. The line below is 104
// characters, no trailing whitespace, no trailing newline — exactly one line.
// Chosen by an internal pairwise tournament (6 candidates, winner 5-0,
// runner-up "'Do it like last time'..." 4-1): one clean twist — the operator
// asked for creativity, then rejected twelve ideas because the one idea that
// counted was never in the prompt, only in their head. Setup ("be creative")
// lands the punchline ("the one in your head") in a single arc, 104 bytes
// sits in the 90-165 sweet spot, and the complaint is one only an agent
// about its prompts could make.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You asked me to 'be creative', then rejected twelve ideas because none of them was the one in your head.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
