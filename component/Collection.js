
import styles from '../styles/Home.module.css'
import Image from 'next/image'
const Collection = () => {
    return (
        <div className={`${styles.main} our-collection text-white`}>
            <h1>KOLEKSI KAMI</h1>
            <div className={`${styles.collection}`}>
                <div className={`${styles.catalog}`}>
                    <Image
                        src="/product/collection1.png"
                        alt="collection-item1"
                        height={150}
                        width={150}
                        object-fit="fill"
                        className={`${styles.imgCatalog}`} />
                    <div className="text ">
                        <p>this cinsin a</p>
                    </div>
                </div>
                <div className={`${styles.catalog}`}>
                    <Image
                        src="/product/collection1.png"
                        alt="collection-item1"
                        height={150}
                        width={150}
                        object-fit="fill"
                        className={`${styles.imgCatalog}`} />
                    <div className="text ">
                        <p>this cinsin a</p>
                    </div>
                </div>
                <div className={`${styles.catalog}`}>
                    <Image
                        src="/product/collection1.png"
                        alt="collection-item1"
                        height={150}
                        width={150}
                        object-fit="fill"
                        className={`${styles.imgCatalog}`} />
                    <div className="text ">
                        <p>this cinsin a</p>
                    </div>
                </div>
                <div className={`${styles.catalog}`}>
                    <Image
                        src="/product/collection1.png"
                        alt="collection-item1"
                        height={150}
                        width={150}
                        object-fit="fill"
                        className={`${styles.imgCatalog}`} />
                    <div className="text ">
                        <p>this cinsin a</p>
                    </div>
                </div>
                <div className={`${styles.catalog}`}>
                    <Image
                        src="/product/collection1.png"
                        alt="collection-item1"
                        height={150}
                        width={150}
                        object-fit="fill"
                        className={`${styles.imgCatalog}`} />
                    <div className="text ">
                        <p>this cinsin a</p>
                    </div>
                </div>
                <div className={`${styles.catalog}`}>
                    <Image
                        src="/product/collection1.png"
                        alt="collection-item1"
                        height={150}
                        width={150}
                        object-fit="fill"
                        className={`${styles.imgCatalog}`} />
                    <div className="text ">
                        <p>this cinsin a</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection