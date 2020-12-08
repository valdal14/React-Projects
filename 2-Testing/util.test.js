const puppeteer = require('puppeteer');
const generateText = require('./util').generateText;
const validateUser = require('./util').validateUser;
const fetchData = require('./__mocks__/utils').fetchData;

test('should return a string made of name and age', ()=> {
    const res = generateText('Val', 42);
    expect(res).toBe('Val is 42 years old');
});

test('name and age should be valid variables', ()=> {
    const name = 'Val';
    const age = 42;
    const res = generateText(name, age);
    expect(res).toBe(`${name} is ${age} years old`);
});

// Integration test
test('Integration test: return true if user and age are valid', ()=>{
    const name = 'Val';
    const age = 42;
    expect(validateUser(name, age)).toBe(true);
});

// End to End testing
test('Testing user form data-entry and click', async ()=>{
    // Setup a browser instance
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: true,
        args: ['--window-size=1920,1080']
    })
    // Create a page object
    const page = await browser.newPage();
    await page.goto('http://localhost:3001/2-Testing/index.html');
    // Add commands
    await page.click('input#name');
    await page.type('input#name', 'Valerio');
    await page.click('input#age');
    await page.type('input#age', '42');
    await page.click('#btnAddUser');
});

// Async Tests with puppeteer
test('The get request should return an object with a body property', async ()=>{
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: true,
        args: ['--window-size=1920,1080']
    })
    // Create a page object
    const page = await browser.newPage();
    await page.goto('http://localhost:3001/2-Testing/index.html');
    // Add commands
    await page.click('input#post');
    await page.type('input#post', '1');
    await page.click('#btnGetPosts');
    // the mocked fetch request
    fetchData().then(data => {
        expect(data.body).toBe('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
    })
});