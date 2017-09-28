import { head, tail } from "./selectors";

describe("array helpers", () => {
  describe("head", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const result1 = head(arr, 5);
    const result2 = head(arr, 7);

    it("should return the first `n` elements", () => {
      expect(result1).toEqual([1, 2, 3, 4, 5]);
      expect(result2).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it("should not modify the original array", () => {
      expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
  });

  describe("tail", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const result1 = tail(arr, 5);
    const result2 = tail(arr, 7);

    it("should return the first `n` elements", () => {
      expect(result1).toEqual([8, 9, 10, 11, 12]);
      expect(result2).toEqual([6, 7, 8, 9, 10, 11, 12]);
    });

    it("should not modify the original array", () => {
      expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
  });
});
