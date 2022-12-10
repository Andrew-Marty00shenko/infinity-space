import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

import apiAdmin from "../../../api/apiServer/apiAdmin";

import "./WhiteList.scss";

const WhiteList = () => {
    const [whiteList, setWhiteList] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(0);
    const [openAddingWalletBlock, setOpenAddingWalletBlock] = useState(false);
    const [addressValue, setAddressValue] = useState('');

    useEffect(() => {
        apiAdmin.getWhitelist(skip, limit)
            .then(({ data }) => {
                setWhiteList(data.data);
                setTotal(data.total);
            });
    }, []);

    const handleAddAddressWhiteList = () => {
        apiAdmin.addAddressWhiteList(Array.of(addressValue))
            .then(({ data }) => {
                if (data.status === 'OK') {
                    toast.success('Successfully added');
                    setWhiteList([addressValue, ...whiteList]);
                    setAddressValue('');
                } else {
                    toast.error('Invalid wallet address');
                }
            })
            .catch(err => toast.error('Invalid wallet address'))
    };

    const handleRemoveAddress = (address) => {
        apiAdmin.removeAddressWhiteList(Array.of(address))
            .then(({ data }) => {
                if (data.status === 'OK') {
                    toast.success('Successfully removed');
                    setWhiteList(whiteList.filter(item => item !== address));
                };
            })
    };

    const handleLoadMore = () => {
        setSkip(skip + 10);
        apiAdmin.getWhitelist(skip + 10, limit)
            .then(({ data }) => {
                setWhiteList([...whiteList, data.data]);
            });
    };

    return <div className="admin-block">
        <div className="admin-block__header">
            <h2>
                White list
            </h2>
            {!openAddingWalletBlock && <button onClick={() => {
                setOpenAddingWalletBlock(true);
            }}>
                Add address
            </button>}
            {openAddingWalletBlock && <button onClick={() => {
                setOpenAddingWalletBlock(false);
            }}>
                Cancel
            </button>}
        </div>

        {openAddingWalletBlock && <div className="admin-block__adding-wallet">
            <input type="text"
                placeholder="Enter the address"
                value={addressValue}
                onChange={e => setAddressValue(e.target.value)}
            />
            <button onClick={handleAddAddressWhiteList}>
                Add
            </button>
        </div>}

        <div className="admin-block__list">
            {whiteList.length > 0
                ? whiteList.map((wallet, index) => {
                    return <li key={index}>
                        {wallet}
                        <svg
                            onClick={() => handleRemoveAddress(wallet)}
                            fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                            <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z" />
                        </svg>
                    </li>
                })
                : 'Add addresses to the list'
            }
        </div>

        {(whiteList.length > 0 && whiteList.length < total) && <div className="admin-block__load-more">
            <button onClick={handleLoadMore}>
                Load more
            </button>
        </div>}
    </div>
}

export default WhiteList;