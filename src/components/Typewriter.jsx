import React, { useEffect, useRef, useState } from 'react';

const Typewriter = ({ text, speed = 100 }) => {
  const containerRef = useRef(null);
  const typingRef = useRef(null);

  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const parseText = (input) => {
    const parts = [];
    let plainText = '';
    let currentIndex = 0;

    const regex = /<(strong|b|i|u)>(.*?)<\/\1>/g;
    let match;

    while ((match = regex.exec(input)) !== null) {
      if (match.index > currentIndex) {
        const beforeText = input.slice(currentIndex, match.index);
        parts.push({ text: beforeText });
        plainText += beforeText;
      }

      parts.push({ text: match[2], tag: match[1] });
      plainText += match[2];
      currentIndex = regex.lastIndex;
    }

    if (currentIndex < input.length) {
      const remaining = input.slice(currentIndex);
      parts.push({ text: remaining });
      plainText += remaining;
    }

    return { parts, plainText };
  };

  const { parts, plainText } = parseText(text);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!isVisible) {
            setIsVisible(true);
            if (isCompleted) {
              setDisplayedText('');
              setIsCompleted(false);
            }
          }
        } else if (isCompleted) {
          setIsVisible(false);
          setDisplayedText('');
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [isCompleted, isVisible]);

  useEffect(() => {
    if (!isVisible || isCompleted) return;

    let currentIndex = 0;
    typingRef.current = setInterval(() => {
      if (currentIndex < plainText.length) {
        setDisplayedText(plainText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingRef.current);
        setIsCompleted(true);
      }
    }, speed);

    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
    };
  }, [isVisible, plainText, speed, isCompleted]);

  const renderText = () => {
    let currentPos = 0;
    const elements = [];

    for (const part of parts) {
      if (displayedText.length <= currentPos) break;

      const segment = displayedText.substring(
        currentPos,
        Math.min(currentPos + part.text.length, displayedText.length)
      );

      if (part.tag) {
        elements.push(
          <span key={currentPos} className={`format-${part.tag}`}>
            {segment}
          </span>
        );
      } else {
        elements.push(segment);
      }
      currentPos += part.text.length;
    }

    return elements;
  };

  return (
    <div ref={containerRef} className="typewriter-container">
      {renderText()}
    </div>
  );
};

export default Typewriter;
