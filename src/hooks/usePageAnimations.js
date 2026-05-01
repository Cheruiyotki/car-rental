import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function usePageAnimations(dependency) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const root = rootRef.current;
    if (!root) {
      return undefined;
    }

    const context = gsap.context(() => {
      const heroItems = gsap.utils.toArray("[data-gsap-hero-item]", root);

      if (heroItems.length) {
        gsap.fromTo(
          heroItems,
          {
            autoAlpha: 0,
            y: 28,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.14,
            ease: "power3.out",
            clearProps: "all",
          }
        );
      }

      const sections = gsap.utils.toArray("[data-gsap-section]", root);

      sections.forEach((section) => {
        const sectionItems = gsap.utils.toArray(
          "[data-gsap-section-item]",
          section
        );

        if (!sectionItems.length) {
          return;
        }

        gsap.fromTo(
          sectionItems,
          {
            autoAlpha: 0,
            y: 36,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      const cardGroups = gsap.utils.toArray("[data-gsap-card-group]", root);

      cardGroups.forEach((group) => {
        const cards = gsap.utils.toArray("[data-gsap-card]", group);

        if (!cards.length) {
          return;
        }

        gsap.fromTo(
          cards,
          {
            autoAlpha: 0,
            y: 26,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          }
        );
      });

      const standaloneCards = gsap
        .utils.toArray("[data-gsap-card]", root)
        .filter((card) => !card.closest("[data-gsap-card-group]"));

      standaloneCards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 22,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, root);

    return () => {
      context.revert();
    };
  }, [dependency]);

  return rootRef;
}
