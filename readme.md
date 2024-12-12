POcKEt-FINDER

This is an app designed to be ran as a game to tag characters in images. It employs
techniques for tagging coordinates on an image and validating characters present (or not) on said coordinates.

Technologies used

Backend: Supabase

Frontend: React

Testing: Vitest, react-testing-library and jest-dom for react;

How to build and run it locally

Live Demo: https://poke-finderndk.netlify.app

1. Prerequisites
   Ensure you have the following tools installed on your system:

Node.js (version 16 or later recommended),
npm (comes with Node.js) or yarn,
Git (to clone the repository)

2. Clone the repository

3. Navigate to the project directory

run cd photo-tagger/frontend

4. Install dependencies

run npm install

5. Set up environment variables

Check the .env.example file for reference

6. Run the server

run npm run dev for the development server or npm run build && npm run preview for the production version

How to run the tests

To run the tests simply run the command "npm test"

What I learned

The main takeaway for me was to not overcomplicate things. Why would I build a full server and API to a simple single page game that doesnt require authentication or any other thing? Why would I manage a full ORM setup just for storing leaderboard info? Stick to keeping things simple, take it one step at a time. If you're stuck don't be scared to ask for help, to use npm packages that solve your problem, to simplify things and to think outside of the box. The goal is not to prove you're the greates programmer of all time, the goal is to get the problem solved efficiently and have the code shipped quick and with quality.

What is still to do

Add more challenges, more images, more nintendo owned creatures!

Special thanks to SHUBHAM from ShuDoCode for helping me with the image map logic, you're the GOAT!
(His YT channel: https://www.youtube.com/@shudocode)
And to David J Brad Shaw for the image map resizer npm package, you're also the GOAT!
(Repo: https://github.com/davidjbradshaw/image-map-resizer)
Timer logic is handled by react-timer-hook (https://www.npmjs.com/package/react-timer-hook)
