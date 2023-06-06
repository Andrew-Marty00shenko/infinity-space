import "./BenefitsSection.scss";

import Human from "../../../assets/images/benefits-section/human.png";
import Substract from "../../../assets/images/benefits-section/subtract.png";
import Circle1 from "../../../assets/images/benefits-section/circle-1.png";
import Circle2 from "../../../assets/images/benefits-section/circle-2.png";
import { Fade } from "react-awesome-reveal";

const BenefitsSection = () => {
  return (
    <section className="benefits">
      <div className="benefits__content">
        <div className="gradient"></div>
        <Fade
          direction="top"
          triggerOnce
          duration={1000}
          style={{ opacity: 0 }}
        >
          <h1>
            SPACE <br /> CLUB
          </h1>

          <p>values</p>
        </Fade>

        <div className="benefits__content-images">
          <Fade cascade damping={0.1} style={{ opacity: 0 }} triggerOnce>
            <img className="human" src={Human} alt="" />
            <img className="circle-1" src={Circle1} alt="" />
            <img className="circle-2" src={Circle2} alt="" />
            <img className="substract" src={Substract} alt="" />
            <div className="block one">
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.95028 21.8276C6.02721 18.6285 0.667969 13.3439 0.667969 8.34725C0.667969 0.465995 8.00152 -3.11648 14.0013 3.33169C20.0011 -3.11648 27.3346 0.465748 27.3346 8.3472C27.3346 13.344 21.9754 18.6286 18.0523 21.8277C16.2764 23.2759 15.3884 24 14.0013 24C12.6143 24 11.7263 23.2759 9.95028 21.8276ZM11.4589 10.3284C11.5783 10.1578 11.6774 10.0163 11.7657 9.89507C11.8404 10.0251 11.9237 10.1765 12.024 10.3589L14.3043 14.505C14.5258 14.9078 14.7429 15.3028 14.9609 15.5894C15.1942 15.8962 15.6044 16.3165 16.2618 16.3289C16.9192 16.3412 17.3449 15.9366 17.5895 15.6388C17.8182 15.3606 18.05 14.974 18.2864 14.5798L18.3602 14.4567C18.6546 13.966 18.84 13.6592 19.004 13.4377C19.1552 13.2335 19.2425 13.1668 19.3076 13.13C19.3728 13.0931 19.4748 13.0525 19.7277 13.0279C20.0021 13.0012 20.3605 13.0002 20.9327 13.0002H22.0013C22.5536 13.0002 23.0013 12.5524 23.0013 12.0002C23.0013 11.4479 22.5536 11.0002 22.0013 11.0002L20.8896 11.0001C20.3734 11.0001 19.9169 11.0001 19.5342 11.0373C19.1194 11.0776 18.7156 11.1668 18.3223 11.3896C17.9289 11.6123 17.6447 11.9126 17.3966 12.2476C17.1679 12.5566 16.933 12.948 16.6674 13.3907L16.6041 13.4963C16.4884 13.689 16.392 13.8496 16.3058 13.9874C16.2248 13.8465 16.1345 13.6824 16.0262 13.4855L13.7469 9.34132C13.5414 8.96747 13.3367 8.59501 13.129 8.32196C12.9021 8.02367 12.5132 7.62926 11.8898 7.5956C11.2665 7.56194 10.8373 7.91218 10.5796 8.18431C10.3437 8.43341 10.1001 8.78166 9.85556 9.13121L9.44304 9.72054C9.14018 10.1532 8.9503 10.4228 8.78594 10.6172C8.63464 10.7962 8.55055 10.8548 8.48847 10.8871C8.42639 10.9195 8.33014 10.9547 8.09676 10.976C7.84322 10.9992 7.51347 11.0002 6.98535 11.0002H6.0013C5.44902 11.0002 5.0013 11.4479 5.0013 12.0002C5.0013 12.5524 5.44902 13.0002 6.0013 13.0002L7.02546 13.0002C7.50142 13.0002 7.92334 13.0002 8.27865 12.9678C8.66406 12.9326 9.04002 12.8548 9.41209 12.6611C9.78416 12.4674 10.0634 12.204 10.3133 11.9084C10.5436 11.6359 10.7856 11.2903 11.0585 10.9003L11.4589 10.3284Z"
                  fill="#AE7AFF"
                />
              </svg>
              <span>Our value is</span>
              <span>Health</span>
            </div>
            <div className="block two">
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.95028 21.8276C6.02721 18.6285 0.667969 13.3439 0.667969 8.34725C0.667969 0.465995 8.00152 -3.11648 14.0013 3.33169C20.0011 -3.11648 27.3346 0.465748 27.3346 8.3472C27.3346 13.344 21.9754 18.6286 18.0523 21.8277C16.2764 23.2759 15.3884 24 14.0013 24C12.6143 24 11.7263 23.2759 9.95028 21.8276ZM11.4589 10.3284C11.5783 10.1578 11.6774 10.0163 11.7657 9.89507C11.8404 10.0251 11.9237 10.1765 12.024 10.3589L14.3043 14.505C14.5258 14.9078 14.7429 15.3028 14.9609 15.5894C15.1942 15.8962 15.6044 16.3165 16.2618 16.3289C16.9192 16.3412 17.3449 15.9366 17.5895 15.6388C17.8182 15.3606 18.05 14.974 18.2864 14.5798L18.3602 14.4567C18.6546 13.966 18.84 13.6592 19.004 13.4377C19.1552 13.2335 19.2425 13.1668 19.3076 13.13C19.3728 13.0931 19.4748 13.0525 19.7277 13.0279C20.0021 13.0012 20.3605 13.0002 20.9327 13.0002H22.0013C22.5536 13.0002 23.0013 12.5524 23.0013 12.0002C23.0013 11.4479 22.5536 11.0002 22.0013 11.0002L20.8896 11.0001C20.3734 11.0001 19.9169 11.0001 19.5342 11.0373C19.1194 11.0776 18.7156 11.1668 18.3223 11.3896C17.9289 11.6123 17.6447 11.9126 17.3966 12.2476C17.1679 12.5566 16.933 12.948 16.6674 13.3907L16.6041 13.4963C16.4884 13.689 16.392 13.8496 16.3058 13.9874C16.2248 13.8465 16.1345 13.6824 16.0262 13.4855L13.7469 9.34132C13.5414 8.96747 13.3367 8.59501 13.129 8.32196C12.9021 8.02367 12.5132 7.62926 11.8898 7.5956C11.2665 7.56194 10.8373 7.91218 10.5796 8.18431C10.3437 8.43341 10.1001 8.78166 9.85556 9.13121L9.44304 9.72054C9.14018 10.1532 8.9503 10.4228 8.78594 10.6172C8.63464 10.7962 8.55055 10.8548 8.48847 10.8871C8.42639 10.9195 8.33014 10.9547 8.09676 10.976C7.84322 10.9992 7.51347 11.0002 6.98535 11.0002H6.0013C5.44902 11.0002 5.0013 11.4479 5.0013 12.0002C5.0013 12.5524 5.44902 13.0002 6.0013 13.0002L7.02546 13.0002C7.50142 13.0002 7.92334 13.0002 8.27865 12.9678C8.66406 12.9326 9.04002 12.8548 9.41209 12.6611C9.78416 12.4674 10.0634 12.204 10.3133 11.9084C10.5436 11.6359 10.7856 11.2903 11.0585 10.9003L11.4589 10.3284Z"
                  fill="#AE7AFF"
                />
              </svg>
              <span>Our value is</span>
              <span>Health</span>
            </div>
            <div className="block three">
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.95028 21.8276C6.02721 18.6285 0.667969 13.3439 0.667969 8.34725C0.667969 0.465995 8.00152 -3.11648 14.0013 3.33169C20.0011 -3.11648 27.3346 0.465748 27.3346 8.3472C27.3346 13.344 21.9754 18.6286 18.0523 21.8277C16.2764 23.2759 15.3884 24 14.0013 24C12.6143 24 11.7263 23.2759 9.95028 21.8276ZM11.4589 10.3284C11.5783 10.1578 11.6774 10.0163 11.7657 9.89507C11.8404 10.0251 11.9237 10.1765 12.024 10.3589L14.3043 14.505C14.5258 14.9078 14.7429 15.3028 14.9609 15.5894C15.1942 15.8962 15.6044 16.3165 16.2618 16.3289C16.9192 16.3412 17.3449 15.9366 17.5895 15.6388C17.8182 15.3606 18.05 14.974 18.2864 14.5798L18.3602 14.4567C18.6546 13.966 18.84 13.6592 19.004 13.4377C19.1552 13.2335 19.2425 13.1668 19.3076 13.13C19.3728 13.0931 19.4748 13.0525 19.7277 13.0279C20.0021 13.0012 20.3605 13.0002 20.9327 13.0002H22.0013C22.5536 13.0002 23.0013 12.5524 23.0013 12.0002C23.0013 11.4479 22.5536 11.0002 22.0013 11.0002L20.8896 11.0001C20.3734 11.0001 19.9169 11.0001 19.5342 11.0373C19.1194 11.0776 18.7156 11.1668 18.3223 11.3896C17.9289 11.6123 17.6447 11.9126 17.3966 12.2476C17.1679 12.5566 16.933 12.948 16.6674 13.3907L16.6041 13.4963C16.4884 13.689 16.392 13.8496 16.3058 13.9874C16.2248 13.8465 16.1345 13.6824 16.0262 13.4855L13.7469 9.34132C13.5414 8.96747 13.3367 8.59501 13.129 8.32196C12.9021 8.02367 12.5132 7.62926 11.8898 7.5956C11.2665 7.56194 10.8373 7.91218 10.5796 8.18431C10.3437 8.43341 10.1001 8.78166 9.85556 9.13121L9.44304 9.72054C9.14018 10.1532 8.9503 10.4228 8.78594 10.6172C8.63464 10.7962 8.55055 10.8548 8.48847 10.8871C8.42639 10.9195 8.33014 10.9547 8.09676 10.976C7.84322 10.9992 7.51347 11.0002 6.98535 11.0002H6.0013C5.44902 11.0002 5.0013 11.4479 5.0013 12.0002C5.0013 12.5524 5.44902 13.0002 6.0013 13.0002L7.02546 13.0002C7.50142 13.0002 7.92334 13.0002 8.27865 12.9678C8.66406 12.9326 9.04002 12.8548 9.41209 12.6611C9.78416 12.4674 10.0634 12.204 10.3133 11.9084C10.5436 11.6359 10.7856 11.2903 11.0585 10.9003L11.4589 10.3284Z"
                  fill="#AE7AFF"
                />
              </svg>
              <span>Our value is</span>
              <span>Health</span>
            </div>
            <div className="block four">
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.95028 21.8276C6.02721 18.6285 0.667969 13.3439 0.667969 8.34725C0.667969 0.465995 8.00152 -3.11648 14.0013 3.33169C20.0011 -3.11648 27.3346 0.465748 27.3346 8.3472C27.3346 13.344 21.9754 18.6286 18.0523 21.8277C16.2764 23.2759 15.3884 24 14.0013 24C12.6143 24 11.7263 23.2759 9.95028 21.8276ZM11.4589 10.3284C11.5783 10.1578 11.6774 10.0163 11.7657 9.89507C11.8404 10.0251 11.9237 10.1765 12.024 10.3589L14.3043 14.505C14.5258 14.9078 14.7429 15.3028 14.9609 15.5894C15.1942 15.8962 15.6044 16.3165 16.2618 16.3289C16.9192 16.3412 17.3449 15.9366 17.5895 15.6388C17.8182 15.3606 18.05 14.974 18.2864 14.5798L18.3602 14.4567C18.6546 13.966 18.84 13.6592 19.004 13.4377C19.1552 13.2335 19.2425 13.1668 19.3076 13.13C19.3728 13.0931 19.4748 13.0525 19.7277 13.0279C20.0021 13.0012 20.3605 13.0002 20.9327 13.0002H22.0013C22.5536 13.0002 23.0013 12.5524 23.0013 12.0002C23.0013 11.4479 22.5536 11.0002 22.0013 11.0002L20.8896 11.0001C20.3734 11.0001 19.9169 11.0001 19.5342 11.0373C19.1194 11.0776 18.7156 11.1668 18.3223 11.3896C17.9289 11.6123 17.6447 11.9126 17.3966 12.2476C17.1679 12.5566 16.933 12.948 16.6674 13.3907L16.6041 13.4963C16.4884 13.689 16.392 13.8496 16.3058 13.9874C16.2248 13.8465 16.1345 13.6824 16.0262 13.4855L13.7469 9.34132C13.5414 8.96747 13.3367 8.59501 13.129 8.32196C12.9021 8.02367 12.5132 7.62926 11.8898 7.5956C11.2665 7.56194 10.8373 7.91218 10.5796 8.18431C10.3437 8.43341 10.1001 8.78166 9.85556 9.13121L9.44304 9.72054C9.14018 10.1532 8.9503 10.4228 8.78594 10.6172C8.63464 10.7962 8.55055 10.8548 8.48847 10.8871C8.42639 10.9195 8.33014 10.9547 8.09676 10.976C7.84322 10.9992 7.51347 11.0002 6.98535 11.0002H6.0013C5.44902 11.0002 5.0013 11.4479 5.0013 12.0002C5.0013 12.5524 5.44902 13.0002 6.0013 13.0002L7.02546 13.0002C7.50142 13.0002 7.92334 13.0002 8.27865 12.9678C8.66406 12.9326 9.04002 12.8548 9.41209 12.6611C9.78416 12.4674 10.0634 12.204 10.3133 11.9084C10.5436 11.6359 10.7856 11.2903 11.0585 10.9003L11.4589 10.3284Z"
                  fill="#AE7AFF"
                />
              </svg>
              <span>Our value is</span>
              <span>Health</span>
            </div>
            <div className="block five">
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.95028 21.8276C6.02721 18.6285 0.667969 13.3439 0.667969 8.34725C0.667969 0.465995 8.00152 -3.11648 14.0013 3.33169C20.0011 -3.11648 27.3346 0.465748 27.3346 8.3472C27.3346 13.344 21.9754 18.6286 18.0523 21.8277C16.2764 23.2759 15.3884 24 14.0013 24C12.6143 24 11.7263 23.2759 9.95028 21.8276ZM11.4589 10.3284C11.5783 10.1578 11.6774 10.0163 11.7657 9.89507C11.8404 10.0251 11.9237 10.1765 12.024 10.3589L14.3043 14.505C14.5258 14.9078 14.7429 15.3028 14.9609 15.5894C15.1942 15.8962 15.6044 16.3165 16.2618 16.3289C16.9192 16.3412 17.3449 15.9366 17.5895 15.6388C17.8182 15.3606 18.05 14.974 18.2864 14.5798L18.3602 14.4567C18.6546 13.966 18.84 13.6592 19.004 13.4377C19.1552 13.2335 19.2425 13.1668 19.3076 13.13C19.3728 13.0931 19.4748 13.0525 19.7277 13.0279C20.0021 13.0012 20.3605 13.0002 20.9327 13.0002H22.0013C22.5536 13.0002 23.0013 12.5524 23.0013 12.0002C23.0013 11.4479 22.5536 11.0002 22.0013 11.0002L20.8896 11.0001C20.3734 11.0001 19.9169 11.0001 19.5342 11.0373C19.1194 11.0776 18.7156 11.1668 18.3223 11.3896C17.9289 11.6123 17.6447 11.9126 17.3966 12.2476C17.1679 12.5566 16.933 12.948 16.6674 13.3907L16.6041 13.4963C16.4884 13.689 16.392 13.8496 16.3058 13.9874C16.2248 13.8465 16.1345 13.6824 16.0262 13.4855L13.7469 9.34132C13.5414 8.96747 13.3367 8.59501 13.129 8.32196C12.9021 8.02367 12.5132 7.62926 11.8898 7.5956C11.2665 7.56194 10.8373 7.91218 10.5796 8.18431C10.3437 8.43341 10.1001 8.78166 9.85556 9.13121L9.44304 9.72054C9.14018 10.1532 8.9503 10.4228 8.78594 10.6172C8.63464 10.7962 8.55055 10.8548 8.48847 10.8871C8.42639 10.9195 8.33014 10.9547 8.09676 10.976C7.84322 10.9992 7.51347 11.0002 6.98535 11.0002H6.0013C5.44902 11.0002 5.0013 11.4479 5.0013 12.0002C5.0013 12.5524 5.44902 13.0002 6.0013 13.0002L7.02546 13.0002C7.50142 13.0002 7.92334 13.0002 8.27865 12.9678C8.66406 12.9326 9.04002 12.8548 9.41209 12.6611C9.78416 12.4674 10.0634 12.204 10.3133 11.9084C10.5436 11.6359 10.7856 11.2903 11.0585 10.9003L11.4589 10.3284Z"
                  fill="#AE7AFF"
                />
              </svg>
              <span>Our value is</span>
              <span>Health</span>
            </div>
            <div className="block six">
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.95028 21.8276C6.02721 18.6285 0.667969 13.3439 0.667969 8.34725C0.667969 0.465995 8.00152 -3.11648 14.0013 3.33169C20.0011 -3.11648 27.3346 0.465748 27.3346 8.3472C27.3346 13.344 21.9754 18.6286 18.0523 21.8277C16.2764 23.2759 15.3884 24 14.0013 24C12.6143 24 11.7263 23.2759 9.95028 21.8276ZM11.4589 10.3284C11.5783 10.1578 11.6774 10.0163 11.7657 9.89507C11.8404 10.0251 11.9237 10.1765 12.024 10.3589L14.3043 14.505C14.5258 14.9078 14.7429 15.3028 14.9609 15.5894C15.1942 15.8962 15.6044 16.3165 16.2618 16.3289C16.9192 16.3412 17.3449 15.9366 17.5895 15.6388C17.8182 15.3606 18.05 14.974 18.2864 14.5798L18.3602 14.4567C18.6546 13.966 18.84 13.6592 19.004 13.4377C19.1552 13.2335 19.2425 13.1668 19.3076 13.13C19.3728 13.0931 19.4748 13.0525 19.7277 13.0279C20.0021 13.0012 20.3605 13.0002 20.9327 13.0002H22.0013C22.5536 13.0002 23.0013 12.5524 23.0013 12.0002C23.0013 11.4479 22.5536 11.0002 22.0013 11.0002L20.8896 11.0001C20.3734 11.0001 19.9169 11.0001 19.5342 11.0373C19.1194 11.0776 18.7156 11.1668 18.3223 11.3896C17.9289 11.6123 17.6447 11.9126 17.3966 12.2476C17.1679 12.5566 16.933 12.948 16.6674 13.3907L16.6041 13.4963C16.4884 13.689 16.392 13.8496 16.3058 13.9874C16.2248 13.8465 16.1345 13.6824 16.0262 13.4855L13.7469 9.34132C13.5414 8.96747 13.3367 8.59501 13.129 8.32196C12.9021 8.02367 12.5132 7.62926 11.8898 7.5956C11.2665 7.56194 10.8373 7.91218 10.5796 8.18431C10.3437 8.43341 10.1001 8.78166 9.85556 9.13121L9.44304 9.72054C9.14018 10.1532 8.9503 10.4228 8.78594 10.6172C8.63464 10.7962 8.55055 10.8548 8.48847 10.8871C8.42639 10.9195 8.33014 10.9547 8.09676 10.976C7.84322 10.9992 7.51347 11.0002 6.98535 11.0002H6.0013C5.44902 11.0002 5.0013 11.4479 5.0013 12.0002C5.0013 12.5524 5.44902 13.0002 6.0013 13.0002L7.02546 13.0002C7.50142 13.0002 7.92334 13.0002 8.27865 12.9678C8.66406 12.9326 9.04002 12.8548 9.41209 12.6611C9.78416 12.4674 10.0634 12.204 10.3133 11.9084C10.5436 11.6359 10.7856 11.2903 11.0585 10.9003L11.4589 10.3284Z"
                  fill="#AE7AFF"
                />
              </svg>
              <span>Our value is</span>
              <span>Health</span>
            </div>
          </Fade>
        </div>

        <div className="gradient-bot"></div>
      </div>
    </section>
  );
};

export default BenefitsSection;
