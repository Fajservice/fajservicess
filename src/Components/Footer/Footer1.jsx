import { Link } from "react-router-dom";
import { useState, useEffect, useRef, memo } from "react";

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const Icons = {
  Facebook: () => (
    <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_2166)">
<rect x="4" width="30" height="30" rx="6" fill="#0884FF" shapeRendering="crispEdges"/>
<path d="M28.5 14.5625C28.5 9.04 24.0225 4.5625 18.5 4.5625C12.9775 4.5625 8.5 9.04 8.5 14.5625C8.5 19.5542 12.1567 23.6908 16.9375 24.4408V17.4533H14.3983V14.5617H16.9375V12.36C16.9375 9.85417 18.4308 8.46917 20.715 8.46917C21.8083 8.46917 22.9533 8.665 22.9533 8.665V11.1258H21.6917C20.4492 11.1258 20.0617 11.8967 20.0617 12.6875V14.5625H22.835L22.3917 17.4542H20.0617V24.4417C24.8433 23.6908 28.5 19.5533 28.5 14.5625Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1_2166" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2166"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2166" result="shape"/>
</filter>
</defs>
</svg>


  ),
  Instagram: () => (
    <svg viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_2157)">
<rect x="4" width="30" height="31" rx="6" fill="url(#paint0_linear_1_2157)" shapeRendering="crispEdges"/>
<path d="M18.5 7.3025C21.17 7.3025 21.4867 7.3125 22.5417 7.36083C25.2517 7.48417 26.5175 8.77 26.6408 11.46C26.6892 12.5142 26.6983 12.8308 26.6983 15.5008C26.6983 18.1717 26.6883 18.4875 26.6408 19.5417C26.5167 22.2292 25.2542 23.5175 22.5417 23.6408C21.4867 23.6892 21.1717 23.6992 18.5 23.6992C15.83 23.6992 15.5133 23.6892 14.4592 23.6408C11.7425 23.5167 10.4833 22.225 10.36 19.5408C10.3117 18.4867 10.3017 18.1708 10.3017 15.5C10.3017 12.83 10.3125 12.5142 10.36 11.4592C10.4842 8.77 11.7467 7.48333 14.4592 7.36C15.5142 7.3125 15.83 7.3025 18.5 7.3025ZM18.5 5.5C15.7842 5.5 15.4442 5.51167 14.3775 5.56C10.7458 5.72667 8.7275 7.74167 8.56083 11.3767C8.51167 12.4442 8.5 12.7842 8.5 15.5C8.5 18.2158 8.51167 18.5567 8.56 19.6233C8.72667 23.255 10.7417 25.2733 14.3767 25.44C15.4442 25.4883 15.7842 25.5 18.5 25.5C21.2158 25.5 21.5567 25.4883 22.6233 25.44C26.2517 25.2733 28.275 23.2583 28.4392 19.6233C28.4883 18.5567 28.5 18.2158 28.5 15.5C28.5 12.7842 28.4883 12.4442 28.44 11.3775C28.2767 7.74917 26.2592 5.7275 22.6242 5.56083C21.5567 5.51167 21.2158 5.5 18.5 5.5ZM18.5 10.365C15.6642 10.365 13.365 12.6642 13.365 15.5C13.365 18.3358 15.6642 20.6358 18.5 20.6358C21.3358 20.6358 23.635 18.3367 23.635 15.5C23.635 12.6642 21.3358 10.365 18.5 10.365ZM18.5 18.8333C16.6592 18.8333 15.1667 17.3417 15.1667 15.5C15.1667 13.6592 16.6592 12.1667 18.5 12.1667C20.3408 12.1667 21.8333 13.6592 21.8333 15.5C21.8333 17.3417 20.3408 18.8333 18.5 18.8333ZM23.8383 8.9625C23.175 8.9625 22.6375 9.5 22.6375 10.1625C22.6375 10.825 23.175 11.3625 23.8383 11.3625C24.5008 11.3625 25.0375 10.825 25.0375 10.1625C25.0375 9.5 24.5008 8.9625 23.8383 8.9625Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1_2157" x="0" y="0" width="38" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2157"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2157" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1_2157" x1="33" y1="1.9967" x2="3.07225" y2="30.2932" gradientUnits="userSpaceOnUse">
<stop stopColor="#FD08BC"/>
<stop offset="1" stopColor="#FEB308"/>
</linearGradient>
</defs>
</svg>

  ),
  Twitter: () => (
   <svg viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_2160)">
<rect x="4" width="30" height="31" rx="6" fill="#080808" shapeRendering="crispEdges"/>
<path d="M23.7052 7.375H26.4619L20.4394 14.2583L27.5244 23.625H21.9769L17.6319 17.9442L12.6602 23.625H9.90187L16.3435 16.2625L9.54688 7.375H15.2352L19.1627 12.5675L23.7052 7.375ZM22.7377 21.975H24.2652L14.4052 8.93833H12.766L22.7377 21.975Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1_2160" x="0" y="0" width="38" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2160"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2160" result="shape"/>
</filter>
</defs>
</svg>


  ),
  YouTube: () => (
    <svg viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_2163)">
<rect x="4" width="30" height="31" rx="6" fill="#FE0808" shapeRendering="crispEdges"/>
<path d="M28.0817 10.654C27.9687 10.2284 27.7459 9.83991 27.4355 9.52751C27.1252 9.21512 26.7382 8.98974 26.3133 8.87396C24.7542 8.45313 18.5 8.45312 18.5 8.45312C18.5 8.45312 12.2458 8.45313 10.6858 8.87396C10.2612 8.98995 9.87441 9.2154 9.56423 9.52778C9.25405 9.84015 9.03133 10.2285 8.91833 10.654C8.5 12.224 8.5 15.499 8.5 15.499C8.5 15.499 8.5 18.774 8.91833 20.344C9.03132 20.7696 9.25415 21.158 9.56449 21.4704C9.87484 21.7828 10.2618 22.0082 10.6867 22.124C12.2458 22.5448 18.5 22.5448 18.5 22.5448C18.5 22.5448 24.7542 22.5448 26.3142 22.124C26.7391 22.0083 27.1261 21.7829 27.4364 21.4705C27.7468 21.1581 27.9696 20.7696 28.0825 20.344C28.5 18.774 28.5 15.499 28.5 15.499C28.5 15.499 28.5 12.224 28.0817 10.654ZM16.4542 18.4723V12.5256L21.6817 15.499L16.4542 18.4723Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1_2163" x="0" y="0" width="38" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2163"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2163" result="shape"/>
</filter>
</defs>
</svg>

  ),
  LinkedIn: () => (
   <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_2241)">
<rect x="4" width="30" height="30" rx="6" fill="#0A62BC"/>
<path d="M18.9974 6.66406C14.3953 6.66406 10.6641 10.3953 10.6641 14.9974C10.6641 19.5995 14.3953 23.3307 18.9974 23.3307C23.5995 23.3307 27.3307 19.5995 27.3307 14.9974C27.3307 10.3953 23.5995 6.66406 18.9974 6.66406ZM23.8842 19.203C23.8786 19.6043 23.5488 19.9266 23.1467 19.921H14.6641C14.2634 19.9252 13.9342 19.6036 13.9293 19.203V10.6849C13.9342 10.2842 14.2627 9.96267 14.6641 9.96753H23.1467C23.5481 9.96128 23.878 10.2828 23.8842 10.6842V19.203ZM20.6411 13.5807C20.0696 13.5599 19.5328 13.8543 19.2439 14.3481H19.2245V13.6988H17.8085V18.4488H19.2835V16.0995C19.2835 15.4793 19.4009 14.88 20.1696 14.88C20.9266 14.88 20.9363 15.5891 20.9363 16.1398V18.4495H22.4113V15.8439C22.4113 14.5641 22.1363 13.5814 20.6411 13.5814V13.5807ZM15.405 18.4488H16.8814V13.6988H15.405V18.4488ZM16.1439 11.3377C15.671 11.3377 15.2877 11.721 15.2877 12.1939C15.2877 12.6668 15.671 13.0495 16.1439 13.0495C16.6168 13.0495 17.0002 12.6661 17.0002 12.1932C17.0002 11.7203 16.6168 11.337 16.1439 11.3377Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1_2241" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2241"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2241" result="shape"/>
</filter>
</defs>
</svg>

  ),
  Pinterest: () => (
   <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_2238)">
