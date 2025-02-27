import test from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("sum harus mengembalikan jumlah yang benar dari dua angka positif", () => {
  assert.strictEqual(sum(5, 7), 12);
  assert.strictEqual(sum(0, 10), 10);
  assert.strictEqual(sum(3, 3), 6);
});

test("sum harus mengembalikan 0 jika salah satu atau kedua angka negatif", () => {
  assert.strictEqual(sum(-5, 7), 0);
  assert.strictEqual(sum(5, -7), 0);
  assert.strictEqual(sum(-5, -7), 0);
});

test("sum harus mengembalikan 0 jika salah satu atau kedua argumen bukan angka", () => {
  assert.strictEqual(sum("5", 7), 0);
  assert.strictEqual(sum(5, "7"), 0);
  assert.strictEqual(sum("5", "7"), 0);
  assert.strictEqual(sum(null, 7), 0);
  assert.strictEqual(sum(5, undefined), 0);
  assert.strictEqual(sum({}, []), 0);
});

test("sum harus mengembalikan 0 jika tidak ada argumen yang diberikan", () => {
  assert.strictEqual(sum(), 0);
});

test("sum harus menangani angka desimal dengan benar", () => {
  const tolerance = 0.0001; // Batas toleransi error floating-point

  assert.ok(Math.abs(sum(2.5, 2.5) - 5) < tolerance);
  assert.ok(Math.abs(sum(1.1, 2.2) - 3.3) < tolerance);
});
