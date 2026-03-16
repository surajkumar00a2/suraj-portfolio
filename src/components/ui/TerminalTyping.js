'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TerminalTyping({ lines, typingSpeed = 50, lineDelay = 800 }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (newLines[currentLineIndex]) {
            newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          } else {
            newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          }
          return newLines;
        });
        setCurrentCharIndex(currentCharIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }, lineDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed, lineDelay]);

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="ml-2 text-xs text-text-muted font-mono">analytics-terminal</span>
      </div>
      <div className="terminal-body">
        {displayedLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="terminal-line mb-1"
          >
            <span className="terminal-prompt">&gt;</span>
            <span className="text-text">{line}</span>
            {index === displayedLines.length - 1 && currentLineIndex < lines.length && (
              <span
                className="terminal-cursor"
                style={{ opacity: showCursor ? 1 : 0 }}
              />
            )}
          </motion.div>
        ))}
        {currentLineIndex >= lines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="terminal-line mt-2"
          >
            <span className="terminal-prompt">&gt;</span>
            <span className="text-primary font-semibold">System ready ✓</span>
            <span className="w-2 h-4 bg-primary ml-1 inline-block" style={{ opacity: showCursor ? 1 : 0 }} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
