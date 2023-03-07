# Multilingual support for static website

This project was created to make your static website multilingual. By default, it detects the language of the browser and loads that language. If the project does not support the language of your browser, it will default to English. You can override this by setting a variable. 

## Supported languages

| Language  | Subtag |
| --------- | ------ |
| English   |   en   |
| German    |   de   |
| French    |   fr   |
| Hungarian |   hu   |
| Italian   |   it   |

## Where can you use it?
You can use it for static websites that you host at GitHub Pages and GitLab Pages.

## How to use?
1. Import the css files and js files
2. Create `lang/en` folder
3. Create static page in `lang/en` folder
4. Include index.html
5. index.html contains the code below
```html
<div id="content">
</div>
<div class="cookie" id="cookieAccept">
</div> 
```

## Run dev environment
```bash
vagrant up
```

## Destroy dev environment
```bash
vagrant destroy -f
```