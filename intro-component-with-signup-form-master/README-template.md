# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/desktop.png)


### Links

- Solution URL: [here](https://your-solution-url.com)
- Live Site URL: [here](https://your-live-site-url.com)


### Built with

- Semantic HTML5 markup
- CSS variables
- Flexbox
- Mobile-first workflow

### What I learned

Wrapping each input tag, label, and small error tag in a div really helps with styling. This layout also makes grabbing the DOM elements easier with JavaScript

```html
<div id="inputWrapper" class="input-wrapper">
  <input type="text" name="firstName" id="firstName" placeholder="First Name">
  <img class="hidden" id="error" src="./images/icon-error.svg" alt="error alert">
  <small class="error hidden" id="error">First Name cannot be empty</small>
</div>
```
The CSS hidden attribute is a cool way to make an element disapear. Unlike  ```display: none;``` the hidden property won't remove margins.  
```css
.hidden {
  visibility: hidden;
  margin: .75rem 0 0 0;
}

```
The querySelector function isn't just for the document object 😅. You can use it on any element ( that you've grabbed from the DOM ). I was able to grab the one error message I wanted. First I used the ```input.parentElement``` property to grab the inputWrapper element. Then I did a ```querySelectorAll("#error)``` to grab all the inputWrapper's children elements with an id of error. Gives a NodeList to loop over. NOT an array!
```js
function removeError(input) {
  const inputWrapper = input.parentElement;
  const errorElements = inputWrapper.querySelectorAll("#error");

  errorElements.forEach(element => {
  element.classList.add("hidden");
  });
};
```

### Useful resources

- [20 Web Projects With Vanilla Javascript](https://www.udemy.com/course/web-projects-with-vanilla-javascript/?src=sac&kw=20+web+projects) - This Udemy course by Brad Traversy is awesome and is literally the only reason I was able to do this challenge.
- [JavaScript Form Validation](https://www.youtube.com/watch?v=CYlNJpltjMM) - This free YouTube video quickly goes over validating forms on the client side.
- [Display vs Opacity vs Visibility](https://thisthat.dev/display-none-vs-opacity-0-vs-visibility-hidden/) - This is an amazing article which helped me finally understand. I'd recommend it to anyone still learning this concept.
- [Where I got the regular expression for the email validation](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript) 

## Author

- Frontend Mentor - [@Desi-J](https://www.frontendmentor.io/profile/Desi-J)


