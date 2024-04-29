import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="md:h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
    
      <video autoPlay loop muted poster="/banner.jpg" className="z-10 inset-0 w-full h-full flex flex-col">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Hero
