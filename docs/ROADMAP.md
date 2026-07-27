<!-- File: ROADMAP.md -->

# [KSchema Documentation Hub](README.md) / KSchema Roadmap

> Long-term roadmap for transforming an Express application into an AI-ready Knowledge Graph.

---

# Vision

```
Express Project

        ↓

Knowledge Graph

        ↓

Multiple Outputs
```

The Knowledge Graph is the only source of truth.

Everything else is generated.

---

# Phase 0 — Foundation ✅

Infrastructure packages.

Completed

- node-fs-recursive
- node-fs-read-content

Output

```
Array<FileObject>
```

---

# Phase 1 — Endpoint Discovery ✅

Packages

- kschema-pull-endpoints

Responsibilities

- Discover end-points.js
- Return endpoint file paths

Output

```
Array<FilePath>
```

---

# Phase 2 — Story Extraction ✅

Packages

- kschema-pull-methods

Responsibilities

- Parse router.get()
- Parse router.post()
- Parse router.put()
- Parse router.delete()
- Parse router.patch()

Output

```
Endpoint Stories
```

---

# Phase 3 — Route Discovery

Target

```
routes.js
```

Stories

- Router Story
- Mount Story
- Folder Story

Relationships

```
app.js

↓

routes.js

↓

end-points.js
```

---

# Phase 4 — App Discovery

Target

```
app.js
```

Stories

- Application Story
- Middleware Story
- Global Route Story

---

# Phase 5 — Import Discovery

Target

Every JavaScript file.

Stories

- Relative Import
- Package Import
- Dynamic Import

Example

```javascript
import fs from "fs"

↓

Import Story
```

---

# Phase 6 — Export Discovery

Stories

- Default Export
- Named Export

Example

```javascript
export default

↓

Export Story
```

---

# Phase 7 — Consumption Discovery

Stories

Who calls whom?

Example

```
router.get()

↓

funcFromGet()

↓

database()

↓

JSON Response
```

---

# Phase 8 — Function Discovery

Stories

Every function becomes a node.

Properties

- Name
- Arguments
- Return Type
- Consumers
- Producers

---

# Phase 9 — Controller Discovery

Future

Controllers

↓

Services

↓

Repositories

↓

Database

Everything becomes connected.

---

# Phase 10 — Knowledge Graph

Merge every story.

```
Folders

+

Files

+

Imports

+

Exports

+

Routes

+

Endpoints

+

Functions

+

Dependencies

↓

Knowledge Graph
```

---

# Phase 11 — Documentation

Generate automatically

- README
- HTML Documentation
- API Explorer
- Dependency Tree
- Architecture Diagram

---

# Phase 12 — Swagger

Generate automatically

```
Knowledge Graph

↓

Swagger/OpenAPI
```

Swagger should never parse source code directly.

It consumes the Knowledge Graph.

---

# Phase 13 — AI

Future vision

```
Knowledge Graph

↓

AI Assistant

↓

Ask Questions
```

Examples

> Show all GET endpoints.

> Which function is never called?

> Which route reaches Customer Repository?

> Show dead code.

> Which imports are unused?

---

# Phase 14 — Refactoring

Automatic

- Rename
- Move
- Dependency Analysis
- Circular Dependency Detection
- Impact Analysis

---

# Success Criteria

The framework should answer architecture questions without reading source code again.

Examples

✓ Where is this endpoint?

✓ Which routes call this controller?

✓ Which controller calls this repository?

✓ Which functions are unused?

✓ Which folders are disconnected?

✓ Generate Swagger.

✓ Generate HTML.

✓ Generate Mermaid.

✓ Generate Dependency Graph.

✓ Feed AI.

---

# Guiding Principles

1. Read once.
2. Parse once.
3. Build stories.
4. Merge stories.
5. Generate everything from the Knowledge Graph.

---

# End Goal

```
Source Code

        ↓

Knowledge Graph

        ↓

Documentation
Swagger
HTML
Dependency Graph
Mermaid
AI Context
Architecture Reports
Refactoring Tools
```

The Knowledge Graph is the heart of KSchema.

---

## 🔗 Related Resources

- **[Documentation Hub](README.md)**: Explore all design manuals.
- **[Architecture](ARCHITECTURE.md)**: High-level architectural overview.
- **[Story Model](STORY_MODEL.md)**: Learn about treating Stories as primary data objects.
- **[Processing Pipeline](PIPELINE.md)**: Read how data flows stage by stage.
- **[Dependency Tree](DEPENDENCY_TREE.md)**: Understand package structure and layout.
- **[ADR-001](ADR-001-KNOWLEDGE-GRAPH-AS-SOURCE-OF-TRUTH.md)**: Read the Architectural Decision Record.