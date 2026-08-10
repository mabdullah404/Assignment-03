

function filterActiveUsers(users) {

    // Step 1: Check input is an Array and not empty
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }

    // Step 2: Check every user has "isActive" property
    for (const user of users) {
        if (!("isActive" in user)) {
            return "Invalid";
        }
    }


 // Step 3: Return only active users

// এখানে আবার user এসেছে।
// কিন্তু এটা for...of-এর user না।
// এখানে filter() নিজের callback function-এ প্রতিটি element পাঠাচ্ছে। 


    return users.filter((user) => {
        return user.isActive === true;
    });
}


// ===============================
// Test Cases
// ===============================

// Test Case 1: Normal input
console.log(
    filterActiveUsers([
        { name: "A", isActive: true },
        { name: "B", isActive: false },
        { name: "C", isActive: true }
    ])
);
// Expected:
// [
//   { name: "A", isActive: true },
//   { name: "C", isActive: true }
// ]


// Test Case 2: All users inactive
console.log(
    filterActiveUsers([
        { name: "A", isActive: false },
        { name: "B", isActive: false }
    ])
);
// Expected:
// []


// Test Case 3: Input is not an Array
console.log(
    filterActiveUsers("users")
);
// Expected:
// "Invalid"


// Test Case 4: Empty Array
console.log(
    filterActiveUsers([])
);
// Expected:
// "Invalid"


// Test Case 5: isActive property is missing
console.log(
    filterActiveUsers([
        { name: "A", isActive: true },
        { name: "B" }
    ])
);
// Expected:
// "Invalid"