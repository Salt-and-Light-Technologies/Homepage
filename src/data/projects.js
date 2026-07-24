/**
 * Portfolio / "Work" page project data.
 *
 * This is intentionally a plain, easy-to-extend array (not hardcoded markup)
 * per the design handoff spec — add a new object here to add a new project
 * card to the Work page. `image` and `moreScreens` paths are relative to
 * the app's public/ directory.
 */
export const projects = [
  {
    id: 'jobsuck',
    name: 'JobSuck.com',
    kind: 'Website',
    tagline: 'Job searching sucks. We fix it.',
    description:
      'An AI-powered job search platform: it tailors your resume and cover letter to a specific posting, finds and tracks the jobs worth applying to, autofills applications, and tells you exactly what skills stand between you and the role you want.',
    url: 'https://jobsuck.com',
    stack: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API'],
    status: 'Live',
    year: '2026',
    image: '/work/jobsuck-hero.png',
    moreScreens: ['/work/jobsuck-tailoring.png', '/work/jobsuck-search.png', '/work/jobsuck-copilot.png'],
  },
  {
    id: 'miclocker',
    name: 'MicLocker',
    kind: 'iOS App',
    tagline: 'Where entertainment pros connect, book, and get discovered.',
    description:
      'A social network built for the entertainment industry — musicians, producers, engineers, and venues build a profile, showcase their work, and find each other through a live map of nearby pros. It also handles the practical side: audition postings, in-app messaging, an availability calendar for booking sessions, and a marketplace for buying and selling gear.',
    url: 'https://apps.apple.com/us/app/miclocker/id6768870077',
    stack: ['Swift / SwiftUI', 'FastAPI', 'PostgreSQL', 'Stripe Connect'],
    status: 'Live',
    year: '2026',
    // No landscape product screenshot exists yet for this listing (brand new
    // App Store entry) — use the real app icon + official App Store badge as
    // the hero instead of a screenshot. See ProjectCard's `heroIcon` handling.
    heroIcon: '/work/miclocker-icon.jpg',
    image: null,
    moreScreens: ['/work/miclocker-talent.jpg', '/work/miclocker-discover.jpg', '/work/miclocker-calendar.jpg'],
  },
]
