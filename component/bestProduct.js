import styles from '../styles/Home.module.css'
import Image from 'next/image'
const BestProduct = () => {
    return (

        <div className={`${styles.container}`}>
            <div className={`${styles.cardList}`}>
                <div className={`${styles.textLeft}`}>
                    <p className=' text-uppercase'>BELI SEKARANG</p>
                    <h2>Best products</h2>
                    <p>Kami membuat cincin dengan berlian yang sangat langka, Dengan melakukan itu, kami menciptakan sesuatu yang tidak hanya brilian, tetapi juga legendaris.</p>
                    <button className='btn '>Lihat Semua Product</button>
                </div>
                <div className={`${styles.cardRight} shadow-sm`}>
                    <div className={`${styles.catalog}`}>
                        <Image
                            src="/product/cr1.png"
                            alt="collection-item1"
                            height={150}
                            width={150}
                            object-fit="fill"
                            className={`${styles.imgCatalog}`} />
                        <div className="text text-black ">
                            This Cincin
                        </div>
                    </div>
                </div>
                <div className={`${styles.cardRight} shadow-sm`}>
                    <div className={`${styles.catalog}`}>
                        <Image
                            src="/product/cr2.png"
                            alt="cr2-item1"
                            height={150}
                            width={150}
                            object-fit="fill"
                            className={`${styles.imgCatalog}`} />
                        <div className="text ">
                            This Cincin
                        </div>
                    </div>
                </div>
                <div className={`${styles.cardRight} shadow-sm`}>
                    <div className={`${styles.catalog}`}>
                        <Image
                            src="/product/cr3.png"
                            alt="collection-item1"
                            height={150}
                            width={150}
                            object-fit="fill"
                            className={`${styles.imgCatalog}`} />
                        <div className="text ">
                            This Cincin
                        </div>
                    </div>
                </div>
                <div className={`${styles.cardRight} shadow-sm`}>
                    <div className={`${styles.catalog}`}>
                        <Image
                            src="/product/cr3.png"
                            alt="collection-item1"
                            height={150}
                            width={150}
                            object-fit="fill"
                            className={`${styles.imgCatalog}`} />
                        <div className="text ">
                            This Cincin
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default BestProduct