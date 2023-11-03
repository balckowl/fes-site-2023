import Link from "next/link";
import { client } from "../libs/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import Header from "@/components/Header";
import CommonMeta from "@/components/CommonMeta";
import useWindowSize from "@/hooks/useWindowSize";
import { useModal } from 'react-hooks-use-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import '@fontsource/agdasima'

export default function Home({ blog }) {

  const [width, height] = useWindowSize();
  const [isMuted, setIsMuted] = useState(true);
  const [Modal, open, close, isOpen] = useModal("__next", {
    preventScroll: true,
    closeOnOverlayClick: true,
  });

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 5000,
  //   autoplay: true,
  //   arrows: false,
  // };

  const [random, setRandom] = useState(null);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  const images = ['../images/demo-pc.jpg', '../images/water.jpg'];

  //どちらのビデオを表示するか
  const [isGold, setIsGold] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsGold(localStorage.getItem('isGold'))
    setIsLoading(true)
  }

  useEffect(() => {
    getData()
    setRandom(Math.floor(Math.random() * 2) + 1)
  }, [])

  return (
    <div>
      <CommonMeta title="PiedPiper 相模原祭 2023" imgUrl={`https://pp-aoyama-fes-2023.vercel.app/images/pc.jpg`} />
      <Header />

      <main>
        {/* <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt="pictuer" className="w-100 main-visual" />
            </div>))}
        </Slider> */}

        {
          width > 576 ? (<video
            ref={videoRef}
            src={`../prototype${random}.mp4`}
            style={{ height: "100%", width: "100%" }}
            autoPlay
            muted={isMuted}
            playsInline
            loop
          />) : (
            <video
              ref={videoRef}
              src={`../prototype3.mp4`}
              style={{ height: "100%", width: "100%" }}
              autoPlay
              muted={isMuted}
              playsInline
              loop
            />
          )
        }

        <div className="volume">
          <Modal>
            <div className="volume-modal d-flex justify-content-center align-items-center">
              <div>
                <div className="text-center">
                  {isMuted ? (
                    <FontAwesomeIcon icon={faVolumeMute} className="volume-icon" />
                  ) : (
                    <FontAwesomeIcon icon={faVolumeHigh} className="volume-icon" />
                  )}
                </div>
                <div className="volume-btn d-flex">
                  {isMuted ? (
                    <button onClick={() => setIsMuted(false)}>出音</button>
                  ) : (
                    <button onClick={() => setIsMuted(true)}>消音</button>
                  )}
                  <button onClick={close}>CLOSE</button>
                </div>

              </div>
            </div>
          </Modal>
        </div>

        <section className="about">
          <div className="container">
            <div className="col bg-white position-relative about-bg">
              <h2 className="position-absolute">ABOUT</h2>
              <div className="row d-flex justify-content-center ">
                <div className="col-lg-9">
                  <div className="row d-flex align-items-center p-3">
                    <div className="col-lg-6 pb-3 pb-lg-0">
                      <div>
                        <Image src="/images/pc-work.png" alt="" fill className="image" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <p className="about-text">
                        当サークルは、情熱的なプログラマーが集まる大学内のプログラミングコミュニティです。私たちは日々、幅広いジャンルでの創作活動を行っており、その一環として、文化祭に向けて制作した作品を展示します。ウェブアプリ、ゲーム、データ分析など、様々な分野での作品をお楽しみいただけます。ぜひ、私たちの展示ブースを訪れ、独自の世界をご覧ください。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="works">
          <div className="container">
            <div className="col bg-white position-relative works-bg">
              <h2 className="position-absolute">WORKS</h2>
              <div className="row d-flex justify-content-center g-0">
                <div className="col-lg-9 p-2">
                  <div className="row g-3">
                    {blog.map((blog) => (
                      <div className="col-lg-6" key={blog.id}>
                        <div className="border p-3 p-lg-4 works-item">
                          <Link href={`/blog/${blog.id}`}>
                            <div>
                              <Image src={blog.thumbnail.url} alt="" fill className="image" />
                            </div>
                            <div>
                              <ul className="list-unstyled d-flex gap-2 mt-2 mb-2 techtag-list">
                                {blog.techtag.map((item) => (
                                  <li className="d-flex align-items-center gap-1" key={item.id}>
                                    <div className="tech-icon">
                                      <Image src={item.techImg.url} alt="" width={50} height={50} />
                                    </div>
                                  </li>
                                ))}
                              </ul>
                              <h3 className="works-item-title">{blog.title}</h3>
                              <p className="works-item-text">{blog.writer}</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex justify-content-center more-btn mx-auto">
                    <Link href="/blog/page/1"><span>MORE</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="access">
          <div className="container">
            <div className="col bg-white position-relative access-bg">
              <h2 className="position-absolute">ACCESS</h2>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-9">
                  <div className="google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6690887449827!2d139.70739447574599!3d35.66052373111133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018fd7afc60d079%3A0x2f3ea690da945b3e!2z6Z2S5bGx5a2m6Zmi5aSn5a2mIOmdkuWxseOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1698983069595!5m2!1sja!2sjp" width="640" height="480" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="container">
          <div className="row d-flex justify-content-center mb-5">
            <div className="col-lg-8">
              <Link href="/mystery">
                <div>
                  <Image src="/images/bannar.png" alt="" fill className="image" />
                </div>
              </Link>
            </div>
          </div>
          <div className="copyright">
            <p className="text-center">&copy; PiedPiper 青山祭 2023</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog", queries: { limit: 6 } });

  return {
    props: {
      blog: data.contents,
    },
  };
};