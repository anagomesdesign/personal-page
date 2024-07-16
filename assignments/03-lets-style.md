# Let's style!

Now that we have a basic understanding of how to create a React component, let's **style** it!<br/>
So far all you were able to create new components in JavaScript and render them in the browser.<br/>
Their styling however came all from the same `src/pages/index.css` file.<br/>
In order to have better organization and let each component be responsible for their own look, we need each to have its own CSS file.<br/>

## Before the Assignment

Before we begin coding let me explain a few things about JSX and strings in JavaScript.

> "Curly braces `{}` are the doors to JavaScript"

When you open a JSX tag, you are in HTML mode. Anything you write **must be** valid HTML.<br/>
Example:
```jsx
    export default function MyComponent() {
        return(
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
```

Once you open the `<div>` tag, you are no longer writing JavaScript code. You are writing HTML.<br/>
As such, if you write something like this, you will receive an error:
```jsx
    export default function MyComponent() {
        return(
            <div>
                const myVar = "Hello World!"; {/*<-- This will throw an error. It's Illegal.*/}
                <h1>myVar</h1>                {/*<-- This renders "myVar" instead the value you wanted*/}
            </div>
        )
    }
```

However it still possible to bring JavaScript into the HTML world by using curly braces `{}`.<br/>
When you open curly braces, you open a door to JavaScript inside your HTML.<br/>
It essencially opens a **local context** where you can write JavaScript code.<br/>
The same example from above, now in a correct way:

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

> [!CAUTION]<br/>
> Note that I still had to move the `const myVar = "Hello World!";` line outside the return statement.<br/>
> As I mentioned before, when you **open** the curly braces, you are in a **local context**. Anything you **create** inside it will be lost outside the curly braces.<br/>

```jsx
    export default function MyComponent() {// <-- Open Context 1
        const variable1 = "Hello World!"; 
        return(
            <div> 

                { const variable2 = "Testing"; /* <-- Context 2 */ }

                <h1>{ variable1 /*<-- Context 3 / Correct*/ }</h1> 

                <h1>{ variable2 /*<-- Context 4 / Wrong*/ }</h1>

            </div>
        )
    }// <-- Close Context 1
```

In the example above, I created 4 different **contexts**.<br/>
Contexts 2, 3 and 4 are **inside** Context 1.<br/>

In this case, `variable1` is **created** in the beginning of Context 1, so everywhere inside Context 1 can **access** it.<br/>
Since Context 3 is inside Context 1, it can **see** and **use** `variable1`.<br/>

However, `variable2` is **created** inside Context 2, so as soon as the Context is closed, it is lost.<br/>
This is why Context 4 is wrong, because `variable2` doesn't exists outside Context 2.<br/>

> [!NOTE]<br/>
> You have already used Javascript inside your HTML in the previous assignments, when you created your `Div` component and had to access its children to render them.<br/>
Or when you wanted to use the `className` attribute to style your components.<br/>
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

In both cases you had to use the curly braces so you could use the Javascript code inside the HTML.<br/>

> Why do I need to know this?

In order for us to have a component be responsible for its own appearance, but still be able to allow some optional customization,<br/>
we'll need to add some Javascript logic for our component classes.

> [!NOTE]
> In HTML when you want to customize a tag you put one or more classes in their attributes like this:<br/>
> ```tsx
>     <div class="main-view grid-container">
>         <div class="picture object-1"></div>
>         <div class="bio object-2"></div>
>     </div>



What if we want this `main-view` behaviour to be a reusable component, but still allow us to add the `grid-container` only in a specific case?<br/>
We can create a component called `MainView` that has `main-view` class by default, but can also receive custom classes just like you did for the `Div` component.<br/>
It'd look something like this:

```tsx
    export default function MainView(props: any) {
        const {className, children} = props;

        return(
            <div className={`main-view ${className}`}> { children } </div>
        )
    }
```

In this example we can define the standard behaviour for the `<MainView/>` component using its own CSS file, but still allow for us to call it and pass additional classes, if we so desire.<br/>

```tsx
    <MainView className="grid-container">
        <div class="picture object-1"></div>
        <div class="bio object-2"></div>
    </MainView>
```

Here the final `className` would become the same as before, but now we can assure that wherever we use the `<MainView/>` component, we'll apply the `main-view` class to it without having to rewrite it every time.


## Task

## Possible blockers
