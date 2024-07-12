# Index

- [Getting Started](#getting-started)
- [Assignment Guidelines](#assignment-guidelines)
- Assignments
  - [1. Migrate an existing HTML/CSS project to Next.js](./assignments/01-migrate-html-css.md#1-migrate-an-existing-htmlcss-project-to-nextjs)
  - [2. Start using React components](./assignments/02-use-react-component.md#2-start-using-react-components)
- [Tips and Resources](#resources)
  - For Git commands, VS Code Git tool, GitHub Pull Requests, and more.
- [Possible blockers](#possible-blockers)

# Getting Started

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

> [!IMPORTANT]<br/>
> - The command above will read the `package.json` file in your project for any library it might need and will install all of them in a new folder called `node_modules`.
> - This is the `Node.js` way of allowing people make use of libraries from the community.
> - When running this command always make sure you are inside the project folder so the command can read the correct file.
> - Any `npm install` that you ran for other projects will not reflect here.
> - When cloning a new project always run it first before any other action.

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
- [Assignment 1 blockers](./assignments/01-migrate-html-css.md#possible-blockers)
- [Assignment 2 blockers](./assignments/02-use-react-component.md#possible-blockers)