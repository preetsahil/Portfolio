export function getBasePath(): string {
  return process.env.NODE_ENV === "production" ? "/Portfolio" : "";
}

export function getFullPath(path: string): string {
  return `${getBasePath()}${path}`;
}
