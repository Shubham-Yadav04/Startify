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
  className="
    group cursor-pointer rounded-xl p-5
    border border-slate-200
    dark:border-white/10

    bg-white
    dark:bg-[#121212]

    transition-all duration-300 ease-out
    hover:-translate-y-0.5
    hover:shadow-md
    dark:hover:shadow-[0_8px_30px_-10px_rgba(16,185,129,0.25)]
  "
  onClick={(e) => {
    e.stopPropagation();
    router.push(`/startup/${props.id}`);
  }}
>
  {/* Header */}
  <div className="flex items-center gap-4 mb-3">
    <div
      className="
        w-10 h-10 rounded-full flex items-center justify-center
        bg-gradient-to-br from-indigo-500 to-purple-500
        shadow-sm
      "
    >
      <svg
        className="w-5 h-5 text-white"
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

    <h3
      className="
        font-semibold text-base
        text-slate-800
        dark:text-neutral-200
        group-hover:text-indigo-600
        dark:group-hover:text-emerald-400
        transition-colors
      "
    >
      Title
    </h3>
  </div>

  {/* Description */}
  <p
    className="
      text-sm leading-relaxed mb-4
      text-slate-600
      dark:text-neutral-400
    "
  >
    Innovative startup idea description goes here
  </p>

  {/* Tags */}
  <div className="flex flex-wrap gap-2">
    <span
      className="
        px-2.5 py-1 rounded-full text-xs font-medium
        bg-slate-100 text-slate-700
        dark:bg-white/5 dark:text-neutral-300
      "
    >
      Tech
    </span>
  </div>
</div>

  );
}

export default StartupBox;
