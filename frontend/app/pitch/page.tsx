"use client"
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"
import Image from "next/image";
import { useEffect, useState } from "react";


type FormState = {
  title: string;
  slug: string;
  content: string;
  coverImage: string | null;
};

const STORAGE_KEY = "post-draft";

export default function Page() {
 const initialForm= {
    title: "",
    slug: "",
    content: "",
    coverImage: null,
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
    persistData.coverImage=""
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

  const handleSubmit = async () => {
    console.log("Submitting:", form);

    // After successful save
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
            setForm((p)=>({...p,coverImage:url}))
          }
            }}
            
            className="w-fit text-[1rem] px-4 py-1"
          />
          {
           ( form.coverImage!=null &&  form.coverImage!=="" )&& <div className=" z-20 w-fit object-fit ml-5 ">
              <Image src={form.coverImage||""} alt="preview" width={200} height={200} />
            </div>
          }
        </div>

        {/* Editor */}
      <SimpleEditor
      id={form?.slug}
        formContent={form.content}
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


