export const lazyFunction = <T>(callback: () => T, idleTime: number) =>
  new Promise<T>(resolve => setTimeout(() => resolve(callback()), idleTime));
