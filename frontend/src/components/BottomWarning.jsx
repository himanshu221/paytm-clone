import { Link } from "react-router-dom"

export const BottomWarning = (props) => {
    return <div className="pt-1">
        {props.text} <Link className="underline" to={props.to}>{props.link}</Link>
    </div>
}