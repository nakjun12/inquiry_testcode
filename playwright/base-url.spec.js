import { test } from "@playwright/test";

test("Example test", async ({ page }) => {
  // baseUrl에 정의된 URL로 이동합니다.
  await page.goto("/");

  // 예상 결과를 확인합니다.
  //   await expect(page.title()).resolves.toMatch("Expected Title");
});

test("Another test", async ({ page }) => {
  // baseUrl에 정의된 URL로 이동합니다.
  await page.goto("/");

  // 특정 요소를 찾고 상태를 확인합니다.
  //   const text = await page.textContent(".selector");
  //   expect(text).toBe("Expected Text");
});
