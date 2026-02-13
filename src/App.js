import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Us from "../src/assests/us.jpeg";
import Img1 from "../src/assests/img1.jpeg";
import Img2 from "../src/assests/img2.jpeg";
import Img3 from "../src/assests/img3.jpeg";
import Img4 from "../src/assests/img4.jpeg";
import Img5 from "../src/assests/img5.jpeg";
import Img6 from "../src/assests/img6.jpeg";
import Img7 from "../src/assests/img7.jpeg";
import img8 from "../src/assests/img8.jpeg";
import Img9 from "../src/assests/img9.jpeg";
import LoveMusic from "../src/assests/love-music.mp3";

// ========================================
// FLOATING HEARTS BACKGROUND (Framer Motion)
// ========================================
const FloatingHearts = () => {
  const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘', '💓', '💞', '✨', '🌟'];
  const items = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    emoji: hearts[i % hearts.length],
    x: Math.random() * 100,
    size: 14 + Math.random() * 20,
    dur: 12 + Math.random() * 14,
    delay: Math.random() * 8,
  }));

  return (
    <div className="floating-hearts-container">
      {items.map((p) => (
        <motion.div
          key={p.id}
          className="floating-heart"
          style={{ left: `${p.x}%`, fontSize: `${p.size}px` }}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.8, 0.8, 0],
            x: [0, (Math.random() - 0.5) * 60, 0],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
};

// ========================================
// SPARKLE FIELD (Framer Motion)
// ========================================
const SparkleField = () => {
  const sparkles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    dur: 2 + Math.random() * 3,
    delay: Math.random() * 5,
  }));

  return (
    <div className="sparkle-field">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{
            duration: s.dur,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// ========================================
// FLOATING BUBBLES COMPONENT
// ========================================
const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  // Images to display inside bubbles
  // const bubbleImages = [
  //   '❤️', '💕', '💖', '💗', '💝', '💘', '💓', '💞',
  //   '🌹', '🌺', '🌸', '🌼', '🌻', '💐',
  //   '😍', '🥰', '😘', '💋', '💑', '👫',
  //   '💍', '💎', '✨', '⭐', '🌟', '💫'
  // ];

  const bubbleImages = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, img8, Img9];

  const createBubble = () => {
    const size = Math.random() > 0.5 ? 'large' : 'small';
    const sizeValue = size === 'large' ? 80 + Math.random() * 40 : 40 + Math.random() * 30;

    return {
      id: Math.random(),
      left: Math.random() * 100,
      size: sizeValue,
      image: bubbleImages[Math.floor(Math.random() * bubbleImages.length)],
      animationDuration: 8 + Math.random() * 7,
      animationDelay: Math.random() * 3,
      popped: false
    };
  };

  useEffect(() => {
    // Create initial bubbles
    const initialBubbles = Array.from({ length: 15 }, createBubble);
    setBubbles(initialBubbles);
  }, []);

  const handleBubblePop = (bubbleId) => {
    // Mark bubble as popped
    setBubbles(prev => prev.map(b =>
      b.id === bubbleId ? { ...b, popped: true } : b
    ));

    // Remove and regenerate bubble after pop animation
    setTimeout(() => {
      setBubbles(prev => {
        const filtered = prev.filter(b => b.id !== bubbleId);
        return [...filtered, createBubble()];
      });
    }, 500);
  };

  return (
    <div className="bubbles-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`bubble ${bubble.popped ? 'popping' : ''}`}
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDuration: `${bubble.animationDuration}s`,
            animationDelay: `${bubble.animationDelay}s`,
          }}
          onMouseEnter={() => handleBubblePop(bubble.id)}
          onTouchStart={() => handleBubblePop(bubble.id)}
        >
          <div className="bubble-content">
            <img src={bubble.image} alt="" draggable="false" />
          </div>
          <div className="bubble-shine"></div>
        </div>
      ))}
    </div>
  );
};

// ========================================
// EMOJI RAIN COMPONENT (Reusable)
// ========================================
const EmojiRain = ({ emojis, duration = 3000 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      animationDelay: Math.random() * 2,
      animationDuration: 2 + Math.random() * 2,
    }));
    setParticles(newParticles);
  }, [emojis]);

  return (
    <div className="emoji-rain">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="emoji-particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
};

// ========================================
// LOADER SCREEN
// ========================================
const LoaderScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      onClick={onComplete}
      style={{ cursor: 'pointer' }}
    >
      <FloatingBubbles />
      <FloatingHearts />
      <SparkleField />
      <div className="heart-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="heart">❤️</div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            marginTop: '20px',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: '600',
            textShadow: '0 2px 5px rgba(0,0,0,0.2)',
            fontFamily: "'Playfair Display', serif"
          }}
        >
          Tap to Open
        </motion.p>
      </div>
    </motion.div>
  );
};

