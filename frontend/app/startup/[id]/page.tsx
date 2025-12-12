import React from 'react'

async function page({params}:{params:Promise<{id:string}>}){
const {id}= await params;
const html=" <h1>Java Synchronization </h1><p></p><p>hey this is to synchronize the java ajdkajafiojdkdpojjdojddjkjjjdjddddasasacnamaeallawa;;fjariaLancnnculucnh kr le</p><p></p>"
  return (
    <div
      className="prose prose-invert max-w-3xl mx-auto p-6 text-white [&_h1]:text-4xl [&_h1]:text-blue-200 [&_h1]:my-1"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default page