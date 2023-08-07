---
slug: 'how-to-create-a-project-with-next-13-app-directory-with-tailwind'
title: 'How to create a project with NextJS 13 using app directory and Tailwind'
description: 'This is a recipe to create a good and maintainable Next app'
image: '/static/images/posts/how-to-create-a-project-with-next-13-app-directory-with-tailwind.png'
video_url: ''
project_url: ''
figma_url: ''
tags: ['next-js', 'react-js', 'tailwind', 'frontend']
tagged:
  [
    'react-js',
    'next-js',
    'DOM',
    'typescript',
    'eslint',
    'prettier',
    'lint-staged',
    'husky',
    'tailwind'
  ]
related:
  [
    'how to create npm packaged- eslint package',
    'How to create more than two themes in Tailwind, tailwind themes strategy'
  ]
---

[NextJS](https://nextjs.org) is a powerful framework used in a lot of sites. It can be really useful specially if you need a [SSR version](https://nextjs.org/docs/app/building-your-application/rendering) of your's [SPA react pages](https://stackoverflow.com/questions/62529631/why-is-react-js-called-as-single-page-application).

## Advantages of using NextJS

With user experience becoming the most important idea behind companies, it's clear that we need to have a lot of interactions that could change the interface. This can be achieved using only HTML, CSS and Javascript, but is hard and time consuming.

[React](https://react.dev/learn) was created mainly to solve this, using a virtual DOM (Think in [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_Document_Object_Model) as your interface, what you can see in your browser), that can be manipulated as you want using Javascript, basically using to create new interfaces or remove the older's ones.

This can be specially good because React algorithm is super fast and can detect what changed, so it does not need to change the whole interface, but maybe just some part. E.g. You have a blog page that has a header and a footer, when you change the articles, the header/footer don't need to be changed or render again, this is awesome and it's one of the best parts of React.

All of this is good but using only Javascript to render the interface can bee very bad if you are worried about SEO, what can help your site to be found in search engines, like Google's.

This is bad because a lot of crawler robots disable Javascript for better performance, and only use HTML and CSS to analyses your site. The problem is, if you only use React, your site will be a blank page with no content.

NextJS is a framework built in React's aiming to help with many React problems creating a middleware server using [NodeJS](https://nodejs.org/en) that serves the page already mounted to client, which means that crawlers can map your site.

It's not only this, NextJS bring a lot more goodies, like [image optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images) and a [router system](https://nextjs.org/docs/app/building-your-application/routing/defining-routes).

That's why we are going to use this fabulous framework.

## Getting started

To get started with NextJS, you need to have a [node version](https://nodejs.org/en) installed on your machine. I recommend you to never install a current version, and always a LTS (Long-term support) to prevent unexpected behavior.

After that [install NextJS](https://nextjs.org/docs/getting-started/installation) using:

```bash
npx create-next-app@latest
```

You will be asked about your project's configuration. You can choose what best suits you, but mine was the following:

```terminal
What is your project named? next-blog
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like to use `src/` directory? Yes
Would you like to use App Router? (recommended) Yes
Would you like to customize the default import alias? No
What import alias would you like configured? @/*
```

Explaining a little bit of each one:

1. [Typescript](https://www.typescriptlang.org) like the doc says:

> TypeScript is JavaScript with syntax for types.

Typescript can be difficult to understand at first, but believe me, it will be worthy, not just for the error catching but for the [IDE intellisense](https://code.visualstudio.com/docs/languages/typescript). Using Typescript can make you code faster and prevent errors. I recommend you use typescript on EVERY project possible and forget about vanilla Javascript.

2. [Eslint](https://eslint.org) is a linting tool to help you find syntax errors. It's a very light package that bring so many advantages when writing code, like syntax verification, imports/variables not used, object validation and much more. You can customize as you want adding or removing rules, and with [React Plugin](https://www.npmjs.com/package/eslint-plugin-react) you have a set of rules that helps you code in React. Another tool that is a must-have.

3. [Tailwind CSS](https://tailwindcss.com) is a CSS framework. I am gonna talk more about later in the article, but what you need to know is that Tailwind build their classes at build time and not run time like [CSS-In-JS](https://nextjs.org/docs/app/building-your-application/styling/css-in-js) solutions, which makes perfect duo to NextJS Server Render Strategy. I really love Tailwind and I am sure you will too.

4. Src directory is just to create a folder that contains all of your code instead letting routes, components and other stuff related to code stay at the same level as public folder or the configurations files.

5. [App router](https://nextjs.org/docs/app) is a new paradigm used to create NextJS applications using [React 18 Server components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components) this change is necessary because before this, all NextJS components were client, except routes pages, but with the server components, NextJS handles every component as server, except if you explicitly make the component client. This brought a lot of changes but, for good, and if you are started studying NextJS recently, I recommend to focus on app directory.

6. Customize the default import alias is a Typescript configuration to give an alias to imports. I personally like how NextJS was configured, but you can change the values and see what happened. I choose the default import alias `@` so my import will be:

```jsx
import { Header } from '@/components/Header'

// ...
```

## Configure Eslint and Prettier

As I said, Eslint has a really big set of rules you can choose, I am gonna show you the best Eslint configuration for me when using React and NextJS, but of course, you can change as you want.

First your Eslint configuration file is located at root project and called `.eslintrc.json`.

Here you can use as JSON or a Javascript module file. Personally I like to use as JSON, the only exception were when I created my [Eslint package](https://github.com/ofelipescherer/eslint-config) that's because were more easy to create, but this is history for another time.

Continuing, I recommend you to look at [Rocketseat's Eslint](https://github.com/Rocketseat/eslint-config-rocketseat), because they have a lot of good configurations and I use it as reference to make my own configurations. You can take a look at them here:

```json
{
  "plugins": ["react", "jsx-a11y", "@typescript-eslint"],
  "extends": [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "error",
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "prettier/prettier": [
      "error",
      {
        "printWidth": 80,
        "tabWidth": 2,
        "singleQuote": true,
        "trailingComma": "none",
        "arrowParens": "always",
        "semi": false,
        "endOfLine": "auto"
      }
    ]
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es2021": true,
    "browser": true,
    "jest": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

All the rules will be explanted in another article, but what you need to know is that I will use eslint with [Prettier](https://prettier.io), a code formatter that makes your code prettier, with the right indentation. Besides, we have four more plugins, one of them being the [Typescript Eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin), to enable some rules about Typescript; one for accessibility [JSX A11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)(Curiosity: A11y is Accessibility, because between A and Y has 11 letters ) and lastly two about React, one for generic [React](https://www.npmjs.com/package/eslint-plugin-react) and other for [React hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks).

To make all work, you need to install them and install the [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

```bash
npm install eslint eslint-plugin-react-hooks eslint-config-prettier prettier @typescript-eslint/eslint-plugin eslint-plugin-jsx-a11y --save-dev
```

Lastly we can configure to every `ctrl` + `s` pressed, run eslint with prettier, this is very helpful and easy to do just makes VS code `source.fixAll.eslint` as true. Create a `.vscode` folder in root directory and a file `settings.json` inside with the configuration:

```json
{
  ...
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  ...
}
```

## Tailwind

There aren't much stuff you need to do, because if you choose Tailwind on NextJS template, it will configure all automatic. There are only one thing to do:

- Install a prettier plugin that [reorder Tailwind classes](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) to better organize them:

```bash
npm install prettier prettier-plugin-tailwindcss --save-dev
```

```javascript
// prettier.config.js
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')]
}
```

Of course Tailwind has a lot of more configurations, but this will be covered in another article

## Lint Staged with Husky

For last, I like to run eslint before committing just to make sure the code stay clean, we can achieve this by using [Husky](https://www.npmjs.com/package/husky) to run a command before commit and [Lint Staged](https://github.com/okonet/lint-staged).

To use Husky we need to prepare a script running:

```bash
npm pkg set scripts.prepare="husky install"
npm run prepare
```

Now, you can use this command to create a command to run in pre commit. I will already use a lint-staged command, but be calm, it will be explained later.

```bash
npx husky add .husky/pre-commit "npx lint-staged"
git add .husky/pre-commit
```

To install lint-staged run the command:

```bash
npm install --save-dev lint-staged
```

And for last we create a configuration file that can look something like this:

```js
// .lintstagedrc.js

const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand]
}
```

I like this setup because runs `next lint` with `--fix` so it will try to fix all possible things and if cannot fix, will trow an error and not commit the file, this is very good and will make your code very clean and standardized.

## VS code Settings

I want to bring this as an extra configuration to do in your projects because, setting a VSCode settings files, makes very easy to maintain the same configurations through the teams and if you change your pc, there is no need to remember all VSCode settings. I also recommend to use the same settings on every project, just copy and paste.

To do that, create a file called `settings.json` inside a folder `.vscode` at the root of your workspace. In this json you can have all VSCode configurations. I will show mine and explain why have this is good for me:

```json
{
  // It is a way for me to always use the Typescript version of my workspace instead the global VSCode version, this prevent some version errors.
  "typescript.tsdk": "node_modules\\typescript\\lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,

  // Makes on every time you save a file, it runs eslint and show to you if has any errors
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  // This is my personal option that if React component doesn't has any children should always be closed as <Component /> instead <Component></Component>
  "javascript.autoClosingTags": true,
  "typescript.autoClosingTags": true,

  //
  "eslint.validate": ["javascript"],

  // Prevent some bugs related to Tailwind intellisense
  "editor.quickSuggestions": {
    "strings": true
  },

  // Enables wordWrap
  "editor.wordWrap": "on",

  // Is used to enable Tailwind intellisense in other attributes besides "class" and "className"
  "tailwindCSS.classAttributes": [
    "class",
    "className",
    "ngClass",
    "additionalClasses",
    "color"
  ],

  // This is a configuration very big about exceptions in Code Spell Checker
  "cSpell.words": []
}
```

For last, if you are using VSCode there are plenty of extensions you can use to decrease your work time. I am gonna make an article about my favorites extensions, but for now, what you need to install is the [Eslint VSCode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and to make everyone that use your workspace install the extension make a file `extensions.json` inside `.vscode` and type:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
  ]
}
```

## That's all

In conclusion, this article has provided you with a comprehensive guide on how to configure a Next.js project with some essential tools to enhance your development workflow. By integrating Tailwind CSS, Eslint, Prettier, Husky, and Lint Staged into your project, you have gained valuable insights into improving code consistency, maintaining clean code, and ensuring code quality throughout your development process.

By following the step-by-step instructions provided in this article, you can confidently set up these tools in your Next.js project and enjoy the benefits of a streamlined development environment. Remember to adapt the configurations according to your project's specific requirements and team preferences.

That's it folks, thank you for reading and if you like my posts follow me on socials linked in this article. Have a nice day. Happy coding! :D
