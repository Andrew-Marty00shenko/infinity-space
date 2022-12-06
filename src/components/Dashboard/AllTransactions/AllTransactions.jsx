import "./AllTransactions.scss";

const AllTransactions = () => {
    return <div className="all-transactions">
        <h2>
            Latest transactions

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.28718 1.17962C10.7293 0.606792 13.2707 0.606792 15.7128 1.17962C19.2395 2.00687 21.9931 4.76052 22.8204 8.28719C23.3932 10.7293 23.3932 13.2707 22.8204 15.7128C21.9931 19.2395 19.2395 21.9931 15.7128 22.8204C13.2707 23.3932 10.7293 23.3932 8.28719 22.8204C4.76052 21.9931 2.00687 19.2395 1.17962 15.7128C0.606792 13.2707 0.606792 10.7293 1.17962 8.28718C2.00687 4.76051 4.76052 2.00687 8.28718 1.17962ZM12 9.60675C12.6608 9.60675 13.1966 9.07101 13.1966 8.41014C13.1966 7.74928 12.6608 7.21354 12 7.21354C11.3391 7.21354 10.8034 7.74928 10.8034 8.41014C10.8034 9.07101 11.3391 9.60675 12 9.60675ZM12 10.5042C12.4956 10.5042 12.8974 10.906 12.8974 11.4017V16.1881C12.8974 16.6837 12.4956 17.0855 12 17.0855C11.5043 17.0855 11.1025 16.6837 11.1025 16.1881V11.4017C11.1025 10.906 11.5043 10.5042 12 10.5042Z" fill="#AFC6FF" />
            </svg>
        </h2>

        <div className="all-transactions__info">
            <ul className="info-list-transactions">
                <li>
                    <div className="transaction-info">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="44" rx="22" fill="#39EB8B" fill-opacity="0.08" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8072 18.9848H30.3332C30.3332 16.1538 28.6369 14.5 25.7628 14.5H18.2369C15.3628 14.5 13.6665 16.1538 13.6665 18.9487V25.0513C13.6665 27.8462 15.3628 29.5 18.2369 29.5H25.7628C28.6369 29.5 30.3332 27.8462 30.3332 25.0513V24.7913H26.8072C25.1708 24.7913 23.8443 23.4979 23.8443 21.9025C23.8443 20.3071 25.1708 19.0137 26.8072 19.0137V18.9848ZM26.8072 20.227H29.7109C30.0546 20.227 30.3332 20.4986 30.3332 20.8337V22.9425C30.3292 23.2759 30.0529 23.5452 29.7109 23.5491H26.8739C26.0455 23.56 25.3211 23.007 25.1332 22.2203C25.0391 21.7319 25.1712 21.228 25.4941 20.8435C25.817 20.4591 26.2976 20.2334 26.8072 20.227ZM26.9332 22.4441H27.2072C27.5591 22.4441 27.8443 22.1661 27.8443 21.8231C27.8443 21.48 27.5591 21.202 27.2072 21.202H26.9332C26.7649 21.2 26.6028 21.2639 26.4832 21.3792C26.3635 21.4945 26.2961 21.6518 26.2961 21.8158C26.2961 22.16 26.5801 22.4402 26.9332 22.4441ZM17.6147 18.9848H22.3184C22.6702 18.9848 22.9554 18.7068 22.9554 18.3637C22.9554 18.0207 22.6702 17.7427 22.3184 17.7427H17.6147C17.2657 17.7426 16.9817 18.0163 16.9776 18.3565C16.9776 18.7007 17.2616 18.9809 17.6147 18.9848Z" fill="#39EB8B" />
                        </svg>
                        <div>
                            <p>ID 471310</p>
                            <p>+ 20 BUSD in level 1</p>
                        </div>
                    </div>
                    <div className="transaction-links">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 7.00001L19 1.00001M19 1.00001H13M19 1.00001L10 10M8 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V12" stroke="#717275" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>
                            1 minute ago
                        </span>
                    </div>
                </li>
                <li>
                    <div className="transaction-info">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="44" rx="22" fill="#B094FF" fill-opacity="0.08" />
                            <path d="M13 27.8333C13 31.2646 14.5885 32 22 32C29.4115 32 31 31.2646 31 27.8333C31 24.4021 29.4115 23.6667 22 23.6667C14.5885 23.6667 13 24.4021 13 27.8333Z" fill="#7B4CFF" />
                            <path d="M17.0909 17C17.0909 19.7614 19.2888 22 22 22C24.7112 22 26.9091 19.7614 26.9091 17C26.9091 14.2386 24.7112 12 22 12C19.2888 12 17.0909 14.2386 17.0909 17Z" fill="#7B4CFF" />
                        </svg>
                        <div>
                            <p>ID 471310</p>
                            <p>new user joined</p>
                        </div>
                    </div>
                    <div className="transaction-links">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 7.00001L19 1.00001M19 1.00001H13M19 1.00001L10 10M8 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V12" stroke="#717275" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>
                            1 minute ago
                        </span>
                    </div>
                </li>
                <li>
                    <div className="transaction-info">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="44" rx="22" fill="#FFB09E" fill-opacity="0.08" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8072 18.9848H30.3332C30.3332 16.1538 28.6369 14.5 25.7628 14.5H18.2369C15.3628 14.5 13.6665 16.1538 13.6665 18.9487V25.0513C13.6665 27.8462 15.3628 29.5 18.2369 29.5H25.7628C28.6369 29.5 30.3332 27.8462 30.3332 25.0513V24.7913H26.8072C25.1708 24.7913 23.8443 23.4979 23.8443 21.9025C23.8443 20.3071 25.1708 19.0137 26.8072 19.0137V18.9848ZM26.8072 20.227H29.7109C30.0546 20.227 30.3332 20.4986 30.3332 20.8337V22.9425C30.3292 23.2759 30.0529 23.5452 29.7109 23.5491H26.8739C26.0455 23.56 25.3211 23.007 25.1332 22.2203C25.0391 21.7319 25.1712 21.228 25.4941 20.8435C25.817 20.4591 26.2976 20.2334 26.8072 20.227ZM26.9332 22.4441H27.2072C27.5591 22.4441 27.8443 22.1661 27.8443 21.8231C27.8443 21.48 27.5591 21.202 27.2072 21.202H26.9332C26.7649 21.2 26.6028 21.2639 26.4832 21.3792C26.3635 21.4945 26.2961 21.6518 26.2961 21.8158C26.2961 22.16 26.5801 22.4402 26.9332 22.4441ZM17.6147 18.9848H22.3184C22.6702 18.9848 22.9554 18.7068 22.9554 18.3637C22.9554 18.0207 22.6702 17.7427 22.3184 17.7427H17.6147C17.2657 17.7426 16.9817 18.0163 16.9776 18.3565C16.9776 18.7007 17.2616 18.9809 17.6147 18.9848Z" fill="#F34D28" />
                        </svg>
                        <div>
                            <p>ID 471310</p>
                            <p>- 20 BUSD in level 1</p>
                        </div>
                    </div>
                    <div className="transaction-links">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 7.00001L19 1.00001M19 1.00001H13M19 1.00001L10 10M8 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V12" stroke="#717275" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>
                            1 minute ago
                        </span>
                    </div>
                </li>
                <li>
                    <button>
                        Load more
                    </button>
                </li>

            </ul>
            <div className="info-list-total">
                <div className="total-users">
                    <p>
                        Users total
                    </p>
                    <div>
                        836 638
                        <span>
                            + 392
                        </span>
                    </div>
                </div>
                <div className="total-reached">
                    <p>
                        Users have earned, BUSD
                    </p>
                    <div>
                        76 244 333.46
                        <span>
                            171 773.7
                        </span>
                    </div>
                </div>
                <div className="total-info">
                    <p>
                        Infinity Space Contract Adress
                    </p>
                    <p>
                        0x2CA...e52
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.6665 13.3334V15.6667C6.6665 16.6001 6.6665 17.0668 6.84816 17.4233C7.00795 17.7369 7.26292 17.9919 7.57652 18.1517C7.93304 18.3334 8.39975 18.3334 9.33317 18.3334H15.6665C16.5999 18.3334 17.0666 18.3334 17.4232 18.1517C17.7368 17.9919 17.9917 17.7369 18.1515 17.4233C18.3332 17.0668 18.3332 16.6001 18.3332 15.6667V9.33335C18.3332 8.39993 18.3332 7.93322 18.1515 7.5767C17.9917 7.2631 17.7368 7.00813 17.4232 6.84834C17.0666 6.66669 16.5999 6.66669 15.6665 6.66669H13.3332M4.33317 13.3334H10.6665C11.5999 13.3334 12.0666 13.3334 12.4232 13.1517C12.7368 12.9919 12.9917 12.7369 13.1515 12.4233C13.3332 12.0668 13.3332 11.6001 13.3332 10.6667V4.33335C13.3332 3.39993 13.3332 2.93322 13.1515 2.5767C12.9917 2.2631 12.7368 2.00813 12.4232 1.84834C12.0666 1.66669 11.5999 1.66669 10.6665 1.66669H4.33317C3.39975 1.66669 2.93304 1.66669 2.57652 1.84834C2.26292 2.00813 2.00795 2.2631 1.84816 2.5767C1.6665 2.93322 1.6665 3.39993 1.6665 4.33335V10.6667C1.6665 11.6001 1.6665 12.0668 1.84816 12.4233C2.00795 12.7369 2.26292 12.9919 2.57652 13.1517C2.93304 13.3334 3.39975 13.3334 4.33317 13.3334Z" stroke="#AFC6FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.3335 10.8333C8.69138 11.3118 9.14796 11.7077 9.67229 11.9941C10.1966 12.2806 10.7764 12.4509 11.3724 12.4936C11.9683 12.5363 12.5665 12.4503 13.1263 12.2415C13.6861 12.0327 14.1944 11.7059 14.6168 11.2833L17.1168 8.78334C17.8758 7.9975 18.2958 6.94499 18.2863 5.85251C18.2768 4.76002 17.8386 3.71497 17.0661 2.94243C16.2935 2.1699 15.2485 1.7317 14.156 1.7222C13.0635 1.71271 12.011 2.13269 11.2252 2.89168L9.79183 4.31668M11.6668 9.16668C11.309 8.68824 10.8524 8.29236 10.328 8.00589C9.80371 7.71943 9.22391 7.54908 8.62796 7.5064C8.032 7.46372 7.43384 7.54971 6.87405 7.75853C6.31425 7.96735 5.8059 8.29412 5.3835 8.71668L2.8835 11.2167C2.12451 12.0025 1.70453 13.055 1.71402 14.1475C1.72352 15.24 2.16172 16.2851 2.93426 17.0576C3.70679 17.8301 4.75184 18.2683 5.84433 18.2778C6.93681 18.2873 7.98932 17.8673 8.77517 17.1083L10.2002 15.6833" stroke="#AFC6FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </p>
                    <div>
                        Transactions total
                        <div>
                            3 144 393
                            <span>
                                171 773.7
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AllTransactions;