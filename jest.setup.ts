import "@testing-library/jest-dom";
import React from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & {
    fill?: boolean;
    priority?: boolean;
  }) => {
    const imageProps = { ...props };
    delete imageProps.fill;
    delete imageProps.priority;

    return React.createElement("img", {
      alt: props.alt ?? "",
      ...imageProps,
    });
  },
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...props
  }: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string | { pathname?: string };
  }) => React.createElement(
    "a",
    { href: typeof href === "string" ? href : href.pathname, ...props },
    children,
  ),
}));

jest.mock("framer-motion", () => {
  const React = jest.requireActual("react") as typeof import("react");

  const passthrough = (Tag: keyof React.JSX.IntrinsicElements) => {
    const MotionComponent = ({
      children,
      ...props
    }: {
      children?: React.ReactNode;
    }) => {
      const rest = { ...(props as Record<string, unknown>) };

      delete rest.animate;
      delete rest.exit;
      delete rest.initial;
      delete rest.transition;
      delete rest.variants;
      delete rest.whileInView;
      delete rest.viewport;

      return React.createElement(Tag, rest, children);
    };

    MotionComponent.displayName = `MockMotion.${String(Tag)}`;
    return MotionComponent;
  };

  return {
    __esModule: true,
    AnimatePresence: ({ children }: { children: React.ReactNode }) =>
      React.createElement(React.Fragment, null, children),
    animate: jest.fn((_value, target, options) => {
      options?.onUpdate?.(target);
      return { stop: jest.fn() };
    }),
    motion: new Proxy(
      {},
      {
        get: (_target, prop: string) => passthrough(prop as keyof React.JSX.IntrinsicElements),
      },
    ),
    useMotionValue: (initial: number) => initial,
  };
});

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin = "";
  readonly thresholds: ReadonlyArray<number> = [];

  disconnect = jest.fn();
  observe = jest.fn();
  takeRecords = jest.fn((): IntersectionObserverEntry[] => []);
  unobserve = jest.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: jest.fn(),
});
