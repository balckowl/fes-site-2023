import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
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
                <section className="quiz vh-100">
                    <div className="row d-flex justify-content-center g-0">
                        <div className="col-lg-9 bg-white">
                            <div className="container">
                                <p>vnfdvfvdofdvfdd</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}