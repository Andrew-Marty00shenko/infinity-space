import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import apiTotalInfo from "../../../api/apiServer/apiTotalInfo";
import { getAllTransactions } from "../../../redux/slices/transactionsSlice";
import { contract } from "../../../utils/contract/contract";

import "./AllTransactions.scss";

const AllTransactions = () => {
    const user = useSelector(state => state.user.user);

    const [results, setResults] = useState(null);
    const [totals, setTotals] = useState(null);
    const [skip, setSkip] = useState(0);
    const limit = 10;

    const transactions = useSelector(state => state.transactions.transactions);
    const total = useSelector(state => state.transactions.total);
    const dispatch = useDispatch();

    useEffect(() => {
        contract.methods
            .getGlobals()
            .call()
            .then(res => {
                setResults({
                    totalUsers: res[0],
                    totalProfit: res[1]
                });
            });
    }, []);

    useEffect(() => {
        apiTotalInfo.getTotals()
            .then(({ data }) => {
                setTotals({
                    joinedAtLatestDay: data.joinedAtLatestDay,
                    profitAtLatestDay: data.profitAtLatestDay,
                    transactionsAtLatestDay: data.transactionsAtLatestDay,
                });
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (user !== null) {
            dispatch(getAllTransactions({ skip, limit }));
        }
    }, [user]);

    const handleLoadMore = () => {
        setSkip(skip + 10);
        dispatch(getAllTransactions({ skip: skip + 10, limit }));
    };

    return <div className="all-transactions">
        <h2>
            Latest transactions
        </h2>

        <div className="all-transactions__info">
            <ul className="info-list-transactions">
                {transactions.length > 0 && transactions.map((transaction, index) => {

                    function addZero(i) {
                        if (i < 10) { i = "0" + i }
                        return i;
                    };

                    let timeStamp = Number(transaction.created_at);
                    let dateFormat = new Date(timeStamp * 1000);
                    let registerDate = addZero(dateFormat.getDate()) +
                        "." + addZero((dateFormat.getMonth() + 1)) +
                        "." + addZero(dateFormat.getFullYear()) +
                        ' ' + addZero(dateFormat.getHours()) +
                        ':' + addZero(dateFormat.getMinutes());

                    return <li key={index}>
                        <div className="transaction-info">
                            {transaction.tx_type === 'profit'
                                ? <>
                                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="44" height="44" rx="22" fill="#39EB8B" fillOpacity="0.08" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M26.8072 18.9848H30.3332C30.3332 16.1538 28.6369 14.5 25.7628 14.5H18.2369C15.3628 14.5 13.6665 16.1538 13.6665 18.9487V25.0513C13.6665 27.8462 15.3628 29.5 18.2369 29.5H25.7628C28.6369 29.5 30.3332 27.8462 30.3332 25.0513V24.7913H26.8072C25.1708 24.7913 23.8443 23.4979 23.8443 21.9025C23.8443 20.3071 25.1708 19.0137 26.8072 19.0137V18.9848ZM26.8072 20.227H29.7109C30.0546 20.227 30.3332 20.4986 30.3332 20.8337V22.9425C30.3292 23.2759 30.0529 23.5452 29.7109 23.5491H26.8739C26.0455 23.56 25.3211 23.007 25.1332 22.2203C25.0391 21.7319 25.1712 21.228 25.4941 20.8435C25.817 20.4591 26.2976 20.2334 26.8072 20.227ZM26.9332 22.4441H27.2072C27.5591 22.4441 27.8443 22.1661 27.8443 21.8231C27.8443 21.48 27.5591 21.202 27.2072 21.202H26.9332C26.7649 21.2 26.6028 21.2639 26.4832 21.3792C26.3635 21.4945 26.2961 21.6518 26.2961 21.8158C26.2961 22.16 26.5801 22.4402 26.9332 22.4441ZM17.6147 18.9848H22.3184C22.6702 18.9848 22.9554 18.7068 22.9554 18.3637C22.9554 18.0207 22.6702 17.7427 22.3184 17.7427H17.6147C17.2657 17.7426 16.9817 18.0163 16.9776 18.3565C16.9776 18.7007 17.2616 18.9809 17.6147 18.9848Z" fill="#39EB8B" />
                                    </svg>
                                    <div>
                                        <p>ID {transaction.user_id}</p>
                                        <p>{transaction.amount === 0 ? ' ' : '+'}
                                            {transaction.amount / 1e18} BUSD in level {transaction.level} {(transaction.level === 1 && transaction.tx_type === 'payment') && '(Registration)'}  </p>
                                    </div>
                                </> : transaction.tx_type === 'reinvest'
                                    ? <>
                                        <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.650391" width="47.1579" height="44" rx="22" fill="#39EB8B" fillOpacity="0.08" />
                                            <path d="M33.6679 20.7997H32.5376C32.0612 16.9802 28.5085 13.9141 24.2292 13.9141C21.8635 13.9141 19.7158 14.8783 18.2301 16.385C17.8345 16.7467 17.8507 17.2288 18.1736 17.5075C18.5047 17.7938 18.981 17.7938 19.3847 17.4473C20.5878 16.2344 22.3157 15.4735 24.2292 15.4735C27.6365 15.4735 30.3898 17.8013 30.8501 20.7997H29.6147C28.993 20.7997 28.8234 21.2291 29.1868 21.6961L31.1165 24.2425C31.4152 24.6191 31.8674 24.6267 32.1581 24.2425L34.0959 21.7037C34.4592 21.2291 34.2977 20.7997 33.6679 20.7997ZM14.7905 22.6152H15.929C16.4054 26.4347 19.958 29.5008 24.2292 29.5008C26.6111 29.5008 28.7588 28.529 30.2445 27.0223C30.6321 26.6607 30.6159 26.1786 30.2929 25.8998C29.9619 25.6136 29.4936 25.6136 29.0818 25.9676C27.8949 27.1805 26.167 27.9414 24.2292 27.9414C20.83 27.9414 18.0767 25.6136 17.6165 22.6152H18.8438C19.4574 22.6152 19.635 22.1858 19.2717 21.7188L17.3339 19.1724C17.0432 18.7958 16.5911 18.7882 16.3004 19.1724L14.3626 21.7112C13.9912 22.1858 14.1608 22.6152 14.7905 22.6152Z" fill="#39EB8B" />
                                        </svg>
                                        <div>
                                            <p>ID {transaction.user_id}</p>
                                            <p>Reinvest </p>
                                        </div>
                                    </>
                                    : transaction.tx_type === 'payment' && transaction.level === 1
                                        ? <>
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="44" height="44" rx="22" fill="#B094FF" fillOpacity="0.08" />
                                                <path d="M13 27.8333C13 31.2646 14.5885 32 22 32C29.4115 32 31 31.2646 31 27.8333C31 24.4021 29.4115 23.6667 22 23.6667C14.5885 23.6667 13 24.4021 13 27.8333Z" fill="#7B4CFF" />
                                                <path d="M17.0909 17C17.0909 19.7614 19.2888 22 22 22C24.7112 22 26.9091 19.7614 26.9091 17C26.9091 14.2386 24.7112 12 22 12C19.2888 12 17.0909 14.2386 17.0909 17Z" fill="#7B4CFF" />
                                            </svg>
                                            <div>
                                                <p>ID {transaction.user_id}</p>
                                                <p>{transaction.amount === 0 ? ' ' : '+'}
                                                    {transaction.amount / 1e18} BUSD in level {transaction.level} {(transaction.level === 1 && transaction.tx_type === 'payment') && '(Registration)'}  </p>
                                            </div>
                                        </>
                                        : transaction.tx_type === 'payment' && transaction.level !== 1
                                            ? <>
                                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="44" height="44" rx="22" fill="#39EB8B" fillOpacity="0.08" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M26.8072 18.9848H30.3332C30.3332 16.1538 28.6369 14.5 25.7628 14.5H18.2369C15.3628 14.5 13.6665 16.1538 13.6665 18.9487V25.0513C13.6665 27.8462 15.3628 29.5 18.2369 29.5H25.7628C28.6369 29.5 30.3332 27.8462 30.3332 25.0513V24.7913H26.8072C25.1708 24.7913 23.8443 23.4979 23.8443 21.9025C23.8443 20.3071 25.1708 19.0137 26.8072 19.0137V18.9848ZM26.8072 20.227H29.7109C30.0546 20.227 30.3332 20.4986 30.3332 20.8337V22.9425C30.3292 23.2759 30.0529 23.5452 29.7109 23.5491H26.8739C26.0455 23.56 25.3211 23.007 25.1332 22.2203C25.0391 21.7319 25.1712 21.228 25.4941 20.8435C25.817 20.4591 26.2976 20.2334 26.8072 20.227ZM26.9332 22.4441H27.2072C27.5591 22.4441 27.8443 22.1661 27.8443 21.8231C27.8443 21.48 27.5591 21.202 27.2072 21.202H26.9332C26.7649 21.2 26.6028 21.2639 26.4832 21.3792C26.3635 21.4945 26.2961 21.6518 26.2961 21.8158C26.2961 22.16 26.5801 22.4402 26.9332 22.4441ZM17.6147 18.9848H22.3184C22.6702 18.9848 22.9554 18.7068 22.9554 18.3637C22.9554 18.0207 22.6702 17.7427 22.3184 17.7427H17.6147C17.2657 17.7426 16.9817 18.0163 16.9776 18.3565C16.9776 18.7007 17.2616 18.9809 17.6147 18.9848Z" fill="#39EB8B" />
                                                </svg>
                                                <div>
                                                    <p>ID {transaction.user_id}</p>
                                                    <p>{transaction.amount === 0 ? ' ' : '+'}
                                                        {transaction.amount / 1e18} BUSD in level {transaction.level} {(transaction.level === 1 && transaction.tx_type === 'payment') && '(Registration)'}  </p>
                                                </div>
                                            </>
                                            : <>
                                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="44" height="44" rx="22" fill="#FFB09E" fillOpacity="0.08" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M26.8072 18.9848H30.3332C30.3332 16.1538 28.6369 14.5 25.7628 14.5H18.2369C15.3628 14.5 13.6665 16.1538 13.6665 18.9487V25.0513C13.6665 27.8462 15.3628 29.5 18.2369 29.5H25.7628C28.6369 29.5 30.3332 27.8462 30.3332 25.0513V24.7913H26.8072C25.1708 24.7913 23.8443 23.4979 23.8443 21.9025C23.8443 20.3071 25.1708 19.0137 26.8072 19.0137V18.9848ZM26.8072 20.227H29.7109C30.0546 20.227 30.3332 20.4986 30.3332 20.8337V22.9425C30.3292 23.2759 30.0529 23.5452 29.7109 23.5491H26.8739C26.0455 23.56 25.3211 23.007 25.1332 22.2203C25.0391 21.7319 25.1712 21.228 25.4941 20.8435C25.817 20.4591 26.2976 20.2334 26.8072 20.227ZM26.9332 22.4441H27.2072C27.5591 22.4441 27.8443 22.1661 27.8443 21.8231C27.8443 21.48 27.5591 21.202 27.2072 21.202H26.9332C26.7649 21.2 26.6028 21.2639 26.4832 21.3792C26.3635 21.4945 26.2961 21.6518 26.2961 21.8158C26.2961 22.16 26.5801 22.4402 26.9332 22.4441ZM17.6147 18.9848H22.3184C22.6702 18.9848 22.9554 18.7068 22.9554 18.3637C22.9554 18.0207 22.6702 17.7427 22.3184 17.7427H17.6147C17.2657 17.7426 16.9817 18.0163 16.9776 18.3565C16.9776 18.7007 17.2616 18.9809 17.6147 18.9848Z" fill="#F34D28" />
                                                </svg>
                                                <div>
                                                    <p>ID {transaction.user_id}</p>
                                                    <p>- {transaction.amount / 1e18} BUSD in level {transaction.level}</p>
                                                </div>
                                            </>
                            }
                        </div>
                        <div className="transaction-links">
                            <a
                                href={`https://bscscan.com/tx/${transaction.tx_hash}`}
                                target="_blank"
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 7.00001L19 1.00001M19 1.00001H13M19 1.00001L10 10M8 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V12" stroke="#717275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            {/* <span>
                                {registerDate}
                            </span> */}
                        </div>
                    </li>
                })}
                <li>
                    {total !== transactions?.length && <button onClick={handleLoadMore}>
                        Load more
                    </button>}
                </li>

            </ul>
            <div className="info-list-total">
                <div className="total-users">
                    <p>
                        Users total
                    </p>
                    <div>
                        {results?.totalUsers || 0}
                        <span>
                            {/* + {totals?.joinedAtLatestDay || 0} */}
                        </span>
                    </div>
                </div>
                <div className="total-reached">
                    <p>
                        Users have earned, BUSD
                    </p>
                    <div>
                        {(results?.totalProfit / 1e18).toLocaleString() || 0}
                        <span>
                            {/* + {(totals?.profitAtLatestDay / 1e18).toLocaleString() || 0} */}
                        </span>
                    </div>
                </div>
                <div className="total-info">
                    <p>
                        Infinity Space Contract Adress
                    </p>
                    <p>
                        0xB1Bc...0dbf
                        <span>
                            <CopyToClipboard text={'0xB1Bc72552418418a2e0D098D00E6C72e674E0dbf'} onCopy={() => toast.success("Address copied")}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_106_3870)">
                                        <path d="M6 12V14.1C6 14.9401 6 15.3601 6.16349 15.681C6.3073 15.9632 6.53677 16.1927 6.81901 16.3365C7.13988 16.5 7.55992 16.5 8.4 16.5H14.1C14.9401 16.5 15.3601 16.5 15.681 16.3365C15.9632 16.1927 16.1927 15.9632 16.3365 15.681C16.5 15.3601 16.5 14.9401 16.5 14.1V8.4C16.5 7.55992 16.5 7.13988 16.3365 6.81901C16.1927 6.53677 15.9632 6.3073 15.681 6.16349C15.3601 6 14.9401 6 14.1 6H12M3.9 12H9.6C10.4401 12 10.8601 12 11.181 11.8365C11.4632 11.6927 11.6927 11.4632 11.8365 11.181C12 10.8601 12 10.4401 12 9.6V3.9C12 3.05992 12 2.63988 11.8365 2.31901C11.6927 2.03677 11.4632 1.8073 11.181 1.66349C10.8601 1.5 10.4401 1.5 9.6 1.5H3.9C3.05992 1.5 2.63988 1.5 2.31901 1.66349C2.03677 1.8073 1.8073 2.03677 1.66349 2.31901C1.5 2.63988 1.5 3.05992 1.5 3.9V9.6C1.5 10.4401 1.5 10.8601 1.66349 11.181C1.8073 11.4632 2.03677 11.6927 2.31901 11.8365C2.63988 12 3.05992 12 3.9 12Z" stroke="#AFC6FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_106_3870">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </CopyToClipboard>
                            <a href="https://bscscan.com/address/0xB1Bc72552418418a2e0D098D00E6C72e674E0dbf" target="_blank">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.3335 10.8333C8.69138 11.3118 9.14796 11.7077 9.67229 11.9941C10.1966 12.2806 10.7764 12.4509 11.3724 12.4936C11.9683 12.5363 12.5665 12.4503 13.1263 12.2415C13.6861 12.0327 14.1944 11.7059 14.6168 11.2833L17.1168 8.78334C17.8758 7.9975 18.2958 6.94499 18.2863 5.85251C18.2768 4.76002 17.8386 3.71497 17.0661 2.94243C16.2935 2.1699 15.2485 1.7317 14.156 1.7222C13.0635 1.71271 12.011 2.13269 11.2252 2.89168L9.79183 4.31668M11.6668 9.16668C11.309 8.68824 10.8524 8.29236 10.328 8.00589C9.80371 7.71943 9.22391 7.54908 8.62796 7.5064C8.032 7.46372 7.43384 7.54971 6.87405 7.75853C6.31425 7.96735 5.8059 8.29412 5.3835 8.71668L2.8835 11.2167C2.12451 12.0025 1.70453 13.055 1.71402 14.1475C1.72352 15.24 2.16172 16.2851 2.93426 17.0576C3.70679 17.8301 4.75184 18.2683 5.84433 18.2778C6.93681 18.2873 7.98932 17.8673 8.77517 17.1083L10.2002 15.6833" stroke="#AFC6FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </span>
                    </p>
                    <div>
                        Transactions total
                        <div>
                            {total || 0}
                            <span>
                                {/* + {totals?.transactionsAtLatestDay || 0} */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AllTransactions;