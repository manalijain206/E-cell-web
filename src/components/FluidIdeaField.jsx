import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * FluidIdeaField — "3D DOTTED GLOBE & DEEP REAL SPACE COSMOS"
 * 
 * 1. 3D Dotted Globe:
 *    - Perfectly proportioned (little smaller: GLOBE_RADIUS = 2.0 desktop / 1.5 mobile).
 *    - Unmistakable spherical structure formed by crisp glowing dots (Fibonacci + latitude rings).
 *    - Realistic 3D depth cueing with warm champagne gold, soft mint, and ivory particles.
 *    - Earth-like 23.5° axial tilt and smooth perpetual rotation.
 * 
 * 2. Real Space Effect Animation (Around the Globe):
 *    - Deep celestial cosmos surrounding the central globe.
 *    - Subtle distant stars and space dust motes floating with gentle organic twinkling.
 *    - Multi-layered 3D space depth with mouse parallax.
 *    - Simple, elegant, realistic, and non-distracting.
 * 
 * 3. 3D Volumetric Spread:
 *    - At the end of each cycle, globe dots burst into 3D space, interacting with the cosmos before reforming.
 */
export default function FluidIdeaField() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // --- 1. THREE.JS SCENE, CAMERA, RENDERER ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Calculate viewport bounds at z=0 for full edge-to-edge spread
    const computeViewBounds = () => {
      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const visibleHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const visibleWidth = visibleHeight * (width / height);
      return { visibleWidth, visibleHeight };
    };

    let { visibleWidth, visibleHeight } = computeViewBounds();

    // --- 2. PROPER DOTTED GLOBE (A LITTLE SMALLER) ---
    const isMobile = width < 768;
    const DOT_COUNT = isMobile ? 1400 : 2600;
    // Decreased radius by ~17% to fit comfortably in the center sanctuary
    const GLOBE_RADIUS = isMobile ? 1.5 : 2.0;

    const positions = new Float32Array(DOT_COUNT * 3);
    const colors = new Float32Array(DOT_COUNT * 3);

    // Dot metadata storage
    const dotData = [];

    // Theme color definitions: Deep Cosmic Navy, Electric Cyan, Starlight Ice Blue & Warm Champagne Gold
    const cCyan = new THREE.Color(0x38BDF8);      // Electric Stellar Cyan
    const cIceBlue = new THREE.Color(0xBAE6FD);   // Starlight Ice Blue
    const cIvory = new THREE.Color(0xF8FAFC);     // Pure Star White
    const cGold = new THREE.Color(0xF6E3B4);      // Warm Champagne Gold
    const cAmber = new THREE.Color(0xE6C585);     // Luminous Gold Accent
    const cAstralBlue = new THREE.Color(0x3B82F6);// Cosmic Astral Blue
    const cDeepNavy = new THREE.Color(0x1D4ED8);  // Deep Space Royal Navy

    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    // Split points: 72% Fibonacci surface, 28% latitude & meridian lines for unmistakable globe structure
    const fibonacciCount = Math.floor(DOT_COUNT * 0.72);
    const ringCount = DOT_COUNT - fibonacciCount;

    for (let i = 0; i < DOT_COUNT; i++) {
      let sphX, sphY, sphZ;
      let baseColor;

      if (i < fibonacciCount) {
        // Uniform Fibonacci Sphere distribution
        const phi = Math.acos(1 - (2 * (i + 0.5)) / fibonacciCount);
        const theta = 2 * Math.PI * i * goldenRatio;

        sphX = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
        sphY = GLOBE_RADIUS * Math.cos(phi);
        sphZ = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);

        baseColor =
          i % 7 === 0
            ? cGold
            : i % 11 === 0
            ? cAmber
            : i % 4 === 0
            ? cIvory
            : i % 3 === 0
            ? cIceBlue
            : i % 2 === 0
            ? cCyan
            : cAstralBlue;
      } else {
        // Latitude rings and Equator to give that distinct "proper globe" look
        const ringIndex = i - fibonacciCount;
        const numLatitudes = 9;
        const latIdx = ringIndex % numLatitudes;
        const latAngle = ((latIdx - (numLatitudes - 1) / 2) / (numLatitudes / 2)) * (Math.PI * 0.42);
        const lonAngle = (Math.floor(ringIndex / numLatitudes) / (ringCount / numLatitudes)) * Math.PI * 2;

        const r = GLOBE_RADIUS * Math.cos(latAngle);
        sphX = r * Math.sin(lonAngle);
        sphY = GLOBE_RADIUS * Math.sin(latAngle);
        sphZ = r * Math.cos(lonAngle);

        baseColor =
          latIdx === Math.floor(numLatitudes / 2)
            ? cGold
            : ringIndex % 3 === 0
            ? cAmber
            : ringIndex % 2 === 0
            ? cCyan
            : cDeepNavy;
      }

      // Initial positions start at proper globe
      const i3 = i * 3;
      positions[i3] = sphX;
      positions[i3 + 1] = sphY;
      positions[i3 + 2] = sphZ;

      colors[i3] = baseColor.r;
      colors[i3 + 1] = baseColor.g;
      colors[i3 + 2] = baseColor.b;

      // Calculate 3D Normal Unit Vector from sphere center
      const len = Math.sqrt(sphX * sphX + sphY * sphY + sphZ * sphZ) || 1;
      const normX = sphX / len;
      const normY = sphY / len;
      const normZ = sphZ / len;

      // FULLY 3D Volumetric Spread Target
      const burstDist = 2.0 + Math.random() * 3.8;
      const spreadX = normX * burstDist + (Math.random() - 0.5) * (visibleWidth * 1.1);
      const spreadY = normY * burstDist + (Math.random() - 0.5) * (visibleHeight * 1.1);
      const spreadZ = normZ * burstDist * 1.3 + (Math.random() - 0.5) * 4.6;

      dotData.push({
        sphX,
        sphY,
        sphZ,
        normX,
        normY,
        normZ,
        spreadX,
        spreadY,
        spreadZ,
        curX: sphX,
        curY: sphY,
        curZ: sphZ,
        baseR: baseColor.r,
        baseG: baseColor.g,
        baseB: baseColor.b,
        driftSpeed: 0.5 + Math.random() * 0.7,
        driftPhase: Math.random() * Math.PI * 2,
        spreadDelay: Math.random() * 0.28,
        swirlSpeed: (Math.random() - 0.5) * 1.2,
      });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // High quality circular glowing particle sprite
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 48;
    pCanvas.height = 48;
    const pCtx = pCanvas.getContext('2d');
    const radGrad = pCtx.createRadialGradient(24, 24, 0, 24, 24, 24);
    radGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    radGrad.addColorStop(0.28, 'rgba(199, 232, 215, 0.95)');
    radGrad.addColorStop(0.6, 'rgba(143, 216, 184, 0.45)');
    radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    pCtx.fillStyle = radGrad;
    pCtx.fillRect(0, 0, 48, 48);
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    // Three.js PointsMaterial for Globe
    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.058 : 0.072,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.94,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // --- 2.5. REAL SPACE EFFECT (SURROUNDING DEEP STARFIELD COSMOS) ---
    // Subtle, realistic cosmic field around the middle globe with slow organic twinkle
    const SPACE_STAR_COUNT = isMobile ? 320 : 620;
    const spacePositions = new Float32Array(SPACE_STAR_COUNT * 3);
    const spaceColors = new Float32Array(SPACE_STAR_COUNT * 3);
    const spaceData = [];

    for (let i = 0; i < SPACE_STAR_COUNT; i++) {
      const i3 = i * 3;
      // Disperse across the wide 3D space surrounding the globe
      let sx = (Math.random() - 0.5) * (visibleWidth * 1.45);
      let sy = (Math.random() - 0.5) * (visibleHeight * 1.45);
      let sz = (Math.random() - 0.5) * 14.0 - 1.5; // Deep Z background through midground

      // Keep surrounding space open around globe perimeter
      const dist2D = Math.hypot(sx, sy);
      if (dist2D < GLOBE_RADIUS * 1.15) {
        const ang = Math.random() * Math.PI * 2;
        const push = GLOBE_RADIUS * 1.25 + Math.random() * 4.2;
        sx = Math.cos(ang) * push;
        sy = Math.sin(ang) * push;
      }

      spacePositions[i3] = sx;
      spacePositions[i3 + 1] = sy;
      spacePositions[i3 + 2] = sz;

      // Realistic celestial colors: starlight ivory, champagne gold, electric cyan, ice blue
      const sCol =
        i % 8 === 0
          ? cGold
          : i % 13 === 0
          ? cAmber
          : i % 5 === 0
          ? cCyan
          : i % 3 === 0
          ? cIceBlue
          : cIvory;

      spaceColors[i3] = sCol.r;
      spaceColors[i3 + 1] = sCol.g;
      spaceColors[i3 + 2] = sCol.b;

      spaceData.push({
        baseX: sx,
        baseY: sy,
        baseZ: sz,
        baseR: sCol.r,
        baseG: sCol.g,
        baseB: sCol.b,
        twinkleSpeed: 0.9 + Math.random() * 2.1,
        twinklePhase: Math.random() * Math.PI * 2,
        driftSpeed: 0.12 + Math.random() * 0.2,
        driftPhase: Math.random() * Math.PI * 2,
      });
    }

    const spaceGeo = new THREE.BufferGeometry();
    spaceGeo.setAttribute('position', new THREE.BufferAttribute(spacePositions, 3));
    spaceGeo.setAttribute('color', new THREE.BufferAttribute(spaceColors, 3));

    const spaceMat = new THREE.PointsMaterial({
      size: isMobile ? 0.034 : 0.044,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.82,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const spaceStars = new THREE.Points(spaceGeo, spaceMat);
    scene.add(spaceStars);

    // Subtle atmospheric inner core glow
    const coreGlowGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 0.38, 24, 24);
    const coreGlowMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.08,
    });
    const coreGlow = new THREE.Mesh(coreGlowGeo, coreGlowMat);
    scene.add(coreGlow);

    // --- 3. MOUSE INTERACTION & 3D PARALLAX TILT ---
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Click impulse for interactive burst wave
    let clickImpulseTime = -100;
    const handlePointerDown = () => {
      clickImpulseTime = performance.now() * 0.001;
    };
    window.addEventListener('pointerdown', handlePointerDown);

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      const bounds = computeViewBounds();
      visibleWidth = bounds.visibleWidth;
      visibleHeight = bounds.visibleHeight;

      // Update spread targets for new screen aspect
      for (let i = 0; i < DOT_COUNT; i++) {
        const d = dotData[i];
        const burstDist = 2.0 + Math.random() * 3.8;
        d.spreadX = d.normX * burstDist + (Math.random() - 0.5) * (visibleWidth * 1.1);
        d.spreadY = d.normY * burstDist + (Math.random() - 0.5) * (visibleHeight * 1.1);
      }
    };
    window.addEventListener('resize', handleResize);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- 4. ANIMATION CHOREOGRAPHY LOOP ---
    const CYCLE_DURATION = 13.5;
    const clock = new THREE.Clock();
    let animationFrameId;

    // Earth axial tilt (23.5 degrees)
    const TILT_ANGLE = THREE.MathUtils.degToRad(23.5);
    const cosTilt = Math.cos(TILT_ANGLE);
    const sinTilt = Math.sin(TILT_ANGLE);

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const cycleTime = prefersReducedMotion ? 3.0 : (elapsed % CYCLE_DURATION);

      // Smooth mouse follow for 3D parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;

      // 3D camera parallax shifts near and far objects relative to the globe
      camera.position.x = mouse.x * 1.05;
      camera.position.y = mouse.y * 0.75;
      camera.lookAt(0, 0, 0);

      // Globe continuous axial rotation
      const rotY = elapsed * 0.38;

      // Click ripple impulse
      const timeSinceClick = elapsed - clickImpulseTime;
      const clickSpreadFactor =
        timeSinceClick >= 0 && timeSinceClick < 2.2
          ? Math.sin((timeSinceClick / 2.2) * Math.PI) * 1.4
          : 0;

      // --- SPREAD TIMELINE CALCULATION ---
      let baseSpread = 0;

      if (cycleTime < 6.2) {
        // [PHASE 1: PROPER 3D DOTTED GLOBE + SERENE SPACE FIELD]
        baseSpread = 0;
      } else if (cycleTime >= 6.2 && cycleTime < 8.5) {
        // [PHASE 2: FULLY 3D SPREAD EXPANSION]
        const t = (cycleTime - 6.2) / 2.3;
        baseSpread = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      } else if (cycleTime >= 8.5 && cycleTime < 11.2) {
        // [PHASE 3: VOLUMETRIC 3D DRIFT]
        baseSpread = 1.0;
      } else {
        // [PHASE 4: 3D GRAVITATIONAL REASSEMBLY]
        const t = (cycleTime - 11.2) / 2.3;
        baseSpread = Math.pow(1 - t, 2.5);
      }

      const globalSpread = Math.min(1.3, baseSpread + clickSpreadFactor);

      // Globe breathing during sphere phase
      const breathing = (1.0 - globalSpread) * Math.sin(elapsed * 2.2) * 0.035;

      // Core glow scales with globe presence
      const coreScale = Math.max(0.001, (1 - globalSpread * 0.85) * (1 + breathing));
      coreGlow.scale.set(coreScale, coreScale, coreScale);
      coreGlowMat.opacity = 0.07 * (1 - globalSpread * 0.85);

      const posArray = geometry.attributes.position.array;
      const colArray = geometry.attributes.color.array;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // --- ANIMATE GLOBE PARTICLES ---
      for (let i = 0; i < DOT_COUNT; i++) {
        const i3 = i * 3;
        const d = dotData[i];

        // 1. Calculate Proper 3D Globe Position with 23.5° Axial Tilt & Rotation
        const rx = d.sphX * cosY + d.sphZ * sinY;
        const rz = -d.sphX * sinY + d.sphZ * cosY;
        const ry = d.sphY;

        let gx = rx;
        let gy = ry * cosTilt - rz * sinTilt;
        let gz = ry * sinTilt + rz * cosTilt;

        gx *= (1 + breathing);
        gy *= (1 + breathing);
        gz *= (1 + breathing);

        // 2. Fully 3D Volumetric Spread Position with spatial orbital drift
        const driftT = elapsed * d.driftSpeed + d.driftPhase;
        const driftX = Math.sin(driftT) * 0.8 + Math.cos(driftT * 0.5) * 0.4;
        const driftY = Math.cos(driftT * 0.8) * 0.8 + Math.sin(driftT * 0.4) * 0.4;
        const driftZ = Math.sin(driftT * 0.7) * 0.9;

        const sx = d.spreadX + driftX;
        const sy = d.spreadY + driftY;
        const sz = d.spreadZ + driftZ;

        const particleSpread = Math.min(
          1.0,
          Math.max(0.0, (globalSpread - d.spreadDelay * 0.35) / (1.0 - d.spreadDelay * 0.35))
        );

        // 3. Volumetric 3D Interpolation
        const targetX = gx + (sx - gx) * particleSpread;
        const targetY = gy + (sy - gy) * particleSpread;
        const targetZ = gz + (sz - gz) * particleSpread;

        d.curX += (targetX - d.curX) * 0.088;
        d.curY += (targetY - d.curY) * 0.088;
        d.curZ += (targetZ - d.curZ) * 0.088;

        posArray[i3] = d.curX;
        posArray[i3 + 1] = d.curY;
        posArray[i3 + 2] = d.curZ;

        // 4. TRUE 3D DEPTH LIGHTING
        const zDepthNorm = (d.curZ + 4.5) / 8.0;
        const depthFactor = THREE.MathUtils.clamp(0.24 + 0.95 * Math.pow(zDepthNorm, 1.2), 0.22, 1.35);

        colArray[i3] = d.baseR * depthFactor;
        colArray[i3 + 1] = d.baseG * depthFactor;
        colArray[i3 + 2] = d.baseB * depthFactor;
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;

      // --- ANIMATE REAL SPACE SURROUNDING STARS (TWINKLE & CELESTIAL DRIFT) ---
      const spacePosArray = spaceGeo.attributes.position.array;
      const spaceColArray = spaceGeo.attributes.color.array;

      for (let j = 0; j < SPACE_STAR_COUNT; j++) {
        const j3 = j * 3;
        const s = spaceData[j];

        // Organic sinusoidal twinkle (simple, realistic starlight)
        const twinkle = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(elapsed * s.twinkleSpeed + s.twinklePhase));

        // Slow celestial micro-drift
        const sDriftX = Math.cos(elapsed * s.driftSpeed * 0.6 + s.driftPhase) * 0.06;
        const sDriftY = Math.sin(elapsed * s.driftSpeed + s.driftPhase) * 0.06;

        spacePosArray[j3] = s.baseX + sDriftX;
        spacePosArray[j3 + 1] = s.baseY + sDriftY;
        // Z position remains anchored for stable 3D depth

        // Atmospheric distance attenuation
        const distFactor = THREE.MathUtils.clamp((s.baseZ + 9.0) / 12.0, 0.25, 1.15);

        spaceColArray[j3] = s.baseR * twinkle * distFactor;
        spaceColArray[j3 + 1] = s.baseG * twinkle * distFactor;
        spaceColArray[j3 + 2] = s.baseB * twinkle * distFactor;
      }

      spaceGeo.attributes.position.needsUpdate = true;
      spaceGeo.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Kick off animation loop
    animationFrameId = requestAnimationFrame(animate);

    // --- CLEANUP ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      spaceGeo.dispose();
      spaceMat.dispose();
      particleTexture.dispose();
      coreGlowGeo.dispose();
      coreGlowMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto overflow-hidden z-0"
    >
      {/* Subtle Center Contrast Vignette so E-CELL text remains 100% crisp & readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 48%, rgba(7, 26, 22, 0.38) 0%, rgba(7, 26, 22, 0.04) 55%, transparent 75%)',
        }}
      />
    </div>
  );
}
