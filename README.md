## Index

- [Getting Started](#getting-started)
- [Assignment Guidelines](#assignments)
  - [1. Migrate an existing HTML/CSS project to Next.js](#1-migrate-an-existing-htmlcss-project-to-nextjs)
- [Tips and Resources](#resources)
- [Possible blockers](#possible-blockers)

## Getting Started

This is a ReactJS project created using the [Next.js](https://nextjs.org/) framework bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).<br/>
This project has been deployed to the cloud on [Vercel](https://vercel.com).

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

For every assignment, I suggest creating a new branch called `assignment/1-migrate-html-css`, `assignment/2-create-component` and so on.<br/>
This way, you can keep track of your progress and have a clean codebase.

As a rule of thumb, I suggest this course of action for each assignment:
- Make sure you're on the `main` branch.
- Pull the latest changes from the remote repository.
- Always remember to run `npm install` before starting your work.
  - This is not always necessary, but a good practice when working with more people.
- Create a new branch for the assignment.
- Work on the assignment.
  - If you have any blockers, check the [Possible blockers](#possible-blockers) section.
  - Even if you think you haven't finished the assignment, if you have a working version, it's a good practice to commit your progress.<br/>
    This way, if you have any issues, you can go back to a working version and start fresh.
- Push your code to the remote repository.
- Create a pull request to the `main` branch.
- Assign me for a review.

PS: Every time you publish a branch on GitHub, Vercel will create a new preview link in the cloud.<br/>
If you want to see it, you can create a Pull Request (even if it's not finished) and check the deployment link Vercel will provide once the PR is created.<br/>
It will even tell you if the deployment is successful or not.

### 1. Migrate an existing HTML/CSS project to Next.js

For this assignment, you'll be working solely on the `src/app/` directory. <br/> 
You'll grab any pure HTML/CSS project you've worked on in the past and migrate it into the `index.tsx` and `index.css` files inside `src/app/pages`.<br/>
If you have any image folders, you can place them inside a `src/app/images` folder. 

There is an existing "Hello World" that can be used as a reference.

Hint: 
- you only need to copy the `body` content of your HTML file into the `index.tsx` file.

If you encounter any blockers, look for the [Possible blockers](#possible-blockers) section.<br/> 
If you still have any issues, feel free to ask me any time.


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