import { useEffect } from "react";
import { redirect, useLocation, useNavigate, useParams } from "react-router-dom"
import './postPage.css'
import swal from "sweetalert";
import { auth } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";



export default function PostPage() {


    const [user, loading, error] = useAuthState(auth)

    const { state } = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        console.log(user)
        if (state === null) {
            navigate("/")
        }
    }, [])


    async function deletePost() {
        swal({
            title: "Are you sure?",
            text: "Do you want to delete this post?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                auth.currentUser.getIdToken(/* forceRefresh */ true).then(async function (idToken) {
                    let response = await fetch(
                        `https://community-hub-4-default-rtdb.firebaseio.com/posts/${state.id}.json?auth=${idToken}`,
                        {
                            method: "DELETE",
                        }
                    )
                    console.log(response)
                    if (response.status === 200) {
                        swal("Post has been deleted!", {
                            icon: "success",
                        }).then(() => {
                            navigate("/")
                        }
                        );
                    }
                    else {
                        swal("Post not deleted!", {
                            icon: "danger",
                        });
                    }
                })
            }
        });
    }

    return (
        state === null ?
            <div className="main_container">Loading...</div>
            :
            <div className="main_container">
                <div className="title_row" >
                    <div className="title">
                        {state.title}
                    </div>
                    {
                        user.uid === state.user ?
                            <button onClick={deletePost}>Delete Post</button>
                            :
                            <></>
                    }



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