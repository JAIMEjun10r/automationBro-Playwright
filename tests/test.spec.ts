import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { login } from '../pages/login'
const userName = faker.internet.userName()
const emailAddress = faker.internet.email()
const passwordRe = faker.internet.password(12, true, /[A-Z]/, '* / , ?')

test.beforeEach(async ({ page }) => {
    await page.goto('/') 
});
test.describe('Testes de criação e login de usuários', () => {
    test('Verificando se o usuário consegue criar uma conta com sucesso', async ({ page }) => {
        const Login = new login(page);
        const url = '/my-account/'
        //clicking im my Account link
        await Login.myAccountt();
        await expect(page).toHaveURL(url);
        //waiting for the display of the h2 Register
        await Login.registerWord();
        //filling username,email, and password
        await Login.fillingDatas(userName, emailAddress, passwordRe)
     });
    test.only('verificando se é possível cadastrar um usuário sem preencher username', async ({ page }) => {
        const Login = new login(page);
        const url = '/my-account/'
        //clicking im my Account link
        await Login.myAccountt();
        await expect(page).toHaveURL(url);
        //waiting for the display of the h2 Register
        await Login.registerWord(); 
        // filling email, and password
        await Login.fillingEmailPassword(emailAddress, passwordRe)
    });
    
    

});