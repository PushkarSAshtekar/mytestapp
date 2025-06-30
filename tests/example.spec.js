import { test, expect } from '@playwright/test';

test('Homepage has correct title', async ({ page }) => {
 await page.goto('https://nextjs.org/docs/app/getting-started/installation');
await expect(page).toHaveTitle("Getting Started: Installation | Next.js");

});
