const Birthday = new Date(2008, 11, 19);
const Today = new Date();

let Age = Today.getFullYear() - Birthday.getFullYear();

if (Today.getMonth() < Birthday.getMonth() || (Today.getMonth() === Birthday.getMonth() && Today.getDate() < Birthday.getDate())) {
	Age--;
}

document.getElementById("Age").textContent = Age;

fetch("https://api.github.com/repos/Buhred/Buhred.github.io/contents/Memes").then(Response => Response.json()).then(Files => {
	const Memes = document.querySelector(".Memes");
	const Meme = document.getElementById("Meme");
	const Status = document.querySelector(".MemeStatus");

	if (!Array.isArray(Files)) {
		throw new Error();
	}

	Files.filter(File => /\.(png|jpe?g|webp|gif)$/i.test(File.name)).forEach(File => {
		const Item = Meme.content.cloneNode(true);
		const Link = Item.querySelector("a");
		const Image = Item.querySelector("img");

		Link.href = File.download_url;
		Image.src = File.download_url;
		Image.alt = File.name.replace(/\.[^.]+$/, "");
		Image.onload = () => Image.classList.add("Loaded");

		Memes.appendChild(Item);
	});

	Status.remove();

	if (!Memes.children.length) {
		document.querySelector(".MemesSection").hidden = true;
	}
}).catch(() => {
	document.querySelector(".MemeStatus").textContent = "Couldn't load";
});