# Contributing guidelines

Thank you for taking the time to contribute to the project. Please take a moment to read the following guidelines before contributing:

## How to Contribute 🤔

### Step 1: Fork the Repository

Click on the "Fork" button.

By forking the repository, you will have your own version of the repository under your GitHub username.

Once you have forked your repository, go to your profile inside the repository section you will find your forked repository.

### Step 2: Clone the Forked Repository

Once you locate your repository you need to clone it to your local machine.

```sh
git clone https://github.com/YOUR-USERNAME/Invoice-Generator.git
```

Congratulations! You have successfully cloned the repository to your local machine. You can now make changes, add new features, or fix issues in the codebase.

### Step 3: Go to the directory
```sh
cd Invoice-Generator
```

### Step 4: Install all the dependencies
```sh
npm install
```

### Step 5: Start the application

```sh
npm start
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### Step 5: Create a New Branch (important)

It's recommended to create a new branch for your changes. This helps keep your modifications separate from the main branch, making it easier to manage and review your contributions.

```sh
git checkout -b <branch-name>
```

### Step 5: Make Your Changes

Make the necessary changes or additions to the codebase.
Once you have added changes in your local, its time to push them, for that run this command to bring the modification to the staging area.

### Step 6: Check your changes

```
git status
```

```
git diff
```

git status: Shows the current status of the repository, including changes, untracked files, and branch information.

git diff: Displays the differences between the working directory and the last commit or between branches.

### Step 10: Stage your changes

```
git add .
```

This command is used to stage all the changes in the current directory and it's subdirectories for the next commit. It adds all modified and new files to the staging area, allowing you to include them in the next commit.

**Note:** The . represents the current directory, so git add . includes all files and directories within the current working directory. This means if you are anywhere outside from the directory then the changes would not be staged.
So make sure you are in correct directory.


### Step 7: Commit Your Changes

Commit your changes with a meaningful commit message using the following command:(make sure to add a decent commit message else PR will not be merged)

```bash
  git commit -m "Enter Your message related to what work you did"
```

Once you have committed your changes, it's time to push them to your forked repository on GitHub.

### Step 8: Push Your Changes

Use the following command to push your changes:

```bash
git push -u origin <branch-name>
```

Replace <branch-name> with the name of the branch you created earlier.

### Step 9: Make a Pull Request

After pushing your changes, open your forked repository on GitHub in your web browser.

Go to pull request section in your forked repository (not the main repository)

Click on `comapre and pull request`
Then this will appear.

Provide a clear and informative title and description for your pull request. Explain the changes you have made and why they should be incorporated into the original repository.

Review your pull request to ensure everything is correct, and then click on the "Create pull request" button to submit it.

### Congrats!🎉

Your pull request will now be visible to the maintainers of the original repository. They will review your changes, provide feedback if necessary, and decide whether to merge them into the main branch.

Congratulations! You have successfully created a pull request to contribute your changes to the repository. Remember to monitor the pull request for any updates or feedback from the maintainers.

## Remarks ✅

- If anything is missing or if you feel that something is not well described, please [create an issue.](https://github.com/guranshdeol/Invoice-Generator/issues/new/choose)
- Any changes or suggestions to the existing content or repository are welcome.

### Commit Message Guidelines using Commitlint

We follow a standardized commit message format using Commitlint to ensure consistency and clarity in our commit history. Each commit message should adhere to the following guidelines:

1. **Type**: The commit type must be one of the following:

   - `feat`: A new feature or enhancement.
   - `fix`: A bug fix.
   - `docs`: Documentation changes.
   - `style`: Code style changes (e.g., formatting, semicolons).
   - `refactor`: Code refactorings with no feature changes or bug fixes.
   - `test`: Adding or improving tests.
   - `chore`: General maintenance tasks, build changes, etc.

2. **Scope** (Optional): The scope provides context for the commit, indicating the specific part of the project being affected. Use a short description in lowercase (e.g., `auth`, `navbar`, `README`).

3. **Description**: A brief and meaningful description of the changes made. Start with a capital letter and use the imperative mood (e.g., "Add new feature" instead of "Added new feature").

4. **Issue reference** (Optional): Include the issue number associated with the commit (e.g., `#123`).

### Examples:

#### Valid Commit Messages:

- `feat: Add user authentication feature`
- `fix(auth): Resolve login page redirect issue`
- `docs: Update installation instructions`
- `style: Format code according to project guidelines`
- `refactor(navbar): Improve responsiveness`
- `test: Add unit tests for API endpoints`
- `chore: Update dependencies to latest versions`
- `fix: Handle edge case in data processing (#456)`

#### Invalid Commit Messages:

- `Added new stuff`
- `Fixed a bug`
- `Updated code`
- `auth feature update`
- `chore: fixed some stuff`


By following these guidelines, we can maintain a clean commit history that is easy to understand and helps us effectively track changes. If you have any questions or need further assistance, feel free to ask! Happy contributing!

<h3 align="center"> Don't forget to give a ⭐ to this repo !!
<h1>
