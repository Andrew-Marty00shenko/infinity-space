import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";

import Stats from "../../Stats/Stats";

import "./Level.scss";

const Level = () => {
    const user = useSelector(state => state.user.user);
    const levels = useSelector(state => state.levels.levels);
    const [currentLevel, setCurrentLevel] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const handlePageClick = (event) => {
        navigate(`/dashboard/user/levels/${(event.selected + 1)}`, { replace: true })
    };

    useEffect(() => {
        setCurrentLevel(levels[params.id - 1]);
    }, [params]);

    return <div className="level">
        <div className="level__info">
            <Link to="/dashboard/user/levels"> ID {user.id} </Link> &#62; <span>
                Level {params.id}
            </span>
        </div>

        <div className="level__header">
            <h2>
                Level {params.id}
            </h2>
            <OverlayTrigger
                placement="top"
                overlay={
                    <Tooltip>
                        Indicators for the individual selected level
                    </Tooltip>
                }
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.28718 1.17962C10.7293 0.606792 13.2707 0.606792 15.7128 1.17962C19.2395 2.00687 21.9931 4.76052 22.8204 8.28719C23.3932 10.7293 23.3932 13.2707 22.8204 15.7128C21.9931 19.2395 19.2395 21.9931 15.7128 22.8204C13.2707 23.3932 10.7293 23.3932 8.28719 22.8204C4.76052 21.9931 2.00687 19.2395 1.17962 15.7128C0.606792 13.2707 0.606792 10.7293 1.17962 8.28718C2.00687 4.76051 4.76052 2.00687 8.28718 1.17962ZM12 9.60675C12.6608 9.60675 13.1966 9.07101 13.1966 8.41014C13.1966 7.74928 12.6608 7.21354 12 7.21354C11.3391 7.21354 10.8034 7.74928 10.8034 8.41014C10.8034 9.07101 11.3391 9.60675 12 9.60675ZM12 10.5042C12.4956 10.5042 12.8974 10.906 12.8974 11.4017V16.1881C12.8974 16.6837 12.4956 17.0855 12 17.0855C11.5043 17.0855 11.1025 16.6837 11.1025 16.1881V11.4017C11.1025 10.906 11.5043 10.5042 12 10.5042Z" fill="#AFC6FF" />
                </svg>
            </OverlayTrigger>
        </div>

        <div className="level__content">
            <div className="level__content-background" />

            <div className="level__content-card">
                <div className="card-header">
                    <Link to="/dashboard/user/levels">
                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 5.25L5 1.75L1.5 5.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    Upline
                    <div className="card-header__upline">
                        ID {currentLevel?.uplineId || 0}
                    </div>
                </div>
                <div className="card-content">
                    <h2>
                        Level {params.id}
                    </h2>
                    <div className="card-content__info">
                        <p>
                            ID {user.id}
                        </p>
                        <div>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="24" fill="#FFED4C" fillOpacity="0.08" />
                                <path d="M8.72656 23.9838L12.5583 20.1519L16.39 23.9838L12.5583 27.8158L8.72656 23.9838ZM14.4949 18.2167L23.9841 8.72656L27.8158 12.5585L18.326 22.0484L14.4949 18.2167ZM14.4541 29.7123L29.7127 14.4527L33.5444 18.2846L18.2856 33.544L14.4541 29.7123ZM20.1817 35.4403L35.4403 20.1806L39.272 24.0126L24.0131 39.272L20.1817 35.4403Z" fill="#FFED4C" />
                            </svg>
                            {currentLevel?.price / 1e18}
                        </div>
                    </div>
                    <div className="card-content__partners">
                        <div className="partners-block">
                            <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.8234 9.15192C22.8234 14.047 18.8986 17.972 14.0001 17.972C9.10323 17.972 5.17676 14.047 5.17676 9.15192C5.17676 4.25687 9.10323 0.333496 14.0001 0.333496C18.8986 0.333496 22.8234 4.25687 22.8234 9.15192ZM14.0003 33.6668C6.77095 33.6668 0.666992 32.4918 0.666992 27.9584C0.666992 23.4234 6.8093 22.29 14.0003 22.29C21.2314 22.29 27.3337 23.4651 27.3337 27.9984C27.3337 32.5335 21.1914 33.6668 14.0003 33.6668Z" fill="white" />
                            </svg>
                            <div>
                                <p>
                                    ID
                                </p>
                                <span>
                                    {currentLevel?.firstThreeRefferrals[0] || 0}
                                </span>
                            </div>
                        </div>
                        <div className="partners-block">
                            <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.8234 9.15192C22.8234 14.047 18.8986 17.972 14.0001 17.972C9.10323 17.972 5.17676 14.047 5.17676 9.15192C5.17676 4.25687 9.10323 0.333496 14.0001 0.333496C18.8986 0.333496 22.8234 4.25687 22.8234 9.15192ZM14.0003 33.6668C6.77095 33.6668 0.666992 32.4918 0.666992 27.9584C0.666992 23.4234 6.8093 22.29 14.0003 22.29C21.2314 22.29 27.3337 23.4651 27.3337 27.9984C27.3337 32.5335 21.1914 33.6668 14.0003 33.6668Z" fill="white" />
                            </svg>
                            <div>
                                <p>
                                    ID
                                </p>
                                <span>
                                    {currentLevel?.firstThreeRefferrals[1] || 0}
                                </span>
                            </div>
                        </div>
                        <div className="partners-block">
                            <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.8234 9.15192C22.8234 14.047 18.8986 17.972 14.0001 17.972C9.10323 17.972 5.17676 14.047 5.17676 9.15192C5.17676 4.25687 9.10323 0.333496 14.0001 0.333496C18.8986 0.333496 22.8234 4.25687 22.8234 9.15192ZM14.0003 33.6668C6.77095 33.6668 0.666992 32.4918 0.666992 27.9584C0.666992 23.4234 6.8093 22.29 14.0003 22.29C21.2314 22.29 27.3337 23.4651 27.3337 27.9984C27.3337 32.5335 21.1914 33.6668 14.0003 33.6668Z" fill="white" />
                            </svg>
                            <div>
                                <p>
                                    ID
                                </p>
                                <span>
                                    {currentLevel?.firstThreeRefferrals[2] || 0}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-content__other">
                        <div className="other-stats">
                            <div>
                                Partners
                                <div>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 24.5775C4 21.9079 5.9398 19.634 8.57605 19.2133L8.81351 19.1754C10.9245 18.8385 13.0755 18.8385 15.1865 19.1754L15.424 19.2133C18.0602 19.634 20 21.9079 20 24.5775C20 25.7314 19.0646 26.6668 17.9107 26.6668H6.08929C4.93541 26.6668 4 25.7314 4 24.5775Z" stroke="white" strokeWidth="2" />
                                        <path d="M16.6667 10.0002C16.6667 12.5775 14.5773 14.6668 12 14.6668C9.42267 14.6668 7.33333 12.5775 7.33333 10.0002C7.33333 7.42283 9.42267 5.3335 12 5.3335C14.5773 5.3335 16.6667 7.42283 16.6667 10.0002Z" stroke="white" strokeWidth="2" />
                                        <path d="M20 14.6668C22.5773 14.6668 24.6667 12.5775 24.6667 10.0002C24.6667 7.42283 22.5773 5.3335 20 5.3335M23.1865 26.6668H25.9107C27.0646 26.6668 28 25.7314 28 24.5775C28 21.9079 26.0602 19.634 23.424 19.2133V19.2133C23.2659 19.188 23.1058 19.1754 22.9457 19.1754C22.5194 19.1754 22.387 19.1754 21.6549 19.1754" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    {currentLevel?.partnersCount || 0}
                                </div>
                            </div>
                            <div>
                                Cycles
                                <div>
                                    <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.7433 9.39955H23.337C22.7444 4.30692 18.3247 0.21875 13.0011 0.21875C10.058 0.21875 7.38612 1.50446 5.53791 3.51339C5.04572 3.99554 5.06581 4.63839 5.4676 5.01004C5.87943 5.39174 6.47206 5.39174 6.97429 4.92969C8.47095 3.3125 10.6205 2.29799 13.0011 2.29799C17.2399 2.29799 20.6651 5.40179 21.2377 9.39955H19.7009C18.9274 9.39955 18.7165 9.9721 19.1685 10.5949L21.5692 13.99C21.9408 14.4922 22.5033 14.5022 22.8649 13.99L25.2756 10.6049C25.7276 9.9721 25.5267 9.39955 24.7433 9.39955ZM1.25889 11.8203H2.67519C3.26782 16.9129 7.68746 21.0011 13.0011 21.0011C15.9642 21.0011 18.6361 19.7054 20.4843 17.6964C20.9665 17.2143 20.9464 16.5714 20.5446 16.1998C20.1328 15.8181 19.5502 15.8181 19.0379 16.2902C17.5613 17.9074 15.4118 18.9219 13.0011 18.9219C8.77228 18.9219 5.34706 15.8181 4.77452 11.8203H6.3013C7.0647 11.8203 7.28568 11.2478 6.83367 10.625L4.42295 7.22991C4.06135 6.72768 3.49885 6.71763 3.13724 7.22991L0.726526 10.615C0.264473 11.2478 0.47541 11.8203 1.25889 11.8203Z" fill="white" />
                                    </svg>
                                    {currentLevel?.reinvestCount || 0}
                                </div>
                            </div>
                        </div>
                        <div className="other-revenue">
                            <div>
                                Total revenue
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 12.9869L3.2615 9.72512L6.52301 12.9869L3.2615 16.2486L0 12.9869ZM4.90993 8.07794L12.9871 0L16.2486 3.26173L8.17098 11.3394L4.90993 8.07794ZM4.87526 17.8629L17.8632 4.87401L21.1247 8.13574L8.13653 21.1244L4.87526 17.8629ZM9.75051 22.7385L22.7385 9.7496L26 13.0113L13.0118 26L9.75051 22.7385Z" fill="white" />
                                    </svg>
                                    {(currentLevel?.earned / 1e18).toLocaleString() || 0} BUSD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="level__pagination">
            <ReactPaginate
                breakLabel="..."
                containerClassName="pagination"
                nextLabel="Next >"
                onPageChange={handlePageClick}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                pageCount={12}
                previousLabel="< Previous"
                renderOnZeroPageCount={null}
            />
        </div>

        {/* <div className="levels__transactions">
            <Stats levels={true} />
        </div> */}
    </div>
}

export default Level;