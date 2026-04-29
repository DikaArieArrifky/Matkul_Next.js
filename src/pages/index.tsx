import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/layouts/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   
  <div> 
    <head>
      <title>Praktikum Next.JS Pages Router</title>
    </head>
    <h1>Praktikum Next.js Pages Router</h1> <br />
    <p>Mahasiswa D4 pengembangan Web</p>

  </div>
   
  )
}
