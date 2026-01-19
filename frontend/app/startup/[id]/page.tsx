import React from 'react'

async function page({params}:{params:Promise<{id:string}>}){
const {id}= await params;
const html=" <h1>Java Synchronization </h1><p></p><p>hey this is to synchronize the java ajdkajafiojdkdpojjdojddjkjjjdjddddasasacnamaeallawa;;fjariaLancnnculucnh kr le</p><p></p>"
  return (
    <div
  className="
    prose max-w-3xl mx-auto p-6
    bg-white text-gray-800
    rounded-lg

    prose-h1:text-4xl
    prose-h1:font-bold
    prose-h1:my-2
    prose-h1:text-blue-600

    prose-h2:text-2xl prose-h2:mt-6 prose-h2:text-gray-800
    prose-h3:text-xl prose-h3:text-gray-700

    prose-p:text-gray-700 prose-p:leading-relaxed
    prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800
    prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
    prose-pre:bg-gray-900 prose-pre:text-gray-100

    dark:prose-invert
    dark:bg-[#111]
    dark:text-gray-200
    dark:prose-h1:text-blue-300
    dark:prose-h2:text-gray-100
    dark:prose-h3:text-gray-200

    dark:prose-p:text-gray-300
    dark:prose-a:text-blue-400 hover:dark:prose-a:text-blue-300
    dark:prose-code:bg-gray-800
    dark:prose-pre:bg-black
  "
  dangerouslySetInnerHTML={{ __html: html }}
/>

  );
}

export default page