import { act, render, screen, waitFor } from "@testing-library/react";
import CTA from "../CTA";

class TriggerableIntersectionObserver implements IntersectionObserver {
  static instances: TriggerableIntersectionObserver[] = [];

  readonly root: Element | Document | null = null;
  readonly rootMargin = "";
  readonly thresholds: ReadonlyArray<number> = [];

  disconnect = jest.fn();
  observe = jest.fn();
  takeRecords = jest.fn((): IntersectionObserverEntry[] => []);
  unobserve = jest.fn();

  constructor(private readonly callback: IntersectionObserverCallback) {
    TriggerableIntersectionObserver.instances.push(this);
  }

  trigger() {
    this.callback(
      [
        {
          isIntersecting: true,
          intersectionRatio: 0.5,
          target: document.createElement("section"),
        } as IntersectionObserverEntry,
      ],
      this,
    );
  }
}

describe("CTA", () => {
  const rafCallbacks: FrameRequestCallback[] = [];

  beforeEach(() => {
    TriggerableIntersectionObserver.instances = [];
    rafCallbacks.length = 0;

    window.IntersectionObserver = TriggerableIntersectionObserver;
    global.IntersectionObserver = TriggerableIntersectionObserver;

    jest.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      rafCallbacks.push(callback);
      return rafCallbacks.length;
    });
    jest.spyOn(window.performance, "now").mockReturnValue(0);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders calls to action and animates trust indicators when visible", async () => {
    render(<CTA />);

    expect(screen.getByRole("link", { name: /start a project/i })).toHaveAttribute(
      "href",
      "/contact",
    );
    expect(screen.getByRole("link", { name: /email me/i })).toHaveAttribute(
      "href",
      "mailto:yohan.indrawansha2000@gmail.com",
    );
    expect(screen.getByText("0h")).toBeInTheDocument();

    act(() => {
      TriggerableIntersectionObserver.instances[0].trigger();
    });

    await waitFor(() => {
      expect(rafCallbacks).toHaveLength(3);
    });

    act(() => {
      rafCallbacks.splice(0).forEach((callback) => callback(1200));
    });

    expect(screen.getByText("24h")).toBeInTheDocument();
    expect(screen.getByText("3+")).toBeInTheDocument();
    expect(screen.getByText("10+")).toBeInTheDocument();
  });
});
