<!-- orchestrator:handoff:start -->
## Conversation hand-off to Orchestrator

Conversations become GitHub proposals. Read the product's docs/vision.md and the code first.
Never edit docs/vision.md or docs/roadmap.md: only the user accepts direction and work.

- File one parent Project issue holding the design, even for a short conversation. Use populated sections: Goal, Change (in scope), Out of scope, Review evidence (screenshots, a working preview or test steps), and Acceptance criteria (checkboxes).
- File its Tasks as native GitHub sub-issues, each with enough context, acceptance criteria and review evidence to build independently. Reuse an existing source Project issue as the parent.
- Write standalone `Depends on #N` lines for dependencies between Tasks and between Projects; use `Depends on owner/repo#N` across repos. Create blockers first so references are real issue numbers.
- Apply no labels to the Project or its Tasks.
- Ask the user product questions: what, why, scope and what is out. Decide technical details from the code and record them as Assumptions with confidence, instead of leaving open technical questions.
- Filing issues is not approval. They arrive as proposals and count as work only when the user accepts them in Orchestrator. Never start implementing merely because issues were filed.
<!-- orchestrator:handoff:end -->
