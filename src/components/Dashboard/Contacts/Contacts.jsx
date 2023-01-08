import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../redux/slices/userSlice";
import "./Contacts.scss";

const Contacts = () => {
    const user = useSelector(state => state.user.user);
    const wallet = useSelector(state => state.user.wallet);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData(wallet));
    }, []);

    return <div className="contacts">
        <div className="contacts__header">
            <h2>
                Our telegram bots
            </h2>
            <div>
                ID {user?.id}
            </div>
        </div>
        <div className="contacts__block">
            <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.8864 0.814506L2.38141 13.349C0.163081 14.24 0.175914 15.4775 1.97441 16.0293L10.3197 18.6327L29.6284 6.45017C30.5414 5.89467 31.3756 6.19351 30.6899 6.80217L15.0461 20.9207H15.0424L15.0461 20.9225L14.4704 29.5245C15.3137 29.5245 15.6859 29.1377 16.1589 28.6812L20.2124 24.7395L28.6439 30.9673C30.1986 31.8235 31.3151 31.3835 31.7019 29.5282L37.2367 3.44351C37.8032 1.17201 36.3696 0.143506 34.8864 0.814506Z" fill="#AFC6FF" />
            </svg>
            <h3>
                Infinity Space Channel
            </h3>
            <p>
                All updates and news
            </p>
            <a href="https://t.me/InfinitySpaceWeb3" target="_blank">
                <button>
                    Let's try!
                </button>
            </a>

            <div className="right-background">
                <svg width="41" height="50" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M3.91491 0.328762L55.2918 20.6934C58.798 22.141 58.7777 24.1516 55.9351 25.0481L42.7446 29.2777L12.2256 9.48496C10.7825 8.58245 9.46407 9.06796 10.5478 10.0569L35.2742 32.995H35.28L35.2742 32.998L36.1841 46.9736C34.8511 46.9736 34.2629 46.3451 33.5153 45.6034L27.1084 39.1994L13.7817 49.3177C11.3244 50.7087 9.5597 49.9939 8.94828 46.9795L0.200008 4.60007C-0.695389 0.909588 1.57064 -0.761404 3.91491 0.328762Z" fill="#AFC6FF" />
                </svg>
            </div>
            <div className="bottom-background">
                <svg width="73" height="51" viewBox="0 0 73 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M68.0726 0.407665L3.40865 25.6598C-1.0044 27.4549 -0.978871 29.9479 2.59898 31.0597L19.2008 36.3044L57.6126 11.7614C59.4289 10.6422 61.0883 11.2443 59.7243 12.4705L28.6032 40.9138H28.5959L28.6032 40.9175L27.458 58.2472C29.1356 58.2472 29.876 57.4679 30.817 56.5482L38.8808 48.6073L55.6541 61.154C58.7468 62.8788 60.968 61.9924 61.7375 58.2546L72.7483 5.70408C73.8752 1.12789 71.0232 -0.944141 68.0726 0.407665Z" fill="#AFC6FF" />
                </svg>
            </div>


            <div className="circle">

            </div>
        </div>

        <div className="contacts__block">
            <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.8864 0.814506L2.38141 13.349C0.163081 14.24 0.175914 15.4775 1.97441 16.0293L10.3197 18.6327L29.6284 6.45017C30.5414 5.89467 31.3756 6.19351 30.6899 6.80217L15.0461 20.9207H15.0424L15.0461 20.9225L14.4704 29.5245C15.3137 29.5245 15.6859 29.1377 16.1589 28.6812L20.2124 24.7395L28.6439 30.9673C30.1986 31.8235 31.3151 31.3835 31.7019 29.5282L37.2367 3.44351C37.8032 1.17201 36.3696 0.143506 34.8864 0.814506Z" fill="#AFC6FF" />
            </svg>
            <h3>
                Infinity Space Bot
            </h3>
            <p>
                Account notifications
            </p>
            <a href="https://t.me/Infinity_Space_Notifications_bot" target="_blank">
                <button>
                    Let's try!
                </button>
            </a>

            <div className="right-background">
                <svg width="41" height="50" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M3.91491 0.328762L55.2918 20.6934C58.798 22.141 58.7777 24.1516 55.9351 25.0481L42.7446 29.2777L12.2256 9.48496C10.7825 8.58245 9.46407 9.06796 10.5478 10.0569L35.2742 32.995H35.28L35.2742 32.998L36.1841 46.9736C34.8511 46.9736 34.2629 46.3451 33.5153 45.6034L27.1084 39.1994L13.7817 49.3177C11.3244 50.7087 9.5597 49.9939 8.94828 46.9795L0.200008 4.60007C-0.695389 0.909588 1.57064 -0.761404 3.91491 0.328762Z" fill="#AFC6FF" />
                </svg>
            </div>
            <div className="bottom-background">
                <svg width="73" height="51" viewBox="0 0 73 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M68.0726 0.407665L3.40865 25.6598C-1.0044 27.4549 -0.978871 29.9479 2.59898 31.0597L19.2008 36.3044L57.6126 11.7614C59.4289 10.6422 61.0883 11.2443 59.7243 12.4705L28.6032 40.9138H28.5959L28.6032 40.9175L27.458 58.2472C29.1356 58.2472 29.876 57.4679 30.817 56.5482L38.8808 48.6073L55.6541 61.154C58.7468 62.8788 60.968 61.9924 61.7375 58.2546L72.7483 5.70408C73.8752 1.12789 71.0232 -0.944141 68.0726 0.407665Z" fill="#AFC6FF" />
                </svg>
            </div>


            <div className="circle">

            </div>
        </div>

        <div className="contacts__block">
            <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.8864 0.814506L2.38141 13.349C0.163081 14.24 0.175914 15.4775 1.97441 16.0293L10.3197 18.6327L29.6284 6.45017C30.5414 5.89467 31.3756 6.19351 30.6899 6.80217L15.0461 20.9207H15.0424L15.0461 20.9225L14.4704 29.5245C15.3137 29.5245 15.6859 29.1377 16.1589 28.6812L20.2124 24.7395L28.6439 30.9673C30.1986 31.8235 31.3151 31.3835 31.7019 29.5282L37.2367 3.44351C37.8032 1.17201 36.3696 0.143506 34.8864 0.814506Z" fill="#AFC6FF" />
            </svg>
            <h3>
                Infinity Space Support
            </h3>
            <p>
                Help and advice
            </p>
            <a href="https://t.me/Infinity_Space_Support_bot" target="_blank">
                <button>
                    Let's try!
                </button>
            </a>

            <div className="right-background">
                <svg width="41" height="50" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M3.91491 0.328762L55.2918 20.6934C58.798 22.141 58.7777 24.1516 55.9351 25.0481L42.7446 29.2777L12.2256 9.48496C10.7825 8.58245 9.46407 9.06796 10.5478 10.0569L35.2742 32.995H35.28L35.2742 32.998L36.1841 46.9736C34.8511 46.9736 34.2629 46.3451 33.5153 45.6034L27.1084 39.1994L13.7817 49.3177C11.3244 50.7087 9.5597 49.9939 8.94828 46.9795L0.200008 4.60007C-0.695389 0.909588 1.57064 -0.761404 3.91491 0.328762Z" fill="#AFC6FF" />
                </svg>
            </div>
            <div className="bottom-background">
                <svg width="73" height="51" viewBox="0 0 73 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M68.0726 0.407665L3.40865 25.6598C-1.0044 27.4549 -0.978871 29.9479 2.59898 31.0597L19.2008 36.3044L57.6126 11.7614C59.4289 10.6422 61.0883 11.2443 59.7243 12.4705L28.6032 40.9138H28.5959L28.6032 40.9175L27.458 58.2472C29.1356 58.2472 29.876 57.4679 30.817 56.5482L38.8808 48.6073L55.6541 61.154C58.7468 62.8788 60.968 61.9924 61.7375 58.2546L72.7483 5.70408C73.8752 1.12789 71.0232 -0.944141 68.0726 0.407665Z" fill="#AFC6FF" />
                </svg>
            </div>
        </div>
    </div>
}

export default Contacts;