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
]
