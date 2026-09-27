import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const manifest = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
const extension = await readFile(new URL("../extensions/docs.ts", import.meta.url), "utf8");
const skill = await readFile(
  new URL("../skills/project-documentation-reconciliation/SKILL.md", import.meta.url),
  "utf8",
);

assert.equal(manifest.name, "pi-kas");
assert.deepEqual(manifest.pi.extensions, ["./extensions"]);
assert.deepEqual(manifest.pi.skills, ["./skills"]);
assert.match(extension, /registerCommand\("docs"/);
assert.match(extension, /\/skill:project-documentation-reconciliation/);
assert.match(skill, /^---\nname: "project-documentation-reconciliation"/);

console.log("pi-kas package checks passed");