<rect x="4" width="30" height="30" rx="6" fill="#FF0000"/>
<path d="M19.3363 8.66406C15.6513 8.66406 12.6641 11.6463 12.6641 15.3252C12.6641 18.1485 14.4214 20.5607 16.9033 21.5313C16.8427 21.0052 16.7937 20.1935 16.925 19.618C17.0458 19.0968 17.7047 16.3063 17.7047 16.3063C17.7047 16.3063 17.5071 15.9063 17.5071 15.3196C17.5071 14.393 18.0452 13.7024 18.7152 13.7024C19.2862 13.7024 19.5611 14.1302 19.5611 14.6402C19.5611 15.2102 19.1988 16.0657 19.0063 16.8607C18.8471 17.5241 19.3413 18.0668 19.9946 18.0668C21.181 18.0668 22.0925 16.8168 22.0925 15.0185C22.0925 13.423 20.9451 12.3102 19.3029 12.3102C17.4031 12.3102 16.2879 13.7302 16.2879 15.1996C16.2879 15.7696 16.5077 16.3841 16.782 16.7185C16.8377 16.7835 16.8432 16.8441 16.8265 16.9096C16.777 17.118 16.6618 17.573 16.6396 17.6663C16.6123 17.7868 16.5405 17.8141 16.4142 17.7541C15.5795 17.3646 15.0575 16.153 15.0575 15.1718C15.0575 13.0718 16.5839 11.1424 19.4671 11.1424C21.7792 11.1424 23.58 12.7874 23.58 14.9913C23.58 17.2885 22.1304 19.1363 20.1204 19.1363C19.4448 19.1363 18.8076 18.7852 18.5939 18.3685C18.5939 18.3685 18.2589 19.6402 18.1766 19.953C18.0285 20.5341 17.6218 21.258 17.3474 21.7018C17.974 21.893 18.6334 21.9974 19.3251 21.9974C23.0102 21.9974 25.9974 19.0152 25.9974 15.3363C26.0085 11.6463 23.0213 8.66406 19.3363 8.66406Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1_2238" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2238"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2238" result="shape"/>
</filter>
</defs>
</svg>
  ),
  Tiktok: () => (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_72_1199)">
<rect x="4" width="30" height="30" rx="6" fill="white"/>
<path d="M16.872 12.8697V12.0907C16.6017 12.0523 16.329 12.0326 16.056 12.0312C12.7168 12.0312 10 14.7485 10 18.0877C10 20.136 11.0237 21.9493 12.5854 23.0459C11.5397 21.9276 10.9583 20.4536 10.9591 18.9226C10.9591 15.6308 13.5987 12.9465 16.872 12.8697Z" fill="#00F2EA"/>
<path d="M17.0155 21.6831C18.5055 21.6831 19.7207 20.4979 19.7762 19.0208L19.7813 5.83487H22.1903C22.1388 5.55946 22.1128 5.28006 22.1126 5H18.8224L18.8168 18.1863C18.762 19.663 17.5461 20.8478 16.0566 20.8478C15.6094 20.8481 15.1689 20.7391 14.7734 20.5303C15.2916 21.2533 16.126 21.6823 17.0155 21.6831ZM26.6899 10.3108V9.57801C25.8047 9.5789 24.9383 9.32125 24.1973 8.83702C24.8471 9.58511 25.7217 10.1022 26.6904 10.3108" fill="#00F2EA"/>
<path d="M24.1966 8.83675C23.4704 8.00588 23.0703 6.93955 23.0708 5.83594H22.1893C22.4199 7.06849 23.1453 8.15302 24.1966 8.83675ZM16.0558 15.3168C14.529 15.3186 13.2918 16.5558 13.29 18.0827C13.2909 19.1106 13.8617 20.0533 14.7723 20.5309C14.432 20.0617 14.249 19.4974 14.249 18.918C14.2505 17.3911 15.4877 16.1535 17.0148 16.1517C17.2997 16.1517 17.5729 16.1988 17.8308 16.2798V12.9208C17.5605 12.8824 17.2877 12.8626 17.0148 12.8613C16.9668 12.8613 16.9196 12.864 16.8721 12.8648V15.4449C16.608 15.361 16.3328 15.3177 16.0558 15.3168Z" fill="#FF004F"/>
<path d="M26.6897 10.3054V12.8626C24.9833 12.8626 23.403 12.3168 22.1121 11.3905V18.077C22.1121 21.4163 19.3958 24.133 16.0566 24.133C14.7661 24.133 13.5695 23.7258 12.5859 23.0352C13.7291 24.268 15.3342 24.9683 17.0153 24.9679C20.3545 24.9679 23.0713 22.2511 23.0713 18.9123V12.2259C24.4048 13.1848 26.0064 13.6999 27.6488 13.6979V10.4068C27.3195 10.4068 26.9993 10.371 26.6895 10.3047" fill="#FF004F"/>
<path d="M22.1114 18.0827V11.3962C23.4449 12.3553 25.0465 12.8702 26.689 12.8682V10.3112C25.7205 10.1024 24.8459 9.58507 24.1964 8.83675C23.1451 8.15302 22.4197 7.06849 22.1891 5.83594H19.7803L19.7752 19.0218C19.72 20.4985 18.5045 21.6838 17.0145 21.6838C16.1253 21.6829 15.2907 21.2537 14.7727 20.5311C13.8622 20.0538 13.2912 19.111 13.29 18.0829C13.2918 16.5561 14.529 15.3188 16.0558 15.3171C16.3403 15.3171 16.6135 15.3637 16.8719 15.4451V12.8651C13.5985 12.9419 10.959 15.6262 10.959 18.918C10.959 20.5098 11.5775 21.9589 12.5852 23.0413C13.6012 23.7565 14.8135 24.1398 16.0558 24.1387C19.3953 24.1387 22.1114 21.4219 22.1114 18.0827Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d_72_1199" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_72_1199"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_72_1199" result="shape"/>
</filter>
</defs>
</svg>
  ),
  Thread: () => (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_72_1206)">
<rect x="4" width="30" height="30" rx="6" fill="black"/>
<path d="M24.3297 13.9207C24.2375 13.8766 24.144 13.8341 24.0491 13.7933C23.8838 10.7489 22.2205 9.0063 19.4274 8.98852C19.4149 8.98852 19.4021 8.98852 19.3896 8.98852C17.719 8.98852 16.3294 9.70178 15.4742 10.9992L17.0104 12.053C17.6492 11.0838 18.6519 10.877 19.3902 10.877C19.3988 10.877 19.4074 10.877 19.4159 10.877C20.3356 10.883 21.0295 11.1504 21.4786 11.6716C21.8056 12.0513 22.0239 12.5759 22.1323 13.2378C21.3169 13.0991 20.4351 13.0567 19.4923 13.1107C16.8369 13.2638 15.1298 14.8125 15.2444 16.9644C15.3027 18.056 15.8463 18.9952 16.7756 19.6087C17.5613 20.1273 18.5732 20.3809 19.6247 20.3236C21.0133 20.2475 22.103 19.7177 22.863 18.7485C23.4403 18.0129 23.8054 17.0593 23.9665 15.858C24.6284 16.2574 25.119 16.783 25.3897 17.4149C25.8504 18.4891 25.877 20.2541 24.437 21.6931C23.1752 22.9537 21.6584 23.499 19.3662 23.5158C16.8234 23.497 14.9003 22.6813 13.6499 21.0918C12.4789 19.6034 11.874 17.4538 11.8513 14.7021C11.874 11.9505 12.4789 9.80089 13.6499 8.31247C14.9003 6.72296 16.8234 5.90762 19.3662 5.88852C21.9275 5.90762 23.8841 6.72691 25.1822 8.324C25.8188 9.10706 26.2985 10.0923 26.615 11.2406L28.4149 10.7605C28.0313 9.34679 27.428 8.12872 26.6068 7.11844C24.9425 5.07087 22.5083 4.02173 19.3721 4H19.3596C16.2296 4.02173 13.8228 5.07482 12.206 7.1303C10.7673 8.95921 10.025 11.5043 10 14.6946V14.7021V14.7097C10.025 17.8999 10.7673 20.4451 12.206 22.274C13.8228 24.3295 16.2296 25.3826 19.3596 25.4043H19.3724C22.155 25.3849 24.1163 24.6565 25.7322 23.0422C27.8462 20.9301 27.7824 18.2829 27.0859 16.6578C26.586 15.4925 25.633 14.5461 24.3297 13.9207ZM19.5252 18.438C18.3615 18.5036 17.1523 17.9813 17.0927 16.8623C17.0486 16.0328 17.6832 15.1069 19.5967 14.9965C19.816 14.984 20.031 14.9778 20.2421 14.9778C20.9373 14.9778 21.5876 15.0453 22.1787 15.1747C21.9584 17.9283 20.6649 18.3755 19.5252 18.438Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_72_1206" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_72_1206"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_72_1206" result="shape"/>
</filter>
</defs>
</svg>

  ),
  WhatsApp: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  Location: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  ),
  PhoneOutline: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Email: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
};

