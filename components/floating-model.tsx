"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows, Float } from "@react-three/drei"
import { motion } from "framer-motion"

function Model() {
  const group = useRef()

  // Create a 3D sphere with a photo texture
  return (
    <group ref={group}>
      <Float
        speed={2} // Animation speed
        rotationIntensity={0.5} // XYZ rotation intensity
        floatIntensity={1} // Up/down float intensity
      >
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.2}
            roughness={0.1}
            emissive="#ff49db"
            emissiveIntensity={0.05}
          />
        </mesh>
      </Float>
    </group>
  )
}

function ProfileSphere() {
  const mesh = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (mesh.current) {
      mesh.current.rotation.y = t * 0.2
    }
  })

  return (
    <mesh ref={mesh} castShadow>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#ffffff" metalness={0.2} roughness={0.1} emissive="#ff49db" emissiveIntensity={0.05}>
        <canvasTexture attach="map" image={document.getElementById("profile-image")} />
      </meshStandardMaterial>
    </mesh>
  )
}

function HolographicFrame() {
  const frameRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (frameRef.current) {
      // Create a pulsing effect
      frameRef.current.scale.x = 1 + Math.sin(t * 2) * 0.05
      frameRef.current.scale.y = 1 + Math.sin(t * 2) * 0.05
      frameRef.current.scale.z = 1 + Math.sin(t * 2) * 0.05

      // Rotate slowly
      frameRef.current.rotation.y = t * 0.2
    }
  })

  return (
    <group ref={frameRef}>
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[2.2, 0.1, 16, 100]} />
        <meshStandardMaterial color="#ff49db" emissive="#ff49db" emissiveIntensity={2} transparent opacity={0.7} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.1, 16, 100]} />
        <meshStandardMaterial color="#7928ca" emissive="#7928ca" emissiveIntensity={2} transparent opacity={0.7} />
      </mesh>
    </group>
  )
}

function FloatingParticles() {
  const points = useRef()
  const particleCount = 100

  // Generate random particles around the sphere
  const particlesPosition = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3
    const radius = 3 + Math.random() * 2
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)

    particlesPosition[i3] = radius * Math.sin(phi) * Math.cos(theta)
    particlesPosition[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    particlesPosition[i3 + 2] = radius * Math.cos(phi)
  }

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    if (points.current) {
      points.current.rotation.y = time * 0.1
      points.current.rotation.z = time * 0.05
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ff49db"
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        emissive="#ff49db"
        emissiveIntensity={1}
      />
    </points>
  )
}

export function FloatingModel() {
  return (
    <>
      {/* Hidden image element to use as texture */}
      <img
        id="profile-image"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/formal_img.jpg-YOx6aA6XKninbIE3utaC8OPIwyqFX0.jpeg"
        alt="Vasundhara Yadav"
        className="hidden"
        crossOrigin="anonymous"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <Suspense fallback={null}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <ProfileSphere />
              <HolographicFrame />
              <FloatingParticles />
            </Float>

            <Environment preset="city" />
            <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2} far={10} />
          </Suspense>

          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </motion.div>
    </>
  )
}
