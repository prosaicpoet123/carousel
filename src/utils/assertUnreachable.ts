export function assertUnreachable(x: never): never {
  throw new Error('Unhandled case in switch statement')
}
