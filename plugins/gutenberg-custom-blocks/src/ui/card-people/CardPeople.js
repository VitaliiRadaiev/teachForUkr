import { getSocialIconByUrl, getUrlToStaticImages } from "../../utils/utils";

export const CardPeople = ({ post }) => {
    return (
        <div className="card-people nested-bg-item rounded-[12px] p-[5px] h-full flex flex-col">
            <div
                className="aspect-[1/0.833] lg:aspect-[1/0.864] grow-0 shrink-0 rounded-[8px] relative overflow-hidden"
                dangerouslySetInnerHTML={{ __html: post.image }}
            >
            </div>
            <div className="mt-[20px] lg:mt-[30px] px-[15px] pb-[15px] grow shrink flex flex-col">
                <div className="h3 text-dark-primary">
                    {post.title}
                </div>
                {!!post.excerpt &&
                    <div className="mt-[5px] mb-[20px] text-md text-dark-primary-60 last-child-no-margin">
                        {post.excerpt}
                    </div>
                }

                {!!post.social && Array.isArray(post.social) &&
                    <div className="mt-auto flex flex-wrap gap-[12px]">
                        {post.social.map(social => (
                            <div
                                className="flex items-center justify-center h-[44px] xl:h-[36px] 4xl:h-[40px] w-[44px] xl:w-[36px] 4xl:w-[40px] rounded-full bg-accent-first transition-colors hover:bg-accent-first-50"
                                aria-label="Show in social">
                                <img
                                    className="h-[20px] w-auto color-light-primary-filter"
                                    src={getUrlToStaticImages(getSocialIconByUrl(social.link))}
                                />
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
}