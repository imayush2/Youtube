const names = [
  "Ayush", "Rahul", "Sneha", "Priya", "Aman", "Ravi", "Simran", "Neha",
  "Ankit", "Isha", "Vikas", "Ananya", "Karan", "Pooja", "Manish", "Divya",
  "Saurabh", "Meera", "Nitin", "Sanya", "Aditya", "Ritika", "Raj", "Swati",
  "Aarti", "Harsh", "Nisha", "Deepak", "Komal", "Siddharth", "Payal",
  "Akash", "Jyoti", "Tanya", "Vivek", "Monika", "Prateek", "Rashmi",
  "Sunil", "Shreya", "Varun", "Kirti", "Rohit", "Snehal", "Mohit",
  "Sonali", "Gaurav", "Bhavna", "Arjun", "Kavita", "Pankaj"
];

function getRandomName() {
  const index = Math.floor(Math.random() * names.length);
  return names[index];
}

console.log(getRandomName());
export default getRandomName;