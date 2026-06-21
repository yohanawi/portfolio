import { rmSync } from "node:fs";
import { fileURLToPath } from "node:url";

const nextDir = fileURLToPath(new URL("../.next", import.meta.url));

rmSync(nextDir, { recursive: true, force: true });
console.log("Removed .next build output.");
