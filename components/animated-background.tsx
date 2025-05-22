"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import * as THREE from "three"

function ParticleField() {
  const points = useRef()
  const particleCount = 2000

  // Generate random particles in a sphere
  const particlesPosition = new Float32Array(particleCount * 3)
  const particlesColor = new Float32Array(particleCount * 3)
  const particlesSizes = new Float32Array(particleCount)

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3
    const radius = Math.random() * 10 + 5
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)

    particlesPosition[i3] = radius * Math.sin(phi) * Math.cos(theta)
    particlesPosition[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    particlesPosition[i3 + 2] = radius * Math.cos(phi)

    // Create a gradient of colors from pink to purple
    const t = Math.random()
    particlesColor[i3] = 0.8 + t * 0.2 // R: 0.8-1.0 (pink/purple)
    particlesColor[i3 + 1] = 0.2 + t * 0.3 // G: 0.2-0.5 (lower for vibrant colors)
    particlesColor[i3 + 2] = 0.8 - t * 0.3 // B: 0.5-0.8 (purple to pink)

    // Random sizes for particles
    particlesSizes[i] = Math.random() * 2 + 0.5
  }

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.1

    if (points.current) {
      points.current.rotation.x = time * 0.05
      points.current.rotation.y = time * 0.075

      // Animate particle sizes
      const sizes = points.current.geometry.attributes.size.array
      for (let i = 0; i < particleCount; i++) {
        sizes[i] = particlesSizes[i] * (1 + Math.sin(time * 2 + i) * 0.3)
      }
      points.current.geometry.attributes.size.needsUpdate = true
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={particlesPosition} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={particlesColor} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={particleCount} array={particlesSizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        sizeAttenuation={true}
        vertexColors
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function GlowingSphere({ position, color, size, speed }) {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(t) * 1.5
      meshRef.current.rotation.x = t * 0.5
      meshRef.current.rotation.z = t * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        metalness={0.2}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={2}
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

function FloatingCubes() {
  const cubes = useRef([])
  const cubeCount = 15

  // Create cubes with random positions
  const cubeData = Array.from({ length: cubeCount }, (_, i) => ({
    position: [Math.random() * 30 - 15, Math.random() * 30 - 15, Math.random() * 30 - 15],
    rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
    scale: Math.random() * 0.5 + 0.1,
    speed: Math.random() * 0.02 + 0.01,
    color: i % 2 === 0 ? "#ff49db" : "#7928ca", // Alternating pink and purple
  }))

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    cubes.current.forEach((cube, i) => {
      if (cube) {
        cube.rotation.x += cubeData[i].speed * 0.5
        cube.rotation.y += cubeData[i].speed * 0.7

        // Add some floating movement
        cube.position.y = cubeData[i].position[1] + Math.sin(time * cubeData[i].speed * 5) * 2
      }
    })
  })

  return (
    <>
      {cubeData.map((data, i) => (
        <mesh
          key={i}
          ref={(el) => (cubes.current[i] = el)}
          position={data.position}
          rotation={data.rotation}
          scale={data.scale}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={data.color}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.2}
            emissive={data.color}
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </>
  )
}

function WavyPlane() {
  const mesh = useRef()
  const geometry = useRef()

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    if (geometry.current) {
      const position = geometry.current.attributes.position

      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i)
        const y = position.getY(i)

        // Create a wavy effect
        const aX = 0.2 * Math.sin(x * 2 + time * 0.7)
        const aY = 0.2 * Math.sin(y * 2 + time * 0.7)
        const aZ = 0.4 * Math.sin(x * 2 + y * 2 + time)

        position.setZ(i, aZ + aX + aY)
      }

      position.needsUpdate = true
    }
  })

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
      <planeGeometry ref={geometry} args={[40, 40, 32, 32]} />
      <meshStandardMaterial
        color="#ff49db"
        side={THREE.DoubleSide}
        wireframe
        transparent
        opacity={0.3}
        emissive="#ff49db"
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

function Scene() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.z = 15
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ff49db" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#7928ca" />

      <ParticleField />
      <FloatingCubes />
      <WavyPlane />

      <GlowingSphere position={[-8, 5, -5]} color="#ff49db" size={1.5} speed={0.5} />
      <GlowingSphere position={[8, -3, -10]} color="#7928ca" size={2} speed={0.3} />
      <GlowingSphere position={[0, 8, -15]} color="#ff49db" size={1} speed={0.7} />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  )
}

export function AnimatedBackground() {
  return (
    <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
      <color attach="background" args={["#1a0533"]} />
      <fog attach="fog" args={["#1a0533", 15, 30]} />
      <Scene />
    </Canvas>
  )
}
