
// ===============================
// THREE.JS 3D BACKGROUND
// ===============================

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

// ===============================
// GEOMETRY (3D OBJECT)
// ===============================
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);

const material = new THREE.MeshStandardMaterial({
  color: 0x00e5ff,
  wireframe: true
});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// ===============================
// LIGHTS
// ===============================
const pointLight = new THREE.PointLight(0x8a2be2);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

// ===============================
// PARTICLES
// ===============================
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1000;

const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 10;
}

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(posArray, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.01,
  color: 0x8a2be2
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// ===============================
// ANIMATION LOOP
// ===============================
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;

  particlesMesh.rotation.y += 0.001;

  renderer.render(scene, camera);
}

animate();

// ===============================
// RESPONSIVE RESIZE
// ===============================
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});