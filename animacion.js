const scenes = [
    { message: "Era una vez una sola sombra, esta sombra estaba solitaria, no sabía qué hacer, únicamente estudiar y trabajar.", positions: [20, 60] },
    { message: "Durante una noche, esta sombra fue a conocerse con otra sombra, pero había algo curioso, esta otra sombra era diferente.", positions: [35, 45] },
    { message: "Las dos sombras charlaron, no se entendieron, y no salió muy bien la cita entre esas dos sombras.", positions: [40, 40] },
    { message: "Ambas sombras se apartaron y cogieron caminos diferentes, no volvieron a hablarse... o eso creían.", positions: [45, 35] },
    { message: "Pero ambas sombras se extrañaban y se pensaban todas las noches...", positions: [50, 30] }
];

let currentScene = 0;

const sceneDiv = document.getElementById('scene');
const nextButton = document.getElementById('nextButton');
const consoleMessage = document.getElementById('consoleMessage');
const gameContainer = document.querySelector('.game-container');
const consoleContainer = document.querySelector('.console-container');
const typingText = document.getElementById('typingText');
const startButton = document.getElementById('startButton');
const continueButton = document.getElementById('continueButton');

const fullMessage = "Hola mi Pao, mi amor, De verdad espero que te encuentres muy bien. No paro de pensar en todo el tiempo que llevamos conociéndonos ya... Cada día que pasa, descubro más razones para admirarte y quererte. Eres mucho más increíble de lo que jamás podría haber imaginado, te volviste en mi adicción ¿sabes?, nunca me dijiste que el costo de mirarte sería enamorarme perdidamente de ti, pero ¿quién soy yo para negarme? Róbame hasta el alma con una sola mirada. Sé que me he demorado un poco en dar este paso, pero quiero que sea perfecto, porque tú lo mereces. Las cosas a veces no están bajo nuestro control, y es frustrante, lo sé, pero para eso estoy aquí, estoy aquí porque tú y yo somos un equipo, y yo te quiero apoyar en todo. Ya va un año que comenzó todo... risas, discusiones, peleas, caprichos y amor en exceso";
const fullMessage2 = "Ya van varios meses que llevo enamorado de ti, perdidamente enamorado de ti... de tus labios, de tus ojos, de tu piel, de ti... ya va un tiempo que me siento listo para dar el siguiente paso, y este... es un método, es una rama, es una oportunidad y pensamiento que tomé para dar el siguiente paso... mi amor, mi Paola, mi moonflower, te amo, y espero esta semana, y esta vida, y este tiempo y todas las sorpresas y aventuras que vienen de aquí en adelante las disfrutes con mucha calidez. Att: tu novio, Juan David...";

function typeWriter(text, element, callback, delay = 100) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, delay);
        } else {
            callback();
        }
    }

    type();
}

startButton.addEventListener('click', () => {
    startButton.style.display = 'none'; // Hide start button after clicking
    typingText.innerHTML = ''; // Clear previous text
    typeWriter(fullMessage, typingText, () => {
        continueButton.style.display = 'block';
    }, 100);
});

continueButton.addEventListener('click', () => {
    continueButton.style.display = 'none'; // Hide continue button after clicking
    typingText.innerHTML = ''; // Clear previous text
    typeWriter(fullMessage2, typingText, () => {
        gameContainer.style.display = 'block';
        consoleContainer.style.display = 'none';
    }, 100);
});

function renderScene() {
    sceneDiv.innerHTML = '';
    const scene = scenes[currentScene];

    const lover1 = document.createElement('div');
    lover1.classList.add('stick-figure', 'lover1');
    lover1.style.left = `${scene.positions[0]}%`;

    const lover2 = document.createElement('div');
    lover2.classList.add('stick-figure', 'lover2');
    lover2.style.left = `${scene.positions[1]}%`;

    const message = document.createElement('p');
    message.textContent = scene.message;

    sceneDiv.appendChild(lover1);
    sceneDiv.appendChild(lover2);
    sceneDiv.appendChild(message);
}

nextButton.addEventListener('click', () => {
    currentScene = (currentScene + 1) % scenes.length;
    renderScene();
});

function startGame() {
    gameContainer.style.display = 'block';
    consoleContainer.style.display = 'none';
    renderScene();
}

// Initialize the first scene
renderScene();
