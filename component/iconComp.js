import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const iconComp = () => {
    return (
        <div className={`${styles.container} text-white`}>
            <h1 className=' fs-2 font-serif text-yellow-200'>Kenapa Memilih Kami</h1>
            <div className={`${styles.itemList}`}>
                <div className={`${styles.item}`}>
                    <Image
                        alt='thumb'
                        src="/thumbs.svg"
                        width={80}
                        height={80}
                    />
                    <p className=' mx-1'>Terpercaya</p>
                </div>
                <div className={`${styles.item}`}>
                    <Image
                        alt='dompet'
                        src="/dompet.svg"
                        width={80}
                        height={80}
                    />
                    <p className='text-center mx-auto mt-2'>Harga Terjangkau</p>
                </div>
                <div className={`${styles.item}`}>
                    <Image
                        alt='kado'
                        src="/love.svg"
                        width={80}
                        height={80}
                    />
                    <p className='text-center'>Garansi Penuh</p>
                </div>
                <div className={`${styles.item}`}>
                    <Image
                        alt='love'
                        src="/kado.svg"
                        width={80}
                        height={80}
                    />
                    <p className='text-center mx-auto mt-1'>Banyak Bonus</p>
                </div>
            </div>
        </div>
    )
}

export default iconComp