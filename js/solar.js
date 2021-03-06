var height = (window.innerHeight)-(30*window.innerHeight/100);
//var width = 1378;
var width = window.innerWidth;

var renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize(width, height);
var scene = new THREE.Scene;
//var camera = new THREE.PerspectiveCamera(45, width/(height), 1, 1000);
var camera = new THREE.TargetCamera(45, width/height, 1, 1000);

var sun

var pivotMercure
var mercure

var pivotVenus
var venus

var pivotEarth
var earth

var pivotMoon
var moon

var pivotMars
var mars

var pivotJupiter
var jupiter

var pivotSaturn
var saturn

var pivotUranus
var uranus

var pivotNeptune
var neptune

document.body.appendChild(renderer.domElement);

//camera.position.set(0, -50, 300);
camera.position.set(0, 0, 300);


/*******************/


$(document).ready(function() {

	drawPlanets();
	drawLight();
	setTargets();
	//scene.position.y = 100

	//camera.setTarget( 'Init' );
	render();

});

$(window).resize(function() {
	//$('canvas').width(window.innerWidth).height(window.innerHeight);
	var newWidth = window.innerWidth;
	var newHeight = (window.innerHeight)-(30*window.innerHeight/100);

	camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( newWidth, newHeight );
})

function render() {
	requestAnimationFrame(render);

	renderer.render(scene, camera);
	rotatePlanets();
	camera.update();
}

function drawLight() {

	var sunLight = new THREE.PointLight('#fff', 0.8, 10000);
	sunLight.position.set(0,0,0);
	scene.add(sunLight);

	var ambientLight = new THREE.AmbientLight( '#242424' ); // soft white light
	scene.add( ambientLight );

}

function drawPlanets() {
	var textureLoader = new THREE.TextureLoader();

	var geometrySun = new THREE.SphereGeometry( 20, 32, 32 );
	var textureSun = textureLoader.load("images/sunmap.jpg"); 
	var materialSun = new THREE.MeshBasicMaterial( {map: textureSun} );
	sun = new THREE.Mesh(geometrySun, materialSun);
	scene.add(sun);

	pivotMercure = new THREE.Object3D();
	pivotMercure.rotation.y = Math.floor((Math.random() * 100) + 1);
	scene.add(pivotMercure);
	var geometryMercure = new THREE.SphereGeometry( 0.48, 32, 32 );
	var textureMercure =  textureLoader.load("images/mercurymap.jpg"); 
	var materialMercure = new THREE.MeshPhongMaterial( {map: textureMercure} );
	mercure = new THREE.Mesh(geometryMercure, materialMercure);
	mercure.position.x = 40;
	pivotMercure.add(mercure);

	pivotVenus = new THREE.Object3D();
	pivotVenus.rotation.y = Math.floor((Math.random() * 100) + 1);
	scene.add(pivotVenus);
	var geometryVenus = new THREE.SphereGeometry( 1.21, 32, 32 );
	var textureVenus =  textureLoader.load("images/venusmap.jpg"); 
	var materialVenus = new THREE.MeshPhongMaterial( {map: textureVenus} );
	venus = new THREE.Mesh(geometryVenus, materialVenus);
	venus.position.x = 60;
	pivotVenus.add(venus);

	pivotEarth = new THREE.Object3D();
	pivotEarth.rotation.y = Math.floor((Math.random() * 100) + 1);
	scene.add(pivotEarth);
	var geometryEarth = new THREE.SphereGeometry( 1.275, 32, 32 );
	var textureEarth =  textureLoader.load("images/earthmap.jpg"); 
	var materialEarth = new THREE.MeshPhongMaterial( {map: textureEarth} );
	earth = new THREE.Mesh(geometryEarth, materialEarth);
	earth.position.x = 80;
	pivotEarth.add(earth);

	pivotMoon = new THREE.Object3D();
	earth.add(pivotMoon);
	var geometryMoon = new THREE.SphereGeometry( 0.15, 32, 32 );
	var textureMoon =  textureLoader.load("images/moonmap.jpg"); 
	var materialMoon = new THREE.MeshPhongMaterial( {map: textureMoon} );
	moon = new THREE.Mesh(geometryMoon, materialMoon);
	moon.position.x = 4;
	pivotMoon.add(moon);

	pivotMars = new THREE.Object3D();
	pivotMars.rotation.y = Math.floor((Math.random() * 100) + 1);
	scene.add(pivotMars);
	var geometryMars = new THREE.SphereGeometry( 0.68, 32, 32 );
	var textureMars =  textureLoader.load("images/marsmap.jpg"); 
	var materialMars = new THREE.MeshPhongMaterial( {map: textureMars} );
	mars = new THREE.Mesh(geometryMars, materialMars);
	mars.position.x = 100;
	pivotMars.add(mars);

	pivotJupiter = new THREE.Object3D();
	pivotJupiter.rotation.y = Math.floor((Math.random() * 100) + 1);
	scene.add(pivotJupiter);
	var geometryJupiter = new THREE.SphereGeometry( 10, 32, 32 );
	var textureJupiter =  textureLoader.load("images/jupitermap.jpg"); 
	var materialJupiter = new THREE.MeshPhongMaterial( {map: textureJupiter} );
	jupiter = new THREE.Mesh(geometryJupiter, materialJupiter);
	jupiter.position.x = 120;
	pivotJupiter.add(jupiter);

	pivotSaturn = new THREE.Object3D();
	pivotSaturn.rotation.y = Math.floor((Math.random() * 100) + 1);
	scene.add(pivotSaturn);
	var geometrySaturn = new THREE.SphereGeometry( 8, 32, 32 );
	var textureSaturn =  textureLoader.load("images/saturnmap.jpg"); 
	var materialSaturn = new THREE.MeshPhongMaterial( {map: textureSaturn} );
	saturn = new THREE.Mesh(geometrySaturn, materialSaturn);
	saturn.position.x = 150;
	pivotSaturn.add(saturn);

	pivotNeptune = new THREE.Object3D();
	pivotNeptune.rotation.y = Math.floor((Math.random() * 100) + 1);
	scene.add(pivotNeptune);
	var geometryNeptune = new THREE.SphereGeometry( 10, 32, 32 );
	var textureNeptune =  textureLoader.load("images/neptunemap.jpg"); 
	var materialNeptune = new THREE.MeshPhongMaterial( {map: textureNeptune} );
	neptune = new THREE.Mesh(geometryJupiter, materialNeptune);
	neptune.position.x = 180;
	pivotNeptune.add(neptune);

	pivotUranus = new THREE.Object3D();
	pivotUranus.rotation.y = Math.floor((Math.random() * 100) + 1);
	scene.add(pivotUranus);
	var geometryUranus = new THREE.SphereGeometry( 10, 32, 32 );
	var textureUranus =  textureLoader.load("images/uranusmap.jpg"); 
	var materialUranus = new THREE.MeshPhongMaterial( {map: textureUranus} );
	uranus = new THREE.Mesh(geometryUranus, materialUranus);
	uranus.position.x = 210;
	pivotUranus.add(uranus);

}

