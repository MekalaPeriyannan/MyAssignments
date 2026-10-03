import {test, expect} from "@playwright/test";

test ('Handle frame and alert',async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    page.on("dialog",async(dialog)=>{
        console.log(dialog.message())
        await dialog.accept()
        })

    await page.frameLocator("//iframe[@id='iframeResult']").getByRole("button",{name:"Try it"}).click()
    //await expect(page.frameLocator("//iframe[@id='iframeResult']").locator('//p[@id="demo"]')).toContainText('You pressed OK!')
    let alertMessage = page.frameLocator("//iframe[@id='iframeResult']").locator('//p[@id="demo"]')
    let content = await alertMessage.innerText()
    console.log(content)
    await expect(alertMessage).toContainText('You pressed OK!')
    
    })
