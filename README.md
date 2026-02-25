# Fix-It Forward: Broken Store Challenge

Welcome to **Fix-It Forward**.

This repository contains a deliberately incomplete and fragile front-end for a small e‑commerce experience. The goal of the event is to transform this unstable prototype into a polished, reliable, and production-ready online store.

---

## Event Concept

**Fix-It Forward** is a focused website transformation event. You start with a visually appealing but unreliable store and push it all the way to a professional, usable, and market-ready experience.

You will:

- Analyse and understand an existing front-end implementation.
- Repair inconsistencies and flaws in behaviour, experience, and structure.
- Extend the project with real backend capabilities and additional features.

By the end, the store should feel like something you would be comfortable putting in front of real customers.

---

## Scenario

You have inherited a front-end prototype for a fictional shop called **Fix-It Forward Shop**. It looks reasonably modern and seems to work at a glance, but it was built quickly for a demo and never hardened for real use.

Your job during the event is to:

- Turn this into a **smooth, efficient, fully functional** online store prototype.
- Treat the current codebase as a starting point, not a finished product.

There is no backend yet: all data is currently in the front-end. Part of your challenge is designing and wiring up proper backend behaviour.

---

## Your Objectives

During the event, aim to achieve the following:

1. **Aesthetically refined**
   - Maintain or improve the visual quality of the UI.
   - Ensure the design feels consistent, intentional, and on-brand for an online store.

2. **Fully functional**
   - Make the store behave like a real e‑commerce experience from a user’s point of view.
   - Support browsing products, adding them to a cart, reviewing a summary, and completing a checkout flow.

3. **Technically structured**
   - Organise the code so that it is maintainable and extensible.
   - Prepare the project so that future engineers could comfortably build on top of it.

4. **Ready for real‑world application**
   - Treat performance, accessibility, and resilience as first‑class concerns.
   - Design your changes as if this store might eventually receive real traffic.

---

## What You’re Given

This repo currently contains:

- `index.html`  
  The main application shell and markup for the store.

- `styles.css`  
  Global styles and layout rules for the site.

- `app.js`  
  Front‑end logic for rendering products, managing a cart, and handling the basic flow.

There is intentionally **no backend** in this repository yet.

---

## What You Are Expected To Build

You are encouraged to:

- Stabilise and refine the existing front-end experience.
- Introduce a backend of your choice (for example: a simple API, a small database, or a mocked service layer) to support:
  - Product listing and retrieval.
  - Cart or order persistence.
  - A basic checkout or order‑submission flow.
- Add any extra features that you think make the experience more realistic or delightful.

Technology choices for the backend and any additional tooling are up to you, as long as the result is coherent and demonstrable.

---

## How to Run the Project

This project is a static front-end and can be opened directly in a browser.

**Option 1: Open the file directly**

1. Open the repository folder in your editor.  
2. Open `index.html` in your browser (for example, via your editor’s “Open in Browser” command or by double‑clicking the file in your file explorer).

**Option 2: Run a simple local web server**

You may prefer to serve the files over HTTP (for example, if you add API endpoints later):

1. From the project root, start a small static server of your choice (for example, using Python, Node, or your preferred tooling).
2. Visit the URL that your server prints (commonly `http://localhost:8000` or similar).

No build step is required for the initial version: the app is plain HTML, CSS, and JavaScript.

---

## Suggested Extensions (Optional)

Once the basic experience feels solid, consider exploring:

- User accounts and saved carts.
- Basic inventory management (stock levels, availability).
- Simple promotions or discount logic.
- Order confirmation views and lightweight tracking.
- Improved analytics or event tracking.

These are not mandatory, but they mirror real‑world expectations for a more complete store.

---

## Ground Rules

- You are free to refactor, reorganise, rename, and restructure the codebase as you see fit.
- You may introduce frameworks, libraries, or build tooling if it helps you deliver a better result.
- Focus on clarity, maintainability, and correctness.
- Document any important decisions so that another engineer can quickly understand your approach.

Have fun transforming this prototype into something truly robust and ready to ship.
