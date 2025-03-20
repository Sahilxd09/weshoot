"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function VoiceOver() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  // This would be replaced with your actual voice-over audio file
  const voiceOverScript = `
    Welcome to WeShoot, where we transform moments into cinematic masterpieces.
    
    We are experts in shooting and editing cinematic videos and photos that tell your unique story.
    Explore our portfolio showcasing our best work — from compelling storytelling videos to beautifully captured photographs.
    
    WeShoot is available for bookings — whether it's a wedding, music video, event, or personal shoot.
    Our packages start from ₹2,000 to ₹20,000, customizable as per your project needs.
    
    To see more of our work, follow us on Instagram — @shayrisoul09.
    
    For bookings and inquiries, you can email us at sahilahmed091230@gmail.com or call us at 7896142781.
    
    Let's create cinematic magic together — only at WeShoot.
  `

  return (
    <div className="bg-zinc-900 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Listen to Our Voice-Over</h3>

      <div className="flex items-center gap-4 mb-4">
        <Button onClick={togglePlayPause} variant="outline" size="icon" className="h-10 w-10 rounded-full">
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </Button>

        <div className="flex items-center gap-2 flex-1">
          <Volume2 size={16} className="text-gray-400" />
          <Slider value={[volume]} max={1} step={0.01} onValueChange={handleVolumeChange} className="flex-1" />
        </div>
      </div>

      <div className="mt-6 p-4 bg-zinc-800 rounded-md text-gray-300 text-sm leading-relaxed">
        <p className="mb-4 italic">Voice-Over Script:</p>
        {voiceOverScript.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-3">
            {paragraph}
          </p>
        ))}
      </div>

      {/* This would be replaced with your actual audio file */}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} className="hidden">
        <source src="/placeholder-audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

