"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useTheme } from "next-themes"
import * as THREE from "three"

function ProfileRing({ radius, speed, color, thickness = 0.05, reverse = false }) {
  const ring = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed
    if (ring.current) {
      ring.current.rotation.x = Math.sin(t * 0.7) * 0.2
      ring.current.rotation.y = Math.cos(t * 0.5) * 0.2
      if (reverse) {
        ring.current.rotation.z = -t
      } else {
        ring.current.rotation.z = t
      }
    }
  })

  return (
    <mesh ref={ring}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <meshStandardMaterial color={color} transparent opacity={0.6} emissive={color} emissiveIntensity={0.4} />
    </mesh>
  )
}

function FloatingParticles({ count = 50, radius = 3, color }) {
  const points = useRef()

  // Generate random particles around the sphere
  const particlesPosition = new Float32Array(count * 3)
  const particlesSizes = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    const angle = Math.random() * Math.PI * 2
    const r = radius + Math.random() * 0.5

    particlesPosition[i3] = Math.cos(angle) * r
    particlesPosition[i3 + 1] = (Math.random() - 0.5) * 2
    particlesPosition[i3 + 2] = Math.sin(angle) * r

    particlesSizes[i] = Math.random() * 0.05 + 0.02
  }

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (points.current) {
      const positions = points.current.geometry.attributes.position.array

      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const angle = Math.atan2(positions[i3 + 2], positions[i3]) + 0.01
        const r = Math.sqrt(positions[i3] ** 2 + positions[i3 + 2] ** 2)

        positions[i3] = Math.cos(angle) * r
        positions[i3 + 2] = Math.sin(angle) * r
        positions[i3 + 1] = positions[i3 + 1] + Math.sin(t + i) * 0.003
      }

      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particlesPosition} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={particlesSizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation={true}
        color={color}
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function GlowingSphere({ color }) {
  return (
    <mesh>
      <sphereGeometry args={[2.2, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.1}
        transparent
        opacity={0.05}
        roughness={0.5}
        metalness={0.2}
      />
    </mesh>
  )
}

function Scene() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Colors that match the site's theme
  const primaryColor = isDark ? "#10b981" : "#059669" // emerald
  const secondaryColor = isDark ? "#4ade80" : "#34d399" // lighter emerald
  const accentColor = isDark ? "#818cf8" : "#6366f1" // indigo for contrast

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />

      {/* Glowing sphere behind the profile */}
      <GlowingSphere color={primaryColor} />

      {/* Rotating rings */}
      <ProfileRing radius={2.5} speed={0.3} color={primaryColor} thickness={0.04} />
      <ProfileRing radius={2.8} speed={0.2} color={secondaryColor} thickness={0.03} reverse={true} />
      <ProfileRing radius={3.1} speed={0.15} color={accentColor} thickness={0.02} />

      {/* Floating particles */}
      <FloatingParticles count={40} radius={3.3} color={primaryColor} />
    </>
  )
}

export function ProfileBackgroundEffect() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
