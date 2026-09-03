import { useEffect, useState } from 'react';

export default function TypewriterText({ lines = [], speed = 40, startDelay = 0, onComplete }) {
  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (currentLine >= lines.length) {
      onComplete?.();
      return;
    }

    const line = lines[currentLine];

    if (currentChar < line.text.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(c => c + 1);
      }, line.instant ? 0 : speed);
      return () => clearTimeout(timeout);
    } else {
      // Line complete — pause then move to next
      const pause = line.pause ?? 120;
      const timeout = setTimeout(() => {
        setDisplayed(prev => [...prev, line]);
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [started, currentLine, currentChar, lines, speed, onComplete]);

  const currentLineObj = lines[currentLine];
  const currentPartial = currentLineObj
    ? currentLineObj.text.slice(0, currentChar)
    : '';

  return (
    <div className="font-mono text-sm leading-relaxed">
      {displayed.map((line, i) => (
        <div key={i} className={line.className || 'text-sre-green'}>
          {line.text}
        </div>
      ))}
      {currentLine < lines.length && (
        <div className={currentLineObj?.className || 'text-sre-green'}>
          {currentPartial}
          <span className="animate-blink">▋</span>
        </div>
      )}
    </div>
  );
}
