#!/usr/bin/env node
"use strict";

// Derives images/home-content.json from club.json's heroEyebrow/process/
// testimonial fields. build.js's own image pipeline (copyAndOptimizeImages
// in generator/build.js) already copies any non-raster file under images/
// to dist/images/ verbatim — this script rides that existing, unmodified
// mechanism to ship Home-page content that has no render-function home in
// the shared engine, so it stays editable via Pages CMS without touching
// generator/. custom-template/app-shell.html fetches the resulting file
// client-side. Run this before `node build.js` — see README's "Building
// locally" and .github/workflows/deploy-pages.yml's "Build site" step.
//
// images/home-content.json is intentionally NOT committed (see .gitignore)
// — it's a build artifact regenerated fresh from club.json every run, same
// spirit as generator/dist/.

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const club = JSON.parse(fs.readFileSync(path.join(ROOT, "club.json"), "utf8"));
const outPath = path.join(ROOT, "images", "home-content.json");

const extras = {};
if (club.heroEyebrow) extras.heroEyebrow = club.heroEyebrow;
if (club.process) extras.process = club.process;
if (club.testimonial) extras.testimonial = club.testimonial;

if (Object.keys(extras).length === 0) {
    // Nothing set — leave any stale file in place removed so a fetch 404s
    // cleanly instead of serving stale content from a prior build.
    fs.rmSync(outPath, { force: true });
    console.log("derive-home-content: no heroEyebrow/process/testimonial set in club.json — skipping");
    process.exit(0);
}

fs.mkdirSync(path.join(ROOT, "images"), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(extras, null, 2), "utf8");
console.log("derive-home-content: wrote images/home-content.json");
