import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

function loader(element) {
	element.textContent = '';

	loadInterval = setInterval(() => {
		element.textContent += '.';

		if (element.textContent === '....') {
			element.textContent = '';
		}
	}, 300);
}

function typeText(element, text) {
	let index = 0;

	let interval = setInterval(() => {
		if (index < text.length) {
			element.innerHTML += text.charAt(index);
			index++;
		} else {
			clearInterval(interval);
		}
	}, 20);
}

function generateUniqueId() {
	const timeStamp = Date.now();
	const randomNumber = Math.random();
	const hexaDecimalNumber = randomNumber.toString(16);

	return `id-${timeStamp}-${hexaDecimalNumber}`;
}

function addToClickable(evt) {
	// clipboard-read
	navigator.clipboard.writeText(evt.target.innerHTML);
	alert('The text has been copied to the clipboard.');
}

function addClickableEvent(elem) {
	elem.addEventListener('click', addToClickable);
}

function chatStripe(isAi, value, uniqueid) {
	return `
    <div class="wrapper ${isAi && 'ai'}">
      <div class="chat">
        <div class="profile">
          <img 
            src="${isAi ? bot : user}"
            alt="${isAi ? 'bot' : 'user'}"
          />
        </div>
        <div class="message" id=${uniqueid}>${value}</div>
      </div>
    </div>
    `;
}

const handleSubmit = async (e) => {
	e.preventDefault();

	const data = new FormData(form);

	chatContainer.innerHTML += chatStripe(false, data.get('prompt'));

	form.reset();

	const uniqueId = generateUniqueId();

	chatContainer.innerHTML += chatStripe(true, '', uniqueId);

	chatContainer.scrollTop = chatContainer.scrollHeight;

	const messageDiv = document.getElementById(uniqueId);

	loader(messageDiv);

	const fetchUrl =
		location.protocol === 'http:'
			? 'http://localhost:7070'
			: 'https://our-bitch.onrender.com';

	const response = await fetch(fetchUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			prompt: data.get('prompt'),
		}),
	});

	clearInterval(loadInterval);

	messageDiv.innerHTML = '';

	if (response.ok) {
		const data = await response.json();
		const parsedData = data.bot.trim();

		typeText(messageDiv, parsedData);

		addClickableEvent(messageDiv);
	} else {
		if (response.status === 500) {
			messageDiv.innerHTML = `
				You may be missing your OPENAI_API_KEY definition in your 
				./server/.env file. Once this has been correctly set, restart the app.\n\n
				Please go to OpenAI and obtain an api-key and follow the directions in the
				ReadMe file. <a class='whitelink' href='https://beta.openai.com/account/api-keys'>OpenAI ApiKeys</a>.
				
			`;
		} else {
			const err = await response.text();
			messageDiv.innerHTML = 'Something went wrong';
			// ToDo: save err if needed
		}
	}
};

form.addEventListener('submit', handleSubmit);

form.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') {
		handleSubmit(e);
	}
});
