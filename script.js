function firstWord(s) {
  // your code here
	s = s.trim();
 
  if (s.length === 0) return "";
 
  const spaceIndex = s.indexOf(" ");


  if (spaceIndex === -1) return s;


  return s.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
