import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col mx-auto w-1/5 py-36">
            <h2 className="text-red-500">Not Found</h2>
            <p>Could not find requested resource</p>
            <Link className="text-lg font-bold" href="/">Return Home</Link>
        </div>
    );
}