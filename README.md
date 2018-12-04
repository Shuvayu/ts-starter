# Getting started
- Clone the repository
```
git clone --depth=1 https://github.com/Shuvayu/ts-starter.git
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build project
```
tsc: build - tsconfig.json
```
- Run project
```
npm run start
```
Or, if you're using VS Code, you can use `cmd + shift + b` to run the default build task (which is mapped to `npm run build`), and then you can use the command palette (`cmd + shift + p`) and select `Tasks: Run Task` > `npm: start` to run `npm start` for you.

> **Note on editors!** - TypeScript has great support in [every editor](http://www.typescriptlang.org/index.html#download-links), but this project has been pre-configured for use with [VS Code](https://code.visualstudio.com/). 

## Project Structure
The most obvious difference in a TypeScript + Node project is the folder structure.
In a TypeScript project, it's best to have separate _source_  and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `build` folder.
The `test` and `views` folders remain top level as expected. 

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run build`

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **.vscode**              | Contains VS Code specific settings                                                            |
| **build**                | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the build dir                              |
| **src/app**              | Contains all application code                                                                 |
| **src/app/application**  | Contains all application business logic code                                                 |
| **src/app/domain**       | Contains all application domain objects                                                       |
| **src/app/persistence**  | Contains all application persistence objects like apis, file system dependencies, etc          |       
| **src**/index.ts         | Entry point to the app                                                                    |
| .env.example             | API keys, tokens, passwords, database URI. Clone this, but don't check it in to public repos. |
| package.json             | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)                      |    
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |
| tslint.json              | Config settings for TSLint code style checking                                                |
