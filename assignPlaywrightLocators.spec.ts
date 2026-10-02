import test from "@playwright/test";

test ('Login Facebook', async({page})=>{

await page.goto("https://www.facebook.com/")
await page.getByRole('textbox',{name:'Email address or mobile number'}).fill('testleaf.2023@gmail.com')
await page.getByRole('textbox',{name:'Password'}).fill('Data@321')
await page.locator("(//div[@class='x1ey2m1c xtijo5x x1o0tod xg01cxk x47corl x10l6tqk x13vifvy x1ebt8du x19991ni x1dhq9h x1fmog5m xu25z0z x140muxe xo1y3bh'])[1]")
.click()
await page.getByRole('link',{name:'Find your account and log in.'}).click()

const title = await page.title()
console.log(title)

}
)