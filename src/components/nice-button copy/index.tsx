import { forwardRef } from "react";
import { Link } from "react-router-dom"

type Props = {
    to: string,
    label: string,
    isSubmit?: boolean,
    isDownload?: boolean,
    onClick?: any
}


const NiceButton = forwardRef(({ label, to, isSubmit, onClick, isDownload }: React.PropsWithRef<Props>, ref: any) => {
    if (isSubmit) {
        return <div>
            <div className="top-bar"></div>
            <div className="body">
                <button ref={ref} onClick={onClick}>
                    {label}
                </button>
            </div>
        </div>
    } if (isDownload) {
        return <div>
            <div className="top-bar"></div>
            <div className="body">
                <a ref={ref} href={to} onClick={onClick}>
                    {label}
                </a>
            </div>
        </div>
    } else {
        return <div>
            <div className="top-bar"></div>
            <div className="body">
                <Link ref={ref} to={to} onClick={onClick}>
                    {label}
                </Link>
            </div>
        </div>
    }
});

export default NiceButton;
