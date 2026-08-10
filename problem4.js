

function bonusScore(scores) {

    // Step 1: Check input is an Array and not empty
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    }

    // Step 2: Check every element is a Number
    for (const score of scores) {
        if (typeof score !== "number") {
            return "Invalid";
        }
    }

    // Step 3: Add 10 bonus marks to every score
    const updatedScores = scores.map((score) => {
        return score + 10;
    });

    // Step 4: Calculate the total score
    const totalScore = updatedScores.reduce((sum, score) => {
        return sum + score;
    }, 0);

    // Step 5: Return the total
    return totalScore;
}


// ===============================
// Test Cases
// ===============================

// Test Case 1: Normal input
console.log(
    bonusScore([80, 65, 90, 75])
);
// Expected:
// 350


// Test Case 2: Single score
console.log(
    bonusScore([100])
);
// Expected:
// 110


// Test Case 3: Zero and positive score
console.log(
    bonusScore([0, 10])
);
// Expected:
// 30


// Test Case 4: Empty Array
console.log(
    bonusScore([])
);
// Expected:
// "Invalid"


// Test Case 5: Input is not an Array
console.log(
    bonusScore("scores")
);
// Expected:
// "Invalid"


// Test Case 6: Array contains non-number
console.log(
    bonusScore([80, "90", 70])
);
// Expected:
// "Invalid"



// 📝 GitHub Revision Note

// পরে শুধু এই অংশটা দেখলেও যেন পুরো Problem মনে পড়ে:

// scores → পুরো input Array
// score  → Array-এর current element

// Array validation
// Array.isArray(scores)

// // Empty Array validation
// scores.length === 0

// // Number validation
// typeof score !== "number"

// // map() → প্রতিটি score-এর সাথে 10 যোগ করে
// // Output → নতুন Array
// const updatedScores = scores.map(score => score + 10);

// // reduce() → সব updated score যোগ করে
// // Output → একটি Number
// const totalScore = updatedScores.reduce((sum, score) => {
//     return sum + score;
// }, 0);

// // Final result
// return totalScore;






// map()    → Array থেকে নতুন Array
// reduce() → Array থেকে একটি final value