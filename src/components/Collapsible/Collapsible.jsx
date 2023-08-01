import { useState, useEffect, useRef } from 'react'
import '../../styles/Collapsible.scss'

const Collapsible = (props) => {
    const [open, setOpen] = useState(false)
    const [tracker, setTracker] = useState(null)
    const contentRef = useRef(null)

    const toggle = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if (contentRef.current !== tracker) {
            setTracker(contentRef.current)
        }
        console.log(contentRef.current.scrollHeight)
    }, [tracker])

    const rotate = contentRef.current?.rotate || 0 + 'deg'
    const scrollHeight = contentRef.current?.scrollHeight + 'px'
    const translate = contentRef.current?.translate
    const beforeTranslate = '0 ' + -contentRef.current?.scrollHeight + 'px'

    return (
        <div className="collapsible">
            <button onClick={toggle} className={'collapsible__button'}>
                {props.label}
                <i
                    style={open ? { height: rotate } : { rotate: '0deg' }}
                    className="collapsible__arrow fa-solid fa-angle-up"
                ></i>
            </button>
            <div
                className="collapsible__container"
                ref={contentRef}
                style={open ? { height: scrollHeight } : { height: '0px' }}
            >
                <div
                    className="collapsible__content"
                    style={
                        open
                            ? {
                                  height: scrollHeight,
                                  translate: translate,
                              }
                            : contentRef !== null && {
                                  translate: beforeTranslate,
                              }
                    }
                >
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Collapsible
