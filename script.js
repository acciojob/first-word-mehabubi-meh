function firstWord(s) {
  // Remove leading/trailing spaces, then split on one or more spaces
  const words = s.trim().split(/\s+/);

  // Return the first word if it exists, otherwise return empty string
  return words[0] || '';
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
