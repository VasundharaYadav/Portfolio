"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import * as THREE from "three"
import { useTheme } from "next-themes"

function Leaf({ position, rotation, scale, color, darkColor }) {
  const mesh = useRef()
  const initialPosition = useRef(position)
  const initialRotation = useRef(rotation)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    // Gentle swaying motion
    if (mesh.current) {
      mesh.current.position.y = initialPosition.current[1] + Math.sin(time * 0.5) * 0.1
      mesh.current.rotation.x = initialRotation.current[0] + Math.sin(time * 0.3) * 0.05
      mesh.current.rotation.z = initialRotation.current[2] + Math.sin(time * 0.4) * 0.05
    }
  })

  return (
    <mesh ref={mesh} position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial color={isDark ? darkColor : color} side={THREE.DoubleSide} transparent opacity={0.9} />
    </mesh>
  )
}

function FloatingLeaves() {
  const leaves = []
  const leafCount = 30
  const lightColors = ["#a3be8c", "#81a1c1", "#88c0d0", "#8fbcbb", "#b48ead"]
  const darkColors = ["#4c566a", "#5e81ac", "#81a1c1", "#88c0d0", "#b48ead"]

  for (let i = 0; i < leafCount; i++) {
    const x = (Math.random() - 0.5) * 20
    const y = (Math.random() - 0.5) * 10
    const z = (Math.random() - 0.5) * 10 - 5

    const rotX = Math.random() * Math.PI
    const rotY = Math.random() * Math.PI
    const rotZ = Math.random() * Math.PI

    const scale = [0.3 + Math.random() * 0.5, 0.3 + Math.random() * 0.5, 1]
    const color = lightColors[Math.floor(Math.random() * lightColors.length)]
    const darkColor = darkColors[Math.floor(Math.random() * darkColors.length)]

    leaves.push(
      <Leaf
        key={i}
        position={[x, y, z]}
        rotation={[rotX, rotY, rotZ]}
        scale={scale}
        color={color}
        darkColor={darkColor}
      />,
    )
  }

  return <>{leaves}</>
}

function GentleWaves() {
  const mesh = useRef()
  const geometry = useRef()
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    if (geometry.current) {
      const position = geometry.current.attributes.position

      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i)
        const y = position.getY(i)

        // Create a gentle wavy effect
        const aZ = 0.1 * Math.sin(x * 1 + time * 0.5) + 0.1 * Math.sin(y * 1 + time * 0.5)

        position.setZ(i, aZ)
      }

      position.needsUpdate = true
    }
  })

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry ref={geometry} args={[30, 30, 32, 32]} />
      <meshStandardMaterial
        color={isDark ? "#4c566a" : "#8fbcbb"}
        side={THREE.DoubleSide}
        transparent
        opacity={0.3}
        wireframe={true}
      />
    </mesh>
  )
}

function Scene() {
  const { camera } = useThree()
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    camera.position.z = 10
    camera.position.y = 0
  }, [camera])

  return (
    <>
      <ambientLight intensity={isDark ? 0.5 : 0.8} />
      <directionalLight position={[10, 10, 5]} intensity={isDark ? 0.7 : 1} />

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.1}>
        <FloatingLeaves />
      </Float>

      <GentleWaves />

      <Environment preset={isDark ? "night" : "sunset"} />
    </>
  )
}

export function NatureBackground() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="absolute inset-0">
      <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
        <color attach="background" args={[isDark ? "#1f2937" : "#e9f5db"]} />
        <fog attach="fog" args={[isDark ? "#1f2937" : "#e9f5db", 5, 30]} />
        <Scene />
      </Canvas>
    </div>
  )
}
