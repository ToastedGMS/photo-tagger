# POcKEt-FINDER

This is an app designed to be run as a game to tag characters in images. It employs techniques for tagging coordinates on an image and validating characters present (or not) on said coordinates.

## Technologies Used

- **Backend**: Supabase
- **Frontend**: React
- **Other Dependencies**:
  - `@supabase/supabase-js`
  - `dotenv`
  - `image-map-resizer`
  - `react-router-dom`
  - `react-timer-hook`
- **Linting**: ESLint

## How to Build and Run It Locally

**Live Demo**: [https://poke-finderndk.netlify.app](https://poke-finderndk.netlify.app)

### Prerequisites

Ensure you have the following tools installed on your system:
- Node.js (version 16 or later recommended)
- npm (comes with Node.js) or yarn
- Git (to clone the repository)

### Clone the Repository

Navigate to the project directory:

```bash
cd photo-tagger/frontend
```
### Install Dependencies
Run the following command to install the necessary dependencies:

```bash
npm install
```
### Set Up Environment Variables
Check the .env.example file for reference.

### Run the Server
For the development server, run:

```bash
npm run dev
```
For the production version, run:

```bash
npm run build && npm run preview
```

### Future Updates
-Add more challenges

-Add more images

-Add more Nintendo-owned creatures!

### Special Thanks
- SHUBHAM from ShuDoCode for helping me with the image map logic, you're the GOAT! (His YT channel: https://www.youtube.com/@shudocode)

- David J Brad Shaw for the image map resizer npm package, you're also the GOAT! (Repo: https://github.com/davidjbradshaw/image-map-resizer)

- Timer logic is handled by react-timer-hook (npm package)
