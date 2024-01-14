import { RiArrowRightLine } from "react-icons/ri";
import { RiGitBranchLine } from "react-icons/ri";
import ViewModal from "./ViewModal";
import { useState } from "react";

function Project({ data }) {
  const { img, title, tags, demoUrl, sourceUrl } = data;
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="mx-4">
        <img
          src={img.src}
          alt={img.alt}
          className="rounded-xl border cursor-pointer"
          onClick={() => setIsOpenModal(true)}
        />
        <div className="py-5">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-gray-500 pb-3">{tags.join(", ")}</p>
          <div className="text-sm flex justify-between">
            <a href={demoUrl}>
              <div className="flex items-center gap-1 group/btn">
                View Demo{" "}
                <RiArrowRightLine className="group-hover/btn:rotate-[360deg] transition-transform duration-500" />
              </div>
            </a>
            <a href={sourceUrl}>
              <div className="flex items-center gap-1 group/btn">
                View Source <RiGitBranchLine className="group-hover/btn:rotate-[360deg] transition-transform duration-500"  />
              </div>
            </a>
          </div>
        </div>
      </div>
      <ViewModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} data={data} />
    </div>
  );
}

export default Project;
