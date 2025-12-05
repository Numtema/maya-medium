"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface Series {
  id: string
  title: string
  image: string
  description: string
}

interface CategoryCarouselProps {
  series: Series[]
}

export function CategoryCarousel({ series }: CategoryCarouselProps) {
  const [isHovered, setIsHovered] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Effet de rotation 3D
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return

      const rect = carousel.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateY = (x - centerX) / 20
      const rotateX = (centerY - y) / 20

      carousel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    carousel.addEventListener("mousemove", handleMouseMove)

    return () => {
      carousel.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isHovered])

  return (
    <div
      className="relative h-[450px] w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        if (carouselRef.current) {
          carouselRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
        }
      }}
    >
      <div
        ref={carouselRef}
        className="carousel relative w-full h-full transition-transform duration-300"
        style={{ transformStyle: "preserve-3d" }}
      >
        {series.map((item, index) => (
          <div
            key={item.id}
            className="card absolute w-[190px] h-[225px] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500"
            style={{
              transform: `rotateY(${index * (360 / series.length)}deg) translateZ(250px)`,
              transformOrigin: "center center",
              backfaceVisibility: "hidden",
              animation: `rotate 20s linear infinite ${isHovered ? "paused" : "running"}`,
            }}
          >
            <div className="relative w-full h-[120px]">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-3">
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-xs text-gray-600 line-clamp-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </div>
  )
}
