# Onboarding

## Project Setup

First, ensure that you have [Node.js](https://nodejs.org/en/) installed.

[Clone the repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository), potentially using `git clone` in your preferred CLI to pull the project down to your computer.

Familiarize yourself with [common git commands](https://education.github.com/git-cheat-sheet-education.pdf), [CLI commands](https://www.w3schools.com/whatis/whatis_cli.asp), and [what Git is](https://www.atlassian.com/git/tutorials/what-is-git) if you aren't already.

## Database

### Installation

The only step to install [Java](https://www.java.com/en/download/) . The app is a Java Persistence API (JPA) type of application, so it can be used with all sorts of databases, but by default, it will use an H2 in-memory database. You can change the project configurations to switch to a database stored in non-volatile memory, however, such as PostgreSQL. If you choose to use H2, you don't need to change any settings or worry about database addresses. To run the backend, go to the `Backend-Stuff/gamifiedcalendar/gamifiedcalendar` directory and then run the command `./mvnw spring-boot:run`. You can connect to the backend via `localhost:8080`.

To test that things are working, run `npm run start` in the CLI and go to an example API route.
Example: `localhost:8080/Accounts`.

## Webapp

### Get react component to work
 [Syncfusion React Component Library\*](https://www.syncfusion.com/downloads/react) 

**IMPORTANT NOTE:** You MUST create a trial account and download the web installer BEFORE attempting to run or install any of the packages. If not the program will not run.
If you can not get it to run, either contact the team member or checkout [our video demo](https://github.com/Levent-Batakci/Gamified-Calendar/blob/main/docs/WebappDemo.md)

### Run the webapp

In your CLI, navigate to the folder for the project and run `npm install` to instruct [npm](https://www.npmjs.com/about) to install all neccessary packages.

To test that things are working, run `npm run start` in the CLI and the Webapp should popup on `localhost:3000` if port not occupied.

## IDE: VSCode

### VSCode Extensions
When you launch the project in VSCode, you should see a popup in the bottom right asking you to "install all recommendeded extensions".
Click "install" to easily install all of the below extensions.

If for some reason you don't see this popup you can install them manually using the extensions button on the left sidebar.
Below are the recommended extensions that you should install.

If you use prettier,
Turn on `format on save` for Prettier.
Go to `Code > Preferences > Settings` (or via `cmd ,` on Mac) (or `File > Preferences > Settings` for Windows).
Search for `format on save` and make sure `Editor: Format On Save` is checked / yes.

- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) (`orta.vscode-jest`)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (`esbenp.prettier-vscode`)
