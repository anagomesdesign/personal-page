# Let's style!

Now that we know how to create a React component, it's time to **style** it!<br/>

So far, we've created components in JavaScript and displayed them in the browser. But all their styling came from this single `css` file: (`src/pages/index.css`).<br/>

In order to have better organization, we want each component to have its own CSS file. This way, each component is responsible for its own look and feel. 

Let's get started!<br/>

## Before the Assignment

Before we dive into the assignment, let's explore the relationship between JSX, strings, and JavaScript.

### The Curly Braces Key


> "Curly braces `{}` are the doors to JavaScript"

When working with JSX, it's important to remember that curly braces `{ }` are the gateway to JavaScript. When you open a JSX tag, you're in HTML mode, and anything you write must be valid HTML. 

Here is an example of a JSX tag, where the content **must be** valid HTML code:

```jsx
    export default function MyComponent() {
        return(
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
```

Once you're inside the `<div>` tag, you are in HTML mode. Anything you write inside the `<div>` tag will be **treated as HTML**, not JavaScript code.

Additionally, even if you're in HTML mode, you can still incorporate JavaScript by using curly braces `{ }`. This syntax creates a local context, enabling you to write JavaScript code directly within your HTML.

Here is an example of JavaScript code incorporated in HTML:

```jsx
    export default function MyComponent() {
        const myVar = "Hello World!"; // <-- This is valid JavaScript code
        return(
            <div>
                <h1>{myVar}</h1>      {/*<-- This will render "Hello World!"*/}
            </div>
        )
    }
```
Note that the declaration const `myVar = "Hello World!";` is placed **outside** the return statement. 

When you use curly braces `{ }`, you enter a **local scope**, which means that any variables or declarations inside the braces will be scoped to that block and will not be accessible outside of it. In other words, anything created inside the curly braces will be lost once the block is exited.

Let's explore this a bit further by analysing the example bellow:

```jsx
    export default function MyComponent() {// <-- Open Context 1
        const variable1 = "Hello World!"; 
        return(
            <div> 

                { const variable2 = "Testing"; /* <-- Context 2 */ }

                <h1>{ variable1 /*<-- Context 3 / Correct*/ }</h1> 

                <h2>{ variable2 /*<-- Context 4 / Wrong*/ }</h2>

            </div>
        )
    }// <-- Close Context 1
```
In the example take a look at `variable1` and `variable2` and their respective placement in the different context blocks created with the use of curly braces `{ }`.

`variable1` is scoped to `MyComponent` context, which means that any code between the opening and closing `{ }` can access and utilize `variable1`. In contrast, `variable2` is declared in a different context, nested under the HTML code. As a result, `variable2` is only accessible withing its own local scope, defined by it's surrounding curly braces `{ }`.

> [!NOTE]<br/>
> In the previous assignment, you used JavaScript incorporated on your HTML when you created your `Div`component and had to access it's children elements to render them. You also used when you added the `className` atribute to style your components.
>```jsx
>    export default function Div(props) {
>        const { children, className } = props;
>        return(
>            <div className={ className }>
>                { children }
>            </div>
>        )
>    }
>```

### Styling components in react

When styling React components, you can define a default styling behavior using the `className` attribute. But you can also allow for additional styling by accepting a `className` prop. This way, you can provide a base style while still giving the flexibility to add more styles as needed. 

Here is an example:

```jsx
function MyComponent({ className }) {
  return <div className={`base-style ${className}`}>Content</div>
}
```
In the example above, `base-style` is the default styling fo `MyComponent`, and `className` allows for additional styles to be added. This approach makes your components more reusable and flexible, while still providing a consistent base style.

Here is the component being used:

```jsx
    <MyComponent className="grid-container">
        <div class="picture object-1"></div>
        <div class="bio object-2"></div>
    </MyComponent>
```

In this example, the style from `base-style` is already applied to `MyComponent` by default, eliminating the need to duplicate code. Additionally, you can still add additional classes, such as `grid-container` in the example, without overriding the existing default style. 

This approach enables you to build upon the base style without redundancy, making your code more efficient and maintainable. 

## Task

## Possible blockers
