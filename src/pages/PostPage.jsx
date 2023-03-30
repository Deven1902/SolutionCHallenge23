import { useEffect } from "react";
import { redirect, useLocation, useParams } from "react-router-dom"

export default function PostPage(post) {

    const { state } = useLocation();

    useEffect(() => {
        if (state === null) {
            redirect("/")
        }
    }, [])

    return (
        <div className="main_container">
            <div className="title">
                {state.title}
            </div>
            <div className="title">
                {state.uname}
            </div>
            <div className="address">
                {state.address}
            </div>
            <div className="image">
                <img src={state.image} alt="" />
            </div>
            <div className="description">{state.description}</div>
        </div>
    )
}