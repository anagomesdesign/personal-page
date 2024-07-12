## Index

- [Getting Started](#getting-started)
- [Assignment Guidelines](#assignments)
- [Assignments](#assignments)
  - [1. Migrate an existing HTML/CSS project to Next.js](#1-migrate-an-existing-htmlcss-project-to-nextjs)
  - [2. Start using React components](#2-start-using-react-components)
- [Tips and Resources](#resources)
  - For Git commands, VS Code Git tool, GitHub Pull Requests, and more.
- [Possible blockers](#possible-blockers)

## Getting Started

This is a ReactJS project built with [Next.js](https://nextjs.org/), a framework for fast and scalable apps, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) for quick setup.<br/>
It's deployed on [Vercel](https://vercel.com), a cloud platform that hosts and scales web applications.

The deployment from the `main`("production") branch is accessible through the following link: [https://ana-classroom.vercel.app](https://ana-classroom.vercel.app).

Environment dependencies:
- Node.js v18 or higher (project created on v20)


To check your Node.js version:

```bash
node -v
```

To install the dependencies:

```bash
npm install 
# or
npm i
```

**Important:**<br/>
- The command above will read the `package.json` file in your project for any library it might need and will install all of them in a new folder called `node_modules`.
- This is the `Node.js` way of allowing people make use of libraries from the community.
- When running this command always make sure you are inside the project folder so the command can read the correct file.
- Any `npm install` that you ran for other projects will not reflect here.
- When cloning a new project always run it first before any other action.

To run the local server and view your progress:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assignment Guidelines

### 1. Preparing for the assignment

For every assignment, I suggest creating a new branch called `assignment/1-migrate-html-css`, `assignment/2-create-component` and so on.<br/>
This way, you can keep track of your progress and have a clean codebase.

Before start coding, I recommend following these steps:
- Make sure you're on the `main` branch.
- **Pull** the latest changes from the remote repository.
- Always remember to run `npm install` before starting your work.
  - This is not always necessary, but a good practice when working with multiple people.
- Create a new branch for the assignment.

### 2. Working on the assignment

With everything set up, you can start working on the assignment.

- Read the assignment description carefully.
- If you have any blockers, check the [Possible blockers](#possible-blockers) section.<br/>
I'll do my best to cover the most common issues you might face and how to solve them.
- Even if you think you haven't finished the assignment, if you have a working version, it's a good practice to commit your progress.<br/>
This way, if you have any issues, you can go back to a working version and start fresh.
  - This uses some git knowledge.


### 3. Finishing the assignment

When you finish the assignment, it's time to publish your work.

- Make sure you've tested your code locally.
- Commit your latest changes.
- Push your code to the remote repository.
- Create a pull request from **your branch** to the `main` branch.
  - This can be done directly through VS Code, but I'd recommend doing it on GitHub.<br/>
  The interface is more user-friendly and you can see the changes you're making.
- Assign me for a review.
- Need a refresh on **Git commands**, **Git on VS Code** or **Github**? Check the [Resources](#resources) section.

PS: Every time you publish a branch on GitHub, Vercel will create a new preview link in the cloud.<br/>
If you want to see it, you can create a Pull Request (even if it's not finished) and check the deployment link Vercel will provide once the PR is created.<br/>
It will even tell you if the deployment is successful or not.<br/>
This requires a Vercel account linked to your GitHub account. You can create one for free [here](https://vercel.com/signup).<br/>

## Assignments
### 1. Migrate an existing HTML/CSS project to Next.js

**TASK:**<br/>
For this assignment, you'll be working solely on the `src/app/` directory. <br/> 
You'll grab any pure HTML/CSS project you've worked on in the past and migrate it into the `index.tsx` and `index.css` files inside `src/app/pages`.<br/>
If you have any image folders, you can place them inside a `src/app/images` folder. 

There is an existing "Hello World" that can be used as a reference.

**Hint:**
- you only need to copy the `body` content of your HTML file into the `index.tsx` file.

If you encounter any blockers, look for the [Possible blockers](#assignment-1) section.<br/> 
If you still have any issues, feel free to ask me any time.


### 2. Start using React components

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

A **Function** that returns a **JSX element** is what we call a **React Component**.<br/> 
**JSX** is a syntax extension for JavaScript that looks similar to HTML as you might've noticed when completing your first assignment.<br/>
Using JSX syntax, you can write HTML elements inside your JavaScript code almost exactly as you would in HTML.<br/>
Some important differences were covered in the [Possible blockers](#possible-blockers) section in the first four points.

**TASK:**<br/>
For this assignment, I took the liberty of creating three new components.<br/> 
Each one was chosen and named to help you understand one basic concept of React Components.<br/>
They can all be found under the `src/app/components` directory.
- `Br.tsx`
  - As the name suggests, this component is a line break. This is the simplest component you can create since it doesn't need anything to be rendered.
  - Its only return is a simple `<br/>` tag.
- `P.tsx`
  - This component is your basic paragraph. You can use it just the same as you would use a `<p>` tag in HTML.
  - Since you wrap your text with the `<p>` tag, you'll be able to do the same here.
- `Link.tsx`
  - This component is a link. It will be used instead of the `<a>` tag in HTML.
  - For this one I changed one of its properties from `href` so you can start to understand how to pass properties to a component.

Your task is to use these components in the `index.tsx` file instead your regular HTML tags.<br/>
I suggest starting with `Br.tsx` first to understand how to import and use a component.<br/>
Then move on to `P.tsx` and finally `Link.tsx`.<br/>
Before using any of them, open the component file and check its content to understand what it does.<br/>
I left some more explanations in the comments of each file to help you understand them better.<br/>

Just like the first assignment, I don't want you to worry about understanding everything right now.<br/>
Once you finish the assignment, I'll give you some more context as I did with the first assignment.<br/>
This way you can understand the concepts better and apply them in the next assignments.

**BONUS:**<br/>
Did you find it easy and want to do a bit more?<br/>
Follow the steps I did to create the initial components and create the remaining `div`, `img` and `h1` from your HTML.<br/>

**Important:**<br/>
Now you're going to start importing components from other directories.<br/>
This is where the `./` and `../` paths come in handy.<br/>
Make sure to check the paths you're using to import the components.<br/>

As always, if you have any blockers, look for the [Possible blockers](#possible-blockers) section.<br/>
I'm also here to help you, so don't hesitate to ask questions.<br/>


## Resources

- Need help refreshing Git commands? Check this [YouTube playlist](https://www.youtube.com/watch?v=KngvG8WzYLU&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR&index=5) to learn more about it.<br>
It starts in video #5 for more focuse on Git commands.

- **Vs Code** has a built-in **Git** tool that can help you create branches and push your code. To learn more about it, [click here](https://code.visualstudio.com/docs/editor/versioncontrol).

- You can use the browser to create a **Pull Request** directly from the **GitHub** website. To learn more about it, [click here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request?tool=webui#creating-the-pull-request).

- I'm here to help you, so don't hesitate to ask questions.
  - If you have any question/comment/suggestion, I created a Discussion board on GitHub.<br/>
  Feel free to post anything there. You can access it [here](https://github.com/jose0ten/ana-classroom/discussions).

- If you need to run `sudo` for npm, I suggest installing NVM (Node Version Manager) to install Node and avoid permission issues.
  - To install on MacOS, Check [this](https://youtu.be/S8ovFOnB4Sg?si=uF0bz7uKBtXqBryY) YouTube video.
  - To install on Linux or Windows WSL, Check [this](https://youtu.be/z6Tta9ZbbGg?si=RIkxKV5LJOmz_NNg) YouTube video.
  - To install on Windows command prompt, Check [this](https://youtu.be/5LxEQivuo0M?si=TdnrbNpuQZK0oS9E) YouTube video.

- NVM is used to install, manage and use different Node versions at the same time.<br/>
After installing a Node version with **NVM**, the NPM commands won't require `sudo`.
    - For examples on how to use NVM, check [this link](https://github.com/nvm-sh/nvm?tab=readme-ov-file#usage).

## Possible blockers
- [Assignment 1](#assignment-1)
- [Assignment 2](#assignment-2)


### Assignment 1

- Seeing weird JSX Element errors? You might've forgotten to run `npm install (or npm i)`. Make sure to run it in the project root before starting your assignments.

- Some requirements for HTML tags that are not enforced in pure HTML but are **required** in React.
  - When using tags without a child tag/content, you need to close them with a `/` at the end.
    - For example, `<img src="..." alt="..." />` instead of `<img src="..." alt="...">`.
  - When using tags with a child, you need to close them with a `</>` at the end. 
    - For example, `<div><p>text</p></div>` instead of `<div><p>text</p><div>`.  
  - Special characters need the propper HTML encoding.
    - Examples:
      - `&` should be `&amp;` -> &amp;
      - `<` should be `&lt;` -> &lt;
      - `>` should be `&gt;` -> &gt;
      - `"` should be `&quot;` -> &quot;
      - `'` should be `&apos;` -> &apos;
    - You can read this raw README.md to see the above examples.
    - You can check the full list of HTML entities [here](https://www.w3schools.com/html/html_entities.asp).

- The `class` property from HTML was renamed to `className` in React instead.
  - For example, `<div class="container">` should be `<div className="container">`.

- The `style` property in HTML is used to add inline CSS.<br/> 
In React, you can use the `style` property as well, but you need to pass an **object** with the CSS properties.
  - For example, `<div style="color: red;">` should be `<div style={{ color: 'red' }}>`.

- Having trouble using images with `<img/>` tag? refer to [this comment](https://stackoverflow.com/a/68453264) on StackOverflow. Attention on the `import` and `<img src={}/>`.

- When importing any file, pay attention to the path you're using.
  - Use `./` to refer the same folder of the file you're working on.
  - Use `../` to refer the parent folder of the file you're working on.
  - You can go back multiple folders by adding more `../` to the path.
  - For Example, if you want to import a file from `src/app/images/image.png` and you're in `src/app/pages/index.css`,<br/> 
  `../` will take you to `src/app/` and then you can add `images/image.png`.<br/>
  The final path will be `../../images/image.png`.


### Assignment 2

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