# Fix-It Forward: Broken Store Challenge
# BYTEBAZAAR | Glow Tech Beauty
Empowering the next generation of beauty through immersive commerce.

ByteBazaar is a futuristic, high-performance e-commerce platform built for the Fix-It Forward Challenge. The website contains aesthetics and seamless user functionality, featuring an automated Eid discount system and an AI-driven concierge.
---

# 🔗 Project Links
Deployment Link: (https://byte-bazaar-chi.vercel.app/)

Demo Video:

# 🛠️ Technologies Used
*HTML5/CSS3:* Utilized CSS Variables for the design system and Flexbox for the adaptive cart layout.

*JavaScript:* Core logic for state management (cart), dynamic sorting, and the chatbot's decision tree.

*Intersection Observer API:* Used for high-performance scroll-triggered animations.

*YouTube Data API Interface:* Background hero video integration for immersive branding.

# ✨ Key Enhancements & Features
*Eid Special Logic:* A global price processor that automatically applies a 30% discount across the store, displaying both original and sale prices.

*Dynamic Sorting Engine:* A custom sorting algorithm that rearranges the DOM without page refreshes (Price: Low to High, High to Low, and Recommended).

*AI Beauty Concierge:* A built-in chat interface that responds to user keywords (e.g., "discount", "lip") to drive conversions.

Immersive Micro-interactions:

*Custom Glowing Cursor:* A blurring follower that enhances the "Glow Tech" theme.

*Holographic Product Cards:* CSS-based light-sweep animations on hover.

*Confetti Checkout*:* A celebratory visual feedback system upon order completion.

# 🛠️ Key Fixes
*Cart Layout Overflow:* Fixed a critical UI bug where the "Total" and "Checkout" button were being pushed off-screen. Implemented a Flexbox-column strategy with a scrollable cart__body to ensure the checkout area remains sticky at the bottom regardless of item count.

*Animation Persistence:* Resolved an issue where sorting products caused the scroll animations to break. Re-initialized the IntersectionObserver within the render function to ensure new elements are properly tracked.

*Unique ID Conflict:* Replaced standard array indexing with a Date.now() + Math.random() generator for cart items to prevent multiple items from being deleted simultaneously when clicked.

# 🚀 Setup & Installation
1. Fork & Clone:
The project began by forking the original repository to establish a clear, independent commit history for the hackathon.

Clone your forked repository
git clone https://github.com/[JoannaAldrin]/byte-bazaar.git

Enter the directory
cd byte-bazaar

2. Environment Cleaning:
To ensure a "Clean-working code" environment:

*Removed legacy CSS:* Stripped out redundant styles to reduce the CSS footprint.

*Refactored Logic:* Transitioned from hard-coded product lists to a dynamic rendering engine in app.js.

*Asset Optimization:* Verified all image paths and video embeds were using secure HTTPS protocols for deployment readiness.

3. Local Development Fixes:

To run the environment exactly as it was developed:

-Open the folder in VS Code.

-Launch via Live Server to test the IntersectionObserver animations and the responsive Cart Drawer.

-No external libraries or npm packages are required—the project runs on a zero-dependency Vanilla JS stack for maximum speed.

4. Vercel Production Deployment:

The final stage of the setup was the production build:
*Configuration:* The project was linked to Vercel via GitHub for Continuous Integration (CI).

*Fix verification:* The "Checkout Button Overflow" fix was tested specifically on the live Vercel build to ensure mobile responsiveness across all devices.

Developed By
Joanna Aldrin & Sandra Aldrin
