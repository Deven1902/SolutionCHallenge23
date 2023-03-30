import { useEffect } from "react";
import { redirect, useLocation, useNavigate, useParams } from "react-router-dom"
import './postPage.css'
export default function PostPage() {

    const { state } = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        if (state === null) {
            navigate("/")
        }
    }, [])

    return (
        state === null ?
            <div className="main_container">Loading...</div>
            :
            <div className="main_container">
                <div className="title">
                    {state.title}
                </div>
                <div className="uname">
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