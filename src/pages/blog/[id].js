import { client } from "../../libs/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import useWindowSize from "../../hooks/useWindowSize";
import Link from "next/link";
import Image from "next/image";


export default function BlogId({ blog }) {

    const [width, height] = useWindowSize();

    return (
        <div className="blog-page">
            <header>
                <div className="container  d-flex align-items-center">
                    <div className="site-logo mx-auto">
                        <Link href="/"><Image src="/images/PP.png" alt="" width={50} height={50} /></Link>
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
                <div className="row d-flex justify-content-center pt-5 pb-5 ps-2 pe-2 ps-sm-5 pe-sm-5 g-0">
                    <div className="col-lg-7 bg-white page-base p-4">
                        <div className="container">
                            <article>

                                <div className="article-body mb-5">
                                    <div>
                                        <Image src={blog.thumbnail.url} alt="" fill className="image" />
                                    </div>
                                    <ul className="list-unstyled d-flex gap-3 mt-4 mb-4 techtag-list">
                                        {blog.techtag.map((item) => (
                                            <li className="d-flex align-items-center gap-1" key={item.id}>
                                                <div className="tech-icon">
                                                    <Image src={item.techImg.url} alt="" width={50} height={50} />
                                                </div>
                                                {width >= 576 && <div className="tech-text">
                                                    {item.techtag}
                                                </div>}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mb-4">
                                        <h1 className="work-title">{blog.title}</h1>
                                    </div>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: `${blog.body}`,
                                        }}
                                    />
                                </div>


                                <div className="writer p-3">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-sm-4 writer-icon d-flex justify-content-center">
                                            <Image src={blog.writerimg.url} alt="" width={110} height={110} />
                                        </div>
                                        <div className="col-sm-8">
                                            <h2 className="writer-name">{blog.writer}</h2>
                                            <p className="writer-text">{blog.writercomment}</p>
                                            <ul className="d-flex list-unstyled gap-3 writer-sns">
                                                {blog.Xtwitter && <li className="sns-tw-bg"><Link href={blog.Xtwitter}><FontAwesomeIcon icon={faXTwitter} className="sns-tw-icon" /></Link></li>}
                                                {blog.github && <li className="sns-gh-bg"><Link href={blog.github}><FontAwesomeIcon icon={faGithubAlt} className="sns-gh-icon" /></Link></li>}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
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

//静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    // const data = await client.get({ endpoint: "blog" });

    const data = await client.getList({ endpoint: "blog", queries: { fields: 'id' } });
    const totalCount = data.totalCount
    const allData = await client.getList({ endpoint: "blog", queries: { limit: totalCount } });
    const paths = allData.contents.map((content) => `/blog/${content.id}`);
    return { paths, fallback: false };

    // const paths = data.contents.map((content) => `/blog/${content.id}`);
    // return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });

    console.log(id)

    return {
        props: {
            blog: data,
        },
    };
};
