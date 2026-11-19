// export const metadata = {
//   title: {
//     template: "%s | My Website demo",
//     default: "My Website demo",
//   },
//   description: "Get in touch with us",
// };

// export default function ContactPage() {
//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <p>If you have any questions, feel free to reach out!</p>
//     </div>
//   );
// }

// Lazy Loading.
// "use client";

// import dynamic from "next/dynamic";
// import { useState } from "react";

// const Attendance = dynamic(() => import("./Attendance"), {
//   loading: () => <p>Loading...</p>,
// });

// export default function Home() {
//   const [show, setShow] = useState(false);
  
//   return(
//     <div>
//       <h1>Student Dashboard</h1>
//       <h2>Welcome Dashboard</h2>

//       <button onClick={() => setShow(true)}>View Attendance</button>

//       {show && <Attendance />}
//     </div>
//   )
// }

"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const ProductDetails=dynamic(
  ()=>import("./ProductDetails"),
  {
    loading:()=><p> Loading Product</p>
  }
);
export default function Home(){
  const [show,setShow]=useState(false);
  useEffect(()=>
  {
    const observer = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting)
      {
        setShow(true);
        observer.disconnect();
      }
    });
    const element = document.getElementById("product");
    if(target)
    {
      observer.observer(target)
    }
    return()=> observer.disconnect();
  },[]);

  return (
    <div>
      <h1>online shopping website</h1>
      <h2>Welcome to the store.</h2>
      <p>explore the latest products.</p>
      <div>
        <div id="product">
          {show ? (
            <ProductDetails/>
          ) : (
            <p>Loading Product...</p>
          )}
        </div>
      </div>
    </div>
  );
}