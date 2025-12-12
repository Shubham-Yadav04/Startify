"use client";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  desc: string;
  tags: string[];
  id: string;
};
function StartupBox({ props }: { props: Props }) {
  const router = useRouter();
  return (
    <div
      className=" p-6  rounded-lg cursor-pointer 
  border border-white/10
  shadow-[4px_4px_20px_5px_rgba(0_0_0_/_0.50)]
  dark:shadow-[4px_4px_20px_5px_rgba(0_0_0_/_0.50)]
  backdrop-blur
  "
      onClick={(e) => {
        e.stopPropagation();
        router.push(`/startup/${props.id}`);
      }}
    >
      <div className="flex  px-2 space-x-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-4 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="font-semibold text-lg mb-2">Title</h3>
      </div>

      <p className="text-gray-600 text-sm mb-4">
        Innovative startup idea description goes here
      </p>

      <span className="inline-block px-2 py-1   bg-blue-200 text-black font-semibold text-xs rounded-md">
        Tech
      </span>
    </div>
  );
}

export default StartupBox;
