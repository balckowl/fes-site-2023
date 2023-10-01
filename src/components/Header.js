import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Image from 'next/image'

export default function Header() {

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
            <header>
                <div className="container  d-flex align-items-center">
                    <div className="site-logo mx-auto">
                        {isLoading &&
                            <Link href="/">
                                {isGold == '1' ? (
                                    <Image src="/images/GoldPP.png" alt="" width={50} height={50} />
                                ) : (
                                    <Image src="/images/PP.png" alt="" width={50} height={50} />
                                )}
                            </Link>
                        }
                    </div>
                </div>
            </header>
        </div>
    )

}