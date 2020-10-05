/**
 * shallow compare two arrays
 */
export const eachIsEqual = (arr1: string[], arr2: string[]) => {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;
  return arr1.every((_e, i) => arr1[i] === arr2[i])
}