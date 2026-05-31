# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| implementation, commit splitting, chained PRs, or keeping tests and docs with code | work-unit-commits | /home/david/.config/opencode/skills/work-unit-commits/SKILL.md |
| PR feedback, issue replies, reviews, Slack messages, or GitHub comments | comment-writer | /home/david/.config/opencode/skills/comment-writer/SKILL.md |
| writing guides, READMEs, RFCs, onboarding, architecture, or review-facing docs | cognitive-doc-design | /home/david/.config/opencode/skills/cognitive-doc-design/SKILL.md |
| PRs over 400 lines, stacked PRs, review slices | chained-pr | /home/david/.config/opencode/skills/chained-pr/SKILL.md |
| creating GitHub issues, bug reports, or feature requests | issue-creation | /home/david/.config/opencode/skills/issue-creation/SKILL.md |
| creating, opening, or preparing PRs for review | branch-pr | /home/david/.config/opencode/skills/branch-pr/SKILL.md |
| new skills, agent instructions, documenting AI usage patterns | skill-creator | /home/david/.config/opencode/skills/skill-creator/SKILL.md |
| Go tests, go test coverage, Bubbletea teatest, golden files | go-testing | /home/david/.config/opencode/skills/go-testing/SKILL.md |
| judgment day, dual review, adversarial review, juzgar | judgment-day | /home/david/.config/opencode/skills/judgment-day/SKILL.md |

## Compact Rules

### work-unit-commits
- Commit by work unit: each commit represents a deliverable behavior, fix, migration, or docs unit
- Do not commit by file type (avoid `models`, then `services`, then `tests`)
- Keep tests with the code they verify; keep docs with the feature they document
- Tell a story: reviewer should understand why each commit exists from its diff and message
- Use conventional commits: `type(scope): description` (feat, fix, chore, docs, refactor, perf, test, build, ci, revert)
- If SDD tasks forecast >400-line change, group commits into chained PR slices before implementation

### comment-writer
- Start with the actionable point; do not recap the whole PR before feedback
- Be warm and direct; sound like a thoughtful teammate, not a corporate bot
- Keep it short: 1-3 short paragraphs or a tight bullet list
- Explain the technical why when asking for a change; avoid pile-ons
- Match thread language (Spanish: use Rioplatense voseo: podes, tenes, fijate, dale)
- No em dashes; use commas, periods, or parentheses instead

### cognitive-doc-design
- Lead with the answer: put the decision, action, or outcome first
- Progressive disclosure: happy path first, then details, edge cases, references
- Chunking: group related info into small sections; keep flat lists short
- Signposting: use headings, labels, callouts, and summaries for navigation
- Recognition over recall: use tables, checklists, examples over prose
- State what to review first; state what is intentionally out of scope

### chained-pr
- Split PRs over 400 changed lines unless maintainer accepts `size:exception`
- Keep each PR reviewable in about 60 minutes; one deliverable work unit per PR
- State start, end, prior dependencies, follow-up work, and out-of-scope in every chained PR
- Every child PR must include a dependency diagram marking the current PR with `📍`
- Use Feature Branch Chain with tracker when feature must integrate before main
- Use Stacked PRs to main when each slice can land independently

### issue-creation
- Blank issues are disabled; MUST use bug_report.yml or feature_request.yml template
- Every issue gets `status:needs-review` automatically on creation
- A maintainer MUST add `status:approved` before any PR can be opened
- Questions go to Discussions, not issues
- Search existing issues before creating new ones

### branch-pr
- Every PR MUST link an approved issue (no exceptions)
- Every PR MUST have exactly one `type:*` label
- Branch naming: `type/description` matching `^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert)/[a-z0-9._-]+$`
- Conventional commits: `^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\([a-z0-9\._-]+\))?!?: .+`
- No `Co-Authored-By` trailers in commits
- Automated checks must pass before merge

### skill-creator
- Create a skill when a pattern is used repeatedly and AI needs guidance
- A skill is a runtime instruction contract for an LLM, not human documentation
- Frontmatter MUST include: name, description (one physical line, <=250 chars, trigger-first), license, metadata.author, metadata.version
- Body sections order: Activation Contract, Hard Rules, Decision Gates, Execution Steps, Output Contract, References
- Target 180-450 tokens per skill; references to local files; put templates/schemas in `assets/`

### go-testing
- Prefer table-driven tests with `t.Run(tt.name, ...)`
- Test behavior and state transitions, not implementation trivia
- Use `t.TempDir()` for filesystem tests; never rely on a real home directory
- Keep integration tests skippable with `testing.Short()`
- Golden files: update only through the repo `-update` flag and rerun tests without it
- For Bubbletea: test `Model.Update()` directly; use `teatest` only for interactive flows

### judgment-day
- Launch two blind judges in parallel with identical target and criteria
- Classify warnings as `WARNING (real)` only if normal intended use can trigger them
- Ask before fixing Round 1 confirmed issues; re-judge in parallel after any fix
- Terminal states: `JUDGMENT: APPROVED` or `JUDGMENT: ESCALATED`
- After 2 fix iterations with remaining issues, ask user whether to continue

## Project Conventions

No convention files found in the project root.

## SDD Skills (available but not listed above — SDD workflow only)

| Phase | Skill | Path |
|-------|-------|------|
| Initialize | sdd-init | /home/david/.config/opencode/skills/sdd-init/SKILL.md |
| Explore | sdd-explore | /home/david/.config/opencode/skills/sdd-explore/SKILL.md |
| Propose | sdd-propose | /home/david/.config/opencode/skills/sdd-propose/SKILL.md |
| Spec | sdd-spec | /home/david/.config/opencode/skills/sdd-spec/SKILL.md |
| Design | sdd-design | /home/david/.config/opencode/skills/sdd-design/SKILL.md |
| Tasks | sdd-tasks | /home/david/.config/opencode/skills/sdd-tasks/SKILL.md |
| Apply | sdd-apply | /home/david/.config/opencode/skills/sdd-apply/SKILL.md |
| Verify | sdd-verify | /home/david/.config/opencode/skills/sdd-verify/SKILL.md |
| Archive | sdd-archive | /home/david/.config/opencode/skills/sdd-archive/SKILL.md |
| Onboard | sdd-onboard | /home/david/.config/opencode/skills/sdd-onboard/SKILL.md |

Built: 2026-05-18