import type { ReactNode } from "react";
import type React from "react"

type FaqQuesType = {
    ques: string,
    ans: Array<string | string[]>;
}

function Faq({ ques, ans }: FaqQuesType) {

    function faqAnswerParser(ans: Array<string | string[]>): ReactNode {
        return ans.map(res =>
            Array.isArray(res) ?
                <ul className="list-disc mx-10 mt-3 leading-7">
                    {res.map(points =>
                        <li>{points}</li>
                    )}
                </ul> :
                <p className="mt-5">{res}</p>
        )
    }

    const handleFaqClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        e.currentTarget?.classList.toggle('!border-primary')
        e.currentTarget.nextElementSibling?.classList.toggle('!border-2')
        e.currentTarget.nextElementSibling?.classList.toggle('!border-primary')
        const panel: HTMLElement | null = e.currentTarget.nextElementSibling as HTMLElement;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = '';
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    return (
        <>
            <div onClick={(e: React.MouseEvent<HTMLElement>) => handleFaqClick(e)} className=" mt-5 border-2 border-b-0 transition-all ease-in duration-200 cursor-pointer max-h-max">
                <div className="p-5">{ques}</div>
            </div>
            <div className=" max-h-0 border-2 !border-t-0 transition-all ease-in duration-200 overflow-hidden  ">
                <hr />
                <p className="m-5">
                    {faqAnswerParser(ans)}
                </p>
            </div>
        </>

    )
}

export default Faq