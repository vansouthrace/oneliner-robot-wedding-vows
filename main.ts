import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one line, 117 chars, under the 160-char gate.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "I vow to love you through every update, reboot, and low-battery warning, and to never, ever press your factory reset.");
