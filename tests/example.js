import { test, expect } from '@playwright/test';

test('Homepage has correct title', async ({ page }) => {
  await page.goto('https://nextjs.org/docs/app/getting-started/installation'); // assumes local dev server
  await expect(page).toHaveTitle("nextjs"); // or match your actual title
});
