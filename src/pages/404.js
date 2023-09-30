import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";

export default function Custom404() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [width, height] = useWindowSize();

    const quizes = [
        {
            quiz: 'ppのキューブに塗られている色はカラーコードで幾つでしょうか？',
            answers: ['赤色', '緑色', '水色', '茶色'],
            correct: '緑色'
        },
        {
            quiz: 'ppのキューブに塗られている色はカラーコードで幾つでしょうか2？',
            answers: ['赤色', '緑色', '水色', '茶色'],
            correct: '緑色'
        },
        {
            quiz: 'ppのキューブに塗られている色はカラーコードで幾つでしょうか3？',
            answers: ['赤色', '緑色', '水色', '茶色'],
            correct: '緑色'
        },
        {
            quiz: 'ppのキューブに塗られている色はカラーコードで幾つでしょうか4？',
            answers: ['赤色', '緑色', '水色', '茶色'],
            correct: '緑色'
        },
        {
            quiz: 'ppのキューブに塗られている色はカラーコードで幾つでしょうか5？',
            answers: ['赤色', '緑色', '水色', '茶色'],
            correct: '緑色'
        },
    ]

    const handleJudge = (e) => {
        if (quizes.length > currentIndex) {
            if (e.target.textContent == quizes[currentIndex].correct) {
                alert('正解')
                setCurrentIndex((prevIndex) => prevIndex + 1)
            } else {
                alert('不正解')
            }
        }
    }

    return (
        <div>
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
                <section className="quiz">
                    <div className="container">
                        <div className="row d-flex justify-content-center g-0">
                            <div className="col-lg-9 bg-white p-4 quiz-bg">
                                {quizes.length <= currentIndex ? (width <= 576 ? (
                                    <h2 className="text-center mb-4 text-warning">
                                        4　4
                                    </h2>
                                ) : (
                                    <h2 className="text-center mb-4 text-danger">
                                        5　0　5
                                    </h2>
                                )) :
                                    (
                                        <h2 className="text-center mb-4">
                                            404
                                        </h2>
                                    )
                                }
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-9 border p-lg-5 p-3 quiz-item">
                                        {quizes.length > currentIndex ?
                                            (<div>
                                                <h3 className="mb-5 quiz-text">{quizes[currentIndex].quiz}</h3>
                                                <div className="row g-3">
                                                    {quizes[currentIndex].answers.map((answer) => (
                                                        <div className="col-lg-3">
                                                            <div className="answer-item" onClick={handleJudge}>{answer}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>) :
                                            (
                                                <div>
                                                    Clear
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="copyright">
                    <p className="text-center">&copy; Piedpiper 青山祭 2023</p>
                </div>
            </footer>
        </div>
    );
}