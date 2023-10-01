import Link from "next/link";
import { client } from "../libs/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import Header from "@/components/Header";
import { motion } from 'framer-motion'
import CommonMeta from "@/components/CommonMeta";

export default function Home({ blog }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    arrows: false,
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  const images = ['../images/demo-pc.jpg', '../images/water.jpg'];

  //どちらのビデオを表示するか
  const random = Math.floor(Math.random() * 2) + 1;
  const [isGold, setIsGold] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsGold(localStorage.getItem('isGold'))
    setIsLoading(true)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <CommonMeta title="Piedpiper 青山祭" imgUrl="/images/pc.jpg"/>
      <Header />

      <main>
        {/* <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt="pictuer" className="w-100 main-visual" />
            </div>))}
        </Slider> */}
        <video
          ref={videoRef}
          src={`../prototype${random}.mp4`}
          muted
          style={{ height: "100%", width: "100%" }}
          autoPlay
          playsInline
          loop
        />

        <section className="about">
          <div className="container">
            <div className="col bg-white position-relative about-bg">
              <h2 className="position-absolute">ABOUT</h2>
              <p className="position-absolute subtitle">PiedPiperとは?</p>
              <div className="row d-flex justify-content-center ">
                <div className="col-lg-9">
                  <div className="row d-flex align-items-center p-3">
                    <div className="col-lg-6 pb-3 pb-lg-0">
                      <div>
                        <Image src="/images/demo-pc.jpg" alt="" fill className="image" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <p className="about-text">
                        当サークルは、情熱的なプログラマーが集う大学のプログラミングコミュニティです。プログラミングのスキルを高め、クリエイティブなプロジェクトを共に開発しましょう。初心者からエキスパートまで、誰でも歓迎です。ワークショップ、ハッカソン、講演会を通じて、最新技術の学習と共有を促進します。さらに、協力してアプリやウェブサイトを制作し、実務経験を積みます。友情と協力を大切にし、楽しみながらプログラミングの世界を探求しましょう。
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
              <p className="position-absolute subtitle">プログラミング作品</p>
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
                    <iframe src="https://www.google.com/maps/d/embed?mid=1fLm6Oq7B7kIBjSCwXlNxEpVYosM&hl=en_US&ehbc=2E312F" width="640" height="480"></iframe>
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
            <p className="text-center">&copy; Piedpiper 青山祭 2023</p>
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