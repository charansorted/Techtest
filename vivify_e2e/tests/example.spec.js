// @ts-check
const { test, expect } = require("@playwright/test");
const URL = "https://vivifyvenues.com/"; // Replace 'https://example.com' with the actual URL of Vivify website
const POSTCODE = "LA3 1AB";
const REQUIRED_TEXT = "Lancaster Royal Grammar School";

test("is image loaded", async ({ page }) => {
  try {
    test.slow();
    await page.goto(URL);
    await page.waitForSelector("form");
    await page.locator('input[name="postcode"]').fill(POSTCODE);
    await page.getByRole("button", { name: "Find a venue" }).click();
    await page.waitForSelector("#results");

    const facilityLi = await page.$(`#results li:has-text('${REQUIRED_TEXT}')`);
    expect(facilityLi, `${REQUIRED_TEXT} facility not found`).toBeTruthy();
    const facilityLink = await facilityLi.$("a");
    expect(
      facilityLink,
      "Facility link not found within the selected li"
    ).toBeTruthy();
    await facilityLink.click();

    await page.waitForFunction(() => {
      const images = Array.from(document.querySelectorAll("img"));
      return images.every((img) => img.complete);
    });
    const image = await page.getByRole("img", { name: "Facility Preview" });

    await expect(image).toHaveScreenshot("classroom.png");
  } catch (error) {
    console.error("Error:", error);
  }
});
