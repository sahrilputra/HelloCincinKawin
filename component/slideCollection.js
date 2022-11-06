import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import styles from '../styles/Home.module.css'


const SlideCollection = () => {
    return (
        <div className={`${styles.slideParent}`}>
            <Carousel variant='dark' fade className={`${styles.carousel}`}>
                <Carousel.Item interval={1000}>
                    <Image
                        src="/product/cr1.png"
                        width={100}
                        height={100}
                        object-fit="contain"
                        alt="image-1"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <Image
                        src="/product/cr2.png"
                        width={100}
                        height={100}
                        object-fit="contain"
                        alt="image-1"
                        className="d-block w-100"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <Image
                        src="/product/cr3.png"
                        width={100}
                        height={100}
                        object-fit="contain"
                        alt="image-1"
                        className="d-block w-100"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default SlideCollection
