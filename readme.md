# A list of burner email providers

Throw away email addresses (burner emails) are great for single use signups where you would like the content but rather not give up your email.

I'm okay with people using burner email addresses to get my free content, I just need to be able to filter them out of my list so it doesn't drive up bounces and hurt deliverability. 

Please send a PR with any new ones you find. 

## Install

```shell script
npm i --save burner-email-providers
# or
yarn add burner-email-providers
``` 

## Usage
```js

const { isEmailBurner } = require('burner-email-providers');

isEmailBurner('test@gmail.com'); // false
isEmailBurner('test@10minutemail.com');  // true

```

## APIs

### Free

* [Disposable](https://github.com/0x19/disposable)
* [Disposable Email Detector](https://www.disposable-email-detector.com)
* [Verifier](https://verifier.meetchopra.com/)

## Libraries

### Elixir

* [Burnex](https://github.com/Betree/burnex)

### Go

* [DED](https://github.com/namreg/ded)

