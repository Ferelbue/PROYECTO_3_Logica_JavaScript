import { fn } from "./main.js";

describe("Function fn - Input Parameter Test Cases", () => {
   test("Case: fn(1, 1, 1) - Expected Result: 14", () => {
      const result = fn(1, 1, 1);
      expect(result).toBe(14);
   });

   test("Case: fn(3, 3, 0) - Expected Result: 26", () => {
      const result = fn(3, 3, 0);
      expect(result).toBe(26);
   });

   test("Case: fn(2, 0, 1) - Expected Result: 14", () => {
      const result = fn(2, 0, 1);
      expect(result).toBe(14);
   });

   test("Case: fn(9, 10, 11) - Expected Result: 142", () => {
      const result = fn(9, 10, 11);
      expect(result).toBe(142);
   });

   test("Case: fn(11, 10, 9) - Expected Result: 139", () => {
      const result = fn(11, 10, 9);
      expect(result).toBe(139);
   });



/////COMBINACIONES AÑADIDAS//////

   test("Case: fn(2, 0, 4) - Expected Result: 30", () => {
      const result = fn(2, 0, 4);
      expect(result).toBe(30);
   });
   test("Case: fn(3, 0, 6) - Expected Result: 44", () => {
      const result = fn(3, 0, 6);
      expect(result).toBe(44);
   });
   test("Case: fn(0, 8, 4) - Expected Result: 60", () => {
      const result = fn(4, 0, 8);
      expect(result).toBe(60);
   });
   test("Case: fn(4, 0, 2) - Expected Result: 28", () => {
      const result = fn(4, 0, 2);
      expect(result).toBe(28);
   });
   test("Case: fn(6, 0, 3) - Expected Result: 40", () => {
      const result = fn(6, 0, 3);
      expect(result).toBe(40);
   });
   test("Case: fn(8, 0, 4) - Expected Result: 54", () => {
      const result = fn(8, 0, 4);
      expect(result).toBe(54);
   });
   test("Case: fn(0, 4, 2) - Expected Result: 30", () => {
      const result = fn(0, 4, 2);
      expect(result).toBe(30);
   });
   test("Case: fn(0, 6, 3) - Expected Result: 44", () => {
      const result = fn(0, 6, 3);
      expect(result).toBe(44);
   });
   test("Case: fn(0, 8, 4) - Expected Result: 59", () => {
      const result = fn(0, 8, 4);
      expect(result).toBe(59);
   });
   test("Case: fn(0, 2, 4) - Expected Result: 31", () => {
      const result = fn(0, 2, 4);
      expect(result).toBe(31);
   });
   test("Case: fn(0, 3, 6) - Expected Result: 46", () => {
      const result = fn(0, 3, 6);
      expect(result).toBe(46);
   });
   test("Case: fn(0, 4, 8) - Expected Result: 62", () => {
      const result = fn(0, 4, 8);
      expect(result).toBe(62);
   });
   test("Case: fn(2, 4, 0) - Expected Result: 27", () => {
      const result = fn(2, 4, 0);
      expect(result).toBe(27);
   });
   test("Case: fn(3, 6, 0) - Expected Result: 40", () => {
      const result = fn(3, 6, 0);
      expect(result).toBe(40);
   });
   test("Case: fn(4, 8, 0) - Expected Result: 54", () => {
      const result = fn(4, 8, 0);
      expect(result).toBe(54);
   });
   test("Case: fn(4, 2, 0) - Expected Result: 26", () => {
      const result = fn(4, 2, 0);
      expect(result).toBe(26);
   });
   test("Case: fn(6, 3, 0) - Expected Result: 38", () => {
      const result = fn(6, 3, 0);
      expect(result).toBe(38);
   });
   test("Case: fn(8, 4, 0) - Expected Result: 51", () => {
      const result = fn(8, 4, 0);
      expect(result).toBe(51);
   });
   test("Case: fn(7, 4, 1) - Expected Result: 52", () => {
      const result = fn(7, 4, 1);
      expect(result).toBe(52);
   });
   test("Case: fn(12, 9, 3) - Expected Result: 106", () => {
      const result = fn(12, 9, 3);
      expect(result).toBe(106);
   });
   test("Case: fn(9, 18, 3) - Expected Result: 136", () => {
      const result = fn(9, 18, 3);
      expect(result).toBe(136);
   });

   
   test("Throw error on negative input value: fn(-1, 3, 1)", () => {
      expect(() => fn(-1, 3, 1)).toThrow();
   });

   test("Throws error when the total sum of inputs (2+2+1) is not a multiple of 3: fn(2, 2, 1)", () => {
      expect(() => fn(2, 2, 1)).toThrow();
   });

   test("Throws error when the total sum of inputs (15+15+20) is not less than 40: fn(15, 15, 20)", () => {
      expect(() => fn(15, 15, 20)).toThrow();
   });
});
