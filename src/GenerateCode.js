import React, { useState, useEffect } from "react";

// const GenerateCode = () => {
//   const [part1, setPart1] = useState("ABCD");
//   const [part2, setPart2] = useState("ABCD");
//   const [part3, setPart3] = useState("ABCD");
//   const [part4, setPart4] = useState("ABCD");

//   const DURATION = 4000;

//   const randomString = () => {
//     var result = "";
//     var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     var charactersLength = characters.length;
//     for (var i = 0; i < 4; i++) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPart1(randomString());
//       setPart2(randomString());
//       setPart3(randomString());
//       setPart4(randomString());
//     }, 200);

//     setTimeout(() => {
//       clearInterval(interval);
//     }, DURATION);
//   }, []);

//   return (
//     <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-lg">
//       <div className="flex flex-col justify-center items-center">
//         <h2 className="text-xl font-bold mb-4">
//           Please wait while we generate your code
//         </h2>
//         <div className="relative inline-flex">
//           {`${part1}-${part2}-${part3}-${part4}`}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GenerateCode;

const GenerateCode = () => {
  return (
    <>
      <div>
        <h1>Thank You!!</h1>
        <h2 style={{ marginRight: "12px" }}>You are all set!</h2>
      </div>
    </>
  );
};

export default GenerateCode;
