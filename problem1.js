function studentIntroduction(student) {

    // Step 1: Check input is an Object
    if (typeof student !== "object" || student === null) {
        return "Invalid";
    }

    // Step 2: Check required properties
    if (
        !("name" in student) ||
        !("age" in student) ||
        !("course" in student)
    ) {
        return "Invalid";
    }

    // Step 3: Return introduction using Template Literal
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}


// ===============================
// Test Cases
// ===============================

// Test Case 1: Valid Object
console.log(
    studentIntroduction({
        name: "Rafi",
        age: 18,
        course: "JavaScript"
    })
);
// Expected:
// My name is Rafi. I am 18 years old. I am learning JavaScript.


// Test Case 2: Empty Object
console.log(
    studentIntroduction({})
);
// Expected:
// "Invalid"


// Test Case 3: Input is not an Object
console.log(
    studentIntroduction("student")
);
// Expected:
// "Invalid"


// Test Case 4: Missing name
console.log(
    studentIntroduction({
        age: 18,
        course: "JavaScript"
    })
);
// Expected:
// "Invalid"


// Test Case 5: Missing age
console.log(
    studentIntroduction({
        name: "Rafi",
        course: "JavaScript"
    })
);
// Expected:
// "Invalid"


// Test Case 6: Missing course
console.log(
    studentIntroduction({
        name: "Rafi",
        age: 18
    })
);
// Expected:
// "Invalid"

/***
 * // student → পুরো input Object

// Object validation
if (typeof student !== "object" || student === null)

// Property exists কিনা check
"name" in student
"age" in student
"course" in student

// Missing property check
!("name" in student)

// Template Literal
`Hello ${student.name}`

// Object property access
student.name
student.age
student.course

// Final result
return `...`;
 */