# email-signature

Generate your own HTML email signature including links to your social media platforms.

![sample signature](./doc/sample.png)

## Installation

```
git clone https://github.com/HaaLeo/email-signature.git
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

```jsonc
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
