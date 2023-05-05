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

        // Logic to collapse others when one clicked
        if (!e.currentTarget?.classList.contains("!border-primary")) {
            const quesClass = document.getElementsByClassName("faq-ques");

            Array.from(quesClass).forEach((el: Element) => {
                if (el.classList.contains("!border-primary")) {
                    console.log(el)
                    const nextSibling = el.nextElementSibling as HTMLElement;
                    if (nextSibling.style.maxHeight) {
                        nextSibling.style.maxHeight = "";
                        el.firstElementChild &&
                            el.firstElementChild.lastElementChild &&
                            (el.firstElementChild.lastElementChild.innerHTML = "+");
                    } else {
                        nextSibling.style.maxHeight = nextSibling.scrollHeight + "px";
                        el.firstElementChild &&
                            el.firstElementChild.lastElementChild &&
                            (el.firstElementChild.lastElementChild.innerHTML = "-");

                    }

                    el.classList.remove("!border-primary");
                    nextSibling.classList.remove("!border-2", "!border-primary");
                }
            });
        }

        e.currentTarget?.classList.toggle('!border-primary')
        e.currentTarget.nextElementSibling?.classList.toggle('!border-2')
        e.currentTarget.nextElementSibling?.classList.toggle('!border-primary')
        const panel: HTMLElement | null = e.currentTarget.nextElementSibling as HTMLElement;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = '';
            e.currentTarget.firstElementChild &&
                e.currentTarget.firstElementChild.lastElementChild &&
                (e.currentTarget.firstElementChild.lastElementChild.innerHTML = "+");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            e.currentTarget.firstElementChild &&
                e.currentTarget.firstElementChild.lastElementChild &&
                (e.currentTarget.firstElementChild.lastElementChild.innerHTML = "-");
        }
    }

    return (
        <>
            <div onClick={(e: React.MouseEvent<HTMLElement>) => handleFaqClick(e)} className="faq-ques mt-5 border-2 border-b-0 transition-all ease duration-700 cursor-pointer max-h-max">
                <div className="p-5 flex justify-between ">
                    <p>{ques}</p>
                    <span className="font-medium text-lg">+</span>
                </div>
            </div>
            <div className=" max-h-0 border-2 !border-t-0 transition-all ease duration-700 overflow-hidden  ">
                <hr />
                <p className="m-5">
                    {faqAnswerParser(ans)}
                </p>
            </div>
        </>

    )
}

export default Faq