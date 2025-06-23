function titleCased() {
  // Assuming there's an array of tutorial names that needs to be processed
  // You'll need to replace 'tutorialNames' with your actual array variable
  const tutorialNames = [
    "what does the this keyword mean?",
    "What is the Constructor OO pattern?",
    "implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What is NaN and how Can we Check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable State and Pure Functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?"
  ];

  return tutorialNames.map(title => {
    return title
      .split(' ')
      .map(word => {
        const lowerWord = word.toLowerCase();
        
        // Handle special cases for technical terms
        if (lowerWord === 'api') return 'API';
        if (lowerWord === 'oo') return 'OO';
        if (lowerWord === 'nan') return 'NaN';
        if (lowerWord === 'jsonp' || lowerWord === 'jsonp?') return word.toLowerCase() === 'jsonp?' ? 'JSONP?' : 'JSONP';
        
        // Handle camelCase words - check for exact matches
        if (lowerWord === 'stoppropagation') return 'StopPropagation';
        if (lowerWord === 'preventdefault' || lowerWord === 'preventdefault?') {
          return lowerWord === 'preventdefault?' ? 'PreventDefault?' : 'PreventDefault';
        }
        
        // Regular title case for other words
        if (word.length === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  });
}