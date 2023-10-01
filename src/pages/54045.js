import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";

export default function Custom54045() {

    useEffect(() => {
        localStorage.setItem('isGold', '1');
    }, [])

    return (
        <div>
            私の負けだよ。ホームに戻ってな。もうお宝は君の元だよ。
        </div>
    );
}