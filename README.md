# our-bitch, chatGPT app

## What it Does:

This application was built to provide me assistance to quickly achieve programming tasks.

# Implementation of a ChatGPT AI Application

This app was based on a video, [Build and Deploy Your Own ChatGPT AI App ...](https://www.youtube.com/watch?v=2FeymQoKvrk). It uses [OpenAI API](https://openai.com/api/). The original source code is from [Adrian Hajdin's GitHub Repo](https://github.com/adrianhajdin/project_openai_codex). I added a wrapping shell and the dependency, concurrently to launch client and server apps together.

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd open_ai_codex
   ```

4. Create an account and API key here [OpenAI API](https://openai.com/api/)

5. In the server directory, create .env file and assign OPENAI_API_KEY to [API key](https://beta.openai.com/account/api-keys)

.env

```
OPENAI_API_KEY=YOUR_API_KEY
```

Your directory structure should look like this:

```
open_ai_codex
├── client
├── server
│   ├── .env
├── package.json
└── README.md
```

The client and server directories contain the two apps, and the .env file contains the API key.

6. The package.json file contains a script to start both apps. First the dependencies are installed and then the client and server apps are started.
   ```
   $ npm start
   ```
7. To see the app running, go to [http://localhost:5173/](http://localhost:5173/)

8. The screen should look like this, and you can insert text, hit return and see the results.

![demo](https://user-images.githubusercontent.com/643109/212207599-d68a7dcf-a649-4b51-849a-8bba6c0b9e4d.jpg)


