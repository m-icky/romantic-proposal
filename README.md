# 💖 Romantic Proposal Website

A beautiful, animated React website designed for a romantic proposal with smooth transitions, emoji animations, and interactive elements.

## ✨ Features

### 🌹 Loader Screen
- Full-screen romantic gradient background
- Animated beating heart with glow effect
- 3-second duration before auto-navigation

### 🏠 Question 1 - Photo Location
- Display photo with romantic styling
- Multiple choice question
- Correct answer: Smooth transition to next page
- Wrong answer: Crying emoji rain animation 😭 with darkened background

### 🌍 Question 2 - Favorite Place
- Multiple choice question with romantic buttons
- Correct answer: Kissing emoji rain 😘💋 before proceeding
- Wrong answer: Crying emoji rain with warning message

### 💍 Proposal Page
- Final proposal question: "Will you marry me? I love you vavakutiiee ❤️"
- **YES Button**: Shows celebration modal with loving emojis falling
- **NO Button**: Escapes when cursor approaches (can't be clicked!)
- Beautiful celebration animation when YES is clicked

## 🎨 Design Features

- **Color Palette**: Romantic pink, rose, red, and soft purple gradients
- **Typography**: Elegant serif fonts (Playfair Display + Crimson Text)
- **Animations**: Pure CSS keyframe animations
- **Responsive**: Mobile-friendly layout
- **Reusable Components**: Modular emoji rain system

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation & Running

1. **Extract the ZIP file** to your desired location

2. **Open terminal/command prompt** and navigate to the project folder:
   ```bash
   cd romantic-proposal-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   Or if you use yarn:
   ```bash
   yarn install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```
   Or with yarn:
   ```bash
   yarn start
   ```

5. **Open your browser** - The app will automatically open at `http://localhost:3000`

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 🎯 Customization Guide

### Change the Questions

Edit the questions in `src/App.js`:

```jsx
// Question 1 - HomePage component (around line 65)
const question = "Where was this photo taken?";
const correctAnswer = "Paris";
const options = ["Paris", "London", "New York", "Tokyo"];

// Question 2 - PageTwo component (around line 110)
const question = "What is our favorite place together?";
const correctAnswer = "The Beach";
const options = ["The Beach", "The Mountains", "The City", "The Park"];
```

### Add Your Photo

Replace the photo placeholder in `src/App.js` (around line 82):

```jsx
<div className="romantic-photo">
  {/* Replace the emoji with your image: */}
  <img 
    src="/path/to/your/photo.jpg" 
    alt="Our Memory" 
    style={{
      width: '100%', 
      height: '100%', 
      objectFit: 'cover',
      borderRadius: '16px'
    }} 
  />
  <div className="photo-caption">Our Special Memory</div>
</div>
```

To add images to your project:
1. Place your image in the `public` folder
2. Reference it as `/your-image.jpg` in the src attribute

### Change Colors

Modify the gradients in `src/App.css`:

```css
/* Main page background */
.page-container {
  background: linear-gradient(135deg, #ffeef8 0%, #ffe0f0 50%, #ffd6e8 100%);
}

/* Loader background */
.loader-screen {
  background: linear-gradient(135deg, #ff6b9d 0%, #c06c84 50%, #f67280 100%);
}

/* Button colors */
.option-button {
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
}
```

### Adjust Timing

In `src/App.js`, modify the setTimeout durations:

```jsx
// Loader duration (line 52)
setTimeout(() => {
  onComplete();
}, 3000); // Change to desired milliseconds

// Error message duration (line 78)
setTimeout(() => setShowError(false), 3000);

// Success transition duration (line 75)
setTimeout(() => onCorrect(), 800);
```

### Customize the Proposal Message

In `src/App.js`, find the ProposalPage component (around line 198):

```jsx
<h1 className="proposal-question">
  Will you marry me?
  <br />
  <span className="love-message">I love you vavakutiiee ❤️</span>
</h1>
```

Change "vavakutiiee" to your loved one's name or nickname!

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- 768px (tablets)
- 480px (mobile phones)

Test on different devices using your browser's developer tools (F12 → Toggle device toolbar)

## 🎭 Animation Details

### Heartbeat Animation
- Smooth pulsing effect on loader heart
- 1.2s duration, infinite loop
- Defined in `src/App.css` (line 35)

### Emoji Rain
- 30 particles per animation
- Random positions and delays
- 2-4 second fall duration with rotation
- Reusable component in `src/App.js` (line 6)

### Page Transitions
- Fade-in effect (0.6s)
- Slide-up animation for cards (0.8s)

### Celebration Modal
- Slides in from left and right simultaneously
- 1 second animation duration

## 📁 Project Structure

```
romantic-proposal-app/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js              # Main React component with all pages
│   ├── App.css             # All styles and animations
│   └── index.js            # React entry point
├── package.json            # Dependencies and scripts
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🔧 Dependencies

- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-scripts**: 5.0.1

No additional libraries required! Everything is built with pure React and CSS.

## 🌐 Deployment Options

### Deploy to Netlify (Free & Easy)

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)

3. Get your live URL instantly!

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/romantic-proposal",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 💡 Tips & Troubleshooting

### Port Already in Use

If port 3000 is already in use, the app will ask to use another port. Type 'Y' to continue.

### Changes Not Showing

1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Stop the server (Ctrl+C) and restart with `npm start`

### Emoji Not Displaying

Make sure your system supports emoji rendering. Works best on:
- Windows 10+
- macOS
- Modern Android/iOS devices

## 🎁 Special Features

- **Smart NO Button**: Uses mouse position detection to escape
- **Reusable Emoji System**: Pass different emoji arrays for different effects
- **Smooth Transitions**: All page changes are animated
- **Visual Feedback**: Clear states for correct/incorrect answers

## ❤️ Perfect For

- Marriage proposals
- Anniversary celebrations
- Romantic gestures
- Special date memories
- Valentine's Day surprises

## 📞 Support

If you encounter any issues:
1. Make sure Node.js is installed (`node --version`)
2. Delete `node_modules` and `package-lock.json`, then run `npm install` again
3. Check that you're in the correct directory
4. Ensure no other app is using port 3000

---

**Made with ❤️ for vavakutiiee**

Enjoy your romantic proposal website! 🌹💍✨
