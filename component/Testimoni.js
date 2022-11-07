import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
const Testimoni = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.cardList}`}>
                <div className={`${styles.textLeft} p-2 m-3`}>
                    <p className=' text-uppercase'>Testimonial</p>
                    <h2 className='p-2 '>Testimoni pembeli</h2>
                    <p>Beberapa testimonial dari pembeli setia kami yang sudah melakukan pemesanan cincin di kotagedejewellery</p>
                    <button className='btn '> <Link href='/Contact'>Lihat Semua Testimonial</Link></button>
                </div>
                <div className={`${styles.cardRight} shadow-sm`}>
                    <div className={`${styles.imgCr}`}>
                        <Image
                            alt='Cr-1'
                            src="/product/cr1.png"
                            width={200}
                            height={200}
                            object-fit="fill"
                        />
                    </div>
                </div>
                <div className={`${styles.cardRight} shadow-sm`}>
                    <div className={`${styles.imgCr}`}>
                        <Image
                            alt='Cr-1'
                            src="/product/cr1.png"
                            width={200}
                            height={200}
                            object-fit="fill"
                        />
                    </div>
                </div>
                <div className={`${styles.cardRight} shadow-sm`}>
                    <div className={`${styles.imgCr}`}>
                        <Image
                            alt='Cr-1'
                            src="/product/cr1.png"
                            width={200}
                            height={200}
                            object-fit="fill"
                        />
                    </div>
                </div>
                <div className={`${styles.cardRight} shadow-sm`}>
                    <div className={`${styles.imgCr}`}>
                        <Image
                            alt='Cr-1'
                            src="/product/cr1.png"
                            width={200}
                            height={200}
                            object-fit="fill"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimoni