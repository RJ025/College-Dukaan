import { Link } from "react-router-dom"

export const Register = () => {
    return (
   <div
     className="bg-no-repeat bg-cover bg-center relative"
   >
     <div className="absolute bg-gradient-to-b from-gray-300 to-grey-100 opacity-75 inset-0 z-0" />
     <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-evenly">
       <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
         <div className="self-start hidden lg:flex flex-col  text-gray-800">
           <img src="" className="mb-3" />
           <h1 className="mb-3 tracking-wide font-bold text-6xl">College</h1>
           <h1 className="mb-3 tracking-wide font-bold text-yellow-400 text-6xl">Dukaan</h1>
         </div>
       </div>
       <div className="flex justify-center self-center  z-10">
         <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
           <div className="mb-4">
             <h3 className="font-semibold text-2xl text-gray-800">Register </h3>
           </div>
           <div className="space-y-5">
             <div className="space-y-2">
               <label className="text-sm font-medium text-gray-700 tracking-wide">
                 Email
               </label>
               <input
                 className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                 type=""
                 placeholder="mail@gmail.com"
               />
             </div>
             <div className="space-y-2">
               <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                 Password
               </label>
               <input
                 className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                 type=""
                 placeholder="Enter your password"
               />
             </div>
             <div className="space-y-2">
               <label className="text-sm font-medium text-gray-700 tracking-wide">
                 Confirm Password
               </label>
               <input
                 className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                 type=""
                 placeholder="Retype password"
               />
             </div>
             <div className="flex items-center justify-between">
               <div className="flex items-center">
                 <input
                   id="remember_me"
                   name="remember_me"
                   type="checkbox"
                   className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                 />
                 <label
                   htmlFor="remember_me"
                   className="ml-2 block text-sm text-gray-800"
                 >
                   Remember me
                 </label>
               </div>
             </div>
             <div>
               <button 
                 type="submit"
                 className="w-full flex justify-center bg-yellow-400  hover:bg-yellow-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer"
               >
                 Register
               </button>
             </div>
             <div className="text-center text-sm">  
             <p>Already Registered!</p>
             <Link to="/login" className="text-yellow-400 hover:text-yellow-500">Login Here</Link>
             </div>
           </div>
           <div className="pt-5 text-center text-gray-400 text-xs">
             <span>
               Copyright © 2021-2022 College Dukaan
             </span>
           </div>
         </div>
       </div>
     </div>
   </div>
    )
   }
   