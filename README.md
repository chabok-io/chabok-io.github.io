# Chabok web library
Blow some breath to your app with Chabok realtime messaging and receive push notifications cross any platform with zero code. Know your users's better, push them content based on their location or track their presence/location without headache.
Chabok helps mobile application marketers to optimize their acquisition campaigns and increase user engagement & retention.

## Installation
For installation refer to [Web docs](https://doc.chabok.io/web/introducing.html) and platform specific parts (Web).

## Release Note
You can find release note [here](https://doc.chabok.io/web/release-note.html).

## Support
Please visit [Issues](https://github.com/chabok-io/chabok-client-web/issues).


## Getting Started

These are the minimum required steps to integrate the Chabok SDK in your Web app. We assume that you are using Visual Studio Code for your Web development.

### Installation

Add CDN link to our SDK in your page's html:

<!-- TODO: following CDN link need to be replaced with a real one -->
<example>
<template #HTML>

```html
<script defer src="https://cdn.chabok.io/web.js"></script>
```
</template>
</example>


## Optional
Chabok SDK make use of javascript's promises. if you're targeting legacy browsers (IE etc.) and did not provide your own polyfill, you might want to include following script to polyfill `window.Promise` in your clients' browser.

<example>
<template #HTML>

```html
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>
```
</template>
</example>

Or directly import using a bundler like Webpack:

<example>
<template #JS>

```js
import 'promise-polyfill/src/polyfill';
```
</template>
</example>

### Initialization

Initialize Chabok SDK:

<example>
<template #JS>

```js
const Chabok = chabok || window.chabok;

// Method 1: Using async functions
async function init() {
	const sdk = new Chabok();
	const result = await sdk.init('CLIENT_ID', 'CLIENT_SECRET');
	if (result) {
		// continue
	}
}

// Method 2: Using promises
const sdk = new Chabok();
sdk
	.init('CLIENT_ID', 'CLIENT_SECRET')
	.then(() => {
		// continue
	})

```

</template>
<template #TS>

```js
const Chabok = chabok || window.chabok;

// Method 1: Using async functions
async function init(): void {
	const sdk = new Chabok();
	const result: boolean = await sdk.init('CLIENT_ID', 'CLIENT_SECRET');
	if (result) {
		// continue
	}
}

// Method 2: Using promises
const sdk = new Chabok();
sdk
	.init('CLIENT_ID', 'CLIENT_SECRET')
	.then(() => {
		// continue
	})

```
</template>
</example>

> `Note:` Calling `Chabok.init()` is required for using Chabok SDK.

> `Note:` The application credentials (`CLIENT_ID` and `CLIENT_SECRET`) are available in your dashboard space under app info.

Many methods in Chabok SDK return values using promises. Its up to you to whether use promises or async functions to handle response from them. We'll be using async functions to demonstrate examples from now on.

Place your `CLIENT_ID` and `CLIENT_SECRET` from your dashboard into the init method.


## Usage

&#32;
#### Set default tracker:

You can still understand the installation source in your campaign even if the stores do not support Referrer. The process is as follows:

- Create **new tracker** in your dashboard.
- Enter the **tracker ID** in the following method.

<example>
<template #JS>

```js
sdk.setDefaultTracker('DEFAULT_TRACKER_ID');
```
</template>
</example>

> `Note:` Default tracker should be called before `sdk.init()`.

&#32;

<br/>

#### User

Chabok `USER_ID` is a unique ID that can be assigned to each user to identify him/her.
For example, a unique ID could be a generated UUID, a mobile number, etc.

Ideally, you should assign the unique ID to users when signing up, logging in, or on pages where their identity is known.


### Login

After initializing Chabok, use the `login` method to identify your users in the system to monitor all behaviors and attributes with user identity.
We recommend that you to use Chabok's login on otp pages.

When a user logs in, all the stored information is associated with the identified user.

To login user in the Chabok service use `login` method:

<example>
<template #JS>

```js
sdk.user().login('USER_ID');
```
</template>
</example>

##### Example

When verifying user OTP codes, we should login to the Chabok platform to identify user by user ID

<example>
<template #JS>

```js
async function loginUser(userId) {
	const result = await sdk.user().login(userId);
	if (result) {
		console.log(`userid ${userId} logged in.`);
	}
}

loginUser('989100360500');
```
</template>
<template #TS>

```ts
async function loginUser(userId: string) {
	const result: boolean = await sdk.user().login(userId);
	if (result) {
		console.log(`userid ${userId} logged in.`);
	}
}

loginUser('989100360500');
```
</template>
</example>

### Logout

By calling the following method, even if the user is logged out of his/her account, you can still have the user in your system with a guest ID and interact with the user as usual.

When the user logs out of your app, call the Chabok Logout method to avoid attaching future attributes, events, and other data to this user until the login method is called again.

`logout` method can be used to log out a user from Chabok:

<example>
<template #JS>

```js
sdk.user().logout();
```

</template>
</example>

#### Check user is logged in:

To check a user is logged in Chabok you can use the following method.

<example>
<template #JS>

```js
const isLoggedIn = sdk.user().isLoggedIn();
```
</template>
</example>

> `Tip:` In case you have implemented Chabok in your application, you can use the following method to check and login users who have already logged into your system but not into Chabok.

<example>
<template #JS>

```javascript
if (!sdk.user().isLoggedIn()) {
   sdk.user().login('USER_ID');
}
```
</template>
</example>

<br/>

### Analytics

#### Event

The events feature allows you to track any other user interactions that are vital to your business. Additionally, each custom event can have attributes such as amount, quantity, price, category, etc.
This data will allow you to personalize campaigns.

For tracking an `event` the process is as follows:
 
- Create a new event in your dashboard.
- Copy the ID and use it in `sendEvent` method.
  
  <br/>

To set an analytics event use `sendEvent` method:

>`Note:` Passing attributes to `sendEvent` method is optional.

<example>
<template #JS>

```javascript
sdk.analytics().sendEvent('ID', payload);
```
</template>
</example>

##### Example

For example we want to track add to cart event.

- Create add-to-cart event in your dashboard.
- Create your event attributes.
- Then pass the attributes with the given ID to the `event` method.

> `Note:` Event attributes could be passed as `Object`s.

<example>
<template #JS>

```javascript
async function sendEvent(body) {
    const result = await sdk.analytics().sendEvent('ID', body);
	if (result) {
		console.log('Event sent successfully');
	}
}

const payload = {
    product_id:  '123456',
    name:  'T-shirt',
    quantity:  10,
    category:  'Clothes',
    price:  100.25,
    currency:  'USD',
    chosen_colors:  ['Black', 'Blue', 'White'],
    discounted:  true,
    discount_percent:  15,
};

sendEvent(payload);
```
</template>
<template #TS>

```typescript
async function sendEvent(body: Record<string, any>) {
    const result: boolean = await sdk.analytics().event('ID', body);
	if (result) {
		console.log('Event sent successfully');
	}
}

const payload = {
    product_id:  '123456',
    name:  'T-shirt',
    quantity:  10,
    category:  'Clothes',
    price:  100.25,
    currency:  'USD',
    chosen_colors:  ['Black', 'Blue', 'White'],
    discounted:  true,
    discount_percent:  15,
};

sendEvent(payload);
```
</template>
</example>



#### Attributes

The user attributes you collect can give you a comprehensive picture of who your users are, where they're from, what they do, and a whole lot more, depending on your business. An attribute is something like favorites, user preferences, or etc. You can segment users based on their contextual relevance and personalize marketing campaigns sent through all channels of engagement with such granular user data.

To set user attributes in the Chabok service use `setAttribute` method:

> `Note:` Attributes could be passed as `Object`s.

<example>
<template #JS>

```javascript
sdk.user().setAttribute('key', Object);
```
</template>
</example>

##### Example

For example we want to store attributes of a stock trader.

<example>
<template #JS>

```javascript
async function setUserAttribute(body) {
	const result = await sdk.user().setAttribute('key', body);
	if (result) {
		console.log('Attribute stored');
	}
}

const payload = {
	trades_everyday: true,
	favorite_Stocks: ['Tesla','Facebook'],
	is_vip: true,
	first_trade_date: '18-9-2020',
	last_trade_date: '5-8-2021',
	has_inviter: true,
	inviter_id: 'smooke9',
}

setUserAttribute(payload);
```
</template>
<template #TS>

```typescript
async function setUserAttribute(body: Record<string, any>) {
	const result: boolean = await sdk.user().setAttribute('key', body);
	if (result) {
		console.log('Attribute stored');
	}
}

const payload = {
	trades_everyday: true,
	favorite_Stocks: ['Tesla','Facebook'],
	is_vip: true,
	first_trade_date: '18-9-2020',
	last_trade_date: '5-8-2021',
	has_inviter: true,
	inviter_id: 'smooke9',
}

setUserAttribute(payload);
```
</template>
</example>

<br>

#### Profile
Use the `setProfile` method to enter user information such as first name, last name, gender, etc.

To set user's profile information in the Chabok service use `setProfile` method:

<example>
<template #JS>

```javascript
const profile = {
	email: 'dev.chabok@gmail.com',
	mobile: '989191234567',
	name: 'NAME',
	family: 'FAMILY',
	birthDate: 'BIRTH_DATE', //e.g. 29-02-1372
	gender: 0, // 0 for male and 1 for female
	timeZone: '+3:30',
}
sdk.user().setProfile(profile);
```
</template>
</example>

> `Note:` Profile fields are optional. you don't have to pass all of them at once.

<br/>


#### Location
Use the `setLocation` method to enter user's location.

To set user's `location` use `setLocation` method:

<example>
<template #JS>

```javascript

sdk.user().setLocation(LATITUDE, LONGITUDE);
```
</template>
</example>

<br/>

### Debugging features


&#32;
#### Enable/Disable Chabok SDK:

<example>
<template #JS>

```javascript
sdk.disabled = true;
```
</template>
</example>

&#32;
#### Set log level:

<example>
<template #TS>

```typescript
sdk.setLogger({
	enable?: boolean,
	logLevel?: string, // enum of 'verbose', 'error' and 'silent'.
	buffersSize?: number,
});
```
</template>
</example>
