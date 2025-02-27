/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { FC } from "react";

type BannerProps = { name: string; batch: string; image: string | Blob };

const Banner: FC<BannerProps> = ({ name, batch, image }) => {
  return (
    <div className="w-full">
      <div className="py-[50%] relative transform" id="banner">
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-xl">
          <img src="/frame.jpg" alt="frame" />
          <div className="absolute h-[41.9%] top-[54.6%] w-full px-[5.5%] flex">
            <div className="w-1/2 h-full pr-[4%]">
              <div className="bg-white rounded-lg h-full w-full overflow-hidden bg-gradient-to-br from-[#ca238c] to-[#721ac6] p-0.5">
                <div className="bg-white rounded-md h-full w-full overflow-hidden">
                  <img
                    className={clsx(
                      "w-full object-cover",
                      image ? "h-full" : "scale-[.90]"
                    )}
                    src={(image as string) || "/user-placeholder.webp"}
                    alt="user"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-lg h-full pl-[3%] flex w-1/2 shrink-0 relative">
              <div>
                <h2 className="text-[20px] sm:text-[32px] text-white font-bebas leading-7 sm:leading-[36px]">
                  {name ? name : "আপনার নাম"}
                </h2>
                {batch && (
                  <p className="text-[14px] sm:text-[20px] text-[#ca238c] font-bebas">
                    ব্যাচ: {batch}
                  </p>
                )}
              </div>
              <div className="flex justify-end absolute bottom-[1%] right-0">
                <p className="text-white text-[8px] sm:text-xs">
                  {`"যেথায় থাকুক যে-যেখানে,`}
                  <br /> {`বাঁধন আছে প্রাণে-প্রাণে"`}
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
