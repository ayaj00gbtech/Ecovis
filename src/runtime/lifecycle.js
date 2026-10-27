/** Dispose effect-owned browser resources when the React tree unmounts. */
export function createLifecycle() {
  const timeouts = new Set();
  const intervals = new Set();
  const frames = new Set();
  const listeners = [];

  return {
    listen(target, event, handler, options) {
      target.addEventListener(event, handler, options);
      listeners.push(() => target.removeEventListener(event, handler, options));
    },
    setTimeout(callback, delay, ...args) {
      const id = window.setTimeout(() => {
        timeouts.delete(id);
        callback(...args);
      }, delay);
      timeouts.add(id);
      return id;
    },
    clearTimeout(id) {
      window.clearTimeout(id);
      timeouts.delete(id);
    },
    setInterval(callback, delay, ...args) {
      const id = window.setInterval(callback, delay, ...args);
      intervals.add(id);
      return id;
    },
    clearInterval(id) {
      window.clearInterval(id);
      intervals.delete(id);
    },
    requestAnimationFrame(callback) {
      const id = window.requestAnimationFrame((time) => {
        frames.delete(id);
        callback(time);
      });
      frames.add(id);
      return id;
    },
    dispose() {
      listeners.forEach((remove) => remove());
      timeouts.forEach((id) => window.clearTimeout(id));
      intervals.forEach((id) => window.clearInterval(id));
      frames.forEach((id) => window.cancelAnimationFrame(id));
      timeouts.clear();
      intervals.clear();
      frames.clear();
    },
  };
}
