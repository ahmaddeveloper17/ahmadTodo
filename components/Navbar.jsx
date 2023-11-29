import Link from "next/link";

export default function Navbar() {
    return (
        <nav style={{

            borderRadius: "10px",
            border: "4px solid gray",
            boxShadow: " 0 0 10px rgba(10, 10, 10, 10)",

            fontWeight: "bold",
            background: "linear-gradient(to right,black,gray,black)",
            marginLeft: "20%",
            marginRight: "20%",
            borderRadius: "10px",  // Adjust the value to control the amount of rounding
            backdropFilter: "blur(10px)"  // Adjust the value to control the amount of blur
        }}>
            <Link href={'/'} style={{ color: "white", fontSize: "250%" }}>GTCoding</Link>
            <Link href={'/addTopic'} style={{ color: "white", paddingLeft: "50%", fontSize: "250%" }}>Add Topic</Link>
        </nav>
    );
}
