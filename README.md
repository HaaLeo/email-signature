# email-signature

[![Stars](https://img.shields.io/github/stars/HaaLeo/email-signature.svg?label=Stars&logo=github&style=flat-square)](https://github.com/HaaLeo/email-signature/stargazers) [![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://raw.githubusercontent.com/HaaLeo/email-signature/master/LICENSE.txt) [![Donate](https://img.shields.io/badge/☕️-Buy%20Me%20a%20Coffee-blue.svg?&style=flat-square)](https://www.paypal.me/LeoHanisch/3eur)  
[![David](https://img.shields.io/david/HaaLeo/email-signature.svg?style=flat-square)](https://david-dm.org/HaaLeo/email-signature) [![David](https://img.shields.io/david/dev/HaaLeo/email-signature.svg?style=flat-square)](https://david-dm.org/HaaLeo/email-signature?type=dev) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)  

Generate your own HTML email signature including links to your favorite social media platforms.

![sample signature](./doc/sample.png)

## Installation

```
git clone git@github.com:HaaLeo/email-signature.git
cd email-signature
npm install
```

## Usage

First one has to create a squared profile picture that already includes the frame and the correct background colors.

Example:

<img src="./images/profile/Leo.png" alt="sample profile image" width="30%"/>

Now create a configuration with personal details that should be added to the signature.
Add your configuration to the `./config` directory.

> **Note** relative URIs are not supported.

Example:

```json
{
    "dev": false,
    "name": "Max Mustermann",
    "position": "super duper employee",
    "backgroundTop": "white",
    "backgroundBottom": "#5B1746",
    "email": "foo@bar.de",
    "mobileNumber": "+49123456789",
    "address": "My Address, Munich Germany",
    "addressMapsLink": "https://www.google.com/maps/@35.7040744,139.5577317,3a,90y,288.14h,67.46t/data=!3m7!1e1!3m5!1sgT28ssf0BB2LxZ63JNcL1w!2e0!3e5!7i13312!8i6656",
    "homepage": "www.github.com/HaaLeo",
    "profilePictureUri": "file:///C:/Users/hanisch_privat/_GIT/email-signature/images/profile/Leo.png"
}
```

Then run

```
node convert.js
```

This will create a signature for all found templates and configurations in the `./out` directory.

## Known Issues

The social media links are currently hard coded. One has to adjust the template file to change them.

## Contribution

If you found a bug or are missing a feature do not hesitate to [file an issue](https://github.com/HaaLeo/email-signature/issues/new/choose).

Pull Requests are welcome!

## Support
When you like this little application make sure to [star the repo](https://github.com/HaaLeo/email-signature/stargazers) . I am always looking for new ideas and feedback.

In addition, it is possible to [donate via paypal](https://www.paypal.me/LeoHanisch/3eur).
