import { useState, useRef } from "react";

const Collapsible = (props) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    const contentRef = useRef();
    if (contentRef.current) console.log(contentRef.current.scrollHeight);

return(
    <div className="flex">
        <button onClick={toggle} className={"housing__details--button"}>
            {props.label}
            <i style={open ? { height: contentRef.current.rotate + "deg"} : { rotate: "0deg"}} className="housing_arrow fa-solid fa-angle-up"></i>
        </button>
        <div className="content-parent"
            ref={contentRef} style={open ? { height: contentRef.current.scrollHeight + "px"} : { height: "0px"}}>
            <div className="p_description_detail" style={open ? { height: contentRef.current.scrollHeight + "px", translate: contentRef.current.translate} : contentRef !== null && { translate: "0 -" + contentRef.current?.scrollHeight + "px"}}>
                {props.children}</div>
        </div>
    </div>
    )
}

export default Collapsible