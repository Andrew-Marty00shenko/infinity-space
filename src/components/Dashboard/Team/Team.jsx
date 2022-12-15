import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { contract } from "../../../utils/contract/contract";

import Preloader from "../../Common/Preloader";

import "./Team.scss";

const Team = () => {
    const user = useSelector((state) => state.user.user);
    const [loading, setLoading] = useState(true);
    const [partners, setPartners] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        contract.methods[
            'getPartnersById(uint256,uint256,uint256)'
        ](user.id, skip, limit)
            .call()
            .then(res => {
                setTotal(Number(res[0]));
                setPartners(res[1]);
                setLoading(false);
            });
    }, []);

    const handleLoadMore = () => {
        setSkip(skip + 10);
        contract.methods[
            'getPartnersById(uint256,uint256,uint256)'
        ](user.id, skip + 10, limit)
            .call()
            .then(res => setPartners(partners.concat(res[1])));
    };

    if (loading) {
        return <Preloader team={true} />
    }

    return <div className="team">
        <div className="team__header">
            <h2>
                Partners
            </h2>
            <div>
                ID {user.id}
            </div>
        </div>
        {partners?.length !== 0 && (
            <>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Address</th>
                            <th>ID</th>
                            <th>Profit</th>
                            <th>Partners</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partners.length > 0 && partners.map((partner, index) => {
                            function addZero(i) {
                                if (i < 10) { i = "0" + i }
                                return i;
                            };

                            let timeStamp = Number(partner.regDate);
                            let dateFormat = new Date(timeStamp * 1000);
                            let registerDate = addZero(dateFormat.getDate()) +
                                "." + addZero((dateFormat.getMonth() + 1)) +
                                "." + addZero(dateFormat.getFullYear()) +
                                ' ' + addZero(dateFormat.getHours()) +
                                ':' + addZero(dateFormat.getMinutes());

                            const slicedAddressWallet = partner.wallet?.substring(0, 5)
                                + "..."
                                + partner.wallet?.substring(
                                    partner.wallet.length - 5,
                                    partner.wallet.length
                                );

                            return <tr key={index}>
                                <td>{registerDate}</td>
                                <td>
                                    {slicedAddressWallet}
                                    <CopyToClipboard text={partner.wallet} onCopy={() => toast.success("Address copied")}>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_106_1852)">
                                                <path d="M6 12V14.1C6 14.9401 6 15.3601 6.16349 15.681C6.3073 15.9632 6.53677 16.1927 6.81901 16.3365C7.13988 16.5 7.55992 16.5 8.4 16.5H14.1C14.9401 16.5 15.3601 16.5 15.681 16.3365C15.9632 16.1927 16.1927 15.9632 16.3365 15.681C16.5 15.3601 16.5 14.9401 16.5 14.1V8.4C16.5 7.55992 16.5 7.13988 16.3365 6.81901C16.1927 6.53677 15.9632 6.3073 15.681 6.16349C15.3601 6 14.9401 6 14.1 6H12M3.9 12H9.6C10.4401 12 10.8601 12 11.181 11.8365C11.4632 11.6927 11.6927 11.4632 11.8365 11.181C12 10.8601 12 10.4401 12 9.6V3.9C12 3.05992 12 2.63988 11.8365 2.31901C11.6927 2.03677 11.4632 1.8073 11.181 1.66349C10.8601 1.5 10.4401 1.5 9.6 1.5H3.9C3.05992 1.5 2.63988 1.5 2.31901 1.66349C2.03677 1.8073 1.8073 2.03677 1.66349 2.31901C1.5 2.63988 1.5 3.05992 1.5 3.9V9.6C1.5 10.4401 1.5 10.8601 1.66349 11.181C1.8073 11.4632 2.03677 11.6927 2.31901 11.8365C2.63988 12 3.05992 12 3.9 12Z" stroke="#AFC6FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_106_1852">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </CopyToClipboard>
                                    <a
                                        href={`https://testnet.bscscan.com/address/${partner.wallet}`}
                                        target="_blank"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.75 6.75001L15.75 2.25001M15.75 2.25001H11.25M15.75 2.25001L9 9M7.5 2.25H5.85C4.58988 2.25 3.95982 2.25 3.47852 2.49524C3.05516 2.71095 2.71095 3.05516 2.49524 3.47852C2.25 3.95982 2.25 4.58988 2.25 5.85V12.15C2.25 13.4101 2.25 14.0402 2.49524 14.5215C2.71095 14.9448 3.05516 15.289 3.47852 15.5048C3.95982 15.75 4.58988 15.75 5.85 15.75H12.15C13.4101 15.75 14.0402 15.75 14.5215 15.5048C14.9448 15.289 15.289 14.9448 15.5048 14.5215C15.75 14.0402 15.75 13.4101 15.75 12.15V10.5" stroke="#AFC6FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </td>
                                <td>
                                    <div className="partner-id">
                                        ID {partner.partnerId}
                                    </div>
                                </td>
                                <td>
                                    <div className="profit">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="22" height="22" rx="11" fill="#FFED4C" fillOpacity="0.08" />
                                            <path d="M4 10.9929L5.75619 9.23661L7.51239 10.9929L5.75619 12.7492L4 10.9929ZM6.64381 8.34966L10.993 4L12.7492 5.75632L8.39976 10.1059L6.64381 8.34966ZM6.62514 13.6185L13.6187 6.62447L15.3749 8.38078L8.38121 15.3747L6.62514 13.6185ZM9.25027 16.2438L16.2438 9.24979L18 11.0061L11.0063 18L9.25027 16.2438Z" fill="#FFED4C" />
                                        </svg>
                                        {partner.earned} BUSD
                                    </div>
                                </td>
                                <td>
                                    <div className="partners">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="22" height="22" rx="11" fill="white" fillOpacity="0.15" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.0878 8.25311C14.0878 9.96638 12.7142 11.3401 10.9997 11.3401C9.28578 11.3401 7.91152 9.96638 7.91152 8.25311C7.91152 6.53984 9.28578 5.16666 10.9997 5.16666C12.7142 5.16666 14.0878 6.53984 14.0878 8.25311ZM10.9997 16.8333C8.46939 16.8333 6.33301 16.4221 6.33301 14.8354C6.33301 13.2481 8.48281 12.8515 10.9997 12.8515C13.5305 12.8515 15.6663 13.2627 15.6663 14.8494C15.6663 16.4367 13.5165 16.8333 10.9997 16.8333Z" fill="#BFBFC1" />
                                        </svg>
                                        {partner.refCount}
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>
                <div className="team__mobile-transactions">
                    {partners.length > 0 && partners.map((partner, index) => {
                        function addZero(i) {
                            if (i < 10) { i = "0" + i }
                            return i;
                        };

                        let timeStamp = Number(partner.regDate);
                        let dateFormat = new Date(timeStamp * 1000);
                        let registerDate = addZero(dateFormat.getDate()) +
                            "." + addZero((dateFormat.getMonth() + 1)) +
                            "." + addZero(dateFormat.getFullYear());

                        const slicedAddressWallet = partner.wallet?.substring(0, 5)
                            + "..."
                            + partner.wallet?.substring(
                                partner.wallet.length - 5,
                                partner.wallet.length
                            );

                        return <div className="transaction" key={index}>
                            <div className="transaction__top">
                                <div className="hrefs">
                                    <p>
                                        {slicedAddressWallet}
                                    </p>
                                    <CopyToClipboard text={partner.wallet} onCopy={() => toast.success("Address copied")}>
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
                                    <a
                                        href={`https://testnet.bscscan.com/address/${partner.wallet}`}
                                        target="_blank"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.75 6.75001L15.75 2.25001M15.75 2.25001H11.25M15.75 2.25001L9 9M7.5 2.25H5.85C4.58988 2.25 3.95982 2.25 3.47852 2.49524C3.05516 2.71095 2.71095 3.05516 2.49524 3.47852C2.25 3.95982 2.25 4.58988 2.25 5.85V12.15C2.25 13.4101 2.25 14.0402 2.49524 14.5215C2.71095 14.9448 3.05516 15.289 3.47852 15.5048C3.95982 15.75 4.58988 15.75 5.85 15.75H12.15C13.4101 15.75 14.0402 15.75 14.5215 15.5048C14.9448 15.289 15.289 14.9448 15.5048 14.5215C15.75 14.0402 15.75 13.4101 15.75 12.15V10.5" stroke="#AFC6FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="partner-id">
                                    ID {partner.partnerId}
                                </div>
                            </div>
                            <div className="transaction__middle">
                                <div className="profit">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="22" height="22" rx="11" fill="#FFED4C" fillOpacity="0.08" />
                                        <path d="M4 10.9929L5.75619 9.23661L7.51239 10.9929L5.75619 12.7492L4 10.9929ZM6.64381 8.34966L10.993 4L12.7492 5.75632L8.39976 10.1059L6.64381 8.34966ZM6.62514 13.6185L13.6187 6.62447L15.3749 8.38078L8.38121 15.3747L6.62514 13.6185ZM9.25027 16.2438L16.2438 9.24979L18 11.0061L11.0063 18L9.25027 16.2438Z" fill="#FFED4C" />
                                    </svg>
                                    {partner.earned}
                                </div>
                                <div className="partners">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="22" height="22" rx="11" fill="white" fillOpacity="0.15" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.0878 8.25311C14.0878 9.96638 12.7142 11.3401 10.9997 11.3401C9.28578 11.3401 7.91152 9.96638 7.91152 8.25311C7.91152 6.53984 9.28578 5.16666 10.9997 5.16666C12.7142 5.16666 14.0878 6.53984 14.0878 8.25311ZM10.9997 16.8333C8.46939 16.8333 6.33301 16.4221 6.33301 14.8354C6.33301 13.2481 8.48281 12.8515 10.9997 12.8515C13.5305 12.8515 15.6663 13.2627 15.6663 14.8494C15.6663 16.4367 13.5165 16.8333 10.9997 16.8333Z" fill="#BFBFC1" />
                                    </svg>
                                    {partner.refCount}
                                </div>
                                <div className="date">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="22" height="22" rx="11" fill="#39EB8B" fillOpacity="0.08" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.0003 16.8334C7.78033 16.8334 5.16699 14.2259 5.16699 11.0001C5.16699 7.78006 7.78033 5.16673 11.0003 5.16673C14.2262 5.16673 16.8337 7.78006 16.8337 11.0001C16.8337 14.2259 14.2262 16.8334 11.0003 16.8334ZM12.8609 13.1642C12.9309 13.2051 13.0067 13.2284 13.0884 13.2284C13.2342 13.2284 13.3801 13.1526 13.4617 13.0126C13.5842 12.8084 13.5201 12.5401 13.3101 12.4117L11.2334 11.1751V8.48006C11.2334 8.23506 11.0351 8.04256 10.7959 8.04256C10.5567 8.04256 10.3584 8.23506 10.3584 8.48006V11.4259C10.3584 11.5776 10.4401 11.7176 10.5742 11.7992L12.8609 13.1642Z" fill="#39EB8B" />
                                    </svg>
                                    {registerDate}
                                </div>
                            </div>
                            <div className="transaction__bottom">
                                <div className="name">
                                    In-Space
                                </div>
                                <div className="amount">
                                    {partner.earned}
                                </div>
                            </div>
                        </div>
                    })}

                </div>
                {total !== partners.length && <button onClick={handleLoadMore}>
                    Load more
                </button>}
            </>
        )}
    </div >
}

export default Team;