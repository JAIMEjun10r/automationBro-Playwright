import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { login } from '../pages/login'
const userName = faker.internet.userName()
const emailAddress = faker.internet.email()
const passwordRe = faker.internet.password(12, true, /[A-Z]/, '* / , ?')

test.beforeEach(async ({ page }) => {
    await page.goto('/') 
});
const url = '/my-account/'
const user = {
    username: userName,
    email: emailAddress,
    password: passwordRe
  } 

test.describe('Creating users', () => {
    test('Successfully create a user account', async ({ page }) => {
        const Login = new login(page);
        
        //clicking im my Account link
        await Login.myAccountt();
        await expect(page).toHaveURL(url);
        //waiting for the display of the h2 Register
        await Login.registerWord();
        //filling username,email, and password
        await Login.fillingDatas(user.username, user.email, user.password);
        console.log(user);
     });
    test('Unable to create a user account without filling username field', async ({ page }) => {
        const Login = new login(page);
        await Login.myAccountt();
        await expect(page).toHaveURL(url);
        await Login.registerWord(); 
        await Login.fillingEmailPassword(user.email, user.password)
        console.log(user);    
    });
    
    test('Unable to create a user without filling password field', async ({ page }) => {
        const Login = new login(page)
        await Login.myAccountt();
        await expect(page).toHaveURL(url);
        await Login.registerWord(); 
        await Login.fillingUsernamePassword(user.username, user.email)
        console.log(user)
    });
    test('Unable to create a user without filling username and email field', async ({ page }) => {
        const Login = new login(page)
        await Login.myAccountt();
        await expect(page).toHaveURL(url);
        await Login.registerWord();
        await Login.fillingPassword(user.password)
    });
    test.only('Unable to create a user without filling anything', async ({ page }) => {
        const Login = new login(page)
        await Login.myAccountt();
        await expect(page).toHaveURL(url);
        await Login.registerWord();
        await Login.fillingAnithing()
    });

});
