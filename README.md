<h1 align="center">
  Blokos.io Placeholder
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Open root IDE projects folder and run:

    ```shell
    gatsby new blokos-home
    ```

2.  **Start developing.**

    Open new site’s directory on IDE and start it up.

    ```shell
    // gatsby static without API
    gatsby develop
    
    // Gatsby + Serverless function API
    swa start build --api api
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_.

## 💫 Deploy

- **Deploy to Azure cloud**

  - Add Azure extensions to Vscode.
  - Create static app from Portal or extension.
  - Push to Github for deployment.
  - Wait for Github actions to finish build progress.

- **Deploy source only to version tracking**

    ```shell
    gatsby build

    // test results in local server
    gatsby serve
    ```

- **Deploy statically built files only to host**

  <p style="color: #00CC99">
    From inside ignored */public* directory:
  </p>

    ```shell
    // start a separate repository
    git init

    // add local files to repository
    git add .

    // add remote host to origin
    git remote add origin <https://HOST-REPOSITORY-URL.git>
    ```

    Commit changes and push to master when ready to deploy.
