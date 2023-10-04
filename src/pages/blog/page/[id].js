import { client } from "../../../libs/client";
import { Pagination } from '../../../components/Pagination';
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const PER_PAGE = 6;

export default function Blog({ blog, totalCount }) {

    return (
        <div>
            <Header />

            <main>
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
                                    <div>
                                        <Pagination totalCount={totalCount} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

// export const getStaticProps = async () => {
//     const data = await client.get({ endpoint: "blog", queries: { offset: 0, limit: 5 } });

//     return {
//         props: {
//             blog: data.contents,
//             totalCount: data.totalCount
//         },
//     };
// };

export const getStaticPaths = async () => {

    const repos = await client.get({ endpoint: "blog" });

    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

    const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`);

    return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
    const id = context.params.id;

    const data = await client.get({ endpoint: "blog", queries: { offset: (id - 1) * 6, limit: 6 } });

    return {
        props: {
            blog: data.contents,
            totalCount: data.totalCount,
        },
    };
};
