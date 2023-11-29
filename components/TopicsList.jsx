import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from 'react-icons/hi';

const getTopics = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };

export default async function TopicsList() {
    const { topics } = await getTopics();
    return (
        <>
        {topics.map((t) => (
            // <div className="container" style={{ marginTop:"1%", border: "2px solid gray", marginLeft: "20%",height:"150px", marginRight: "20%" }}>
            //     <div className="row">
            //         <div >  
            //             <h2 className="col">Title : {t.title} <div style={{marginLeft: "50%"}}>  <RemoveBtn  /> </div></h2>
            //         </div>
                    
            //     </div>

            //     <div className="row">
            //         <p className="col">Description : {t.description}</p>

            //         <Link href={`/updateTopic/${t._id}`} className="col" style={{ marginLeft: "96%", marginTop:"20px",width: "50%"  }}><button style={{color: "red", backgroundColor: "transparent", marginTop:"-40px",border: "none" }}><HiPencilAlt size={25} color="skyblue" /> </button></Link>


            //     </div>
            // </div>
            <div className="container"  style={{ borderRadius:"10px",marginTop:"1%", border: "2px solid gray",width:"50%" , boxShadow: " 0 0 10px rgba(20, 20, 20, 20)"}}> 
                <div className="row">
                <div className="col"> <h2 className="col">Title : {t.title} </h2></div>
                <div className="col" ><div style={{marginLeft:"350px" }}> <RemoveBtn  id={t._id} /></div> </div>
                </div>
                <div className="row">
                <div className="col"> <p className="col">Description : {t.description}</p></div>
                <div className="col"> <Link href={`/editTopic/${t._id}`} className="col" style={{ marginLeft: "90%", marginTop:"20px",width: "50%"  }}><button style={{backgroundColor: "transparent",border: "none" }}><HiPencilAlt size={25} color="skyblue" /> </button></Link></div>
                </div>
            </div>
             ))}
        </>
    )
}
