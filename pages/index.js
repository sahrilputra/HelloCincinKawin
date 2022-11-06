import { useTheme } from 'next-themes'
import Head from 'next/head'
import Image from 'next/image'
import BestProduct from '../component/bestProduct';
import Collection from '../component/Collection';
import Testimoni from '../component/Testimoni';
import styles from '../styles/Home.module.css'

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="parent bg-black dark:bg-white dark:text-white">


      <div className={styles.container}>
        <div className={`${styles.tentang}`}>
          <h1>Tentang Kami</h1>
          <p>Berikan Hadiah Yang Terbaik Untuk Orang Tersayang</p>
          <p className=' text-light m-1'>Perusahaan cincin custom anak bangsa yang berdiri sejak 2015 ini dikenal dengan kualitas dan pelayanannya. Terbukti dengan adanya lebih dari 3000 ulasan di Google Bisnis dengan rating 4.9 dari pelanggannya.

            Tidak hanya fokus dengan produksi cincin emas saja, Kotagede Jewellery juga menyediakan cincin secara custom dari bahan non emas seperti PLATIDIUM dan Palladium yang halal dan bersifat anti alergi.

            Kami hadir untuk memberikan solusi bagi pasangan yang kesulitan mendapatkan cincin dengan model trendy dan sesuai dengan ukuran dan gaya pemakainya.

            Demi menjaga kualitasnya, kami hanya menggunakan bahan dari Emas Antam asli dan logam bersertifikat BATAN dengan dibantu pengrajin handal profesional, bahkan menjamin produk dengan garansi hingga 10 tahun.
          </p>
          <button className="btn m-2">Hubungi kami</button>
        </div>
      </div>
      <div className={`${styles.container} text-white`}>
        <h1>Kenapa Memilih Kami</h1>
        <div className={`${styles.itemList}`}>
          <div className={`${styles.item}`}>
            <Image
              alt='thumb'
              src="/thumbs.svg"
              width={80}
              height={80}
            />
            <p className='text-center mx-auto mt-2'>Terpercaya</p>
          </div>
          <div className={`${styles.item}`}>
            <Image
              alt='dompet'
              src="/dompet.svg"
              width={80}
              height={80}
            />
            <p className='text-center mx-auto mt-2'>Terpercaya</p>
          </div>
          <div className={`${styles.item}`}>
            <Image
              alt='kado'
              src="/love.svg"
              width={80}
              height={80}
            />
            <p className='text-center mx-auto mt-2'>Terpercaya</p>
          </div>
          <div className={`${styles.item}`}>
            <Image
              alt='love'
              src="/kado.svg"
              width={80}
              height={80}
            />
            <p className='text-center mx-auto mt-2'>Terpercaya</p>
          </div>
        </div>
      </div>

      <BestProduct></BestProduct>

      <Collection></Collection>

      <Testimoni></Testimoni>

      <div className={`${styles.container}`}>
        <div className={`${styles.layanan}`}>
          <h1 className=' text-white p-2 m-2'>Apakah anda puas dengan pelayanan kami?</h1>
          <button className='btn btn-outline-secondary'>Kirim Feedback</button>
        </div>
      </div>

      <div className={`${styles.footer}`}>

      </div>
    </div>
  )
}
