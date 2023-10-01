import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import Header from "@/components/Header";
import CommonMeta from "@/components/CommonMeta";

export default function Custom404() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [width, height] = useWindowSize();
    const [checker, setChecker] = useState([false, false, false, false])
    const [isLocked, setIsLocked] = useState(false);

    const quizes = [
        {
            quiz: 'このサークルの名前は？',
            answers: ['PiedPiper', 'PeidPiper', 'PiedPaper', 'Peidpaper'],
            correct: 'PiedPiper'
        },
        {
            quiz: '次の作品のうち、HTMLを使用していないものはどれでしょうか？',
            answers: ['COOK_WITH', '8-pazzle', 'Iris-Versus', 'AutomaticMaze'],
            correct: 'AutomaticMaze'
        },
        {
            quiz: 'トップページに表示される動画に登場しない言語は次のうちどれでしょうか？',
            answers: ['Python', 'JavaScript', 'Java', 'Ruby'],
            correct: 'Ruby'
        },
        {
            quiz: 'このサークルのロゴであるキューブを正面からみて、右側面のカラーコードは？',
            answers: ['#6d9442', '#f2e01d3', '#33f1dd', '#000000'],
            correct: '#6d9442'
        },
    ]

    const handleJudge = (e) => {
        if (quizes.length > currentIndex) {
            if (e.target.textContent == quizes[currentIndex].correct) {
                alert('正解')
                setChecker(checker.map((item, index) => (index === currentIndex ? true : item)))

            } else {
                alert('不正解')
                setChecker(checker.map((item, index) => (index === currentIndex ? false : item)))
            }
            setCurrentIndex((prevIndex) => prevIndex + 1)
        }
    }

    useEffect(() => {
        if (checker[0] == true && checker[1] == false && checker[2] == true && checker[3] == true) {
            setIsLocked(true)
        }
    }, [checker])

    return (
        <div>
            <CommonMeta title="404" imgUrl="/images/pc.jpg"/>
            <Header />

            <main>
                <section className="quiz">
                    <div className="container">
                        <div className="row d-flex justify-content-center g-0">
                            <div className="col-lg-9 bg-white p-4 quiz-bg">
                                {isLocked ? (width <= 576 ? (
                                    <h2 className="text-center mb-4 text-warning">
                                        4　4
                                    </h2>
                                ) : (
                                    <h2 className="text-center mb-4 text-danger">
                                        /5　0　5
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
                                        {!isLocked ? (quizes.length > currentIndex ?
                                            (<div>
                                                <h3 className="mb-5 quiz-text">{quizes[currentIndex].quiz}</h3>
                                                <div className="row g-3">
                                                    {quizes[currentIndex].answers.map((answer, index) => (
                                                        <div className="col-lg-3" key={index}>
                                                            <div className="answer-item" onClick={handleJudge}>{answer}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>) :
                                            (
                                                <div>
                                                    <div className="d-flex justify-content-center">
                                                        <Image src="/images/thief.jpeg" alt="" width={200} height={200}/>
                                                    </div>
                                                    <div>
                                                        <p className="mb-2">君はまだまだのようだね</p>
                                                        <p>そんなんでは隠されたお宝は見つけることはできないよ</p>
                                                    </div>
                                                </div>
                                            )) :
                                            (
                                                <div>
                                                    <div className="d-flex justify-content-center">
                                                        <Image src="/images/thief.jpeg" alt="" width={200} height={200}/>
                                                    </div>
                                                    <div>
                                                        <p className="mb-2">君は素晴らしいね</p>
                                                        <p>困った時は、WORKSをよく見るといいことがあるかもよ</p>
                                                    </div>
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