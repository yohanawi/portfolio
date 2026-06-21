import { act, render, screen } from "@testing-library/react";
import { easingFunctions, useCounterAnimation } from "../useCounterAnimation";

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

  trigger(entry: Partial<IntersectionObserverEntry> = {}) {
    this.callback(
      [
        {
          isIntersecting: true,
          intersectionRatio: 0.5,
          target: document.createElement("div"),
          ...entry,
        } as IntersectionObserverEntry,
      ],
      this,
    );
  }
}

const CounterProbe = () => {
  const { count, ref } = useCounterAnimation({
    end: 10,
    duration: 1000,
    easing: easingFunctions.linear,
  });

  return (
    <div ref={ref} data-testid="counter">
      {count}
    </div>
  );
};

describe("useCounterAnimation", () => {
  const rafCallbacks: FrameRequestCallback[] = [];

  beforeEach(() => {
    jest.useFakeTimers();
    TriggerableIntersectionObserver.instances = [];
    rafCallbacks.length = 0;

    window.IntersectionObserver = TriggerableIntersectionObserver;
    global.IntersectionObserver = TriggerableIntersectionObserver;

    jest.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      rafCallbacks.push(callback);
      return rafCallbacks.length;
    });
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it("starts at zero and animates to the target after becoming visible", () => {
    render(<CounterProbe />);

    expect(screen.getByTestId("counter")).toHaveTextContent("0");
    expect(TriggerableIntersectionObserver.instances[0].observe).toHaveBeenCalled();

    act(() => {
      TriggerableIntersectionObserver.instances[0].trigger();
      jest.runOnlyPendingTimers();
    });

    act(() => {
      rafCallbacks.shift()?.(1);
    });

    expect(screen.getByTestId("counter")).toHaveTextContent("0");

    act(() => {
      rafCallbacks.shift()?.(1001);
    });

    expect(screen.getByTestId("counter")).toHaveTextContent("10");
    expect(TriggerableIntersectionObserver.instances[0].disconnect).toHaveBeenCalled();
  });

  it("exports reusable easing functions", () => {
    expect(easingFunctions.linear(0.5)).toBe(0.5);
    expect(easingFunctions.easeInQuad(0.5)).toBe(0.25);
    expect(easingFunctions.easeOutQuad(0.5)).toBe(0.75);
    expect(easingFunctions.easeInOutExpo(0)).toBe(0);
    expect(easingFunctions.easeInOutExpo(1)).toBe(1);
  });
});
