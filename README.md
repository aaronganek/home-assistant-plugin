# ChatGPT Home Assistant Control Plugin

## What it is
This plugin is an alpha version of an integration that allows ChatGPT to control your Home Assistant entities. It works by exposing a new REST API on top of your Home Assistant instance.

ChatGPT plugins fetch a manifest file, which describes the details of the API that it can connect to, to get back certain information. This plugin allows ChatGPT to get those files from your instance and securely control your Home Assistant entities.

## What's required
You will need: 
- Access to ChatGPT plugins (as of May 2023 this is only for "Plus" users who have joined the waiting list).
- Your Home Assistant instance accessible from the internet.
- A HA Long Lived Access token

## Installation

Please note that the installation process is currently manual. This was developed as a proof-of-concept. Future iterations, meant for more board consumptions, will likely update this process for additional dynamic installation and more appropriate security measures.

1. Clone this GitHub repository.
2. Update the hardcoded public URL in the code to match your personal public Home Assistant URL.
3. Host the manifest file and OpenAPI on your server.
4. Follow the OpenAI ChatGPT Plugin installation instructions. During this process, you will be asked to provide your Long Lived Access Token (LLAT).
5. Start controlling your Home Assistant entities with ChatGPT!

## Current Limitations / TODO
This plugin is currently in alpha, and as such, has some limitations:

- The current Home Assistant REST API cannot return a subset of entities. When returning all of them, this can overload ChatGPT.
- Using ChatGPT to control devices is very slow at the moment.

### Domains
The currently exposed domains are:
- Lights
- Covers

We appreciate your patience and support as we continue to develop and improve this plugin. Your feedback is invaluable to us, so please feel free to report any issues or suggestions you may have.
