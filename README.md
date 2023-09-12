# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Configuration

An OpenAI API key and a Lightning Address is required in the .env file to run the AI chat successfully.

```env
LN_ADDRESS=you@getalby.com
OPENAI_API_KEY=sk_3kd8sa...
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

**Note**: The AI chat will not work in local dev mode

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment (Github Pages)

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Deployment

Run `yarn build` to build the client.

Run `yarn server` to update the vector store and serve the docs.