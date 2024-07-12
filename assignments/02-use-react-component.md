# 2. Start using React components

Congratulations! You've successfully already edited your first React component! 🎉

> "What do you mean?"

Well, the `index.tsx` file is a React component already.<br/>
In React, **almost** everything is a component. A component can be defined in a number of ways, but the most common way is to use a function.

```tsx
export default function Index() {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}
```

Let me break it down for you:
- ```tsx
  //  This syntax is used to make whatever after it available to be used by other files/components
  //  The 'export' makes it available.
  //  The 'default' makes it the default export of the file. 
  //  That means that when importing this component you only need to use the component name.
  //  More on that later.
  export default
  ```


- ```tsx
  //  This syntax creates a function called Index in javascript.
  //  Functions are blocks of code that you can call whenever you need them.
  //  Anytime you need to create a new component, you can use this syntax to create it as a function.
  function Index() {
    // At the very end of the component function, you need to return a JSX element.
    // In this case our function is returning a <div> element.
    return(
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
  ```

- ```tsx
  // Here we are creating a function called Index and making it available to be used by other files/components.
  export default function Index() {
    // Our function is returning a JSX element.
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
  }
  
  ```

> [!NOTE]
> A **Function** that returns a **JSX element** is what we call a **React Component**.<br/> 
**JSX** is a syntax extension for JavaScript that looks similar to HTML as you might've noticed when completing your first assignment.<br/>
Using JSX syntax, you can write HTML elements inside your JavaScript code almost exactly as you would in HTML.<br/>
Some important differences were covered in the [Possible blockers](./01-migrate-html-css.md#possible-blockers) section in the first four points.

## Before the assignment

For this assignment, I took the liberty of creating three new components.<br/> 
Each one was chosen and named to help you understand one basic concept of React Components.<br/>
They can all be found under the `src/app/components` directory.
- `BreakLine.tsx`
  - As the name suggests, this component is a line break. This is the simplest component you can create since it doesn't need anything to be rendered.
  - Its only return is a simple `<br/>` tag.
- `Paragraph.tsx`
  - This component is your basic paragraph. You can use it just the same as you would use a `<p>` tag in HTML.
  - Since you wrap your text with the `<p>` tag, you'll be able to do the same here.
- `Link.tsx`
  - This component is a link. It will be used instead of the `<a>` tag in HTML.
  - For this one I changed one of its properties from `href` so you can start to understand how to pass properties to a component.


## Task:
Your task is to use these components in the `index.tsx` file instead your regular HTML tags.<br/>
I suggest starting with `BreakLine.tsx` first to understand how to import and use a component.<br/>
Then move on to `Paragraph.tsx` and finally `Link.tsx`.<br/>
Before using any of them, open the component file and check its content to understand what it does.<br/>
I left some more explanations in the comments of each file to help you understand them better.<br/>

To use them, simply call them the same way you use an HTML tag<br/>
Example:
```tsx
  <BreakLine/>
  <Paragraph>This is a text inside a paragraph.</Paragraph>
  <Link/>
```

Just like the first assignment, I don't want you to worry about understanding everything right now.<br/>
Once you finish the assignment, I'll give you some more context as I did with the first assignment.<br/>
This way you can understand the concepts better and apply them in the next assignments.

## Bonus!

Did you find it easy and want to do a bit more?<br/>
Follow the steps I did to create the initial components and create the remaining `div`, `img` and `h1` from your HTML.<br/>

> [!WARNING]
> To create a new component, you **must** start its name with a capital letter.<br/>
This is a convention in React to differentiate between regular HTML tags and React components.<br/>
Now you're going to start importing components from other directories.<br/>
This is where the `./` and `../` paths come in handy.<br/>
Make sure to check the paths you're using to import the components.<br/>

As always, if you have any blockers, look for the [Possible blockers](#possible-blockers) section.<br/>
I'm also here to help you, so don't hesitate to ask questions.<br/>


## Possible blockers

- Created a component and receiving an error that it's not a JSX Element? 
  - Make sure you're returning a JSX element in your component. Ex: 
    ```tsx
    export default function MyComponent() {
      return (<div>Hello World!</div>)
    }
    ```

- Still receiving an error that your component is not a JSX Element? 
  - Make sure you're following the correct React naming convention. 
    - The component name should start with a capital letter. Ex: `MyComponent` instead of `myComponent`.