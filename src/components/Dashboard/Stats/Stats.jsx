import classNames from "classnames";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";

import apiTransactions from "../../../api/apiServer/apiTransactions";
import { getUserData } from "../../../redux/slices/userSlice";

import "./Stats.scss";
import { useTranslation } from "react-i18next";

const Stats = ({ levels }) => {
  const { t } = useTranslation();

  const wallet = useSelector((state) => state.user.wallet);
  const [transactions, setTransactions] = useState(null);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const limit = 10;
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(wallet));
  }, []);

  useEffect(() => {
    if (user !== null && user.id !== "0") {
      apiTransactions
        .getUserTransactions(skip, limit, user?.id)
        .then(({ data }) => {
          setTransactions(data.txs);
          setTotal(data.total);
        });
    }
  }, [user]);

  const handleLoadMore = () => {
    setSkip(skip + 10);
    apiTransactions
      .getUserTransactions(skip + 10, limit, user?.id)
      .then(({ data }) => setTransactions(transactions.concat(data.txs)));
  };

  return (
    <div
      className={classNames("stats", {
        "stats--levels": levels,
      })}
    >
      {!levels && (
        <div className="team__header">
          <h2>{t("stats:title")}</h2>
          <div>ID {user?.id}</div>
        </div>
      )}
      {transactions !== null && (
        <>
          <Table responsive>
            <thead>
              <tr>
                <th>{t("stats:type")}</th>
                <th>{t("stats:date")}</th>
                <th>ID</th>
                <th>{t("stats:level")}</th>
                <th>{t("stats:wallet")}</th>
                <th>{t("stats:profit-table")}</th>
              </tr>
            </thead>
            <tbody>
              {transactions !== null &&
                transactions.map((transaction, index) => {
                  function addZero(i) {
                    if (i < 10) {
                      i = "0" + i;
                    }
                    return i;
                  }

                  let timeStamp = Number(transaction.created_at);
                  let dateFormat = new Date(timeStamp * 1000);
                  let registerDate =
                    addZero(dateFormat.getDate()) +
                    "." +
                    addZero(dateFormat.getMonth() + 1) +
                    "." +
                    addZero(dateFormat.getFullYear()) +
                    " " +
                    addZero(dateFormat.getHours()) +
                    ":" +
                    addZero(dateFormat.getMinutes());

                  const slicedAddressWallet =
                    transaction.wallet?.substring(0, 5) +
                    "..." +
                    transaction.wallet?.substring(
                      transaction.wallet.length - 5,
                      transaction.wallet.length
                    );

                  return (
                    <tr key={index}>
                      <td>
                        {transaction.tx_type === "profit" ? (
                          <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="44"
                              height="44"
                              rx="22"
                              fill="#39EB8B"
                              fillOpacity="0.08"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M26.8072 18.9848H30.3332C30.3332 16.1538 28.6369 14.5 25.7628 14.5H18.2369C15.3628 14.5 13.6665 16.1538 13.6665 18.9487V25.0513C13.6665 27.8462 15.3628 29.5 18.2369 29.5H25.7628C28.6369 29.5 30.3332 27.8462 30.3332 25.0513V24.7913H26.8072C25.1708 24.7913 23.8443 23.4979 23.8443 21.9025C23.8443 20.3071 25.1708 19.0137 26.8072 19.0137V18.9848ZM26.8072 20.227H29.7109C30.0546 20.227 30.3332 20.4986 30.3332 20.8337V22.9425C30.3292 23.2759 30.0529 23.5452 29.7109 23.5491H26.8739C26.0455 23.56 25.3211 23.007 25.1332 22.2203C25.0391 21.7319 25.1712 21.228 25.4941 20.8435C25.817 20.4591 26.2976 20.2334 26.8072 20.227ZM26.9332 22.4441H27.2072C27.5591 22.4441 27.8443 22.1661 27.8443 21.8231C27.8443 21.48 27.5591 21.202 27.2072 21.202H26.9332C26.7649 21.2 26.6028 21.2639 26.4832 21.3792C26.3635 21.4945 26.2961 21.6518 26.2961 21.8158C26.2961 22.16 26.5801 22.4402 26.9332 22.4441ZM17.6147 18.9848H22.3184C22.6702 18.9848 22.9554 18.7068 22.9554 18.3637C22.9554 18.0207 22.6702 17.7427 22.3184 17.7427H17.6147C17.2657 17.7426 16.9817 18.0163 16.9776 18.3565C16.9776 18.7007 17.2616 18.9809 17.6147 18.9848Z"
                              fill="#39EB8B"
                            />
                          </svg>
                        ) : transaction.tx_type === "reinvest" ? (
                          <svg
                            width="48"
                            height="44"
                            viewBox="0 0 48 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.650391"
                              width="47.1579"
                              height="44"
                              rx="22"
                              fill="#39EB8B"
                              fillOpacity="0.08"
                            />
                            <path
                              d="M33.6679 20.7997H32.5376C32.0612 16.9802 28.5085 13.9141 24.2292 13.9141C21.8635 13.9141 19.7158 14.8783 18.2301 16.385C17.8345 16.7467 17.8507 17.2288 18.1736 17.5075C18.5047 17.7938 18.981 17.7938 19.3847 17.4473C20.5878 16.2344 22.3157 15.4735 24.2292 15.4735C27.6365 15.4735 30.3898 17.8013 30.8501 20.7997H29.6147C28.993 20.7997 28.8234 21.2291 29.1868 21.6961L31.1165 24.2425C31.4152 24.6191 31.8674 24.6267 32.1581 24.2425L34.0959 21.7037C34.4592 21.2291 34.2977 20.7997 33.6679 20.7997ZM14.7905 22.6152H15.929C16.4054 26.4347 19.958 29.5008 24.2292 29.5008C26.6111 29.5008 28.7588 28.529 30.2445 27.0223C30.6321 26.6607 30.6159 26.1786 30.2929 25.8998C29.9619 25.6136 29.4936 25.6136 29.0818 25.9676C27.8949 27.1805 26.167 27.9414 24.2292 27.9414C20.83 27.9414 18.0767 25.6136 17.6165 22.6152H18.8438C19.4574 22.6152 19.635 22.1858 19.2717 21.7188L17.3339 19.1724C17.0432 18.7958 16.5911 18.7882 16.3004 19.1724L14.3626 21.7112C13.9912 22.1858 14.1608 22.6152 14.7905 22.6152Z"
                              fill="#39EB8B"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="44"
                              height="44"
                              rx="22"
                              fill="#FFB09E"
                              fillOpacity="0.08"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M26.8072 18.9848H30.3332C30.3332 16.1538 28.6369 14.5 25.7628 14.5H18.2369C15.3628 14.5 13.6665 16.1538 13.6665 18.9487V25.0513C13.6665 27.8462 15.3628 29.5 18.2369 29.5H25.7628C28.6369 29.5 30.3332 27.8462 30.3332 25.0513V24.7913H26.8072C25.1708 24.7913 23.8443 23.4979 23.8443 21.9025C23.8443 20.3071 25.1708 19.0137 26.8072 19.0137V18.9848ZM26.8072 20.227H29.7109C30.0546 20.227 30.3332 20.4986 30.3332 20.8337V22.9425C30.3292 23.2759 30.0529 23.5452 29.7109 23.5491H26.8739C26.0455 23.56 25.3211 23.007 25.1332 22.2203C25.0391 21.7319 25.1712 21.228 25.4941 20.8435C25.817 20.4591 26.2976 20.2334 26.8072 20.227ZM26.9332 22.4441H27.2072C27.5591 22.4441 27.8443 22.1661 27.8443 21.8231C27.8443 21.48 27.5591 21.202 27.2072 21.202H26.9332C26.7649 21.2 26.6028 21.2639 26.4832 21.3792C26.3635 21.4945 26.2961 21.6518 26.2961 21.8158C26.2961 22.16 26.5801 22.4402 26.9332 22.4441ZM17.6147 18.9848H22.3184C22.6702 18.9848 22.9554 18.7068 22.9554 18.3637C22.9554 18.0207 22.6702 17.7427 22.3184 17.7427H17.6147C17.2657 17.7426 16.9817 18.0163 16.9776 18.3565C16.9776 18.7007 17.2616 18.9809 17.6147 18.9848Z"
                              fill="#F34D28"
                            />
                          </svg>
                        )}
                      </td>
                      <td>{registerDate}</td>
                      <td>
                        <div className="partner-id">
                          ID {transaction.user_id}
                        </div>
                      </td>
                      <td>{transaction.level}</td>
                      <td>
                        {slicedAddressWallet}
                        <CopyToClipboard
                          text={transaction.wallet}
                          onCopy={() =>
                            toast.success(t("global:address-copied"), {
                              autoClose: 1000,
                            })
                          }
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_106_1852)">
                              <path
                                d="M6 12V14.1C6 14.9401 6 15.3601 6.16349 15.681C6.3073 15.9632 6.53677 16.1927 6.81901 16.3365C7.13988 16.5 7.55992 16.5 8.4 16.5H14.1C14.9401 16.5 15.3601 16.5 15.681 16.3365C15.9632 16.1927 16.1927 15.9632 16.3365 15.681C16.5 15.3601 16.5 14.9401 16.5 14.1V8.4C16.5 7.55992 16.5 7.13988 16.3365 6.81901C16.1927 6.53677 15.9632 6.3073 15.681 6.16349C15.3601 6 14.9401 6 14.1 6H12M3.9 12H9.6C10.4401 12 10.8601 12 11.181 11.8365C11.4632 11.6927 11.6927 11.4632 11.8365 11.181C12 10.8601 12 10.4401 12 9.6V3.9C12 3.05992 12 2.63988 11.8365 2.31901C11.6927 2.03677 11.4632 1.8073 11.181 1.66349C10.8601 1.5 10.4401 1.5 9.6 1.5H3.9C3.05992 1.5 2.63988 1.5 2.31901 1.66349C2.03677 1.8073 1.8073 2.03677 1.66349 2.31901C1.5 2.63988 1.5 3.05992 1.5 3.9V9.6C1.5 10.4401 1.5 10.8601 1.66349 11.181C1.8073 11.4632 2.03677 11.6927 2.31901 11.8365C2.63988 12 3.05992 12 3.9 12Z"
                                stroke="#AFC6FF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_106_1852">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </CopyToClipboard>
                        <a
                          href={`https://bscscan.com/tx/${transaction.tx_hash}`}
                          target="_blank"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.75 6.75001L15.75 2.25001M15.75 2.25001H11.25M15.75 2.25001L9 9M7.5 2.25H5.85C4.58988 2.25 3.95982 2.25 3.47852 2.49524C3.05516 2.71095 2.71095 3.05516 2.49524 3.47852C2.25 3.95982 2.25 4.58988 2.25 5.85V12.15C2.25 13.4101 2.25 14.0402 2.49524 14.5215C2.71095 14.9448 3.05516 15.289 3.47852 15.5048C3.95982 15.75 4.58988 15.75 5.85 15.75H12.15C13.4101 15.75 14.0402 15.75 14.5215 15.5048C14.9448 15.289 15.289 14.9448 15.5048 14.5215C15.75 14.0402 15.75 13.4101 15.75 12.15V10.5"
                              stroke="#AFC6FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </td>
                      <td>
                        {transaction.tx_type === "profit" ? (
                          <div className="profit">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="22"
                                height="22"
                                rx="11"
                                fill="#FFED4C"
                                fillOpacity="0.08"
                              />
                              <path
                                d="M4 10.9929L5.75619 9.23661L7.51239 10.9929L5.75619 12.7492L4 10.9929ZM6.64381 8.34966L10.993 4L12.7492 5.75632L8.39976 10.1059L6.64381 8.34966ZM6.62514 13.6185L13.6187 6.62447L15.3749 8.38078L8.38121 15.3747L6.62514 13.6185ZM9.25027 16.2438L16.2438 9.24979L18 11.0061L11.0063 18L9.25027 16.2438Z"
                                fill="#FFED4C"
                              />
                            </svg>
                            {transaction.amount / 1e18} BUSD
                          </div>
                        ) : transaction.tx_type === "reinvest" ? (
                          <div className="recycle">{t("stats:recycle")}</div>
                        ) : (
                          <div className="missed-profit">
                            {t("stats:send-upline")}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <div className="stats__mobile-transactions">
            {transactions !== null &&
              transactions.map((transaction, index) => {
                function addZero(i) {
                  if (i < 10) {
                    i = "0" + i;
                  }
                  return i;
                }

                let timeStamp = Number(transaction.created_at);
                let dateFormat = new Date(timeStamp * 1000);
                let registerDate =
                  addZero(dateFormat.getDate()) +
                  "." +
                  addZero(dateFormat.getMonth() + 1) +
                  "." +
                  addZero(dateFormat.getFullYear());

                const slicedAddressWallet =
                  transaction.wallet?.substring(0, 5) +
                  "..." +
                  transaction.wallet?.substring(
                    transaction.wallet.length - 5,
                    transaction.wallet.length
                  );

                return (
                  <div className="transaction" key={index}>
                    <div className="transaction__top">
                      <div className="hrefs">
                        <p>{slicedAddressWallet}</p>
                        <CopyToClipboard
                          text={transaction.wallet}
                          onCopy={() =>
                            toast.success(t("global:address-copied"), {
                              autoClose: 1000,
                            })
                          }
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_106_3870)">
                              <path
                                d="M6 12V14.1C6 14.9401 6 15.3601 6.16349 15.681C6.3073 15.9632 6.53677 16.1927 6.81901 16.3365C7.13988 16.5 7.55992 16.5 8.4 16.5H14.1C14.9401 16.5 15.3601 16.5 15.681 16.3365C15.9632 16.1927 16.1927 15.9632 16.3365 15.681C16.5 15.3601 16.5 14.9401 16.5 14.1V8.4C16.5 7.55992 16.5 7.13988 16.3365 6.81901C16.1927 6.53677 15.9632 6.3073 15.681 6.16349C15.3601 6 14.9401 6 14.1 6H12M3.9 12H9.6C10.4401 12 10.8601 12 11.181 11.8365C11.4632 11.6927 11.6927 11.4632 11.8365 11.181C12 10.8601 12 10.4401 12 9.6V3.9C12 3.05992 12 2.63988 11.8365 2.31901C11.6927 2.03677 11.4632 1.8073 11.181 1.66349C10.8601 1.5 10.4401 1.5 9.6 1.5H3.9C3.05992 1.5 2.63988 1.5 2.31901 1.66349C2.03677 1.8073 1.8073 2.03677 1.66349 2.31901C1.5 2.63988 1.5 3.05992 1.5 3.9V9.6C1.5 10.4401 1.5 10.8601 1.66349 11.181C1.8073 11.4632 2.03677 11.6927 2.31901 11.8365C2.63988 12 3.05992 12 3.9 12Z"
                                stroke="#AFC6FF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_106_3870">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </CopyToClipboard>
                        <a
                          href={`https://bscscan.com/tx/${transaction.tx_hash}`}
                          target="_blank"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.75 6.75001L15.75 2.25001M15.75 2.25001H11.25M15.75 2.25001L9 9M7.5 2.25H5.85C4.58988 2.25 3.95982 2.25 3.47852 2.49524C3.05516 2.71095 2.71095 3.05516 2.49524 3.47852C2.25 3.95982 2.25 4.58988 2.25 5.85V12.15C2.25 13.4101 2.25 14.0402 2.49524 14.5215C2.71095 14.9448 3.05516 15.289 3.47852 15.5048C3.95982 15.75 4.58988 15.75 5.85 15.75H12.15C13.4101 15.75 14.0402 15.75 14.5215 15.5048C14.9448 15.289 15.289 14.9448 15.5048 14.5215C15.75 14.0402 15.75 13.4101 15.75 12.15V10.5"
                              stroke="#AFC6FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="partner-id">ID {transaction.user_id}</div>
                    </div>
                    <div className="transaction__middle">
                      <div className="profit">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="22"
                            height="22"
                            rx="11"
                            fill="#FFED4C"
                            fillOpacity="0.08"
                          />
                          <path
                            d="M4 10.9929L5.75619 9.23661L7.51239 10.9929L5.75619 12.7492L4 10.9929ZM6.64381 8.34966L10.993 4L12.7492 5.75632L8.39976 10.1059L6.64381 8.34966ZM6.62514 13.6185L13.6187 6.62447L15.3749 8.38078L8.38121 15.3747L6.62514 13.6185ZM9.25027 16.2438L16.2438 9.24979L18 11.0061L11.0063 18L9.25027 16.2438Z"
                            fill="#FFED4C"
                          />
                        </svg>
                        {transaction.amount / 1e18}
                      </div>
                      <div className="partners">
                        {transaction.tx_type === "profit" ? (
                          <>
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 44 44"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="44"
                                height="44"
                                rx="22"
                                fill="#39EB8B"
                                fillOpacity="0.08"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M26.8072 18.9848H30.3332C30.3332 16.1538 28.6369 14.5 25.7628 14.5H18.2369C15.3628 14.5 13.6665 16.1538 13.6665 18.9487V25.0513C13.6665 27.8462 15.3628 29.5 18.2369 29.5H25.7628C28.6369 29.5 30.3332 27.8462 30.3332 25.0513V24.7913H26.8072C25.1708 24.7913 23.8443 23.4979 23.8443 21.9025C23.8443 20.3071 25.1708 19.0137 26.8072 19.0137V18.9848ZM26.8072 20.227H29.7109C30.0546 20.227 30.3332 20.4986 30.3332 20.8337V22.9425C30.3292 23.2759 30.0529 23.5452 29.7109 23.5491H26.8739C26.0455 23.56 25.3211 23.007 25.1332 22.2203C25.0391 21.7319 25.1712 21.228 25.4941 20.8435C25.817 20.4591 26.2976 20.2334 26.8072 20.227ZM26.9332 22.4441H27.2072C27.5591 22.4441 27.8443 22.1661 27.8443 21.8231C27.8443 21.48 27.5591 21.202 27.2072 21.202H26.9332C26.7649 21.2 26.6028 21.2639 26.4832 21.3792C26.3635 21.4945 26.2961 21.6518 26.2961 21.8158C26.2961 22.16 26.5801 22.4402 26.9332 22.4441ZM17.6147 18.9848H22.3184C22.6702 18.9848 22.9554 18.7068 22.9554 18.3637C22.9554 18.0207 22.6702 17.7427 22.3184 17.7427H17.6147C17.2657 17.7426 16.9817 18.0163 16.9776 18.3565C16.9776 18.7007 17.2616 18.9809 17.6147 18.9848Z"
                                fill="#39EB8B"
                              />
                            </svg>
                            {t("stats:profit")}
                          </>
                        ) : transaction.tx_type === "reinvest" ? (
                          <>
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="22"
                                height="22"
                                rx="11"
                                fill="#39EB8B"
                                fillOpacity="0.08"
                              />
                              <path
                                d="M15.4037 10.3998H14.8764C14.6541 8.49009 12.9968 6.95703 11.0004 6.95703C9.89675 6.95703 8.8948 7.43917 8.20172 8.19252C8.01715 8.37333 8.02468 8.6144 8.17535 8.75377C8.32979 8.8969 8.55202 8.8969 8.74036 8.72363C9.3016 8.11719 10.1077 7.73675 11.0004 7.73675C12.59 7.73675 13.8744 8.90067 14.0891 10.3998H13.5128C13.2228 10.3998 13.1437 10.6145 13.3132 10.8481L14.2134 12.1212C14.3528 12.3096 14.5637 12.3133 14.6993 12.1212L15.6034 10.8518C15.7729 10.6145 15.6975 10.3998 15.4037 10.3998ZM6.59708 11.3076H7.1282C7.35043 13.2174 9.0078 14.7504 11.0004 14.7504C12.1116 14.7504 13.1135 14.2645 13.8066 13.5112C13.9874 13.3304 13.9799 13.0893 13.8292 12.9499C13.6748 12.8068 13.4563 12.8068 13.2642 12.9838C12.7105 13.5903 11.9044 13.9707 11.0004 13.9707C9.41461 13.9707 8.13015 12.8068 7.91544 11.3076H8.48799C8.77426 11.3076 8.85713 11.0929 8.68763 10.8594L7.78361 9.58622C7.64801 9.39788 7.43707 9.39411 7.30147 9.58622L6.39745 10.8556C6.22418 11.0929 6.30328 11.3076 6.59708 11.3076Z"
                                fill="#39EB8B"
                              />
                            </svg>
                            {t("stats:recycle")}
                          </>
                        ) : (
                          <>
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 44 44"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="44"
                                height="44"
                                rx="22"
                                fill="#FFB09E"
                                fillOpacity="0.08"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M26.8072 18.9848H30.3332C30.3332 16.1538 28.6369 14.5 25.7628 14.5H18.2369C15.3628 14.5 13.6665 16.1538 13.6665 18.9487V25.0513C13.6665 27.8462 15.3628 29.5 18.2369 29.5H25.7628C28.6369 29.5 30.3332 27.8462 30.3332 25.0513V24.7913H26.8072C25.1708 24.7913 23.8443 23.4979 23.8443 21.9025C23.8443 20.3071 25.1708 19.0137 26.8072 19.0137V18.9848ZM26.8072 20.227H29.7109C30.0546 20.227 30.3332 20.4986 30.3332 20.8337V22.9425C30.3292 23.2759 30.0529 23.5452 29.7109 23.5491H26.8739C26.0455 23.56 25.3211 23.007 25.1332 22.2203C25.0391 21.7319 25.1712 21.228 25.4941 20.8435C25.817 20.4591 26.2976 20.2334 26.8072 20.227ZM26.9332 22.4441H27.2072C27.5591 22.4441 27.8443 22.1661 27.8443 21.8231C27.8443 21.48 27.5591 21.202 27.2072 21.202H26.9332C26.7649 21.2 26.6028 21.2639 26.4832 21.3792C26.3635 21.4945 26.2961 21.6518 26.2961 21.8158C26.2961 22.16 26.5801 22.4402 26.9332 22.4441ZM17.6147 18.9848H22.3184C22.6702 18.9848 22.9554 18.7068 22.9554 18.3637C22.9554 18.0207 22.6702 17.7427 22.3184 17.7427H17.6147C17.2657 17.7426 16.9817 18.0163 16.9776 18.3565C16.9776 18.7007 17.2616 18.9809 17.6147 18.9848Z"
                                fill="#F34D28"
                              />
                            </svg>
                            {t("stats:missed")}
                          </>
                        )}
                      </div>
                      <div className="date">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="22"
                            height="22"
                            rx="11"
                            fill="#39EB8B"
                            fillOpacity="0.08"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0003 16.8334C7.78033 16.8334 5.16699 14.2259 5.16699 11.0001C5.16699 7.78006 7.78033 5.16673 11.0003 5.16673C14.2262 5.16673 16.8337 7.78006 16.8337 11.0001C16.8337 14.2259 14.2262 16.8334 11.0003 16.8334ZM12.8609 13.1642C12.9309 13.2051 13.0067 13.2284 13.0884 13.2284C13.2342 13.2284 13.3801 13.1526 13.4617 13.0126C13.5842 12.8084 13.5201 12.5401 13.3101 12.4117L11.2334 11.1751V8.48006C11.2334 8.23506 11.0351 8.04256 10.7959 8.04256C10.5567 8.04256 10.3584 8.23506 10.3584 8.48006V11.4259C10.3584 11.5776 10.4401 11.7176 10.5742 11.7992L12.8609 13.1642Z"
                            fill="#39EB8B"
                          />
                        </svg>
                        {registerDate}
                      </div>
                    </div>
                    <div className="transaction__bottom">
                      <div className="name">{t("stats:level")}</div>
                      <div className="amount">{transaction.level}</div>
                    </div>
                  </div>
                );
              })}
          </div>
          {total !== transactions?.length && (
            <button onClick={handleLoadMore}>{t("stats:load-more")}</button>
          )}
        </>
      )}
    </div>
  );
};

export default Stats;