const socialLinks = [
  { Icon: Icons.Instagram, href: 'https://www.instagram.com/fajtechnicalservicesllc/', label: 'Instagram' },
  { Icon: Icons.Twitter, href: 'https://twitter.com/FAJTechnical/', label: 'Twitter' },
  { Icon: Icons.YouTube, href: 'https://www.youtube.com/@fajtechnicalservicesllc', label: 'YouTube' },
  { Icon: Icons.Facebook, href: 'https://www.facebook.com/FAJTechnicalServicesLLC', label: 'Facebook' },
  { Icon: Icons.LinkedIn, href: 'https://www.linkedin.com/company/faj-technical-services-llc/', label: 'LinkedIn' },
  { Icon: Icons.Pinterest, href: 'https://www.pinterest.com/fajtechnicalservices/', label: 'Pinterest' },
  { Icon: Icons.Tiktok, href: 'https://www.tiktok.com/@fajtechnicalservicesllc', label: 'Tiktok' },
  { Icon: Icons.Thread, href: 'https://www.threads.com/@fajtechnicalservicesllc?hl=en', label: 'Thread' }
];


const aboutLinks = [
  { path: "/terms-and-conditions/", text: "Terms & Conditions" },
  { path: "/privacy-policy/", text: "Privacy Policy" },
  { path: "/refund-policy/", text: "Refund Policy" },
  { path: "/b2b-services/", text: "B2B Services" },
  { path: "/career/", text: "Career" }
];

const exploreLinks = [
  { path: "/services/air-conditioning-repair/ac-service/", text: "AC Repair and Maintenance" },
  { path: "/services/coffee-machine/coffee-machine-service-center/", text: "Coffee Machine Repair and Maintenance" },
  { path: "/services/home-appliances-repair/appliances-repair-service/", text: "Home Appliances Services" },
  { path: "/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-maintenance-services/", text: "Commercial Kitchen Equipment Maintenance" },
  { path: "/services/refrigeration-equipment/commercial-refrigeration-maintenance/", text: "Refrigeration Maintenance and Repair" },
  { path: "/services/refrigeration-equipment/ice-maker-repair/", text: "Ice Maker Machine Repair Services" }
];

