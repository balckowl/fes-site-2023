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
            54045
        </div>
    );
}