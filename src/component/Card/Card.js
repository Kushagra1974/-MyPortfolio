import classes from "./Card.module.css"
import { useNavigate } from "react-router-dom";

function Card({ children, sr, desc }) {

    const navigate = useNavigate()

    return (
        <a href={sr} className={classes.a}>
            <div className={classes.card} >
                {children}
            </div>
        </a>
    )
}

export default Card
