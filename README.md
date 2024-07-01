## Index

- [Getting Started](#getting-started)
- [Assignments](#assignments)
  - [1. Migrate an existing HTML/CSS project to Next.js](#1-migrate-an-existing-htmlcss-project-to-nextjs)
- [Tips and Resources](#resources)

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Wanna check the latest version on `main` branch? [Click here](https://ana-classroom.vercel.app)

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

To run the local server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assignments

For every assignment, I suggest creating a new branch called `assignment/1-migrate-html-css`, `assignment/2-create-component` and so on. This way, you can keep track of your progress and have a clean codebase.

Once you think you've completed the assignment, push your branch and create a pull request to the `main` branch and I'll review it.

### 1. Migrate an existing HTML/CSS project to Next.js

For this assignment, you'll be working solely on the `src/app/pages` directory. You'll grab any pure HTML/CSS project you've worked on in the past and migrate it into the `index.tsx` and `index.css` files. 

There is an existing "Hello World" that can be used as a reference.

Hint: 
- you only need to copy the `body` content of your HTML file into the `index.tsx` file.


## Resources


- vs code has a built-in git tool that can help you create branches and push your code. To learn more about it, [click here](https://code.visualstudio.com/docs/editor/versioncontrol).

- You can use the browser to create a pull request directly from the GitHub website. To learn more about it, [click here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request?tool=webui#creating-the-pull-request).

- Before starting a new assignment, make sure to pull the latest changes from the `main` branch.

- I'm here to help you, so don't hesitate to ask questions.
  - If you have any question, I created a Discussion board on GitHub. Feel free to ask anything there. You can access it [here](https://github.com/jose0ten/ana-classroom/discussions).

- If you're new to Git and GitHub or want to refesh your memory, I suggest checking this [YouTube playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR) to learn more about it.

- If you need to run `sudo` for npm, I suggest installing NVM (Node Version Manager) to install Node and avoid permission issues.
  - To install on MacOS, Check [this](https://youtu.be/S8ovFOnB4Sg?si=uF0bz7uKBtXqBryY) YouTube video.
  - To install on Linux or Windows WSL, Check [this](https://youtu.be/z6Tta9ZbbGg?si=RIkxKV5LJOmz_NNg) YouTube video.
  - To install on Windows, Check [this](https://youtu.be/5LxEQivuo0M?si=TdnrbNpuQZK0oS9E) YouTube video.

- NVM is used to install and use different Node versions at the same time. After installing a version with NVM, the NPM commands won't require `sudo`.
    - For examples on how to use NVM, check [this link](https://github.com/nvm-sh/nvm?tab=readme-ov-file#usage).