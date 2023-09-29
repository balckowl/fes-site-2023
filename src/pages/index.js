import Link from "next/link";
import { client } from "../libs/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from "react";

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

  const images = ['../images/demo-pc.jpg', '../images/water.jpg']

  return (
    <div>
      <header>
        <div className="container  d-flex align-items-center">
          <div className="site-logo mx-auto">
            <Link href="/"><img src="../images/PP.png"/></Link>
          </div>
          {/* <nav>
            <ul className="d-flex gap-3 list-unstyled">
              <li>about</li>
              <li>works</li>
              <li>news</li>
            </ul>
          </nav> */}
        </div>
      </header>

      <main>
        {/* <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt="pictuer" className="w-100 main-visual" />
            </div>))}
        </Slider> */}
        <video
          ref={videoRef}
          src="../prototype.mp4"
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
                  <div className="row d-flex align-items-center p-2">
                    <div className="col-lg-6 pb-3 pb-lg-0">
                      <div>
                        <img src="../images/pc.jpg" />
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
                          <div>
                            <img src={blog.thumbnail.url} />
                          </div>
                          <div>
                            <ul className="list-unstyled d-flex gap-2 mt-2 mb-2 techtag-list">
                              {blog.techtag.map((item) => (
                                <li className="d-flex align-items-center gap-1" key={item.id}>
                                  <div className="tech-icon">
                                    <img src={item.techImg.url} />
                                  </div>
                                </li>
                              ))}
                            </ul>
                            <h3 className="works-item-title"><Link href={`/blog/${blog.id}`}>{blog.title}</Link></h3>
                            <p className="works-item-text">{blog.writer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <div className="col bg-white position-relative about-bg">
              <h2 className="position-absolute">ACCESS</h2>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="container">
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
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};