"use client";

import ProductDetails from "./OnlineShopping/ProductDetails";

// import prisma from "../lib/prisma";
// import { addStudent } from "./action";
// import { connection } from "next/server";

// export const instant = false;

// export default async function Home({ searchParams }) {
//   await connection();

//   const params = await searchParams;

//   const students = await prisma.student.findMany({
//     orderBy: {
//       id: "desc",
//     },
//   });

//   return (
//     <div style={{
//       maxWidth: "700px",
//       margin: "40px auto",
//       fontFamily: "Arial"
//     }}>

//       <h1>Student Registration Form</h1>

//       {params.saved === "1" && (
//         <p style={{ color: "green" }}>
//           Student saved successfully!
//         </p>
//       )}

//       <form action={addStudent}>

//         <div style={{ marginBottom: "15px" }}>
//           <label>Name</label>
//           <br />
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter name"
//             required
//             style={{ padding: "10px", width: "100%" }}
//           />
//         </div>

//         <div style={{ marginBottom: "15px" }}>
//           <label>Age</label>
//           <br />
//           <input
//             type="number"
//             name="age"
//             placeholder="Enter age"
//             min="1"
//             required
//             style={{ padding: "10px", width: "100%" }}
//           />
//         </div>

//         <div style={{ marginBottom: "15px" }}>
//           <label>Course</label>
//           <br />
//           <input
//             type="text"
//             name="course"
//             placeholder="Enter course"
//             required
//             style={{ padding: "10px", width: "100%" }}
//           />
//         </div>

//         <button
//           type="submit"
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "blue",
//             color: "white",
//             border: "none",
//             cursor: "pointer"
//           }}
//         >
//           Submit
//         </button>

//       </form>

//       <hr style={{ margin: "30px 0" }} />

//       <h2>Registered Students</h2>

//       {students.length === 0 ? (
//         <p>No students registered yet.</p>
//       ) : (

//         <table
//           border="1"
//           cellPadding="10"
//           style={{
//             width: "100%",
//             borderCollapse: "collapse"
//           }}
//         >
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Course</th>
//             </tr>
//           </thead>

//           <tbody>
//             {students.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.Age}</td>
//                 <td>{student.course}</td>
//               </tr>
//             ))}
//           </tbody>

//         </table>

//       )}

//     </div>
//   );
// }


// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to the Student Registration App</h1>
//       <Image
//         src="/student_registration.png"
//         alt="Student Registration"
//         width={600}
//         height={400}
//       />
//     </div>
//   );
// }

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div style={{ padding: "24px" }}>
//       <h1>Images to be displayed</h1>

//       <div>
//         <h2>Internal image</h2>
//         <Image
//           src="https://images.unsplash.com/photo-1775027814967-cac2cf014ab7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
//           alt="Tulips."
//           width={400}
//           height={300}
//         />
//       </div>

//       <div>
//         <h2>External image</h2>
//         <Image
//           src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
//           alt="Sunflower"
//           width={400}
//           height={300}
//         />
//       </div>
//     </div>
//   );
// }

// export const metadata = {
//   title: "My website",
//   description: "This is my website",
//   keywords: ["website", "nextjs", "react"],
// };

// export default function Home(){
//   return(
//     <div>
//       <h1>Welcome to my website</h1>
//     </div>
//   );
// }

export default function Home() {
  return (
    <main>
      <h1>Online Shopping Website</h1>
      <h2>Welcome to the store.</h2>
      <p>Explore the latest products.</p>
      <ProductDetails />
    </main>
  );
}
