const Birthday = new Date(2008, 11, 19);
const Today = new Date();

let Age = Today.getFullYear() - Birthday.getFullYear();

if (Today.getMonth() < Birthday.getMonth() || (Today.getMonth() === Birthday.getMonth() && Today.getDate() < Birthday.getDate())) {
	Age--;
}

document.getElementById("Age").textContent = Age;