# 1. Migrate an existing HTML/CSS project to Next.js

## Before the Assignment

Make sure to read the [Assignment Guidelines](../README.md#assignment-guidelines) carefully before starting any assignment.

Remmeber that the [Resources](../README.md#resources) section can be helpful if you need to review any topics(Git/VsCode/Github/etc).

## TASK:

For this assignment, you'll be working solely on the `src/app/` directory. <br/> 
You'll grab any pure HTML/CSS project you've worked on in the past and migrate it into the `index.tsx` and `index.css` files inside `src/app/pages`.<br/>
If you have any image folders, you can place them inside a `src/app/images` folder. 

There is an existing "Hello World" that can be used as a reference.

> [!TIP]
> - you only need to copy the `body` content of your HTML file into the `index.tsx` file.

If you encounter any blockers, look for the [Possible blockers](#possible-blockers) section.<br/> 
If you still have any issues, feel free to ask me any time.<br/>
For helpful links, refer to the [Resources](../README.md#resources) section.

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