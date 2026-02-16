import { Link } from "react-router-dom";
import { useState, useEffect, memo } from "react";

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const Icons = {
  Facebook: () => (
    <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_2166)">
<rect x="4" width="30" height="30" rx="6" fill="#0884FF" shape-rendering="crispEdges"/>
<path d="M28.5 14.5625C28.5 9.04 24.0225 4.5625 18.5 4.5625C12.9775 4.5625 8.5 9.04 8.5 14.5625C8.5 19.5542 12.1567 23.6908 16.9375 24.4408V17.4533H14.3983V14.5617H16.9375V12.36C16.9375 9.85417 18.4308 8.46917 20.715 8.46917C21.8083 8.46917 22.9533 8.665 22.9533 8.665V11.1258H21.6917C20.4492 11.1258 20.0617 11.8967 20.0617 12.6875V14.5625H22.835L22.3917 17.4542H20.0617V24.4417C24.8433 23.6908 28.5 19.5533 28.5 14.5625Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1_2166" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
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
<rect x="4" width="30" height="31" rx="6" fill="url(#paint0_linear_1_2157)" shape-rendering="crispEdges"/>
<path d="M18.5 7.3025C21.17 7.3025 21.4867 7.3125 22.5417 7.36083C25.2517 7.48417 26.5175 8.77 26.6408 11.46C26.6892 12.5142 26.6983 12.8308 26.6983 15.5008C26.6983 18.1717 26.6883 18.4875 26.6408 19.5417C26.5167 22.2292 25.2542 23.5175 22.5417 23.6408C21.4867 23.6892 21.1717 23.6992 18.5 23.6992C15.83 23.6992 15.5133 23.6892 14.4592 23.6408C11.7425 23.5167 10.4833 22.225 10.36 19.5408C10.3117 18.4867 10.3017 18.1708 10.3017 15.5C10.3017 12.83 10.3125 12.5142 10.36 11.4592C10.4842 8.77 11.7467 7.48333 14.4592 7.36C15.5142 7.3125 15.83 7.3025 18.5 7.3025ZM18.5 5.5C15.7842 5.5 15.4442 5.51167 14.3775 5.56C10.7458 5.72667 8.7275 7.74167 8.56083 11.3767C8.51167 12.4442 8.5 12.7842 8.5 15.5C8.5 18.2158 8.51167 18.5567 8.56 19.6233C8.72667 23.255 10.7417 25.2733 14.3767 25.44C15.4442 25.4883 15.7842 25.5 18.5 25.5C21.2158 25.5 21.5567 25.4883 22.6233 25.44C26.2517 25.2733 28.275 23.2583 28.4392 19.6233C28.4883 18.5567 28.5 18.2158 28.5 15.5C28.5 12.7842 28.4883 12.4442 28.44 11.3775C28.2767 7.74917 26.2592 5.7275 22.6242 5.56083C21.5567 5.51167 21.2158 5.5 18.5 5.5ZM18.5 10.365C15.6642 10.365 13.365 12.6642 13.365 15.5C13.365 18.3358 15.6642 20.6358 18.5 20.6358C21.3358 20.6358 23.635 18.3367 23.635 15.5C23.635 12.6642 21.3358 10.365 18.5 10.365ZM18.5 18.8333C16.6592 18.8333 15.1667 17.3417 15.1667 15.5C15.1667 13.6592 16.6592 12.1667 18.5 12.1667C20.3408 12.1667 21.8333 13.6592 21.8333 15.5C21.8333 17.3417 20.3408 18.8333 18.5 18.8333ZM23.8383 8.9625C23.175 8.9625 22.6375 9.5 22.6375 10.1625C22.6375 10.825 23.175 11.3625 23.8383 11.3625C24.5008 11.3625 25.0375 10.825 25.0375 10.1625C25.0375 9.5 24.5008 8.9625 23.8383 8.9625Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1_2157" x="0" y="0" width="38" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2157"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2157" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1_2157" x1="33" y1="1.9967" x2="3.07225" y2="30.2932" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD08BC"/>
<stop offset="1" stop-color="#FEB308"/>
</linearGradient>
</defs>
</svg>

  ),
  Twitter: () => (
   <svg viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_2160)">
<rect x="4" width="30" height="31" rx="6" fill="#080808" shape-rendering="crispEdges"/>
<path d="M23.7052 7.375H26.4619L20.4394 14.2583L27.5244 23.625H21.9769L17.6319 17.9442L12.6602 23.625H9.90187L16.3435 16.2625L9.54688 7.375H15.2352L19.1627 12.5675L23.7052 7.375ZM22.7377 21.975H24.2652L14.4052 8.93833H12.766L22.7377 21.975Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1_2160" x="0" y="0" width="38" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
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
<rect x="4" width="30" height="31" rx="6" fill="#FE0808" shape-rendering="crispEdges"/>
<path d="M28.0817 10.654C27.9687 10.2284 27.7459 9.83991 27.4355 9.52751C27.1252 9.21512 26.7382 8.98974 26.3133 8.87396C24.7542 8.45313 18.5 8.45312 18.5 8.45312C18.5 8.45312 12.2458 8.45313 10.6858 8.87396C10.2612 8.98995 9.87441 9.2154 9.56423 9.52778C9.25405 9.84015 9.03133 10.2285 8.91833 10.654C8.5 12.224 8.5 15.499 8.5 15.499C8.5 15.499 8.5 18.774 8.91833 20.344C9.03132 20.7696 9.25415 21.158 9.56449 21.4704C9.87484 21.7828 10.2618 22.0082 10.6867 22.124C12.2458 22.5448 18.5 22.5448 18.5 22.5448C18.5 22.5448 24.7542 22.5448 26.3142 22.124C26.7391 22.0083 27.1261 21.7829 27.4364 21.4705C27.7468 21.1581 27.9696 20.7696 28.0825 20.344C28.5 18.774 28.5 15.499 28.5 15.499C28.5 15.499 28.5 12.224 28.0817 10.654ZM16.4542 18.4723V12.5256L21.6817 15.499L16.4542 18.4723Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1_2163" x="0" y="0" width="38" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
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
<filter id="filter0_d_1_2241" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
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
<filter id="filter0_d_1_2238" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
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
  { Icon: Icons.Pinterest, href: 'https://www.pinterest.com/fajtechnicalservices/', label: 'Pinterest' }
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

  useEffect(() => {
    const timer = setTimeout(() => setShowMap(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cs_map_wrapper">
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
                <img
                  src="https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/icon/payment_card/public"
                  alt="Accepted payment methods"
                  width={270}
                  height={24}
                  loading="lazy"
                />
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