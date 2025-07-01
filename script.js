function firstWord(s) {
  // Trim leading/trailing spaces and split the string by space
  const trimmed = s.trim();

  // If empty string after trim, return empty string
  if (trimmed === '') return '';

  // Split by space and return the first word
  return trimmed.split(' ')[0];
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
