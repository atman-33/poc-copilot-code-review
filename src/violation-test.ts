// This file is intentionally created to violate code review rules for testing purposes.

interface User {
  name: string;
  email?: string;
}

// Violation 1: Avoid `any` type
// Violation 2: Explicit Return Types (missing return type)
function processUserData(data: any) {
  console.log("Processing data: " + data);
  return { processed: true };
}

// Violation 3: No Non-null Assertions
function getUserName(user: User): string {
  // Using ! operator on a potentially undefined property
  const emailLength = user.email!.length; 
  return user.name + " (" + emailLength + ")";
}

const rawData: any = "some raw data";
processUserData(rawData);