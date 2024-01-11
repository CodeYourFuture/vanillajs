# Vanilla 🍨

VanillaJS is a collection of useful JS functions. Indeed it is implementing a number of native JS methods using vanilla JS. In this workshop, you will use the code provided in vanillaJS to create small refactors and learn how to resolve merge conflicts.
This activity is designed to help you gain practical experience in dealing with merge conflicts in a collaborative coding environment. You'll be working in pairs, learning how to handle branching, refactoring, testing, and creating pull requests.

## Overview

- **Objective**: Learn to resolve merge conflicts that arise during software development.
- **Activity**: Refactoring a JavaScript function in two different ways using Git branches.
- **Duration**: 1 hour

## Learning objectives

- Describe how merge conflicts can occur in a development setting
- Interpret a merge conflict message
- Resolve a merge conflict

## Prerequisites

- Key JS syntax for control flow
- Access to documentation
- Some knowledge of how to run tests using Jest

## Setup

- Get into pairs
- Before starting, ensure you create a template of this repository on Github. Each person in the pair must clone down their template of this repository from Github and navigate to the project directory:

## Instructions

### 1. Start Branching from `main`

Each pair will need to branch off the `main`.Firstly, make sure you both start on the main branch and it's up to date:

```bash
git switch main
git pull origin main
```

### 2. Choose a function to refactor

As a pair, choose one JavaScript function from the codebase that you will **both** refactor.

### 3. Create and name your branch

Each person in the pair will create a new branch. Each person in the pair will need to refactor a chosen function using either a `while` loop or a `for...of` loop. Decide who will use a `while` loop and who will use a `for...of` loop for refactoring.

- For the person using a `while` loop, create a branch named `update-concat-while-loop`:

```bash
  git switch --create update-concat-while-loop
```

- For the person using a `for...of` loop, create a branch named `update-concat-for-of`:

```bash
  git switch --create update-concat-for-of
```

### 4. Refactor the function

On your respective branches, refactor the chosen function, using either a `while` loop or a `for...of` loop.

### 5. Test Your changes

Use the provided test suite to ensure your refactored function works correctly. Run the tests according to the project's testing instructions.

### 6. Raise a pull request

Once you've tested your changes and are satisfied with the refactor, commit your changes and push your branch to the remote repository:

```bash
git add <files-you-changed>
git commit -m "refactor function to use [while/for...of] loop"
git push origin [your-branch-name]
```

Then, go to the repository on GitHub and raise a pull request against the main branch.

## Handling Merge Conflicts

Once you've raised your pull requests, choose one Pull Request to review first and then merge it.

Now you will need to handle the second pull request. For this pull request, you should now have a [**merge conflict**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts) in the remaining pull request. Use [this guide from GitHub to resolve the conflict](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)

When you come to resolve the merge conflict, you'll need to choose which implementation you wish to keep: the `for...of` loop or the `while` loop refactor.

Once you've resolved the conflict, you should be ready to merge the second PR.
