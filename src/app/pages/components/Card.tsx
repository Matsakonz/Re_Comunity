import Link from "next/link"

type Props = {
  img: string
  title: string
  detail: string
}

export default function Card({ img, title, detail }: Props) {
  return (
    <div className="pr-[10px]">
        <Link href="#" className="card bg-base-100 w-68 shadow-sm hover:-translate-y-1 hover:scale-103">
        <figure>
            <img src={img}/>
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{detail}</p>
        </div>
        </Link>
    </div>
)}