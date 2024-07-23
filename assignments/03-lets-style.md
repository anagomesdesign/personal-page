# Let's style!

Now that we know how to create a React component, it's time to **style** it!<br/>

So far, we've created components in JavaScript and displayed them in the browser. But all their styling came from this single `css` file: (`src/pages/index.css`).<br/>

In order to have better organization, we want each component to have its own CSS file. This way, each component is responsible for its own look and feel. 

Let's get started!<br/>

## Before the Assignment

Before we dive into the assignment, let's explore the relationship between JSX, strings, and JavaScript.

### The Curly Braces Key


> "Curly braces `{}` are the doors to JavaScript"

When working with JSX, it's important to remember that curly braces `{ }` are the gateway to JavaScript.<br/> 
When you open a JSX tag, you're in HTML mode, and anything you write must be valid HTML. 

Here is an example of a JSX tag, where the content **must be** valid HTML code:

```tsx
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

```tsx
    export default function MyComponent() {
        return(
            <div>
                <h1> 1 + 1 </h1>
                <h1>{1 + 1}</h1>
            </div>
        )
    }
```

Note that in the first `<h1>` tag, `1 + 1` is treated as a text, but when I used the curly braces `{ }` for the second `<h1>` tag, I opened a **context** that allowed me to write JavaScript code.<br/>
As a result, `1 + 1` was treated as a JavaScript expression and as such will display `2` in the browser.


> [!WARNING]<br/>
> When you use curly braces `{ }`, you enter a **local scope**, which means that any variables you **create** inside the braces will exist only in that block and will not be accessible outside of it.<br/>
> In other words, anything created inside the curly braces will be lost once the block is exited.

### Let's explore this a bit further by analysing the example bellow:

```tsx
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

`variable1` is scoped to `MyComponent` context, which means that any code between the opening and closing `{ }` can access and utilize `variable1`.<br/>
In contrast, `variable2` is declared in a different context, nested under the HTML code. As a result, `variable2` is only accessible withing its own local scope, defined by it's surrounding curly braces `{ }`.

> [!NOTE]<br/>
> In the previous assignment, you used JavaScript incorporated on your HTML when you created your `Div`component and had to access it's children elements to render them. You also used when you added the `className` atribute to style your components.
>```tsx
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

```tsx
function MyComponent({ className }) {
  return <div className={`base-style ${className}`}>Content</div>
}
```

In the example above, `base-style` is the default styling for `MyComponent`, and `className` allows for additional styles to be added. This approach makes your components more reusable and flexible, while still providing a consistent base style.

Here is the component being used:

```tsx
    <MyComponent className="grid-container">
        <div class="picture object-1"></div>
        <div class="bio object-2"></div>
    </MyComponent>
```

In this example, the style from `base-style` is already applied to `MyComponent` by default, eliminating the need to duplicate code. Additionally, you can still add additional classes, such as `grid-container` in the example, without overriding the existing default style. 

This approach enables you to build upon the base style without redundancy, making your code more efficient and maintainable. 

## Task

Now that you know you can **optionally** pass a `className` prop to your components while assuring a base style, let's create some components and style them!

### 1. Create a new component

You have in your page three `Div` components, each with a different `className` prop.<br/>
Why not create a new component that already has these classes defined?

- In your `src/components` folder 
  - Create new components for each of your `Div` components.
    - `<GridContainer/>`
    - `<Portrait/>`
    - `<Bio/>`
  - Move their children elements to their respective components.
    - For example, the `Bio` component should have the `Image`, `Paragraph` and other elements.
- The final structure should look like this:
  ```tsx
    export default function Index() {
        return(
            <GridContainer>
                <Portrait/>
                <Bio/>
            </GridContainer>
        )
    }
  ```

### 2. Style your components

Once you have your new components, it's time to style them!

- For each class you created in the `index.css` file, move it to the respective component's CSS file.
  - For example, the `grid-container` class should be moved to the `GridContainer` component's CSS file.


> [!NOTE]<br/>
> You might note that some styling like the `font-family`, `font-color` might be repeated in all text elements. <br/>
> For now, duplicate them for each component. <br/>
> In the future, we will learn how to create a global style that can be shared across all components.

> [!TIP]<br/>
> - I opened a PR with a refactoring of the `index.css` file that I think will help you to organize your CSS.
> - The Div component won't be needed anymore, so you can remove it and call the `div` tag directly in your new components when needed.
> - You've already created components for the `Image`, `Paragraph`, `H1` and `Link` elements. You just need to move the css to their respective component files.
> - In the `Image` component, you add its style manually. Why not move it to the `Image` CSS?
>   - Even better. Why not receive a `size` prop that will define both `width` and `height` of the image?

## Possible blockers
