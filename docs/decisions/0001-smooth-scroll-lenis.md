# 1. Smooth scroll with Lenis

- Status: accepted
- Date: 2026-11-25

## Context

The site needs smooth scrolling everywhere, with mobile scrolling that feels exactly native, and
many more scroll-linked animations will be added.

## Decision

Use Lenis for page scroll.

- Lenis drives the browser's own scroll, so sticky, anchors, accessibility and CSS scroll-driven
  animations keep working. Transform-based scrollers (Locomotive Scroll, GSAP ScrollSmoother)
  were ruled out because they break those.
- Touch keeps native scroll (`syncTouch: false`), because replacing native mobile inertia is what
  makes smooth scroll feel wrong on phones.
- CSS `scroll-behavior: smooth` was ruled out: it only smooths anchor jumps, and it conflicts
  with Lenis.

## Consequences

- Accepted Lenis limitations: Safari caps it at 60fps, wheel smoothing stops over iframes, and
  CSS scroll-snap needs `lenis/snap`.
