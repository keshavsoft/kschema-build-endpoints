<!-- File: ADR-001-KNOWLEDGE-GRAPH-AS-SOURCE-OF-TRUTH.md -->

# [KSchema Documentation Hub](README.md) / ADR-001: Knowledge Graph as the Single Source of Truth

Status

```
Accepted
```

Date

```
2026-07-27
```

---

# Context

Initially, the goal of KSchema was to extract endpoint information from an Express application.

As the architecture evolved, it became clear that endpoints are only one aspect of the application's knowledge.

The application also contains

- Folder hierarchy
- File hierarchy
- Routes
- Imports
- Exports
- Function consumption
- Dependencies
- Controllers
- Services
- Models

If each output (Swagger, HTML, Documentation, AI) independently parses the source code, every generator duplicates work and eventually diverges.

---

# Decision

KSchema will build **one canonical Knowledge Graph**.

Every generator must consume this graph.

No generator should parse source code directly.

```
Source Code

↓

Knowledge Graph

↓

Everything Else
```

---

# Motivation

This provides

- One parsing engine
- One data model
- Multiple outputs
- Easy testing
- Easy extension
- Reduced maintenance

---

# Benefits

## Single Parsing Pass

Source code is read only once.

---

## Single Truth

Every consumer receives identical data.

Swagger, HTML, Mermaid, AI, and documentation remain synchronized.

---

## Extensibility

Adding support for

- Python
- Java
- NestJS
- Fastify
- Koa

requires only new Story Builders.

Generators remain unchanged.

---

## Testability

Every package can be tested independently.

Example

```
Read

↓

Extract

↓

Parse

↓

Story

↓

Knowledge Graph
```

Each stage has deterministic inputs and outputs.

---

# Consequences

The Knowledge Graph becomes the heart of the framework.

Every future package should either

```
Produce Stories
```

or

```
Consume the Knowledge Graph
```

Nothing should bypass it.

---

# Non-Goals

KSchema is **not**

- a runtime framework
- an Express replacement
- a dependency injection container
- an ORM

Its responsibility is understanding source code.

---

# Future

Future generators include

- Swagger Generator
- HTML Documentation
- Markdown Documentation
- Mermaid Diagrams
- Dependency Graphs
- Architecture Reports
- AI Context Builder
- Dead Code Analyzer
- Circular Dependency Detector

All will consume the same Knowledge Graph.

---

# Architecture

```
Project

↓

Discovery

↓

Read

↓

Extract

↓

Parse

↓

Story Builders

↓

Knowledge Graph

↓

Generators
```

---

# Decision Summary

> **Every package either produces knowledge or consumes knowledge.**

The Knowledge Graph is the contract between those two worlds.

---

# Notes

This ADR establishes the architectural foundation for every future KSchema package.

Any future design decision should be evaluated against one question:

> Does it strengthen the Knowledge Graph, or does it bypass it?

If it bypasses it, reconsider the design.

---

## 🔗 Related Resources

- **[Documentation Hub](README.md)**: Explore all design manuals.
- **[Architecture](ARCHITECTURE.md)**: High-level architectural overview.
- **[Story Model](STORY_MODEL.md)**: Learn about treating Stories as primary data objects.
- **[Processing Pipeline](PIPELINE.md)**: Read how data flows stage by stage.
- **[Dependency Tree](DEPENDENCY_TREE.md)**: Understand package structure and layout.
- **[Roadmap](ROADMAP.md)**: Explore planned development phases.