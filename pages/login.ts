import { expect, Locator, Page } from '@playwright/test';
export class login {
    readonly page:Page;
    readonly myAccount: Locator;
    readonly register: Locator;
    readonly usernameRegister: Locator;
    readonly emailAddressRegister: Locator;
    readonly passwordRegister: Locator;
    readonly btnRegister: Locator;
    readonly logoutMsg: Locator;

    constructor (page: Page) {
        this.page;
        this.myAccount = page.getByRole('link', { name: 'My account' });
        this.register = page.getByRole('heading', { name: 'Register' });
        this.usernameRegister = page.locator('#reg_username');
        this.emailAddressRegister = page.locator('#reg_email');
        this.passwordRegister = page.locator('#reg_password');
        this.btnRegister = page.getByRole('button', { name: 'Register' });
        this.logoutMsg = page.getByRole('link', { name: 'Log out' })
    }
    async myAccountt () {
        await this.myAccount.click()
    }
    async registerWord () {
        await expect(this.register).toBeVisible();
    }
    async fillingDatas (userName: string, email: string, password: string) {
        await this.usernameRegister.fill(userName);
        await this.emailAddressRegister.fill(email)
        await this.passwordRegister.fill(password)
        await this.btnRegister.click()
        await expect(this.logoutMsg).toBeVisible()
    }
    
}