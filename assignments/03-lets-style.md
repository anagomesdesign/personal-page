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
As such, whe you write something like this, you will receive an error:
```jsx
    export default function MyComponent() {
        return(
            <div>
                const myVar = "Hello World!"; <-- This will throw an error. It's Illegal.
                <h1>myVar</h1>                <-- This renders "myVar" instead the value you wanted
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
        const myVar = "Hello World!"; <-- This is valid JavaScript code
        return(
            <div>
                <h1>{myVar}</h1>      <-- This will render "Hello World!"
            </div>
        )
    }
```

> [!CAUTION]<br/>
> Note that I still had to move the `const myVar = "Hello World!";` line outside the return statement.<br/>
> As I mentioned before, when you **open** the curly braces, you are in a **local context**. Anything you **create** inside it will be lost outside the curly braces.<br/>

```jsx
    export default function MyComponent() { <-- Open Context 1
        const variable1 = "Hello World!"; 
        return(
            <div> 

                { const variable2 = "Testing"; } <-- Context 2

                <h1>{ variable1 }</h1> <-- Context 3 / Correct

                <h1>{ variable2 }</h1> <-- Context 4 / Wrong

            </div>
        )
    } <-- Close Context 1
```

In the example above, I created 4 different **contexts**.<br/>
Contexts 2, 3 and 4 are **inside** Context 1.<br/>

In this case, `variable1` is **created** in the beginning of Context 1, so everywhere inside Context 1 can **access** it.<br/>
Since Context 3 is inside Context 1, it can **see** and **use** `variable1`.<br/>

However, `variable2` is **created** inside Context 2, so as soon as the Context is closed, it is lost.<br/>
This is why Context 4 is wrong, because `variable2` doesn't exists outside Context 2.<br/>

> [!NOTE]<br/>
> You have already opened the doors to javascript in the previous assignments, when you created you `Div` component and had to access its children to render them.<br/>
Or when you wanted to use the `className` attribute to style your components.<br/>

```jsx
    export default function Div(props) {
        const { children, className } = props;
        return(
            <div className={ className }>
                { children }
            </div>
        )
    }
```

In both cases you had to use the curly braces so you could use the Javascript code inside the HTML.<br/>

## Task

## Possible blockers