const contactInfo = [
  { Icon: Icons.Location, text: "Warehouse # S-02 - Gate 35 Street 18B - Al Qouz Ind Fourth - Al Quoz - Dubai - United Arab Emirates" },
  {
    Icon: Icons.Phone,
    items: [
      { text: "+971 4 330 0002", href: "tel:+97143300002" }
    ]
  },
  {
    Icon: Icons.WhatsApp,
    items: [
      { text: "+971 50 746 4712", href: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello" }
    ]
  },
  { Icon: Icons.Email, text: "info@fajservices.ae", href: "mailto:info@fajservices.ae" }
];

const usefulLinks = [
  { path: "/faqs/", text: "FAQS" },
  { path: "/blogs/", text: "Blogs" },
  { path: "https://www.fajtradingllc.com/", text: "FAJ Store" },
  { path: "/testimonials/", text: "Testimonials" },
  { path: "https://www.fajtradingllc.com/collections/all-spare-accessories", text: "Spare Parts" }
];

const LazyMap = () => {
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const mapElement = mapRef.current;
    if (!mapElement) return undefined;

    if (!('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(mapElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className="cs_map_wrapper">
      {showMap ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.3424480096032!2d55.22508607483472!3d25.110623435202967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f699a600aceeb%3A0xa6121b25d557aa94!2sFAJ%20Technical%20Services%20L.L.C!5e1!3m2!1sen!2sae!4v1758520238062!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="FAJ Technical Services location"
        />
      ) : (
        <div className="cs_map_placeholder">
          <Icons.Location />
        </div>
      )}
    </div>
  );
};

const Footer1 = () => {
  return (
    <footer className="cs_footer cs_style_1 cs_heading_bg">
      <div className="cs_main_footer cs_white_color">
        <div className="container pb-4">
          <div className="cs_footer_row">
            {/* About Column */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_white_color cs_mb_10">About</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_menu mb-3">
                  {aboutLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.text}</Link>
                    </li>
                  ))}
                  <li className="d-none"><Link to="/orphan/">Orphan</Link></li>
                </ul>
                <div className="cs_social_btns cs_style_1">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="cs_center cs_accent_bg_light"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.Icon />
                    </a>
                  ))}

                </div>
              </div>
            </div>

            {/* Explore Column */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_white_color cs_mb_10">Our Services</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_menu">
                  {exploreLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Useful Links Column */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_white_color cs_mb_10">Useful Links</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_working_hours">
                  {usefulLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Us Column */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_white_color cs_mb_10">Contact Us</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_contact_list cs_mp_0">
                  {contactInfo.map((contact, index) => (
                    <li key={index}>
                      <span className={`footer-icons ${contact.Icon.name?.toLowerCase() || 'icon'}`}><contact.Icon /></span>
                      {contact.items ? (
                        contact.items.map((item, i) => (
                          <span key={i}>
                            <a href={item.href}>{item.text}</a>
                            {i < contact.items.length - 1 && <br />}
                          </span>
                        ))
                      ) : contact.href ? (
                        <a href={contact.href}>{contact.text}</a>
                      ) : (
                        contact.text
                      )}
                    </li>
                  ))}
                </ul>
                <LazyMap />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="cs_footer_bottom cs_white_color">
          <div className="container">
            <div className="cs_footer_bottom_in">
              <div className="cs_footer_copyright text-light">
                Copyright © {new Date().getFullYear()} <a className="text-light" href="https://www.fajservices.ae/">FAJ Technical Services L.L.C</a>. All Rights Reserved.
              </div>
              <div className="cs_payment_img">
                {/* <img
                  src="https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/icon/payment_card/public"
                  alt="Accepted payment methods"
                  width={270}
                  height={24}
                  loading="lazy"
                /> */}
                <svg width="270" height="32" viewBox="0 0 270 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_538_24238)">
                  <mask id="mask0_538_24238" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="52" height="32">
                  <path d="M51.5 0H0.5V32H51.5V0Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_538_24238)">
                  <path d="M51.5 27.7333C51.5 30.0896 49.3252 32 46.6428 32H5.35715C2.67478 32 0.5 30.0896 0.5 27.7333V4.26667C0.5 1.9104 2.67478 0 5.35715 0H46.6428C49.3252 0 51.5 1.9104 51.5 4.26667V27.7333Z" fill="#1565C0"/>
                  <path d="M17.6562 10.0557L14.8491 18.4883C14.8491 18.4883 14.1361 14.9212 14.0656 14.4734C12.4675 10.8008 10.1094 11.0053 10.1094 11.0053L12.8886 21.8992V21.897H16.2677L20.9401 10.0557H17.6562ZM20.3318 21.8992H23.4007L25.2565 10.0557H22.1491L20.3318 21.8992ZM42.0519 10.0557H38.8226L33.7878 21.8992H36.8366L37.4651 20.2077H41.309L41.6362 21.8992H44.4293L42.0519 10.0557ZM38.3159 17.9456L39.9867 13.4698L40.8611 17.9456H38.3159ZM29.6104 13.5076C29.6104 12.8551 30.1427 12.3696 31.6692 12.3696C32.6612 12.3696 33.7975 13.0952 33.7975 13.0952L34.2956 10.6091C34.2956 10.6091 32.844 10.0547 31.419 10.0547C28.1918 10.0547 26.5274 11.6094 26.5274 13.5776C26.5274 17.137 30.7808 16.6493 30.7808 18.4775C30.7808 18.7909 30.534 19.5155 28.7627 19.5155C26.986 19.5155 25.8134 18.8597 25.8134 18.8597L25.2843 21.2457C25.2843 21.2457 26.4206 21.8981 28.6162 21.8981C30.8172 21.8981 33.8702 20.24 33.8702 17.8585C33.8702 14.9934 29.6104 14.7867 29.6104 13.5076Z" fill="white"/>
                  <path d="M14.4759 16.4543L13.4432 11.3423C13.4432 11.3423 12.9761 10.2344 11.7618 10.2344C10.5475 10.2344 7.01562 10.2344 7.01562 10.2344C7.01562 10.2344 13.067 12.0346 14.4759 16.4543Z" fill="white"/>
                  </g>
                  </g>
                  <g clip-path="url(#clip1_538_24238)">
                  <mask id="mask1_538_24238" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="72" y="0" width="53" height="32">
                  <path d="M124.5 0H72.5V32H124.5V0Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask1_538_24238)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M72.5 26.9474C72.5 29.7379 74.7681 32 77.5659 32H119.434C122.232 32 124.5 29.7379 124.5 26.9474V5.05263C124.5 2.26214 122.232 0 119.434 0H77.5659C74.7681 0 72.5 2.26214 72.5 5.05263V26.9474Z" fill="#1B3771"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M98.7919 26.23C101.325 28.4542 104.732 29.8096 108.42 29.8096C116.358 29.8096 122.776 23.6264 122.776 15.9788C122.776 8.35866 116.359 2.14844 108.42 2.14844C104.732 2.14844 101.326 3.50443 98.7919 5.72809C95.8922 8.27693 94.0625 11.911 94.0625 15.9788C94.0625 20.0473 95.8922 23.7081 98.7919 26.23Z" fill="#E9B040"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M120.867 23.6761C120.867 23.4321 121.064 23.2422 121.346 23.2422C121.599 23.2422 121.796 23.4321 121.796 23.6761C121.796 23.9202 121.599 24.1372 121.346 24.1372C121.283 24.1377 121.22 24.1261 121.162 24.1031C121.104 24.0801 121.051 24.0461 121.006 24.0032C120.962 23.9603 120.926 23.9093 120.903 23.8531C120.879 23.797 120.867 23.7368 120.867 23.6761ZM121.346 24.0284C121.514 24.0284 121.684 23.866 121.684 23.6759C121.684 23.4856 121.515 23.3504 121.346 23.3504C121.149 23.3504 120.98 23.4859 120.98 23.6759C120.98 23.8658 121.149 24.0284 121.346 24.0284ZM121.261 23.8514C121.261 23.8744 121.242 23.8931 121.219 23.8931C121.196 23.8931 121.177 23.8744 121.177 23.8514V23.6532C121.177 23.561 121.252 23.4862 121.346 23.4862C121.374 23.4862 121.43 23.4862 121.458 23.5133C121.486 23.5409 121.515 23.5677 121.515 23.5947C121.515 23.6112 121.512 23.6277 121.507 23.6427C121.491 23.6889 121.453 23.7533 121.473 23.7981L121.484 23.8237C121.498 23.8564 121.474 23.8931 121.438 23.8931C121.416 23.8931 121.397 23.8796 121.39 23.8595L121.357 23.7632C121.35 23.7435 121.332 23.7302 121.31 23.7302C121.283 23.7302 121.261 23.752 121.261 23.7789V23.8514ZM121.261 23.6083C121.261 23.6308 121.28 23.6491 121.302 23.6491H121.374C121.402 23.6491 121.402 23.6215 121.402 23.5947C121.402 23.5947 121.402 23.5677 121.374 23.5677H121.302C121.28 23.5677 121.261 23.5858 121.261 23.6083Z" fill="#E9B040"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M103.434 14.5143C103.334 13.6503 102.557 13.05 101.677 13.05H95.3808C94.8777 13.05 94.5042 12.5879 94.6492 12.1119C94.7455 11.7953 95.0454 11.5855 95.38 11.5855H101.665C102.201 11.5855 102.577 11.0642 102.37 10.5757C102.251 10.2971 101.972 10.121 101.666 10.121H96.6875C96.1047 10.121 95.7314 9.51351 96.0307 9.01944C96.1683 8.79224 96.4186 8.6565 96.6865 8.6565H99.847C100.498 8.6565 100.888 7.96243 100.47 7.46947C100.318 7.29031 100.091 7.19231 99.854 7.19231H98.7059C98.1633 7.19231 97.8801 6.58989 98.2681 6.21516C98.5411 5.95151 98.5424 5.50959 98.2447 5.27357C95.7809 3.32082 92.6172 2.14844 89.1617 2.14844C81.2233 2.14844 74.8047 8.35866 74.8047 15.9788C74.8047 23.6261 81.2233 29.8096 89.1617 29.8096C92.8776 29.8096 96.2556 28.4539 98.7895 26.23C99.3902 25.683 98.9859 24.7657 98.169 24.7657H97.726C97.4898 24.7657 97.2643 24.6631 97.1167 24.481C96.7198 23.9911 97.0937 23.3015 97.7288 23.3015H100.893C101.161 23.3015 101.414 23.1688 101.555 22.9426C101.864 22.4454 101.481 21.8367 100.89 21.8367H95.9135C95.6066 21.8367 95.3246 21.6634 95.2037 21.3848C94.9906 20.8935 95.3741 20.3725 95.9152 20.3725H101.216C102.139 20.3725 102.975 19.7961 103.181 18.9077C103.294 18.4199 103.378 17.9313 103.434 17.4435C103.547 16.4701 103.547 15.4877 103.434 14.5143Z" fill="#CC2131"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M120.867 19.1683C120.867 18.9243 121.064 18.7344 121.346 18.7344C121.599 18.7344 121.796 18.9243 121.796 19.1683C121.796 19.4124 121.599 19.6294 121.346 19.6294C121.283 19.6299 121.22 19.6183 121.162 19.5953C121.104 19.5724 121.051 19.5384 121.006 19.4956C120.962 19.4526 120.926 19.4016 120.902 19.3454C120.879 19.2892 120.867 19.229 120.867 19.1683ZM121.346 19.5209C121.514 19.5209 121.684 19.358 121.684 19.1683C121.684 18.9784 121.515 18.8428 121.346 18.8428C121.149 18.8428 120.98 18.9784 120.98 19.1683C120.98 19.3577 121.149 19.5209 121.346 19.5209ZM121.261 19.3436C121.261 19.3666 121.242 19.3853 121.219 19.3853C121.196 19.3853 121.177 19.3666 121.177 19.3436V19.1454C121.177 19.0532 121.252 18.9784 121.346 18.9784C121.374 18.9784 121.43 18.9784 121.458 19.0054C121.486 19.0331 121.515 19.0598 121.515 19.0869C121.515 19.1035 121.512 19.1199 121.507 19.1349C121.491 19.1812 121.453 19.2455 121.473 19.2903L121.484 19.3159C121.498 19.3487 121.474 19.3853 121.438 19.3853C121.416 19.3853 121.397 19.3718 121.39 19.3517L121.357 19.2554C121.35 19.2357 121.332 19.2225 121.31 19.2225C121.283 19.2225 121.261 19.2443 121.261 19.2711V19.3436ZM121.261 19.1009C121.261 19.1233 121.28 19.1416 121.302 19.1416H121.374C121.402 19.1416 121.402 19.1139 121.402 19.0872C121.402 19.0872 121.402 19.0601 121.374 19.0601H121.302C121.28 19.0601 121.261 19.0784 121.261 19.1009Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M93.9199 19.9607C93.4413 20.0962 93.1035 20.1506 92.7375 20.1506C92.0056 20.1506 91.5552 19.7167 91.5552 18.9028C91.5552 18.7405 91.5832 18.5773 91.6113 18.388L91.6956 17.8455L91.7801 17.3839L92.4558 13.4791H93.9477L93.7789 14.3467H94.7079L94.4827 15.7842H93.5539L93.1315 18.1163C93.1315 18.1978 93.1035 18.2786 93.1035 18.3333C93.1035 18.6317 93.2723 18.7673 93.6385 18.7673C93.8357 18.7673 93.9483 18.7402 94.1171 18.7129L93.9199 19.9607ZM98.7337 19.906C98.2149 20.0665 97.6737 20.149 97.1289 20.1506C95.468 20.1506 94.4827 19.2826 94.4827 17.6012C94.4827 15.6489 95.637 14.1844 97.2134 14.1844C98.4803 14.1844 99.2964 14.9979 99.2964 16.2725C99.2964 16.6794 99.2403 17.0863 99.0999 17.6826H96.003V17.8455C96.003 18.5232 96.4534 18.8487 97.3541 18.8487C97.9173 18.8487 98.4239 18.7402 98.987 18.4962L98.7337 19.906ZM97.8046 16.5162V16.2455C97.8046 15.7845 97.5232 15.5134 97.0727 15.5134C96.5661 15.5134 96.2282 15.8659 96.0875 16.5166L97.8046 16.5162ZM82.0119 20.0421H80.4636L81.3645 14.6454L79.3657 20.0421H78.2963L78.1837 14.6725L77.2262 20.0421H75.7344L76.9448 13.0181H79.1686L79.2534 17.3572L80.7453 13.0181H83.2226L82.0119 20.0421ZM85.7562 17.4927C85.5874 17.4927 85.5591 17.4656 85.4464 17.4656C84.5738 17.4656 84.1234 17.7911 84.1234 18.3336C84.1234 18.7129 84.3482 18.9305 84.6861 18.9305C85.4464 18.9305 85.7278 18.3333 85.7562 17.4927ZM86.9947 20.0421H85.6435L85.6717 19.4453C85.3338 19.9063 84.8833 20.1506 84.0388 20.1506C83.2788 20.1506 82.6595 19.4997 82.6595 18.5773C82.6595 18.3066 82.7157 18.0625 82.7719 17.8455C83.0252 16.9503 83.9542 16.4078 85.3619 16.3808C85.5307 16.3808 85.8123 16.3807 86.0373 16.4078C86.0935 16.2184 86.0935 16.137 86.0935 16.0285C86.0935 15.6489 85.7839 15.5404 85.0521 15.5404C84.6016 15.5404 84.1234 15.6218 83.7571 15.703L83.5602 15.7845H83.4476L83.6728 14.5098C84.4048 14.2929 84.9114 14.2115 85.4745 14.2115C86.8257 14.2115 87.5294 14.781 87.5294 15.8929C87.5294 16.1637 87.5576 16.3808 87.4449 17.0047L87.1354 19.0386L87.0793 19.3912L87.0231 19.689V19.8789L86.9947 20.0421ZM106.222 14.4014C106.644 14.4014 107.038 14.5096 107.601 14.781L107.855 13.2351C107.714 13.1809 107.685 13.1809 107.489 13.0995L106.841 12.9639C106.644 12.9098 106.418 12.8828 106.137 12.8828C105.377 12.8828 104.927 12.8828 104.448 13.1809C104.195 13.3165 103.885 13.5334 103.52 13.9133L103.351 13.8589L101.746 14.9439L101.831 14.3473H100.169L99.2406 20.0424H100.789L101.352 16.9781C101.352 16.9781 101.578 16.5442 101.69 16.4084C101.971 16.0559 102.225 16.0559 102.534 16.0559H102.647C102.619 16.3813 102.591 16.7611 102.591 17.1408C102.591 19.0119 103.689 20.1782 105.378 20.1782C105.8 20.1782 106.166 20.1238 106.729 19.9612L107.01 18.361C106.504 18.6055 106.081 18.7135 105.687 18.7135C104.786 18.7135 104.251 18.0901 104.251 17.0052C104.251 15.486 105.039 14.4014 106.222 14.4014ZM119.368 13.0181L119.03 15.025C118.664 14.4826 118.214 14.2385 117.623 14.2385C116.807 14.2385 116.046 14.6725 115.568 15.513L114.582 14.9435L114.667 14.347H113.006L112.049 20.0421H113.625L114.131 16.9779C114.131 16.9779 114.526 16.5439 114.638 16.408C114.864 16.1373 115.117 16.0555 115.314 16.0555C115.127 16.5979 115.032 17.1658 115.032 17.7373C115.032 19.1744 115.821 20.1232 116.947 20.1232C117.51 20.1232 117.96 19.9339 118.383 19.4729L118.298 20.0424H119.79L120.973 13.0183L119.368 13.0181ZM117.482 18.6858C116.947 18.6858 116.694 18.3333 116.694 17.5742C116.694 16.4624 117.173 15.6489 117.904 15.6489C118.439 15.6489 118.721 16.0555 118.721 16.7879C118.721 17.8997 118.214 18.6858 117.482 18.6858ZM110.303 17.4927C110.135 17.4927 110.107 17.4656 109.994 17.4656C109.121 17.4656 108.671 17.7911 108.671 18.3336C108.671 18.7129 108.896 18.9305 109.234 18.9305C109.994 18.9305 110.275 18.3333 110.303 17.4927ZM111.542 20.0421H110.191L110.22 19.4453C109.882 19.9063 109.431 20.1506 108.586 20.1506C107.827 20.1506 107.151 19.5267 107.151 18.5773C107.179 17.2216 108.22 16.3808 109.909 16.3808C110.079 16.3808 110.36 16.3807 110.585 16.4078C110.642 16.2184 110.642 16.137 110.642 16.0285C110.642 15.6489 110.332 15.5404 109.6 15.5404C109.149 15.5404 108.643 15.6218 108.305 15.703L108.08 15.7845H107.995L108.22 14.5098C108.953 14.2929 109.459 14.2115 110.022 14.2115C111.373 14.2115 112.077 14.781 112.077 15.8929C112.077 16.1637 112.105 16.3808 111.993 17.0047L111.683 19.0386L111.627 19.3912L111.571 19.689L111.542 19.8789V20.0421ZM90.2321 15.5674C90.5419 15.5674 90.964 15.5946 91.4144 15.6489L91.6397 14.3199C91.1892 14.2659 90.5983 14.2115 90.2323 14.2115C88.515 14.2115 87.924 15.1065 87.924 16.164C87.924 16.8417 88.2616 17.3572 89.0781 17.7097C89.7255 18.0081 89.8381 18.0628 89.8381 18.3066C89.8381 18.6591 89.5002 18.8761 88.8809 18.8761C88.4307 18.8761 88.0084 18.7946 87.5014 18.6591L87.3326 19.9607H87.361L87.6424 20.0151C87.7266 20.0421 87.8676 20.0692 88.0364 20.0692C88.4304 20.1232 88.7399 20.1232 88.9371 20.1232C90.6545 20.1232 91.3864 19.4999 91.3864 18.2251C91.3864 17.4389 90.9923 16.9779 90.204 16.6524C89.5567 16.354 89.4721 16.3269 89.4721 16.0555C89.4721 15.7845 89.7535 15.5674 90.2321 15.5674Z" fill="#1B3771"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M108.272 12.7976L108.018 14.3162C107.455 14.0451 107.061 13.9366 106.639 13.9366C105.457 13.9366 104.64 15.0216 104.64 16.5672C104.64 17.6251 105.203 18.2755 106.104 18.2755C106.498 18.2755 106.92 18.1676 107.427 17.923L107.146 19.5232C106.583 19.6588 106.217 19.7132 105.767 19.7132C104.105 19.7132 103.064 18.574 103.064 16.7028C103.064 14.1807 104.499 12.4453 106.554 12.4453C106.836 12.4453 107.061 12.4724 107.258 12.4995L107.905 12.6621C108.103 12.7432 108.131 12.7432 108.272 12.7976ZM103.289 13.8552C103.233 13.8282 103.177 13.8281 103.12 13.8281C102.614 13.8281 102.332 14.0722 101.854 14.7502L101.994 13.8822H100.559L99.6295 19.6044H101.178C101.741 16.1063 101.882 15.5094 102.642 15.5094H102.754C102.895 14.8314 103.064 14.3162 103.346 13.8549L103.289 13.8552ZM94.3088 19.523C93.8864 19.6585 93.5488 19.7128 93.1826 19.7128C92.3942 19.7128 91.944 19.279 91.944 18.4652C91.944 18.3028 91.9721 18.1396 92.0002 17.9502L92.0844 17.3806L92.1689 16.9465L92.8447 13.0416H94.393L94.2242 13.8822H95.0125L94.7873 15.2924H93.9993L93.5768 17.6518C93.5768 17.7603 93.5488 17.8418 93.5488 17.8958C93.5488 18.1943 93.7176 18.3299 94.0838 18.3299C94.281 18.3299 94.3936 18.3027 94.5062 18.2755L94.3088 19.523ZM88.3126 15.6993C88.3126 16.404 88.6786 16.9194 89.495 17.2719C90.1424 17.5704 90.2269 17.6519 90.2269 17.923C90.2269 18.2755 89.9455 18.4383 89.326 18.4383C88.8754 18.4383 88.4533 18.357 87.9464 18.1944L87.7211 19.523H87.8057L88.0874 19.5774C88.2151 19.6147 88.348 19.6329 88.4814 19.6314C88.8474 19.6585 89.1572 19.6856 89.354 19.6856C90.9869 19.6856 91.7469 19.0894 91.7469 17.7875C91.7469 17.0013 91.4373 16.5402 90.649 16.1871C90.0014 15.9163 89.9171 15.8348 89.9171 15.5907C89.9171 15.2653 90.1704 15.1027 90.6771 15.1027C90.9869 15.1027 91.4089 15.1569 91.803 15.2113L92.0283 13.8822C91.6342 13.8281 91.0147 13.7737 90.649 13.7737C88.9038 13.7737 88.3126 14.6417 88.3126 15.6993ZM120.18 19.6044H118.688L118.772 19.0349C118.349 19.4689 117.899 19.6582 117.336 19.6582C116.21 19.6582 115.45 18.7364 115.45 17.2993C115.45 15.4008 116.604 13.8008 117.984 13.8008C118.603 13.8008 119.054 14.0449 119.475 14.5874L119.813 12.5803H121.362L120.18 19.6044ZM117.871 18.2482C118.603 18.2482 119.109 17.462 119.109 16.3232C119.109 15.6179 118.828 15.2113 118.293 15.2113C117.59 15.2113 117.082 15.9974 117.082 17.1364C117.082 17.8688 117.336 18.2482 117.871 18.2482ZM99.0661 19.4689C98.5313 19.6312 98.0247 19.7128 97.4616 19.7128C95.7161 19.7128 94.8154 18.8177 94.8154 17.1635C94.8154 15.1842 95.9697 13.7467 97.5461 13.7467C98.8131 13.7467 99.6291 14.5603 99.6291 15.8348C99.6291 16.2417 99.573 16.6486 99.4607 17.2449H96.364C96.3356 17.3263 96.3356 17.3535 96.3356 17.4078C96.3356 18.0588 96.7862 18.411 97.7152 18.411C98.2502 18.411 98.7569 18.3025 99.3199 18.0584L99.0661 19.4689ZM98.1938 16.0786V15.7804C98.1938 15.3194 97.9401 15.0483 97.4618 15.0483C96.9836 15.0483 96.6174 15.4279 96.4766 16.0786H98.1938ZM82.4011 19.6044H80.8527L81.7534 14.2078L79.7546 19.6044H78.6851L78.5725 14.2348L77.6154 19.6044H76.1797L77.3901 12.5803H79.6139L79.6984 16.9194L81.1906 12.5803H83.6115L82.4011 19.6044ZM86.2577 17.055C86.0886 17.028 86.0044 17.0279 85.8917 17.0279C85.0192 17.0279 84.5686 17.3263 84.5686 17.8958C84.5686 18.2484 84.7936 18.4927 85.1314 18.4927C85.7791 18.4927 86.2296 17.8958 86.2577 17.055ZM87.3835 19.6044H86.0886L86.117 19.0075C85.723 19.4691 85.216 19.6852 84.4841 19.6852C83.6396 19.6852 83.0765 19.0619 83.0765 18.1396C83.0765 16.7568 84.062 15.943 85.8072 15.943C85.976 15.943 86.2012 15.9431 86.4265 15.9701C86.4826 15.8075 86.4826 15.7263 86.4826 15.6178C86.4826 15.2382 86.2293 15.1025 85.4974 15.1025C85.0469 15.1025 84.5403 15.1566 84.2024 15.2651L83.9771 15.3191L83.8365 15.3462L84.0617 14.0717C84.8498 13.8547 85.3564 13.7731 85.9195 13.7731C87.2707 13.7731 87.9745 14.3427 87.9745 15.4277C87.9745 15.7261 87.9461 15.9427 87.8335 16.5666L87.5239 18.6006L87.4679 18.9532L87.4395 19.2511L87.4113 19.4409L87.3835 19.6044ZM110.805 17.055C110.637 17.028 110.552 17.0279 110.439 17.0279C109.566 17.0279 109.116 17.3263 109.116 17.8958C109.116 18.2484 109.341 18.4927 109.679 18.4927C110.298 18.4927 110.777 17.8958 110.805 17.055ZM111.931 19.6044H110.636L110.665 19.0075C110.27 19.4691 109.736 19.6852 109.031 19.6852C108.187 19.6852 107.596 19.0619 107.596 18.1396C107.596 16.7568 108.61 15.943 110.355 15.943C110.523 15.943 110.749 15.9431 110.973 15.9701C111.03 15.8075 111.03 15.7263 111.03 15.6178C111.03 15.2382 110.777 15.1025 110.044 15.1025C109.594 15.1025 109.088 15.1566 108.75 15.2651L108.524 15.3191L108.384 15.3462L108.609 14.0717C109.397 13.8547 109.904 13.7731 110.467 13.7731C111.818 13.7731 112.522 14.3427 112.522 15.4277C112.522 15.7261 112.494 15.9427 112.381 16.5666L112.071 18.6006L112.015 18.9532L111.959 19.2511L111.931 19.4409L111.931 19.6044ZM116.098 13.8552C116.069 13.8282 116.013 13.8281 115.957 13.8281C115.45 13.8281 115.14 14.0722 114.662 14.7502L114.803 13.8822H113.395L112.438 19.6044H114.014C114.549 16.1063 114.718 15.5094 115.45 15.5094H115.563C115.704 14.8314 115.901 14.3162 116.154 13.8549L116.098 13.8552Z" fill="white"/>
                  </g>
                  </g>
                  <g clip-path="url(#clip2_538_24238)">
                  <mask id="mask2_538_24238" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="145" y="0" width="51" height="32">
                  <path d="M195.5 0H145.5V32H195.5V0Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask2_538_24238)">
                  <path d="M191.974 0H149.026C147.082 0 145.5 1.57592 145.5 3.51298V28.487C145.5 30.4241 147.082 32 149.026 32H191.974C193.918 32 195.5 30.4241 195.5 28.487V3.51298C195.5 1.57592 193.918 0 191.974 0Z" fill="white"/>
                  <path d="M156.291 10.7657C155.761 10.391 155.07 10.2031 154.216 10.2031H150.913C150.651 10.2031 150.507 10.3377 150.479 10.6064L149.137 19.2706C149.123 19.3556 149.144 19.4334 149.199 19.5043C149.254 19.5751 149.323 19.6104 149.405 19.6104H150.975C151.25 19.6104 151.401 19.4761 151.429 19.2069L151.8 16.8712C151.814 16.758 151.862 16.6659 151.945 16.595C152.028 16.5243 152.131 16.4781 152.255 16.4569C152.379 16.4358 152.495 16.4252 152.606 16.4252C152.716 16.4252 152.846 16.4323 152.998 16.4464C153.149 16.4606 153.246 16.4675 153.287 16.4675C154.471 16.4675 155.4 16.1245 156.075 15.4377C156.749 14.7511 157.087 13.7991 157.087 12.5815C157.087 11.7463 156.821 11.1411 156.291 10.7657ZM154.588 13.3673C154.519 13.8628 154.34 14.1882 154.051 14.344C153.762 14.5 153.349 14.5775 152.812 14.5775L152.131 14.5987L152.482 12.3266C152.509 12.171 152.599 12.0931 152.75 12.0931H153.143C153.693 12.0931 154.093 12.1747 154.34 12.3372C154.588 12.5001 154.671 12.8436 154.588 13.3673Z" fill="#003087"/>
                  <path d="M191.151 10.2031H189.623C189.472 10.2031 189.382 10.281 189.355 10.4367L188.013 19.2706L187.992 19.313C187.992 19.3842 188.02 19.451 188.075 19.5148C188.13 19.5785 188.199 19.6103 188.281 19.6103H189.644C189.905 19.6103 190.05 19.4761 190.078 19.2069L191.42 10.5215V10.5004C191.42 10.3022 191.33 10.2031 191.151 10.2031Z" fill="#009CDE"/>
                  <path d="M172.692 13.6176C172.692 13.547 172.664 13.4796 172.61 13.416C172.554 13.3523 172.492 13.3203 172.424 13.3203H170.834C170.682 13.3203 170.558 13.3915 170.462 13.5326L168.274 16.8455L167.365 13.6602C167.296 13.4337 167.145 13.3203 166.911 13.3203H165.362C165.293 13.3203 165.231 13.3522 165.176 13.416C165.121 13.4796 165.094 13.547 165.094 13.6176C165.094 13.6461 165.228 14.0636 165.496 14.8705C165.765 15.6775 166.054 16.5483 166.364 17.4827C166.673 18.4169 166.835 18.9126 166.849 18.969C165.72 20.5547 165.156 21.4041 165.156 21.5172C165.156 21.7014 165.245 21.7933 165.424 21.7933H167.014C167.165 21.7933 167.289 21.7227 167.386 21.581L172.651 13.7662C172.678 13.7381 172.692 13.6887 172.692 13.6176Z" fill="#003087"/>
                  <path d="M187.501 13.3284H185.931C185.739 13.3284 185.622 13.562 185.581 14.0292C185.222 13.4632 184.569 13.1797 183.619 13.1797C182.628 13.1797 181.784 13.562 181.09 14.3265C180.394 15.091 180.047 15.9901 180.047 17.0235C180.047 17.8589 180.284 18.5242 180.759 19.0195C181.234 19.5154 181.871 19.7628 182.669 19.7628C183.068 19.7628 183.474 19.6777 183.887 19.5079C184.3 19.3381 184.624 19.1116 184.858 18.8284C184.858 18.8427 184.844 18.9063 184.817 19.0194C184.789 19.1329 184.775 19.218 184.775 19.2743C184.775 19.501 184.864 19.614 185.044 19.614H186.469C186.73 19.614 186.881 19.4797 186.923 19.2106L187.769 13.6682C187.783 13.5832 187.762 13.5055 187.707 13.4346C187.652 13.3639 187.583 13.3284 187.501 13.3284ZM184.806 17.5118C184.455 17.8658 184.032 18.0427 183.536 18.0427C183.137 18.0427 182.814 17.9296 182.566 17.7029C182.318 17.4768 182.194 17.1653 182.194 16.7686C182.194 16.2451 182.366 15.8024 182.71 15.4414C183.054 15.0804 183.481 14.8999 183.991 14.8999C184.376 14.8999 184.696 15.0167 184.951 15.2503C185.205 15.4839 185.333 15.806 185.333 16.2166C185.333 16.7262 185.157 17.1581 184.806 17.5118Z" fill="#009CDE"/>
                  <path d="M164.048 13.3284H162.479C162.286 13.3284 162.169 13.562 162.128 14.0292C161.756 13.4632 161.102 13.1797 160.166 13.1797C159.175 13.1797 158.332 13.562 157.636 14.3265C156.941 15.091 156.594 15.9901 156.594 17.0235C156.594 17.8589 156.831 18.5242 157.306 19.0195C157.781 19.5154 158.418 19.7628 159.216 19.7628C159.601 19.7628 160.001 19.6777 160.414 19.5079C160.827 19.3381 161.157 19.1116 161.405 18.8284C161.35 18.9983 161.322 19.147 161.322 19.2743C161.322 19.501 161.412 19.614 161.591 19.614H163.015C163.277 19.614 163.428 19.4797 163.469 19.2106L164.316 13.6682C164.33 13.5832 164.309 13.5055 164.254 13.4346C164.199 13.3639 164.13 13.3284 164.048 13.3284ZM161.353 17.5223C161.002 17.8696 160.572 18.0427 160.063 18.0427C159.663 18.0427 159.343 17.9296 159.103 17.7029C158.862 17.4768 158.741 17.1653 158.741 16.7686C158.741 16.2451 158.913 15.8024 159.257 15.4414C159.601 15.0804 160.028 14.8999 160.538 14.8999C160.923 14.8999 161.243 15.0167 161.498 15.2503C161.752 15.4839 161.88 15.806 161.88 16.2166C161.88 16.7404 161.704 17.1759 161.353 17.5223Z" fill="#003087"/>
                  <path d="M179.745 10.7657C179.215 10.391 178.523 10.2031 177.67 10.2031H174.387C174.111 10.2031 173.96 10.3377 173.932 10.6064L172.59 19.2705C172.576 19.3556 172.597 19.4334 172.652 19.5042C172.707 19.5751 172.776 19.6103 172.859 19.6103H174.552C174.717 19.6103 174.827 19.5184 174.882 19.3343L175.254 16.8712C175.267 16.7579 175.316 16.6659 175.398 16.595C175.481 16.5242 175.584 16.478 175.708 16.4568C175.832 16.4357 175.949 16.4252 176.059 16.4252C176.169 16.4252 176.3 16.4323 176.451 16.4464C176.603 16.4606 176.699 16.4674 176.74 16.4674C177.924 16.4674 178.853 16.1244 179.528 15.4376C180.202 14.7511 180.539 13.7991 180.539 12.5814C180.54 11.7463 180.274 11.1411 179.745 10.7657ZM177.628 14.259C177.325 14.4713 176.871 14.5775 176.265 14.5775L175.605 14.5987L175.956 12.3266C175.983 12.171 176.073 12.0931 176.224 12.0931H176.596C176.898 12.0931 177.139 12.1072 177.319 12.1355C177.497 12.1641 177.67 12.2522 177.835 12.4009C178 12.5496 178.082 12.7656 178.082 13.0487C178.082 13.6432 177.931 14.0466 177.628 14.259Z" fill="#009CDE"/>
                  </g>
                  </g>
                  <g clip-path="url(#clip3_538_24238)">
                  <mask id="mask3_538_24238" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="216" y="0" width="54" height="32">
                  <path d="M269.5 0H216.5V32H269.5V0Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask3_538_24238)">
                  <path d="M226.83 0H239.994C241.832 0 242.975 1.4528 242.546 3.2416L236.417 28.7637C235.984 30.5461 234.144 32 232.306 32H219.142C217.587 31.9989 216.527 30.9547 216.5 29.5509C216.496 29.2981 216.524 29.0347 216.59 28.7627L222.722 3.24053C223.15 1.4528 224.99 0 226.83 0Z" fill="#E21836"/>
                  <path d="M238.663 0H253.969C255.852 0 255.003 1.4528 254.56 3.2416L248.28 28.7648C247.839 30.5461 247.976 32 246.089 32H230.572C228.993 32 227.918 30.9813 227.869 29.6043C227.86 29.3365 227.889 29.0539 227.961 28.7637L234.45 3.24053C234.898 1.4528 236.569 0 238.454 0" fill="#00447C"/>
                  <path d="M253.178 0H266.133C267.477 0 268.45 0.775466 268.708 1.8912C268.758 2.1088 268.781 2.3392 268.775 2.5792C268.769 2.79253 268.74 3.0144 268.685 3.24053L262.557 28.7637C262.124 30.5461 260.282 32 258.442 32H245.283C243.744 32 242.694 30.9835 242.643 29.6096C242.632 29.3397 242.661 29.0571 242.731 28.7648L249.07 3.2416C249.499 1.4528 251.337 0 253.178 0Z" fill="#007B84"/>
                  <path d="M237.374 9.72686C237.004 9.51886 236.345 9.58396 235.894 9.87086C235.444 10.1515 235.383 10.5493 235.751 10.7595C236.114 10.9611 236.776 10.9024 237.224 10.6133C237.671 10.3275 237.739 9.93276 237.374 9.72686ZM263.446 11.0699L262.115 13.2544L261.816 10.6688L260.407 10.9824L260.923 15.2096L259.315 17.6555C259.272 17.7131 259.233 17.7525 259.18 17.7696C259.121 17.7963 259.046 17.8016 258.941 17.8016H258.896L258.551 18.8011L259.403 18.8021C260.005 18.8 260.43 18.4949 260.644 18.1355L265.369 10.6688L263.446 11.0699ZM240.548 17.0688L240.088 17.8165C239.99 17.9797 239.821 18.1355 239.449 18.1355H239.22L238.9 19.0688H239.659C240.553 19.0688 240.975 18.6091 240.975 18.6091H243.345L243.687 17.6139H241.696L242.015 17.0699L240.548 17.0688ZM227.206 11.6128C226.985 12.4128 226.818 12.9355 226.434 13.3035C226.169 13.5573 225.76 13.6779 225.385 13.6768C224.825 13.6768 224.351 13.3451 224.382 12.7989C224.384 12.7584 224.39 12.7157 224.398 12.672C224.673 11.2352 225.872 7.46875 225.872 7.46875H223.637L222.478 11.7675C222.478 11.7675 222.193 12.8 222.188 13.2384C222.183 13.5723 222.241 13.8453 222.374 14.0757C222.801 14.8064 224.065 14.9355 224.788 14.9355C226.024 14.9355 226.755 14.8245 227.352 14.4832C228.306 13.9392 228.582 13.2032 228.876 12.1632C229.208 10.9941 230.142 7.46875 230.142 7.46875H228.33C228.33 7.46875 227.207 11.6107 227.206 11.6128ZM230.939 14.9355L231.74 11.8752C231.914 11.8048 232.084 11.7355 232.245 11.7355C232.629 11.7355 232.716 12.0352 232.697 12.1547C232.681 12.2997 232.026 14.9355 232.026 14.9355H233.622L234.18 12.7296C234.411 11.9147 234.528 11.5008 234.381 11.1637C234.226 10.7872 233.831 10.6688 233.465 10.6688C233.226 10.6688 232.787 10.7467 232.39 10.9184C232.245 10.9835 232.109 11.0592 231.965 11.1339L232.082 10.6667L230.385 10.9163L229.29 14.9355H230.939ZM244.433 14.9355L245.234 11.8752C245.408 11.8048 245.578 11.7355 245.739 11.7355C246.124 11.7355 246.21 12.0352 246.191 12.1547C246.175 12.2997 245.52 14.9355 245.52 14.9355H247.116L247.674 12.7296C247.905 11.9147 248.022 11.5008 247.875 11.1637C247.72 10.7872 247.325 10.6688 246.959 10.6688C246.72 10.6688 246.281 10.7467 245.884 10.9184C245.739 10.9835 245.603 11.0592 245.459 11.1339L245.576 10.6667L243.879 10.9163L242.784 14.9355H244.433ZM234.687 14.9355H236.336L237.189 11.7355L235.5 11.9701L234.687 14.9355ZM255.623 8.13008C255.153 7.48688 254.181 7.47408 253.059 7.46875H252.232H250.398L248.323 14.9355H250.118L250.873 12.2688H251.208C252.352 12.2688 253.448 12.2539 254.399 11.6096C255.064 11.1552 255.573 10.5515 255.795 9.73545C255.852 9.53596 255.897 9.29806 255.904 9.06025C255.912 8.74766 255.81 8.37222 255.623 8.13008ZM253.712 9.80476C253.581 10.3029 253.226 10.7221 252.778 10.9237C252.41 11.0944 251.959 11.0699 251.5 11.0688H251.213L251.931 8.53545C252.093 8.53545 252.363 8.53545 252.636 8.53545C253.488 8.53545 253.759 9.04425 253.756 9.46876C253.756 9.57865 253.742 9.69166 253.712 9.80476ZM247.721 21.3355C247.721 21.3355 247.636 21.5691 247.609 21.648C247.586 21.7152 247.495 21.8688 247.237 21.8688H246.761V21.3355H245.483V24.0021C245.475 24.1973 245.686 24.5355 246.617 24.5355H247.676L248.001 23.6011L247.046 23.6021C246.762 23.6021 246.768 23.4784 246.764 23.2821C246.761 23.0688 246.761 22.6688 246.761 22.6688H247.663C248.493 22.6688 248.675 22.0224 248.738 21.8293L248.862 21.3355H247.721Z" fill="#FEFEFE"/>
                  <path d="M248.118 17.0641C246.411 17.0641 246.078 17.7787 246.078 17.7787L246.312 17.0641H244.937L242.688 23.5526C242.664 23.6273 242.634 23.7446 242.636 23.8715C242.643 24.1723 242.834 24.5307 243.731 24.5307L244.547 24.5297L244.911 23.4641C244.911 23.4641 244.502 23.4641 244.36 23.4641C244.181 23.4641 244.218 23.3254 244.218 23.3254L245.023 21.0299H247.044C248.714 21.0299 249.025 20.0699 249.175 19.6326L250.065 17.0641C250.065 17.0641 248.737 17.0641 248.118 17.0641ZM247.52 20.2641H245.246L245.48 19.6198H247.759L247.52 20.2641ZM248.115 18.6833C248.115 18.6833 246.965 18.6726 246.78 18.7046C245.966 18.8369 245.623 19.2465 245.623 19.2465L246.008 18.1307H248.306L248.115 18.6833ZM257.985 10.9137C257.985 10.9137 257.973 10.9563 257.953 11.0321C257.778 10.855 257.488 10.6641 257.031 10.6641C256.463 10.6641 255.966 10.855 255.383 11.3222C254.871 11.7382 254.614 12.3099 254.462 12.8571C254.403 13.0598 254.368 13.3809 254.368 13.5974C254.368 14.9307 255.597 14.9307 255.896 14.9307C256.345 14.9307 256.703 14.7697 256.993 14.5606C256.956 14.6918 256.889 14.9307 256.889 14.9307H258.538L259.681 10.6641L257.985 10.9137ZM256.383 13.9878C256.312 13.9878 255.886 13.9878 255.896 13.5494C255.9 13.3329 255.955 13.0907 256.038 12.8123C256.231 12.1638 256.491 11.5974 257.174 11.5974C257.708 11.5974 257.698 11.9995 257.47 12.8059C257.404 13.0374 257.219 13.4555 257.074 13.6593C256.864 13.9558 256.624 13.9878 256.383 13.9878ZM242.372 11.1899C242.035 10.7921 241.42 10.6651 240.779 10.6641C240.394 10.6641 239.474 10.6971 238.738 11.2817C238.21 11.7041 237.954 12.2779 237.794 12.8273C237.633 13.3873 237.435 14.3963 238.471 14.7729C238.791 14.8966 239.255 14.9307 239.557 14.9307C240.324 14.9318 241.116 14.7451 241.725 14.1894C242.194 13.7393 242.422 13.0683 242.503 12.7921C242.766 11.8779 242.595 11.4502 242.372 11.1899ZM239.715 13.9867C239.643 13.9867 239.217 13.9867 239.227 13.5483C239.232 13.3318 239.295 13.0459 239.369 12.8113C239.561 12.2011 239.824 11.5963 240.505 11.5963C241.039 11.5963 241.029 11.9985 240.801 12.8049C240.735 13.0363 240.55 13.4545 240.405 13.6582C240.195 13.9558 239.955 13.9878 239.715 13.9867ZM239.053 19.3201L238.723 20.2641H239.684L239.402 21.0843H238.438L238.091 22.0838H239.051L238.442 23.8321C238.36 24.0635 238.357 24.5297 239.28 24.5297H241.129L241.5 23.4641C241.5 23.4641 240.442 23.4641 240.158 23.4641C239.874 23.4641 239.95 23.2753 239.95 23.2753L240.368 22.0678H242.352L242.695 21.0854H240.71L241 20.2641H242.946L243.284 19.3201H239.053ZM260.476 20.1745L260.817 19.1974H256.23L255.896 20.1745H257.272L256.991 20.967H255.591L255.293 21.8331H256.522L255.428 23.1825C255.34 23.3009 255.155 23.4641 254.851 23.4641H254.298L254.406 23.1558H253.931L255.68 18.1307H256.302L256.497 17.5782C256.497 17.5782 256.497 17.9846 256.497 18.1297C256.497 18.5926 256.639 18.7974 257.43 18.7974H257.973L258.317 17.8001H258.064C257.897 17.8033 257.817 17.7531 257.831 17.6529V17.0641C257.831 17.0641 256.923 17.0641 256.411 17.0641C255.076 17.0641 254.248 17.1227 253.919 17.2049C253.52 17.3009 253.002 17.5857 253.002 17.5857L253.18 17.0641H251.704L249.588 23.1675H249.27L248.909 24.2001H252.174L252.06 24.5307H253.456L253.57 24.2001H254.027L253.907 24.5307H255.066C255.361 24.5307 255.598 24.4689 255.796 24.3654C256.003 24.2577 256.165 24.1051 256.304 23.9313L257.163 22.8582L257.294 23.9835C257.327 24.1883 257.411 24.5307 258.307 24.5307H258.953L259.327 23.4641H258.905C258.604 23.4641 258.539 23.2561 258.522 23.1473L258.372 22.055H257.673L257.957 21.8331H259.892L260.197 20.967H258.396L258.681 20.1745H260.476ZM252.822 18.1307H254.303L253.987 19.0406C253.987 19.0406 253.462 19.0705 253.199 19.1259C252.753 19.2219 252.381 19.3905 252.381 19.3905L252.822 18.1307ZM252.555 23.1675H251.071L251.465 22.0326H252.946L252.555 23.1675ZM253.327 20.9275C253.327 20.9275 252.934 20.9734 252.674 21.0289C252.221 21.1515 251.703 21.3307 251.703 21.3307L252.157 20.0315H253.644L253.327 20.9275Z" fill="#FEFEFE"/>
                  </g>
                  </g>
                  <defs>
                  <clipPath id="clip0_538_24238">
                  <rect width="51" height="32" fill="white" transform="translate(0.5)"/>
                  </clipPath>
                  <clipPath id="clip1_538_24238">
                  <rect width="52" height="32" fill="white" transform="translate(72.5)"/>
                  </clipPath>
                  <clipPath id="clip2_538_24238">
                  <rect width="50" height="32" fill="white" transform="translate(145.5)"/>
                  </clipPath>
                  <clipPath id="clip3_538_24238">
                  <rect width="53" height="32" fill="white" transform="translate(216.5)"/>
                  </clipPath>
                  </defs>
                  </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Contact Buttons */}
      <div className="mobile-whatsapp">
        <div className="navbar-end flex">
          <div className="cta-nav mob-callus">
            <a href="tel:+97143300002" className="button-whatsapp" aria-label="Call us">
              <Icons.PhoneOutline />
            </a>
          </div>
          <div className="cta-nav mob-whatsapp">

            <a href="https://api.whatsapp.com/send?phone=+971507464712&text=FAJ-Services"
              className="button-whatsapp"
              aria-label="Chat on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.WhatsApp />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Menu */}
      <div className="floating-menu">
        <ul className="flt-ul-icon">
          <li>

            <a href="https://api.whatsapp.com/send?phone=+971507464712&text=Hello-FAJ-Services"
            className="flt-icon-url"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp us"
            >
            <div className="flt-icon flt-icon-wh">
              <Icons.WhatsApp />
              <span className="flt-icon-text">+971507464712</span>
            </div>
          </a>
        </li>
        <li>
          <a href="tel:+97143300002" className="flt-icon-url" aria-label="Call us">
            <div className="flt-icon flt-icon-cl">
              <Icons.PhoneOutline />
              <div className="flt-icon-text">+97143300002</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    </footer >
  );
};

export default Footer1;