function rotatePlanets() {
	//sun.rotation.y += 0.0088;

	pivotMercure.rotation.y += 0.015;
	mercure.rotation.y += 0.009;

	pivotVenus.rotation.y += 0.012;
	venus.rotation.y += 0.008;

	pivotEarth.rotation.y += 0.010;
	earth.rotation.y += 0.007;

	pivotMoon.rotation.y += 0.016;
	moon.rotation.y += 0.009;

	pivotMars.rotation.y += 0.009;
	mars.rotation.y += 0.006;

	pivotJupiter.rotation.y += 0.007;
	jupiter.rotation.y += 0.005;

	pivotSaturn.rotation.y += 0.005;
	saturn.rotation.y += 0.004;

	pivotNeptune.rotation.y += 0.003;
	neptune.rotation.y += 0.003;

	pivotUranus.rotation.y += 0.001;
	uranus.rotation.y += 0.002;
}

function setTargets() {

	camera.addTarget({
        name: 'Init',
        targetObject: sun,
        cameraPosition: new THREE.Vector3(0, 0, 300),
        fixed: false,
        stiffness: 0.1,
        matchRotation: true
    });

	camera.addTarget({
        name: 'Sun',
        targetObject: sun,
        cameraPosition: new THREE.Vector3(100, 0, 0),
        fixed: false,
        stiffness: 0.1,
        matchRotation: false
    });

    camera.addTarget({
        name: 'Mercure',
        targetObject: pivotMercure,
        cameraPosition: new THREE.Vector3(45, -1, -5.5),
        fixed: false,
        stiffness: 0.1,
        matchRotation: false
    });

    camera.addTarget({
        name: 'Venus',
        targetObject: pivotVenus,
        cameraPosition: new THREE.Vector3(70, -2.5, -5),
        fixed: false,
        stiffness: 0.1,
        matchRotation: false
    });

    camera.addTarget({
        name: 'Earth',
        targetObject: pivotEarth,
        cameraPosition: new THREE.Vector3(90, -2.5, -5),
        fixed: false,
        stiffness: 0.1,
        matchRotation: false
    });

    camera.addTarget({
        name: 'Mars',
        targetObject: pivotMars,
        cameraPosition: new THREE.Vector3(105, -1, -7),
        fixed: false,
        stiffness: 0.1,
        matchRotation: false
    });

	camera.addTarget({
        name: 'Jupiter',
        targetObject: pivotJupiter,
        cameraPosition: new THREE.Vector3(200, -30, 0),
        fixed: false,
        stiffness: 0.1,
        matchRotation: false
    });

    camera.addTarget({
        name: 'Saturn',
        targetObject: pivotSaturn,
        cameraPosition: new THREE.Vector3(200, -10, -3),
        fixed: false,
        stiffness: 0.1,
        matchRotation: false
    });

    camera.addTarget({
        name: 'Neptune',
        targetObject: pivotNeptune,
        cameraPosition: new THREE.Vector3(250, -15, 0),
        fixed: false,
        stiffness: 0.1,
        matchRotation: false
    });

    camera.addTarget({
        name: 'Uranus',
        targetObject: pivotUranus,
        cameraPosition: new THREE.Vector3(300, -15, 5),
        fixed: false,
        stiffness: 0.1,
        matchRotation: false
    });

}