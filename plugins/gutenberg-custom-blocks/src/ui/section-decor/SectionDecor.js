import { getUrlToStaticImages } from "../../utils/utils";

export const SectionDecor = ({ decor }) => {
    return (
        <div className="absolute z-1 top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="container h-full relative">
                {decor === 1 &&
                    <div className="absolute right-0 bottom-[70px] md:bottom-[80px] lg:bottom-[100px] h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex">
                        <img loading="lazy" className="accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right" src={getUrlToStaticImages('icons/semicircle-bottom.svg')} alt="" />
                        <img loading="lazy" className="accent-second-50-filter h-full w-auto aos-rotate-left" src={getUrlToStaticImages('icons/semi-tours-left.svg')} alt="" />
                    </div>
                }
                {decor === 2 &&
                    <div className="absolute left-0 bottom-[70px] md:bottom-[80px] lg:bottom-[100px] h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex -scale-x-100">
                        <img loading="lazy" className="accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right" src={getUrlToStaticImages('icons/semicircle-bottom.svg')} alt="" />
                        <img loading="lazy" className="accent-second-50-filter h-full w-auto aos-rotate-left" src={getUrlToStaticImages('icons/semi-tours-left.svg')} alt="" />
                    </div>
                }
                {decor === 3 &&
                    <div className="absolute left-0 bottom-0 h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex -translate-x-1/2">
                        <img loading="lazy" className="accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right" src={getUrlToStaticImages('icons/semi-torus-top.svg')} alt="" />
                    </div>
                }
                {decor === 4 &&
                    <div className="absolute right-0 bottom-0 h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex translate-x-1/2 -scale-x-100">
                        <img loading="lazy" className="accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right" src={getUrlToStaticImages('icons/semi-torus-top.svg')} alt="" />
                    </div>
                }
                {decor === 5 &&
                    <div className="absolute left-0 bottom-0 h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex -translate-x-1/2">
                        <img loading="lazy" className="accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right" src={getUrlToStaticImages('icons/semicircle-bottom.svg')} alt="" />
                    </div>
                }
                {decor === 6 &&
                    <div className="absolute right-0 bottom-0 h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex translate-x-1/2 -scale-x-100">
                        <img loading="lazy" className="accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right" src={getUrlToStaticImages('icons/semicircle-bottom.svg')} alt="" />
                    </div>
                }
            </div>
        </div>
    );
}