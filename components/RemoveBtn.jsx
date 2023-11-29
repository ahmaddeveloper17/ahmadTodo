"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({id}) {
    const router = useRouter();
    const removeTopic = async () => {
      const confirmed = confirm("Are you sure?");
  
      if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });
  
        if (res.ok) {
          router.refresh();
        }
      }
    };
  
    return (
        <button onClick={removeTopic}  style={{ color: "#ff1a00", backgroundColor: "transparent", border: "none" }}>
            <HiOutlineTrash size={24} />
        </button>
    );
}
