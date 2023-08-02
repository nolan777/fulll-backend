# Fleet management

## Description

TypeScript application that allows you to manage your vehicle fleet.

## Step 3 (Bonus)

- For code quality, you can use some tools : which one and why (in a few words) ?
    - ESLint, It can be configured to follow specific coding rules (e.g. formatting rules, use of undeclared variables, etc...). ESLint helps to ensure code consistency between team members, and to detect potential problems as soon as they arise.
    - TypeScript improves code quality by detecting type errors at compile time. TypeScript offers better code understanding, improved maintainability and reduced runtime errors.
- you can consider to setup a ci/cd process : describe the necessary actions in a few words
    - I first have to host my code (on GitHub for example), then I use a platform with integrated CI/CD such as GitLab, then I hold a meeting with my team to agree on syntax rules and write my configuration files. I set up TypeScript and integrate a test tool like jest into the CI/CD pipeline, making sure that every test is executed on every deployment attempt.