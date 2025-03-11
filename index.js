// currentUser is assumed to be a string that represents the current user's name
let currentUser = "John Doe";

// 1) currentUser is defined (This will be true if currentUser has been declared)
// Ensure that currentUser is defined above this code

// 2) welcomeMessage contains "Welcome to Flatbook, "
let welcomeMessage = "Welcome to Flatbook, " + currentUser;

// 3) welcomeMessage contains the value of the 'currentUser' variable
// This is already ensured by the previous line

// 4) welcomeMessage ends with an exclamation point
if (!welcomeMessage.endsWith('!')) {
  welcomeMessage += '!';
}

// 5) excitedWelcomeMessage contains "WELCOME TO FLATBOOK, "
let excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + currentUser.toUpperCase();

// 6) excitedWelcomeMessage contains the value of the 'currentUser' variable
// This is already ensured by the previous line

// 7) excitedWelcomeMessage ends with an exclamation point
if (!excitedWelcomeMessage.endsWith('!')) {
  excitedWelcomeMessage += '!';
}

// 8) shortGreeting contains "Welcome, "
let shortGreeting = "Welcome, ";

// 9) shortGreeting contains the first initial of the name stored in the 'currentUser' variable
shortGreeting += currentUser.charAt(0); // gets the first initial of the currentUser

// 10) shortGreeting ends with an exclamation point
if (!shortGreeting.endsWith('!')) {
  shortGreeting += '!';
}

// Output the messages to verify the results
console.log(welcomeMessage);
console.log(excitedWelcomeMessage);
console.log(shortGreeting);
