<!-- File: docs/README.md -->

# KSchema Documentation Hub

Welcome to the **KSchema** documentation hub. This directory contains the design specifications, architectural guidelines, processing pipeline descriptions, roadmaps, and decision logs that shape the KSchema project ecosystem.

---

## 📚 Table of Contents

### 1. [KSchema Architecture](ARCHITECTURE.md)
An overview of the high-level architecture of KSchema, illustrating how an Express.js application is discovered, read, and parsed into a canonical Knowledge Graph.

### 2. [Story Model (Recommended Architecture)](STORY_MODEL.md)
A deep-dive into the recommended design pattern where **Stories** (e.g., Folder Story, File Story, Route Story, Endpoint Story) are treated as the primary objects.

### 3. [KSchema Processing Pipeline](PIPELINE.md)
Detailed walkthrough of the multi-stage, in-memory pipeline (Discover ➔ Read ➔ Extract ➔ Parse ➔ Build Story ➔ Merge ➔ Generate).

### 4. [KSchema Dependency Tree](DEPENDENCY_TREE.md)
Visual representation of the package hierarchy and execution flow among KSchema's modular packages (infrastructure, parsing, orchestration).

### 5. [ADR-001: Knowledge Graph as the Single Source of Truth](ADR-001-KNOWLEDGE-GRAPH-AS-SOURCE-OF-TRUTH.md)
The Architectural Decision Record (ADR) establishing the unified Knowledge Graph as the heart of the framework to prevent consumer divergence.

### 6. [KSchema Roadmap](ROADMAP.md)
The multi-phase roadmap outline to guide development from basic endpoint discovery to full AI-ready knowledge representation and automated refactoring.

---

## 🛠️ Data Schemas

- **[Knowledge Graph Schema](knowledge-graph.schema.json)**: The formal JSON Schema definition mapping out the structure of the compiled Knowledge Graph.
- **[Sample Knowledge Graph JSON](sample-knowledge-graph.json)**: A concrete mock instance representing the schema in action for reference.

---

## 🖥️ Interactive Explorers

Explore the auto-generated documentation portals locally:
- **[Interactive API Explorer (v1)](v1/index.html)**: Legacy interface.
- **[Interactive API Explorer (v2)](v2/index.html)**: Current interactive portal utilizing modern aesthetics and mock clients.