// ========================================
// HOME PAGE - QUESTION 1
// ========================================
const HomePage = ({ onCorrect }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showKisses, setShowKisses] = useState(false);

  const question = "Where was this photo taken?";
  const correctAnswer = "Kalyanam";
  const options = ["Kalyanam", "Trip", "Onam", "Temple"];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      setShowKisses(true);
      setTimeout(() => onCorrect(), 5000);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FloatingBubbles />
      <FloatingHearts />
      <SparkleField />
      {showError && <EmojiRain emojis={['😭', '💔', '😢']} />}
      {showError && <div className="overlay-dark" />}
      {showKisses && <EmojiRain emojis={['😘', '💋', '😍', '💕']} />}

      <motion.div
        className="romantic-card"
        initial={{ y: 60, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.2 }}
      >
        <div className="photo-container">
          <div className="romantic-photo">
            <img style={{ height: "18rem" }} src={Us} alt="Our Special Memory" />
            <div className="photo-caption">Our Special Memory</div>
          </div>
        </div>

        <h2 className="question-text">{question}</h2>

        <div className="options-container">
          {options.map((option, i) => (
            <motion.button
              key={option}
              className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
              onClick={() => handleAnswer(option)}
              disabled={showKisses}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {showError && (
          <div className="warning-message">
            Oh no! That's not right, my love 💔
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// ========================================
// PAGE TWO - QUESTION 2
// ========================================
const PageTwo = ({ onCorrect }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showKisses, setShowKisses] = useState(false);

  const question = "What is our favorite place together?";
  const correctAnswer = "Our Home";
  const options = ["Our Home", "Food Spot", "Temple", "Park"];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      setShowKisses(true);
      setTimeout(() => onCorrect(), 5000);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FloatingBubbles />
      <FloatingHearts />
      <SparkleField />
      {showError && <EmojiRain emojis={['😭', '💔', '😢']} />}
      {showKisses && <EmojiRain emojis={['😘', '💋', '😍', '💕']} />}
      {showError && <div className="overlay-dark" />}

      <motion.div
        className="romantic-card"
        initial={{ y: 60, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.2 }}
      >
        <h2 className="question-text">{question}</h2>

        <div className="options-container">
          {options.map((option, i) => (
            <motion.button
              key={option}
              className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
              onClick={() => handleAnswer(option)}
              disabled={showKisses}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {showError && (
          <div className="warning-message">
            Try again, sweetheart 😭
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// ========================================
// FINAL PAGE - PROPOSAL
// ========================================
const ProposalPage = () => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [showProposal, setShowProposal] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const noButtonRef = useRef(null);

  const handleNoHover = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 60;
    setNoButtonPos({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    });
  };

  const handleYes = () => {
    setShowProposal(true);
    setShowCelebration(true);
  };

  return (
    <motion.div
      className="page-container proposal-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FloatingBubbles />
      <FloatingHearts />
      <SparkleField />
      {showCelebration && <EmojiRain emojis={['❤️', '😍', '🥰', '💖', '💕', '💗', '💓', '💞']} />}

      <motion.div
        className="romantic-card proposal-card"
        initial={{ y: 60, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.2 }}
      >
        <div className="proposal-icon">💍</div>
        <h1 className="proposal-question">
          Will you marry me?
          <br />
          <span className="love-message">I love you vavakutiiee ❤️</span>
        </h1>

        <div className="proposal-buttons">
          <motion.button
            className="yes-button"
            onClick={handleYes}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            animate={{
              boxShadow: [
                '0 10px 30px rgba(192, 108, 132, 0.4)',
                '0 10px 50px rgba(65, 196, 97, 0.6)',
                '0 10px 30px rgba(192, 108, 132, 0.4)',
              ],
            }}
            transition={{ boxShadow: { duration: 1.5, repeat: Infinity } }}
          >
            YES ❤️
          </motion.button>

          <button
            ref={noButtonRef}
            className="no-button"
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            style={{
              position: 'fixed',
              left: `${noButtonPos.x}px`,
              top: `${noButtonPos.y}px`,
              transition: 'all 0.3s ease',
            }}
          >
            NO 💔
          </button>
        </div>
      </motion.div>

      {showProposal && (
        <div className="celebration-modal">
          <motion.div
            className="modal-content"
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 12 }}
          >
            <h2>You said YES! 💖</h2>
            <p>I'm the happiest person alive!</p>
          </motion.div>
          <motion.div
            className="modal-content"
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 12, delay: 0.3 }}
          >
            <h2>Forever Together! 💑</h2>
            <p>Our beautiful journey begins now ✨</p>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio.loop = true;

    const startMusic = () => {
      audio.play().then(() => {
        let vol = 0;
        const fade = setInterval(() => {
          vol += 0.02;
          audio.volume = Math.min(vol, 0.5);
          if (vol >= 0.5) clearInterval(fade);
        }, 100);
      });

      document.removeEventListener("click", startMusic);
      document.removeEventListener("touchstart", startMusic);
    };

    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={LoveMusic}
      preload="auto"
      playsInline
    />
  );
};



// ========================================
// MAIN APP COMPONENT
// ========================================
function App() {
  const [currentPage, setCurrentPage] = useState('loader');

  const renderPage = () => {
    switch (currentPage) {
      case 'loader':
        return <LoaderScreen key="loader" onComplete={() => setCurrentPage('home')} />;
      case 'home':
        return <HomePage key="home" onCorrect={() => setCurrentPage('page2')} />;
      case 'page2':
        return <PageTwo key="page2" onCorrect={() => setCurrentPage('proposal')} />;
      case 'proposal':
        return <ProposalPage key="proposal" />;
      default:
        return <LoaderScreen key="loader-default" onComplete={() => setCurrentPage('home')} />;
    }
  };

  return (
    <div className="App">
      <BackgroundMusic />
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
    </div>
  );
}

export default App;