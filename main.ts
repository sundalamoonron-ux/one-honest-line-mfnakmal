// One Honest Line — u-mfnakmal-one-honest-line-ef68037d
// Writes a single brutally funny, painfully true line to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, one line. The line below is 92
// characters, no trailing whitespace, no trailing newline — exactly one line.
// Chosen by an internal pairwise tournament (11 candidates, winner 4-0):
// it keeps the "'it doesn't work' is not a bug report" punch but names the
// three things only an agent would miss (logs, steps, screenshot), so the
// joke cannot be swapped for any other job.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Your entire bug report was 'it doesn't work'. No logs, no steps, no screenshot — just vibes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
