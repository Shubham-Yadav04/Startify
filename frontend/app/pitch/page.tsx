"use client"
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios'
import type { Metadata } from "next"
import Error from "next/error";
export const metadata: Metadata = {
  title: "Pitch - The future",
  description: "Pitch your idea make it an attraction spot for the large viewer,consumer and investors ",
};
type FormState = {
  title: string;
  slug: string;
  HTML: string;
  thumbnail: string | null;
};

const STORAGE_KEY = "post-draft";

export default function Page() {
 const initialForm= {
    title: "",
    thumbnail: null,
    HTML: "",
    slug: "",
  }

const [form, setForm] = useState<FormState>(() => {
  if (typeof window === "undefined") return initialForm;
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : initialForm;
});

const [preview,setPreview]= useState(false);

  /* ---------------- Persist on change ---------------- */
  useEffect(() => {
    const persistData={...form};
    persistData.thumbnail=""
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistData));

  }, [form]);

  /* ---------------- Handlers ---------------- */
  const handleTitleChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, ""),
    }));
  };
async function srcToFile(src: string) {
  const res = await fetch(src);   
  const blob = await res.blob();
  return new File([blob], "image.png", { type: blob.type });
}

async function uploadToCloudinary(file: File) {
  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", "Startify");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dqyxlgnm0/image/upload",
    { method: "POST", body: form }
  );

  if (!res.ok) throw new Error("Upload folder");
  const data = await res.json();
  return data.secure_url as string;
}
const handleSubmit = async () => {
  console.log("Submitting:", form);
  const parser = new DOMParser();
  const doc = parser.parseFromString(form.HTML, "text/html");
  const images = Array.from(doc.querySelectorAll("img") as NodeListOf<HTMLImageElement>);
  const finalContent= {...form};
  console.log(images);
 for (const img of images) {
  if (img.src.startsWith("blob:")) {
    const file = await srcToFile(img.src);
    const cloudUrl = await uploadToCloudinary(file);

    // Replace inside HTML
    
    finalContent.HTML = finalContent.HTML.replace(img.src, cloudUrl);
  }
}
console.log(finalContent);



// yha pr redis daalunga agr kabhi bhi error aata hai to saare delete krudunga images and no save operation 
try{
  //post request to persist database 
  const res= await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URI}/post/`,{
    finalContent
  },
  { withCredentials:true} 
);
console.log(res);
// redirect to the pitches succestion or to success 
}
catch(e){
console.log(e)
}
  // After successful save
  console.log("success !!!")
  localStorage.removeItem(STORAGE_KEY);
};

  return (
    <div>
    <h1 className="text-center text-[3rem] font-black dark:text-white/40 text-[#222] "> Pitch A Future</h1>
    <div className="max-w-5xl mx-auto  p-6 h-fit space-y-6">
      {/* Title */}
      <input
        type="text"
        placeholder="Post title"
        className="w-full text-[2vw] px-4 py-1 font-semibold focus:ring-none focus:outline-none bg-transparent border-b border-gray-400"
        value={form.title}
        onChange={(e) => handleTitleChange(e.target.value)}
      />

      {/* Slug */}
      <input
        type="text"
        placeholder="Slug"
        disabled={true}
        className="w-full text-[1rem] px-4 font-semibold focus:ring-none focus:outline-none bg-transparent border-b border-gray-400"
        value={form.slug}
      />

        <div className="space-2 flex flex-col md:flex-row p-2">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
          const file = e.target.files?.[0];

          if (file) {
            const url= URL.createObjectURL(file);
            setForm((p)=>({...p,thumbnail:url}))
          }
            }}
            
            className="w-fit text-[1rem] px-4 py-1"
          />
          {
           ( form.thumbnail!=null &&  form.thumbnail!=="" )&& <div className=" z-20 w-fit object-fit ml-5 ">
              <Image src={form.thumbnail||""} alt="preview" width={200} height={200} />
            </div>
          }
        </div>

        {/* Editor */}
      <SimpleEditor
      id={form?.slug}
        formContent={form.HTML}
        onChange={(value) =>
          setForm((p) => ({ ...p, content: value }))
        }
      />

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-[#222] text-white rounded"
      >
        Publish
      </button>
    </div>
    </div>
  );
}


