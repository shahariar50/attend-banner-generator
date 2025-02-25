/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

type BannerProps = { name: string; batch: string; image: string };

const Banner: FC<BannerProps> = ({ name, batch, image }) => {
  return (
    <div className="w-full">
      <div className="py-[50%] relative transform" id="banner">
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-xl">
          <Image src="/frame.jpg" fill alt="frame" />
          <div className="absolute h-[155px] sm:h-[259px] bottom-0 w-full px-[6px] sm:px-[10px] pb-[6px] sm:pb-[10px] flex gap-1">
            <div className="w-1/2 bg-[#080808] rounded-lg h-full shrink-0 overflow-hidden">
              <img
                className={clsx(
                  "w-full object-cover",
                  image ? "h-full" : "scale-[.90]"
                )}
                src={image || "/user-placeholder.webp"}
                alt="user"
              />
            </div>
            <div className="rounded-lg h-full p-4 sm:p-8 flex flex-col justify-between w-1/2 shrink-0 bg-[#080808]">
              <div>
                <h2 className="text-[24px] sm:text-[36px] font-bebas leading-6 sm:leading-9">
                  {name ? name : "Your name"}
                </h2>
                {batch && (
                  <p className="text-[20] sm:text-[24px] text-[#FA1E64] font-bebas">
                    Batch: {batch}
                  </p>
                )}
              </div>
              <div>
                <h6 className="text-xs sm:text-sm">See you</h6>
                <p className="m-0 text-[#FA1E64] text-[10px] sm:text-xs">
                  At the vanue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
