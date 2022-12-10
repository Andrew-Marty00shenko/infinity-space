import { useEffect } from "react";
import { useState } from "react";
import "./AddContent.scss";

const AddContent = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile]);

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    return <div className="admin-add-content">
        <h2>
            Add content
        </h2>

        <input type="text"
            placeholder="Title"
        />

        <textarea placeholder="Text" />

        {!selectedFile ? <label for="inputTag">
            <svg width="57" height="50" viewBox="0 0 57 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4" clip-path="url(#clip0_414_7079)">
                    <path d="M53.5 6.25H50.375V3.125C50.375 1.40625 48.9688 0 47.25 0H3.5C1.78125 0 0.375 1.40625 0.375 3.125V40.625C0.375 42.3438 1.78125 43.75 3.5 43.75H6.625V46.875C6.625 48.5938 8.03125 50 9.75 50H53.5C55.2188 50 56.625 48.5938 56.625 46.875V9.375C56.625 7.65625 55.2188 6.25 53.5 6.25ZM6.625 9.375V40.625H3.50625L3.5 40.6188V3.13125L3.50625 3.125H47.2438L47.25 3.13125V6.25H9.75C8.03125 6.25 6.625 7.65625 6.625 9.375ZM53.5 46.8688L53.4937 46.875H9.75625L9.75 46.8688V9.38125L9.75625 9.375H53.4937L53.5 9.38125V46.8688Z" fill="#BFBFC1" />
                    <path d="M47.25 17.1876C47.2496 18.4312 46.7552 19.6237 45.8755 20.5028C44.9958 21.3819 43.803 21.8755 42.5594 21.8751C41.3158 21.8747 40.1232 21.3802 39.2442 20.5006C38.3651 19.6209 37.8715 18.4281 37.8719 17.1844C37.8723 15.9408 38.3667 14.7483 39.2464 13.8692C40.126 12.9902 41.3189 12.4965 42.5625 12.4969C43.8061 12.4974 44.9986 12.9918 45.8777 13.8714C46.7568 14.7511 47.2504 15.944 47.25 17.1876ZM50.375 43.7501H12.875V37.5001L23.8125 18.7501L36.3125 34.3751H39.4375L50.375 25.0001V43.7501Z" fill="#BFBFC1" />
                </g>
                <defs>
                    <clipPath id="clip0_414_7079">
                        <rect width="56.25" height="50" fill="white" transform="translate(0.375)" />
                    </clipPath>
                </defs>
            </svg>

            <input
                id="inputTag"
                type="file"
                onChange={onSelectFile}
                className="file"
            />
        </label>
            : <img src={preview} alt="" />}

        <button>
            Upload
        </button>
    </div>
}

export default AddContent;