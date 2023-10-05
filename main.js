import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry2 = new THREE.TorusGeometry( 10, 1, 16, 100 );
const geometry3 = new THREE.TorusGeometry( 5, 1, 16, 100 );
const material = new THREE.MeshStandardMaterial( { color: 0x0000ff } );
const material2 = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
const torus = new THREE.Mesh(geometry2, material2);
const torus2 = new THREE.Mesh(geometry3, material);
//const light = new THREE.AmbientLight( 0xffffff );
const Dlight = new  THREE.DirectionalLight(0xffffff, 3);
const Dlight2 = new  THREE.DirectionalLight(0xffffff, 3);
//scene.add( light );
const Dhelper = new THREE.DirectionalLightHelper(Dlight)
const Dhelper2 = new THREE.DirectionalLightHelper(Dlight2)
scene.add(Dlight);
scene.add(Dlight2);
scene.add(Dhelper);
scene.add(Dhelper2);

scene.add(torus);
scene.add(torus2);

camera.position.z = 30;
Dlight.position.x = 0;
Dlight.position.y = 20;
Dlight2.position.x = 20;
Dlight2.position.y = 0

function animate() {
    requestAnimationFrame( animate );

    torus.rotation.x += 0.005;
    torus.rotation.y += 0.005;
    torus2.rotation.x -= 0.01;
    torus2.rotation.y -= 0.01;
    renderer.render( scene, camera );
}

animate();