function countHashtags(caption) {

    // Step 1: Check input is a String
    if (typeof caption !== "string") {
        return "Invalid";
    }

    // Step 2: Split caption into words
    const words = caption.split(" ");

    // Step 3: Initialize counter and longest hashtag
    let hashtagCount = 0;
    let longestTag = "";

    // Step 4: Check each word
    for (const word of words) {

        // Check if the word starts with "#"
        if (word.startsWith("#")) {

            // Increase hashtag count
            hashtagCount++;

            // Remove "#" from the hashtag
            const tag = word.slice(1);

            // Find the longest hashtag
            // ">" keeps the first tag when lengths are equal
            if (tag.length > longestTag.length) {
                longestTag = tag;
            }
        }
    }

    // Step 5: Return the required object
    return {
        hashtagCount: hashtagCount,
        longestTag: longestTag
    };
}


// ===============================
// Test Cases
// ===============================

// Test Case 1: Multiple hashtags
console.log(
    countHashtags(
        "Loving this weather today #sunny #vibes #weekend"
    )
);
// Expected:
// {
//     hashtagCount: 3,
//     longestTag: "weekend"
// }


// Test Case 2: No hashtags
console.log(
    countHashtags("No hashtags here")
);
// Expected:
// {
//     hashtagCount: 0,
//     longestTag: ""
// }


// Test Case 3: Short hashtags
console.log(
    countHashtags("#ai #ml data science")
);
// Expected:
// {
//     hashtagCount: 2,
//     longestTag: "ai"
// }


// Test Case 4: Input is not a String
console.log(
    countHashtags(123)
);
// Expected:
// "Invalid"


// Test Case 5: Input is an Array
console.log(
    countHashtags(["#fun"])
);
// Expected:
// "Invalid"


// Test Case 6: Same length hashtags
console.log(
    countHashtags("#ai #ml")
);
// Expected:
// {
//     hashtagCount: 2,
//     longestTag: "ai"
// }


// caption   → input String
// words     → caption.split(" ") দিয়ে পাওয়া Array
// word      → words-এর current element
// startsWith("#") → hashtag check
// hashtagCount++  → hashtag count
// slice(1)        → "#" বাদ দেয়
// tag.length      → hashtag-এর length
// longestTag      → সবচেয়ে বড় hashtag
// return object   → final result

/****
 * caption
   ↓
String কিনা?
   ↓
না → "Invalid"
   ↓
হ্যাঁ
   ↓
split(" ")
   ↓
words Array
   ↓
for...of
   ↓
একটা word
   ↓
startsWith("#") ?
   ↓
  YES
   ↓
hashtagCount++
   ↓
slice(1)
   ↓
tag
   ↓
length compare
   ↓
longestTag update
   ↓
সবশেষে
   ↓
return {
    hashtagCount,
    longestTag
}
 */