# Express + Angular Monorepo Template

<!-- High-level description of what this repo is -->

This repository is a **full-stack monorepo skeleton** using **Nx** and **Yarn 4 Workspaces**, preconfigured for **Angular 20** on the frontend and **Express 5** on the backend.  
It’s designed for scalability, fast builds, and a clean developer experience out of the box.

---

## Table of Contents

<!-- Quick navigation for README -->

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Repository Structure](#repository-structure)
4. [Installation](#installation)
5. [Development](#development)
6. [Nx Commands](#nx-commands)
7. [Cheat Sheet](#cheat-sheet)

---

## Overview

<!-- Explains the structure and intent -->

The repository is structured as a **package-based Nx monorepo**, with two main workspaces:

- **packages/client** – Angular 20 + Angular Material, NgRx, TypeScript 5.8.3
- **packages/server** – Express 5 + TypeScript backend with hot-reload in dev mode

Nx manages tasks like serving, building, testing, and caching across both workspaces.  
Yarn 4 handles dependency management and workspace linking.

**Core features:**

- **One command** to run both frontend and backend in dev mode
- **Parallel builds & caching** with Nx
- **TypeScript 5.8.3** pinned at root for compatibility
- Prettier formatting and optional ESLint setup
- Ready for scalable full-stack development

---

## Technology Stack

<!-- Lists the core tech for both apps and tooling -->

**Frontend (Client)**

- Angular 20 + Angular CLI
- Angular Material (indigo-pink theme)
- NgRx 20 for state management
- RxJS 7

**Backend (Server)**

- Express 5
- TypeScript build with tsc
- ts-node-dev for hot-reload in dev mode

**Monorepo Tooling**

- Nx (task runner, dependency graph, caching)
- Yarn 4.9.2 (nodeLinker: node-modules)
- Prettier for formatting
- Jest for testing
- Husky + lint-staged for pre-commit hooks

---

## Repository Structure

<!-- Gives a quick glance at how the repo is organized -->

    .
    ├── packages/
    │   ├── client/       # Angular 20 frontend
    │   └── server/       # Express 5 backend
    ├── nx.json           # Nx workspace configuration
    ├── package.json      # Root package + workspace config
    ├── tsconfig.base.json# Shared TS config
    └── yarn.lock

---

## Installation

<!-- How to get it running locally -->

    git clone <repository-url>
    cd <repo-folder>
    yarn install

---

## Development

<!-- Running the apps -->

Run both apps with:  
 yarn dev  
This runs **client** and **server** in parallel using Nx’s run-many and streams both logs.

Run each individually:  
 yarn nx run client:serve  
 yarn nx run server:serve

---

## Nx Commands

<!-- Useful Nx operations -->

- **Build all projects**  
   yarn nx run-many -t build --all --parallel

- **Build only affected projects**  
   yarn nx affected -t build

- **View dependency graph**  
   yarn nx graph

- **Clean build outputs**  
   yarn clean

---

## Cheat Sheet

<!-- Reference for adding deps and running scripts -->

**Add a dependency to one workspace**  
 yarn workspace <workspace-name> add <package-name>

**Add a dev dependency to one workspace**  
 yarn workspace <workspace-name> add -D <package-name>

**Add a dependency to all workspaces**  
 yarn workspaces foreach add <package-name>

**Add a dev dependency at root (shared)**  
 yarn add -D <package-name>

**Run tests in all workspaces**  
 yarn workspaces run test

**Run tests in a specific workspace**  
 yarn workspace <workspace-name> test

**Format all code**  
 yarn prettier:write

**Check formatting**  
 yarn prettier:check

---

This template is intentionally minimal so you can scale and customize it. Nx will infer most configurations automatically, but you can add project.json files in each workspace when you need finer control over tasks and targets.
