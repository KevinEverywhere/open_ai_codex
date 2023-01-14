# our-bitch, A ChatGPT app

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

## Usage

8. The screen should look like this, and you can insert text, hit return and see the results.

![demo2](https://user-images.githubusercontent.com/643109/212488328-11b66193-6ea2-4cbb-8e1c-167d3e18f86e.jpg)

9. Example Query:
One thing that ChatGPT can help with is scaffolding documents, such as unit tests. Here, a simple request for creating unit tests generated 80 lines of code.

![demo3](https://user-images.githubusercontent.com/643109/212488599-45e3061a-88b3-4022-b3fa-7dffeef7f0a7.jpg)

10. Transfering the Response Text

Once the response has been produced, merely click on the text box containing the text, and you will receive an alert that lets you know that it has been copied to the clipboard. You can paste this into the text editor of your choice to edit it to your needs.

![demo4](https://user-images.githubusercontent.com/643109/212488688-4f825b55-e218-4c02-895d-a0a9af339211.jpg)

## Troubleshooting

The most typical problem will be not having the OPENAI_API_KEY present in the .env file that needs to be created in the server directory. You need to create your own key at [OpenAI API](https://openai.com/api/). Make sure that you have [nodeJS installed](https://nodejs.org/). More information can be found at [Adrian Hajdin's GitHub Repo](https://github.com/adrianhajdin/project_openai_codex) who authored the principal code and [video](https://www.youtube.com/watch?v=2FeymQoKvrk) that I followed to create this app.

## Disclaimer

My part in creating this app was following a tutorial, making some edits, adding a library to enable both apps to be launched at the same time, and adding the copy-to-clipboard feature. 

