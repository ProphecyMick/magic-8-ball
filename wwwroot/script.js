// Define the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Add a sphere (the Magic 8 Ball)
const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00008b }); // Deep blue color
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Position the camera
camera.position.z = 20;

// Animation loop to render the scene and camera
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

scene.background = new THREE.Color(0xCCCCCC); // Set a light grey background, for example
animate();

// Initial Magic 8 Ball answers array
let answers = ["Parrot Emergency", "Driving to an \nappointment", "/facepalm", "Tornado incoming", "Stepped on an \niguana", "Cat chewed my \npower cable", "I AM HERE", "Please don't say \n \"stylized\"", "One of my \n chickens got its \nhead stuck"];

// Shuffle the answers array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // ES6 destructuring swap
    }
}

// Shuffle answers initially
shuffleArray(answers);

// Keep track of the current index in the shuffled answers array
let currentIndex = 0;

// Function to get the next answer and cycle through the answers array
function getNextAnswer() {
    if (currentIndex >= answers.length) {
        shuffleArray(answers); // Re-shuffle the answers once all have been shown
        currentIndex = 0; // Reset index
    }

    const answer = answers[currentIndex];
    currentIndex++; // Move to the next answer
    return answer;
}

// Event listener for clicks on the window to show random Magic 8 Ball answers
window.addEventListener('click', () => {
    const container = document.getElementById('scene-container');
    container.classList.add('shake');
    // Clear the previous answer at the start of the shake
    document.getElementById('magic8BallAnswer').innerText = '';
    // Wait for the shake animation to finish before showing the answer
    setTimeout(() => {
        container.classList.remove('shake');
        // Use getNextAnswer to display the next answer without repetition
        const answer = getNextAnswer();
        document.getElementById('magic8BallAnswer').innerText = answer;
    }, 500); // This duration should match the total duration of the shake animation
});
