   const {test,expect} = require("@playwright/test");
 

test("Order Confirmation",async({page})=>
{
 
    await page.goto("https://www.saucedemo.com/");
    const userName="standard_user";
    const password="secret_sauce";
    const verifyTitittle=await page.locator('//*[text()="Swag Labs"]').nth(0).textContent();
    console.log(verifyTitittle);
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.locator('.product_sort_container').first().click();
    const selectOption=await page.locator('select');
    await selectOption.nth(0).locator('Price (low to high)');
    await page.locator('//*[text()="Add to cart"]').nth(0).click();
    await page.locator('//*[@data-test="shopping-cart-link"]').click();
    const amountVarification= await page.locator('[data-test="inventory-item-price"]').nth(0).textContent();
    console.log(amountVarification);
    await page.locator('//*[@id="checkout"]').click();
    await page.locator('//*[@id="first-name"]').fill("Test");
    await page.locator('//*[@id="last-name"]').fill("User");
    await page.locator('//*[@id="postal-code"]').fill("400083");
    await page.locator('//*[@id="continue"]').click();
    await page.locator('//*[@id="finish"]').click();

});