import { useEffect, useState } from 'react';
import myresume from '../../assets/FE-Phan-Phuoc-Trung.pdf';
import cls from 'classnames';

export const Button = () => {
  const [downLoading, setDownLoading] = useState<boolean>(false);
  const [downLoaded, setdownLoaded] = useState<boolean>(false);

  useEffect(() => {
    let timer: number;
    if (downLoaded) {
      timer = setTimeout(() => {
        setDownLoading(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [downLoading, downLoaded]);

  const downloadFile = () => {
    setDownLoading(true);
    fetch(myresume)
      .then((res) => res.blob())
      .then((blod) => {
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blod);
          link.download = 'FE-PhanPhuocTrung';
          link.click();
          setdownLoaded(true);
          setDownLoading(false);
        }, 3500);
      })
      .catch((err) => err);
  };

  return (
    <>
      <button
        onClick={downloadFile}
        className="download-button mt-5 transform active:scale-95 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-bold tracking-widest w-full"
      >
        <div className="flex justify-center items-center relative">
          <div className="svg-container mr-3">
            <svg
              className={cls(
                `download-icon ${downLoading || downLoaded ? 'hidden' : ''}`,
              )}
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={cls(`download-arrow`)}
                d="M13 9L9 13M9 13L5 9M9 13V1"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div
              className={cls(
                `download-loader text-white  ${
                  downLoading && !downLoaded ? '' : 'hidden'
                }`,
              )}
            ></div>
            <svg
              className={cls(
                `check-svg ${downLoaded && !downLoading ? '' : 'hidden'}`,
              )}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="button-copy  leading-none">
            {!downLoading && !downLoaded && 'Download CV'}
            {downLoading && !downLoaded && 'Downloading'}
            {downLoaded && !downLoading && 'downLoaded'}
          </div>
        </div>
      </button>
    </>
  );
};
