import { useTheme } from 'next-themes'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import BestProduct from '../component/bestProduct';
import Collection from '../component/Collection';
import HeroSec from '../component/HeroSec';
import SlideCollection from '../component/slideCollection';
import Testimoni from '../component/Testimoni';
import styles from '../styles/Home.module.css'
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="parent bg-black dark:bg-white dark:text-white">
      <HeroSec></HeroSec>

      <BestProduct></BestProduct>

      <h1 className=' text-yellow-200 text-center fs-1 p-4 uppercase font-serif'>Koleksi Kami</h1>
      <SlideCollection></SlideCollection>

      <Collection></Collection>

      <Testimoni></Testimoni>

      <div className={`${styles.container}`}>
        <div className={`${styles.layanan}`}>
          <h1 className=' text-white p-2 m-2'>Apakah anda puas dengan pelayanan kami?</h1>
          <button className='btn btn-outline-secondary'>Kirim Feedback</button>
        </div>
      </div>

      <div className={`${styles.footer}`}>
        <div className={`${styles.footerList}`}>
          <div className={`${styles.itemFooter}`}>
            <h2 className='fs-4 mb-2'>Alamat Kami</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, distinctio.</p>

            <p>phone : </p>
            <p>email : </p>
            <p>website : </p>
          </div>
          <div className={`${styles.itemFooter}`}>
            <h2 className=' fs-4 mb-2'>Layanan</h2>
            <p>Katalog</p>
            <p>Cara Ukur Jari</p>
            <p>Konfirmasi Pemabayaran</p>
            <p>Promo</p>
          </div>
          <div className={`${styles.itemFooter}`}>
            <h2 className='fs-4 mb-2 mt-2'>Link Terkait</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
