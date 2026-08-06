# Editing your club's website with Pages CMS

This is the guide for **club officers** editing this site's content. You don't
need to know any code or Git — everything below happens through a web page.

## Logging in

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with the
   GitHub account you were invited with.
2. You should see one project for your club. Open it. (If you don't see a
   project, or you get an access error, ask whoever set up your site to check
   that you've been added as a collaborator on your club's repo and to your
   club's Pages CMS project.)
3. You'll land on two sections in the sidebar: **Content** and **Media**.

## Content — your club's info

Open **Content → Club**. This is a form with every editable piece of your
site's content. A field-by-field guide:

| Field | What it controls |
|---|---|
| Club Name | Shown in the site header/title and browser tab |
| Advisor Name | Listed on the site (leave blank if you don't want to show one) |
| Description | The main paragraph introducing your club |
| Meeting Time | Shown wherever meeting info appears |
| Site Mode | Leave this alone unless you were specifically told to change it. "Dynamic" is the normal choice; "Single" is legacy and shouldn't be picked without a reason |
| Tagline | Short line shown near your club name |
| Hero Image | The big banner image at the top of the site |
| More Tab Lead Text | Intro text shown at the top of the "More" page |
| Theme | Your site's colors and fonts (see below) |
| Quick Links | Buttons/links shown near the top of the site (e.g. a signup form, Instagram) |
| Officers | Your officer roster — name, role, and photo |
| Events | Upcoming/past events — title, date, description |
| Awards | Club awards/achievements — title, year, description |
| Gallery Images | Photos shown in your club's gallery |

**Theme colors**: enter colors as hex codes (the `#rrggbb` format), e.g.
`#2b6cb0`. If you're not sure what to put, ask someone with a bit of design
sense to pick colors, or leave the existing values alone. **Fonts**: type the
exact name of a font from [Google Fonts](https://fonts.google.com) (e.g.
`Inter`, `Newsreader`) — misspelled font names silently fall back to a
default font.

**Lists** (Quick Links, Officers, Events, Awards, Gallery Images): click
**+ Add** to add an entry, the trash icon to remove one, and drag to reorder.
For Awards, the **"Pin to Home page Awards teaser"** checkbox controls
whether that award shows up in the small preview on your home page — it
doesn't affect whether the award appears on the full Awards list either way.

## Media — uploading images

Open **Media** to upload images directly, or upload inline while editing an
image field (Hero Image, a Quick Link's icon, an Officer's photo, Gallery
Images) by clicking the field and choosing **Upload**.

- Accepted formats: jpg, jpeg, png, webp, gif, svg.
- Don't worry about file size or hidden photo metadata (camera model, GPS
  location, etc.) — every image is automatically compressed and stripped of
  that metadata when your site is built, before it's ever publicly visible.
- Gallery Images has a 60-photo cap.

## Saving and publishing

Pages CMS saves changes as you go, but nothing goes live until you hit
**Save/Commit** (wording may vary slightly by field/section). Once saved:

- Your change is committed to your site's repo.
- The live site automatically rebuilds and redeploys — this usually takes
  well under a minute, occasionally a couple of minutes.
- If your change isn't showing up after a few minutes, try a hard refresh
  (Ctrl+Shift+R / Cmd+Shift+R) before assuming something's wrong — browsers
  cache pages aggressively.

## Things to avoid

- Don't edit the "Site Mode" field unless you were told to and know why.
- There's no CMS field for anything under a `generator/` folder in your
  repo — that's the shared engine code, not your content, and isn't
  something you should ever need to touch.
- If something looks broken after a save, don't panic — every change is a
  normal Git commit, so it can always be looked at and reverted by whoever
  manages your site's repo.

## Getting help

If you're locked out, see another club's content, or hit anything that looks
like a bug, contact whoever administers your organization's sites — don't
try to fix repo/GitHub access issues yourself.
