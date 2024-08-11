export function getImagePath(path: string): string {
    return `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}${path}`;
  }