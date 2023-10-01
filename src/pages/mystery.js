import CommonMeta from "@/components/CommonMeta";
import Header from "@/components/Header";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Mystery() {
    const [width, height] = useWindowSize();

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
        <div className="mystery-page">
            <CommonMeta title="mystery" imgUrl="/images/quiz.jpg"/>
            <Header />
            <main>
                <div className="row d-flex justify-content-center pt-5 pb-5 ps-2 pe-2 ps-sm-5 pe-sm-5 g-0">
                    <div className="col-lg-7 bg-white page-base p-4">
                        <div className="container">
                            <article className="position-relative">

                                {isLoading &&
                                    <div className="position-absolute clear-icon">
                                        {isGold == '1' &&
                                            <div>
                                                <Image src="/images/clear.png" alt="" fill className="image" />
                                            </div>
                                        }
                                    </div>
                                }

                                <div className="article-body mb-5">
                                    <div>
                                        <Image src="/images/quiz.jpg" alt="" fill className="image" />
                                    </div>
                                    <ul className="list-unstyled d-flex gap-3 mt-4 mb-4 techtag-list">
                                        <li className="d-flex align-items-center gap-1">
                                            <div className="tech-icon">
                                                <Image src="/images/quizIcon.png" alt="" width={50} height={50} />
                                            </div>
                                            {width >= 576 && <div className="tech-text">
                                                なぞとき
                                            </div>}
                                        </li>
                                    </ul>
                                    <div className="mb-4">
                                        <h1 className="work-title">怪盗からの挑戦状</h1>
                                    </div>
                                    <div>
                                        <h3>怪盗からの挑戦状</h3>

                                        <p>どうも、私はこのサイトに潜む怪盗。</p>

                                        <p>私が今までで盗み出した中で最も高い金色輝くお宝をこのサイトのどこかに隠している。</p>

                                        <p>あなたがそれを見つけられたら、私はあなたにそれをあげましょう。</p>

                                        <p>では。</p>

                                        <h3>怪盗からのメッセージ</h3>

                                        <Image src="/images/card.png" alt="" fill className="image" />
                                    </div>
                                </div>

                                <div className="writer p-3">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-sm-4 writer-icon d-flex justify-content-center">
                                            <Image src="/images/thief.jpeg" alt="" width={110} height={110} />
                                        </div>
                                        <div className="col-sm-8">
                                            <h2 className="writer-name">Phantom thief</h2>
                                            <p className="writer-text">みなさん、この謎解き明かせるかな</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}