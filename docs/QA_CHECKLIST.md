# Manual QA Checklist

Use this checklist before release, deployment, or merging a high-impact UI change. Mark every item as passed, failed, or not applicable, and create follow-up issues for any failed checks.

## Release Info

- [ ] Release version or PR:
- [ ] Tester:
- [ ] Date:
- [ ] Environment: local / preview / production
- [ ] Browser and device:

## Automated Gates

Run these before manual verification.

```bash
npm run lint
npm test
npm run test:coverage
npm run build
npm run test:e2e
```

- [ ] Lint completes with 0 errors and 0 warnings.
- [ ] Unit and integration tests pass.
- [ ] Coverage generation completes successfully.
- [ ] Production build completes successfully.
- [ ] E2E tests pass.

## Layout & Responsiveness

Check these pages at desktop, tablet, and mobile sizes:

- `/`
- `/about`
- `/projects`
- `/projects/interiorfilm`
- `/experience`
- `/contact`

Desktop:

- [ ] Sections are aligned and spacing is consistent.
- [ ] Header, content, and footer do not overlap.
- [ ] Cards, buttons, and images keep stable dimensions.
- [ ] Animations do not cause layout shifts or unreadable text.

Tablet:

- [ ] Grid layouts collapse cleanly.
- [ ] Cards remain readable and tappable.
- [ ] Images retain correct aspect ratios.
- [ ] Section spacing feels balanced.

Mobile:

- [ ] No horizontal scrolling.
- [ ] Text wraps cleanly without clipping.
- [ ] Buttons and links are easy to tap.
- [ ] Fixed buttons do not cover important content.
- [ ] Footer content stacks cleanly.

## Navigation

- [ ] Logo links back to `/`.
- [ ] Header links route to the correct pages.
- [ ] Active navigation state is correct after route changes.
- [ ] Mobile menu opens.
- [ ] Mobile menu closes.
- [ ] Mobile menu links navigate correctly.
- [ ] Header contact CTA routes to `/contact`.
- [ ] Footer social links render and point to expected URLs.
- [ ] Browser back and forward navigation works as expected.

## Projects

- [ ] `/projects` loads successfully.
- [ ] Project cards render title, category, description, technologies, and links.
- [ ] Project search/filter behavior works.
- [ ] Grid/list view controls work if present.
- [ ] Dynamic project detail pages render correctly.
- [ ] Project detail CTAs work.
- [ ] Project image galleries or previews render correctly.
- [ ] Invalid project routes show the project-not-found fallback.

## Forms & Interactions

Contact form:

- [ ] Empty submission shows required-field validation.
- [ ] Invalid email shows email validation.
- [ ] Valid submission shows loading state.
- [ ] Valid submission shows success state.
- [ ] Form resets or returns to usable state after success.

CTA and floating actions:

- [ ] CTA buttons route to the expected pages or anchors.
- [ ] Email links open the expected `mailto:` target.
- [ ] WhatsApp button opens the expected WhatsApp URL.
- [ ] Scroll-to-top button appears after scrolling.
- [ ] Scroll-to-top button returns the page to the top.

## Assets & Media

- [ ] Images load on all critical pages.
- [ ] No broken image icons are visible.
- [ ] Important images have meaningful alt text.
- [ ] Icons render correctly.
- [ ] Project images are not stretched or distorted.
- [ ] Browser console does not show image optimization errors.
- [ ] Favicon and app icons load.

## Content Verification

- [ ] Name, role, and headline copy are accurate.
- [ ] Contact email and phone number are accurate.
- [ ] Project descriptions are accurate and current.
- [ ] Technology stacks are accurate.
- [ ] Links to GitHub, LinkedIn, demos, and social profiles are correct.
- [ ] Spelling, grammar, punctuation, and apostrophes are correct.
- [ ] No placeholder text or test content is visible.

## SEO

- [ ] Each main page has an appropriate title.
- [ ] Each main page has an appropriate meta description.
- [ ] Canonical URLs are correct.
- [ ] Open Graph title, description, and image are correct.
- [ ] Twitter card metadata is correct.
- [ ] Dynamic project metadata matches the selected project.
- [ ] Unknown project metadata does not expose incorrect project data.

## Accessibility

- [ ] Page can be navigated with keyboard only.
- [ ] Focus states are visible.
- [ ] Interactive controls have accessible names.
- [ ] Images have useful alt text or are decorative as appropriate.
- [ ] Form fields have labels.
- [ ] Validation messages are visible and understandable.
- [ ] Color contrast is readable in light and dark areas.
- [ ] Headings follow a logical order.
- [ ] Mobile menu can be operated with keyboard.

## Browser Testing

Run smoke checks in:

- [ ] Chrome
- [ ] Firefox
- [ ] Edge
- [ ] Safari, if available

For each browser:

- [ ] Home page loads.
- [ ] Header navigation works.
- [ ] Projects page and one project detail page load.
- [ ] Contact form validation works.
- [ ] WhatsApp button works.
- [ ] No major visual regressions are present.

## Production Verification

After deployment or preview build:

- [ ] Production URL loads successfully.
- [ ] Critical routes return successful responses.
- [ ] No console errors appear during normal navigation.
- [ ] No broken links are found in header, footer, project cards, or CTAs.
- [ ] Analytics or production-only scripts do not break rendering.
- [ ] Performance feels acceptable on mobile network throttling.
- [ ] Final smoke test passes for `/`, `/about`, `/projects`, `/experience`, and `/contact`.

## Sign-Off

- [ ] All required checks passed.
- [ ] Failed checks have linked issues.
- [ ] Release is approved.
