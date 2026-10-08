import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function IdeaCore({ isInteractingWithE, onToggleEInteraction, scrollProgress = 0 }) {
  const mountRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [eRevealed, setERevealed] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080B16, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for entire interactive core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // --- 1. THE CENTRAL DUAL-LAYER GEOMETRIC ENGINE ---
    // Outer Icosahedron wireframe/crystalline cage
    const outerGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x00F0FF,
      roughness: 0.2,
      metalness: 0.85,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Inner glowing polyhedral nucleus
    const innerGeo = new THREE.OctahedronGeometry(0.85, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x111C35,
      emissive: 0x00F0FF,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Deep Core Pulsing Spark
    const sparkGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const sparkMat = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      transparent: true,
      opacity: 0.9,
    });
    const sparkMesh = new THREE.Mesh(sparkGeo, sparkMat);
    coreGroup.add(sparkMesh);

    // --- 2. ORBITAL GYROSCOPIC ENERGY RINGS ---
    const createRing = (radius, tube, rotX, rotY, color, opacity = 0.4) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: opacity,
        wireframe: true,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = rotX;
      ringMesh.rotation.y = rotY;
      return ringMesh;
    };

    const ring1 = createRing(2.1, 0.008, Math.PI / 3, 0, 0x00F0FF, 0.5);
    const ring2 = createRing(2.4, 0.008, -Math.PI / 4, Math.PI / 6, 0x6366F1, 0.4);
    const ring3 = createRing(2.7, 0.006, Math.PI / 6, -Math.PI / 3, 0x38BDF8, 0.35);
    coreGroup.add(ring1);
    coreGroup.add(ring2);
    coreGroup.add(ring3);

    // Orbiting Satellite Nodes on the rings
    const satGroup = new THREE.Group();
    coreGroup.add(satGroup);
    const satellites = [];
    for (let i = 0; i < 6; i++) {
      const satGeo = new THREE.SphereGeometry(0.045, 8, 8);
      const satMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00F0FF : 0x818CF8,
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      satellites.push({
        mesh: satMesh,
        angle: (i * Math.PI) / 3,
        radius: 2.1 + (i % 3) * 0.3,
        speed: 0.008 + (i % 2) * 0.006,
        ringIndex: i % 3,
      });
      satGroup.add(satMesh);
    }

    // --- 3. PARTICLE SWARM & SIGNATURE "E" MORPHING TARGETS ---
    const particleCount = 1400;
    const posA = new Float32Array(particleCount * 3); // Swarm / Nebula state
    const posB = new Float32Array(particleCount * 3); // Stylized "E" state
    const currentPos = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00F0FF);
    const blueColor = new THREE.Color(0x38BDF8);
    const violetColor = new THREE.Color(0x818CF8);

    // Define mathematical shape of Stylized 3D "E"
    // E consists of: Vertical backbone, Top bar, Middle bar, Bottom bar
    const generateEPoint = (index) => {
      const segment = index % 4;
      const t = Math.random();
      const jitterX = (Math.random() - 0.5) * 0.12;
      const jitterY = (Math.random() - 0.5) * 0.12;
      const jitterZ = (Math.random() - 0.5) * 0.35;

      let x = 0, y = 0, z = jitterZ;

      if (segment === 0) {
        // Vertical spine: x = -1.1, y from -1.4 to 1.4
        x = -1.1 + jitterX;
        y = -1.4 + t * 2.8 + jitterY;
      } else if (segment === 1) {
        // Top horizontal bar: y = 1.4, x from -1.1 to 1.1
        x = -1.1 + t * 2.2 + jitterX;
        y = 1.4 + jitterY;
      } else if (segment === 2) {
        // Middle horizontal bar: y = 0.0, x from -1.1 to 0.7
        x = -1.1 + t * 1.8 + jitterX;
        y = 0.0 + jitterY;
      } else {
        // Bottom horizontal bar: y = -1.4, x from -1.1 to 1.1
        x = -1.1 + t * 2.2 + jitterX;
        y = -1.4 + jitterY;
      }

      return { x: x * 0.9, y: y * 0.9, z: z };
    };

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // State A: Spherical Orbit Swarm
      const radius = 1.6 + Math.pow(Math.random(), 2) * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      posA[i3] = radius * Math.sin(phi) * Math.cos(theta);
      posA[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posA[i3 + 2] = radius * Math.cos(phi);

      // State B: Stylized "E" Monogram
      const ePt = generateEPoint(i);
      posB[i3] = ePt.x;
      posB[i3 + 1] = ePt.y;
      posB[i3 + 2] = ePt.z;

      // Start at State A
      currentPos[i3] = posA[i3];
      currentPos[i3 + 1] = posA[i3 + 1];
      currentPos[i3 + 2] = posA[i3 + 2];

      // Particle Color Gradient
      const mixedColor = new THREE.Color().lerpColors(
        Math.random() > 0.4 ? cyanColor : blueColor,
        violetColor,
        Math.random() * 0.5
      );
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(currentPos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(0,240,255,0.8)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    const particleTex = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.065,
      map: particleTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particles);

    // --- 4. LIGHTING SYSTEM ---
    const ambientLight = new THREE.AmbientLight(0x080B16, 2.5);
    scene.add(ambientLight);

    // Central pulsing cyan core light
    const corePointLight = new THREE.PointLight(0x00F0FF, 3.5, 12);
    corePointLight.position.set(0, 0, 0);
    scene.add(corePointLight);

    // Orbiting violet accent light
    const orbitPointLight = new THREE.PointLight(0x818CF8, 2.5, 15);
    orbitPointLight.position.set(3, 2, 2);
    scene.add(orbitPointLight);

    // Mouse reactive light
    const cursorLight = new THREE.PointLight(0x38BDF8, 2.0, 10);
    cursorLight.position.set(0, 0, 4);
    scene.add(cursorLight);

    // --- 5. INTERACTION & MOUSE INERTIA ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let morphFactor = 0; // 0 = Swarm, 1 = E-Formation

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = nx;
      mouse.targetY = ny;
    };

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // --- 6. ANIMATION LOOP ---
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Update Cursor Light position
      cursorLight.position.x = mouse.x * 4;
      cursorLight.position.y = mouse.y * 4;

      // Morph Factor smoothing (activated via prop or user hover on core)
      const targetMorph = isInteractingWithE ? 1 : 0;
      morphFactor += (targetMorph - morphFactor) * 0.045;

      if (morphFactor > 0.65 && !eRevealed) {
        setERevealed(true);
      } else if (morphFactor < 0.2 && eRevealed) {
        setERevealed(false);
      }

      // Dynamic rotation of Core
      coreGroup.rotation.y = elapsedTime * 0.18 + mouse.x * 0.8;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.15 - mouse.y * 0.6;

      // Counter-rotating inner nucleus
      innerMesh.rotation.x = -elapsedTime * 0.35;
      innerMesh.rotation.y = elapsedTime * 0.45;
      outerMesh.rotation.z = Math.sin(elapsedTime * 0.25) * 0.2;

      // Core pulse
      const pulse = 1 + Math.sin(elapsedTime * 2.2) * 0.06;
      sparkMesh.scale.set(pulse, pulse, pulse);
      innerMesh.scale.set(pulse, pulse, pulse);
      corePointLight.intensity = 3.2 + Math.sin(elapsedTime * 3) * 1.2;

      // Gyroscopic Ring Rotations
      ring1.rotation.z = elapsedTime * 0.22;
      ring2.rotation.x = -elapsedTime * 0.18;
      ring3.rotation.y = elapsedTime * 0.26;

      // Satellites orbiting along rings
      satellites.forEach((sat, idx) => {
        sat.angle += sat.speed;
        const r = sat.radius;
        if (sat.ringIndex === 0) {
          sat.mesh.position.set(Math.cos(sat.angle) * r, Math.sin(sat.angle) * r * 0.6, Math.sin(sat.angle) * r * 0.5);
        } else if (sat.ringIndex === 1) {
          sat.mesh.position.set(Math.cos(sat.angle) * r * 0.7, Math.sin(sat.angle) * r, -Math.cos(sat.angle) * r * 0.6);
        } else {
          sat.mesh.position.set(-Math.cos(sat.angle) * r * 0.6, Math.cos(sat.angle) * r * 0.5, Math.sin(sat.angle) * r);
        }
      });

      // Orbit light rotation
      orbitPointLight.position.x = Math.cos(elapsedTime * 0.7) * 4.5;
      orbitPointLight.position.z = Math.sin(elapsedTime * 0.7) * 4.5;

      // Interpolate particles between Swarm and "E" Monogram
      const positions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Swarm subtle breathing & wave motion
        const wave = Math.sin(elapsedTime * 1.5 + i * 0.05) * 0.08;
        const curAx = posA[i3] * (1 + wave);
        const curAy = posA[i3 + 1] * (1 + wave);
        const curAz = posA[i3 + 2] * (1 + wave);

        const curBx = posB[i3];
        const curBy = posB[i3 + 1];
        const curBz = posB[i3 + 2];

        // Smooth transition
        positions[i3] = THREE.MathUtils.lerp(curAx, curBx, morphFactor);
        positions[i3 + 1] = THREE.MathUtils.lerp(curAy, curBy, morphFactor);
        positions[i3 + 2] = THREE.MathUtils.lerp(curAz, curBz, morphFactor);
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Scroll camera reaction
      camera.position.z = 7.5 + scrollProgress * 4.5;
      camera.position.y = -scrollProgress * 2.0;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      sparkGeo.dispose();
      sparkMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTex.dispose();
    };
  }, [isInteractingWithE, scrollProgress]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onToggleEInteraction}
      />

      {/* Signature E-Cell Interaction Discovery Indicator */}
      <div className="absolute -bottom-8 sm:bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto">
        <button
          onClick={onToggleEInteraction}
          className={`group flex items-center gap-2.5 px-4 py-2 rounded-full border text-[11px] font-mono tracking-wider uppercase transition-all duration-300 backdrop-blur-md ${
            isInteractingWithE
              ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.4)]'
              : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:border-[#00F0FF]/40'
          }`}
          data-cursor-text="ENGINE"
        >
          <span
            className={`w-2 h-2 rounded-full transition-all ${
              isInteractingWithE
                ? 'bg-[#00F0FF] animate-ping'
                : 'bg-cyan-400/60 group-hover:bg-[#00F0FF]'
            }`}
          />
          <span>
            {isInteractingWithE ? 'E-CORE ALIGNED · [RELEASE TO SWARM]' : 'INTERACT WITH IDEA ENGINE'}
          </span>
          <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">
            // CLICK TO ALIGN 'E'
          </span>
        </button>
      </div>
    </div>
  );
}
