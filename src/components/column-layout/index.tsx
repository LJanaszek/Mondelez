import React, { ReactElement, useCallback, useEffect, useRef, useState } from "react";

type Props = {
    left?: ReactElement,
    right?: ReactElement,
    decors?: Decor[],
    hideProgress?: boolean
}

export type Decor = {
    side: string,
    position: number,
    src: string;
}


export default function ColumnLayout({ children, left, right, decors, hideProgress }: React.PropsWithChildren<Props>) {

    const containerRef = useRef(null);

    return <div>

        
        <div className="columns" ref={containerRef}>
            <nav className="left-nav">
                {left}
            </nav>
            {children}
            <nav className="right-nav">
                {right}
            </nav>
            {
                decors && decors?.map(decor => {
                   return ""
                })
            }
        </div>
    </div>
}

type DecorProps = {
    decor: Decor
}


function DecorComponent({ decor, parentRef }: DecorProps & { parentRef: any }) {

    const [style, setStyle] = useState<React.CSSProperties>({});

    const update = useCallback(() => {
        if (parentRef.current) {
            const rect: DOMRect = parentRef.current.getBoundingClientRect();

            if (decor.side === 'left') {
                setStyle({
                    top: (5) + 'vh',
                    left: rect.x + 'px',
                    width: (rect.width * .2) + 'px'
                })
            }

            if (decor.side === 'right') {
                setStyle({
                    top: (5) + 'vh',
                    right: rect.x + 'px',
                    width: (rect.width * .2) + 'px'
                })
            }
        }
    }, [setStyle, decor, parentRef]);

    useEffect(() => {
        window.addEventListener('scroll', update);
        window.addEventListener('resize', update);
        update();

        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        }
    }, [update]);

    
}
