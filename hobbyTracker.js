# https://github.com/petersf01/cs81-module5a-review

const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// this function calculates the total time spent on hobbies
// Suggestion: this could be enchanced to return an object with totals for each hobby
function totalTime(log) {
  // reduce method used to sum up the minutes from each session
  // in this case sum is the accumulator initialized to 0 and session is the current object  
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// this function returns an array of unique hobbies from the log
function uniqueHobbies(log) {
  // map extracts the names of hobbies from each entry
  const names = log.map(entry => entry.hobby);
  // set is used to filter out duplicates
  // the square brackets are use to convert the set back to an array
  // the ... spread operator unpacks the set into the array
  return [...new Set(names)];
}

// this function filters the log for sessions longer than a specified number of minutes
function longSessions(log, minMinutes) {
  // the filter method creates a new array with only the entries that match the condition
  return log.filter(entry => entry.minutes > minMinutes);
}

// this function counts the number of sessions with a specific mood
function countMood(log, moodType) {
  // again the filter method is used to create a new array with only the mood entries we want
  return log.filter(entry => entry.mood === moodType).length;
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));
