import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const geometry2 = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
const material2 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const cube = new THREE.Mesh( geometry, material );
const torus = new THREE.Mesh(geometry2, material2);
renderer.setClearColor( 0xffffff );
scene.add(cube);
scene.add(torus);

camera.position.z = 30;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.05;
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render( scene, camera );
}

animate();