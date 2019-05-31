import * as path from 'path'

/**
 * Resolves path relative to the root project
 *
 * This is used because bundles are generated inside 'dist' and 'build' folders,
 * and we need a consistent way to point to the root folder
 * @param p
 */
export function resolveRoot(...p: string[]): string {
  return path.resolve(__dirname, '..', ...p)
}
