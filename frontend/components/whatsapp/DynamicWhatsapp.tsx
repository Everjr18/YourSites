'use client'
import dynamic from 'next/dynamic'

// Client Components:
const Whatsapp = dynamic(() => import('./whatsapp'))
export default function ClientwhatsappComponent() {
  return <Whatsapp />
}
