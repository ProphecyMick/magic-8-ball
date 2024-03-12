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

// Magic 8 Ball answers array
const answers = ["Parrot Emergency", "Driving to an \n appointment", "/facepalm", "Tornado incoming", "Stepped on an \n iguana"];

// Event listener for clicks on the window to show random Magic 8 Ball answers
window.addEventListener('click', () => {
    // Clear the previous answer at the start of the shake
    document.getElementById('magic8BallAnswer').innerText = '';

    const container = document.getElementById('scene-container');
    container.classList.add('shake');
    // Wait for the shake animation to finish before showing the answer
    setTimeout(() => {
        container.classList.remove('shake');
        // Now set the answer
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        document.getElementById('magic8BallAnswer').innerText = randomAnswer;
    }, 500); // This duration should match the total duration of the shake animation
});
