# **Example Typescript**
Handbook excersies from zero to hero in typescript. 


Why typescript?

1. Static analysis - the codebase becomes 'strongly typed', meaning that objects annotation is bound to interfaces and declarations, allowing you to have the 'shape' or the 'type' of each object before runtime. This improves catching bugs (via type safety) before running the application.
2. Tooling - IDE with support for typescript will greatly improve your coding workflows. VSCode uses typescript under the hood and helps even with JS code bases.
3. Readability - having explicit object definition (of types) helps understand what an object does and how it behaves and is not just a 'random' object with properties. Further TypeScript gives a boost to javascript by introducing language features, like interfaces, generics and other, all of which allows you to further structure one's codebase even better.
4. Maintainability - refactoring is getting easier and more safe, due to type safety being triggered, you can observe dependencies, references and etc. all comming from the static analysis.
5. Adoption - since TypeScript is build on top of Javascript, it can be easily be adopted. Even further, that can happen gradually.


Notes:

- Javascript is a scripting language, also better known as interpreted language, meaning that the code is executed line by line at runtime rather than being compiled into a binary form before execution. The interpretation is usually done by a javascript interpretator - some common ones being Node.js, or any browser (with support for javascript, which is probably all of them).
- Typescript is a superset of Javascript, which means that any valid JavaScript code is also valid TypeScript code. But in addition, it introduces a compiler (tsc) that translates TypeScript code into JavaScript, enabling you to leverage the additional features and benefits of TypeScript while still targeting JavaScript as the execution platform.
- TS Scope - tsc considers all files included in the compiler to belong to the same global space. This applies for js files too if they are included by the config. To prevent scope polution, each file is wrapped inisde a  IIFE to separate scopes.
- Technically a typical lifecycle of a javascript codebase, would be development, followed by runtime execution. There are of course other stages of the lifecycle, like transpiling, building, generating, testing, publishing, deploying and etc. For simplicity sake, in here we will sum all pre-runtime stages into 'development' and then 'runtime'. 

## Chapters
<details>
    <summary>
        <ins>1. Type Unsafety</ins>
    </summary>
Introducing two files, namely enabled.js and disabled.js. Check jsconfig.json, where second one is disalbed from type checking, which will introduce an error during execution of the script, which for enabled.js we will be hinted that theres an error prior to execution.
</details>

<details>
    <summary>
        <ins>2. Hidden Unsafety</ins>
    </summary>
Introducing a single file, which is type checked by IDE, but simply because we are running javascript with no notion of object types and interfaces, we are having an error that only catchable during runtime (or if we have hawk eyes during development).
</details>

<details>
    <summary>
        <ins>3. Non exception unsafety</ins>
    </summary>
Sometimes, valid javascript, can be the cause for unexpected errors to occur, even though the code does not cause exception on its own.
</details>

<details>
    <summary>
        <ins>4. Typo unsafety</ins>
    </summary>
Writing code during development without any type analysis, like Intellisense in VSCode does for us can lead to a large number of errors, especially typos, which are the worst once you find them out.
</details>
