// import React, { useState } from "react";
// import axios from "axios";

// const ContactForm = () => {
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const data = {
//       email,
//       subject,
//       message,
//     };

//     sendEmail(data);

//     setEmail("");
//     setSubject("");
//     setMessage("");
//   };

//   const sendEmail = async (data: any) => {
//     const { email, subject, message } = data;

//     try {
//       const response = await axios.post(
//         "https://api.sendgrid.com/v3/mail/send",
//         {
//           personalizations: [
//             {
//               to: [{ email: "zackzelltodev@gmail.com" }],
//               subject: subject,
//             },
//           ],
//           from: { email: email },
//           content: [{ type: "text/plain", value: message }],
//         },
//         {
//           headers: {
//             Authorization: "Bearer YOUR_SENDGRID_API_KEY",
//           },
//         }
//       );

//       if (response.status === 202) {
//         console.log("Email sent successfully!");
//       } else {
//         console.error("Failed to send email:", response.status, response.statusText);
//       }
//     } catch (error) {
//       console.error("An error occurred while sending email:", error);
//     }
//   };

//   return (
//     <div className="mt-8 flex flex-col items-center justify-center py-8 md:py-8 lg:mt-24">
//       <form onSubmit={handleSubmit} className="mx-auto w-full max-w-lg text-white">
//         <div className="mb-4">
//           <label className="mb-2 block text-[#00ADB5] " htmlFor="email">
//             Email:
//           </label>
//           <input
//             className="w-full rounded border border-[#00ADB5] bg-[#DFF4F5] p-2"
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="mb-2 block text-[#00ADB5]" htmlFor="subject">
//             Subject:
//           </label>
//           <input
//             className="w-full rounded border border-[#00ADB5] bg-[#DFF4F5] p-2"
//             type="text"
//             id="subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="mb-2 block text-[#00ADB5]" htmlFor="message">
//             Message:
//           </label>
//           <textarea
//             className="w-full rounded border border-[#00ADB5] bg-[#DFF4F5] p-2"
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="rounded bg-[#00ADB5] px-4 py-2 text-white"
//         >
//           Send Email
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
