function generateLeaderboard(students) {

    // Step 1: Check input is an Array
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    // Step 2: Check Array is not empty
    if (students.length === 0) {
        return "Invalid";
    }

    // Step 3: Validate every student object
    for (const student of students) {

        // Check name and score properties exist
        if (!("name" in student) || !("score" in student)) {
            return "Invalid";
        }

        // Check score is a Number
        if (typeof student.score !== "number") {
            return "Invalid";
        }
    }

    // Step 4: Keep only students with score >= 70
    const qualified = students.filter((student) => {
        return student.score >= 70;
    });

    // Step 5: Get names and convert them to uppercase
    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    // Step 6: Return only first 3 qualified students
    return names.slice(0, 3);
}


// ===============================
// Test Cases
// ===============================

// Test Case 1: Normal Input
console.log(
    generateLeaderboard([
        { name: "Rafi", score: 90 },
        { name: "Sadia", score: 65 },
        { name: "Karim", score: 85 },
        { name: "Nafis", score: 75 }
    ])
);
// Expected:
// ["RAFI", "KARIM", "NAFIS"]


// Test Case 2: Score exactly 70
console.log(
    generateLeaderboard([
        { name: "Rafi", score: 70 },
        { name: "Karim", score: 80 }
    ])
);
// Expected:
// ["RAFI", "KARIM"]


// Test Case 3: More than 3 qualified students
console.log(
    generateLeaderboard([
        { name: "A", score: 90 },
        { name: "B", score: 85 },
        { name: "C", score: 80 },
        { name: "D", score: 75 },
        { name: "E", score: 70 }
    ])
);
// Expected:
// ["A", "B", "C"]


// Test Case 4: No qualified students
console.log(
    generateLeaderboard([
        { name: "Rafi", score: 50 },
        { name: "Karim", score: 60 }
    ])
);
// Expected:
// []


// Test Case 5: Input is not an Array
console.log(
    generateLeaderboard("students")
);
// Expected:
// "Invalid"


// Test Case 6: Empty Array
console.log(
    generateLeaderboard([])
);
// Expected:
// "Invalid"


// Test Case 7: name property missing
console.log(
    generateLeaderboard([
        { score: 90 }
    ])
);
// Expected:
// "Invalid"


// Test Case 8: score property missing
console.log(
    generateLeaderboard([
        { name: "Rafi" }
    ])
);
// Expected:
// "Invalid"


// Test Case 9: score is not a Number
console.log(
    generateLeaderboard([
        { name: "Rafi", score: "90" }
    ])
);
// Expected:
// "Invalid"

/***
 * // students → পুরো Array
// student  → current Object

// 1. Array validation
Array.isArray(students)

// 2. Empty Array validation
students.length === 0

// 3. Object property validation
"name" in student
"score" in student

// 4. Data type validation
typeof student.score === "number"

// 5. filter()
// score >= 70 হলে student রাখে
const qualified = students.filter(student => {
    return student.score >= 70;
});

// 6. map()
// শুধু name নেয় এবং uppercase করে
const names = qualified.map(({ name }) => {
    return name.toUpperCase();
});

// 7. slice()
// প্রথম 3 জন নেয়
return names.slice(0, 3);
 */