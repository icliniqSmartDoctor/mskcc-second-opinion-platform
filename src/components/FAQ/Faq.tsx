import type React from "react"

function Faq() {

    const handleFaqClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        e.currentTarget?.classList.toggle('!border-primary')

        // e.currentTarget.lastElementChild?.classList.toggle('!opacity-100')

        // e.currentTarget.nextElementSibling?.classList.toggle('!max-h-[1000px]')
        e.currentTarget.nextElementSibling?.classList.toggle('!border-2')
        e.currentTarget.nextElementSibling?.classList.toggle('!border-t-0')
        e.currentTarget.nextElementSibling?.classList.toggle('!border-primary')

        const panel = e.currentTarget.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        // e.currentTarget.classList.toggle('!min-h-full')
        // e.currentTarget.classList.toggle('!h-40')
    }

    return (
        <>
            <div onClick={(e: React.MouseEvent<HTMLElement>) => handleFaqClick(e)} className=" border-2 border-b-0  cursor-pointer max-h-max">
                <div className="p-5">When should you get a remote second opinion?</div>
            </div>
            <div className=" max-h-0 border-b-2 transition-all ease-in duration-200 overflow-hidden  ">
                <p className="m-5">
                    When you’re diagnosed with cancer, seeking a second
                    opinion is an important step. It can help ensure
                    that you have the most accurate diagnosis and the
                    best care plan.
                </p>
            </div>
        </>

    )
}

export default Faq