//components/Pagination.js
import Link from 'next/link';

export const Pagination = ({ totalCount }) => {
    const PER_PAGE = 6;

    const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

    return (
        <ul className='pagination d-flex justify-content-center gap-3'>
            {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
                <li key={index}>
                    <Link href={`/blog/page/${number}`}>{number}</Link>
                </li>
            ))}
        </ul>
    );
};