export function isEmailValid(email) {
  return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email.trim());
}

export function missingElements(password) {
  let missingReqs = [];
  if (password.length < 6) {
    missingReqs.push("Password must be at least 6 characters");
  }
  if (!/[a-z]/.test(password)) {
    missingReqs.push("Password contain at least 1 lowercase character");
  }
  if (!/[A-Z]/.test(password)) {
    missingReqs.push("Password contain at least 1 uppercase character");
  }
  if (!/[!@#$%^&*(){};'~?><,.|+=-_]/.test(password)) {
    missingReqs.push("Password contain at least 1 special character");
  }
  if (!/[0-9]/.test(password)) {
    missingReqs.push("Password contain at least 1 number");
  }
  if (/(.)\1+/.test(password)) {
    missingReqs.push("Password cannot have sequential numbers");
  }
  return missingReqs;
}
