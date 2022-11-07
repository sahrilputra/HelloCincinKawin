import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const HeroSec = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.tentang}`}>
                <h1 className=' fs-1'>Tentang Kami</h1>
                <p>Berikan Hadiah Yang Terbaik Untuk Orang Tersayang</p>
                <p className=' text-light m-1'>Perusahaan cincin custom anak bangsa yang berdiri sejak 2015 ini dikenal dengan kualitas dan pelayanannya. Terbukti dengan adanya lebih dari 3000 ulasan di Google Bisnis dengan rating 4.9 dari pelanggannya.

                    Tidak hanya fokus dengan produksi cincin emas saja, Kotagede Jewellery juga menyediakan cincin secara custom dari bahan non emas seperti PLATIDIUM dan Palladium yang halal dan bersifat anti alergi.

                    Kami hadir untuk memberikan solusi bagi pasangan yang kesulitan mendapatkan cincin dengan model trendy dan sesuai dengan ukuran dan gaya pemakainya.

                    Demi menjaga kualitasnya, kami hanya menggunakan bahan dari Emas Antam asli dan logam bersertifikat BATAN dengan dibantu pengrajin handal profesional, bahkan menjamin produk dengan garansi hingga 10 tahun.
                </p>
                <button className="btn m-2">   <Link href="/Contact">Hubungi kami</Link></button>
            </div>
        </div>
    )
}

export default HeroSec