import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Home.css'
import img1 from './img/p4.jpg'
import img2 from './img/p2.jpg'
import img3 from './img/p3.jpg'
import Cardset from '../Cardset/Cardset'
import imagesData from '../BooksImagesData/Images.json';


function Home() {
    let images: { name: String, author: String, img: String }[] = imagesData;
    console.log('Images Data', imagesData)


    return (
        <div className="home__container">
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Third slide"
                    />

                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            {/* //////////////////////////////////////////////////////////////////////////////// */}

            <div className="container-fluid nav_bg" >
                <div className="row" >
                    <div className="col-10 mx-auto" >
                        <div className="row" >
                            {
                                images.map((Data: {
                                    name: String;
                                    author: String;
                                    img: String;
                                }, ind: number) => {
                                    return (
                                        <Cardset
                                            key={ind}
                                            Image={Data.img}
                                            author={Data.author}
                                            name={Data.name}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Home
