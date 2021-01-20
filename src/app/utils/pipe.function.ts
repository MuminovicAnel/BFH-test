const pipe = (...fns: any[]) => (t: any) => fns.reduce((a, b) => b(a), t);

const next = ([, next]: [any, any]) => next;

export const pipeAll = (...fns: any[]) => (t: string) => next(pipe(
  ...fns.map(f => ([t, r]: [any, any]) => [t, r && f(t)])
)([t, true]));
