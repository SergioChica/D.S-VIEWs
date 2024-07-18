import React, { useContext, useState } from 'react'
import { Formslogempleado } from '../../Shared/Forms/Forms'
import { Buttonlog } from '../../Shared/Button/Buttons'
import { useLocation } from 'wouter'


export const LoginEmpleados = () => {
  const [location, setLocation] = useLocation();
  return (
    <div className='w-full h-full flex flex-1 items-center relative'>
      <div>
<svg className="w-[470px] h-[488px] absolute bottom-[28rem] " width="299" height="186" viewBox="0 0 299 186" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className='cursor-pointer ' onClick={() => setLocation("/loginadmin")}
            fill="url(#paint0_linear_425_3047)" transform="translate(0 32)">
            <animate attributeName='d' dur="18000ms" repeatCount="indefinite"
              values='
              M271.652 79.8754C243.997 118.056 202.28 136.164 159.661 149.564C117.041 162.964 73.5195 171.656 31.5637 157.005C-10.4796 142.104 -50.7328 103.785 -72.6151 54.3203C-94.4973 4.85576 -97.697 -55.58 -75.6893 -97.7183C-53.5941 -139.607 -6.51553 -163.124 34.9907 -159.733C76.1853 -156.516 111.496 -126.565 159.099 -107.955C207.014 -89.1712 266.996 -81.654 290.216 -49.0558C313.299 -16.1337 299.394 41.9443 271.652 79.8754Z;
              M211.767 -2.82793C240.363 16.9551 268.155 46.7335 279.971 87.8888C291.793 129.276 287.638 182.039 260.385 199.783C232.912 217.533 182.334 200.03 138.932 193.908C95.5295 187.786 59.5237 193.037 33.9097 177.107C8.0684 160.951 -7.60843 123.39 -11.0243 82.9112C-14.6535 42.6706 -6.02166 -0.487628 18.4767 -21.8588C43.1883 -43.4682 83.9869 -43.2972 118.983 -38.0829C153.971 -33.1003 183.385 -22.8492 211.767 -2.82793Z;
              M111.192 -88.0835C148.094 -100.359 181.807 -112.931 211.452 -105.243C241.205 -97.199 266.771 -68.6459 281.159 -32.3267C295.774 4.09995 299.093 48.5409 284.008 88.5011C268.814 128.106 235.216 163.23 198.215 174.546C161.105 185.506 120.592 172.658 74.7532 157.586C29.0233 142.87 -22.3764 126.07 -36.5474 90.4624C-50.8363 55.1024 -27.8966 0.934259 3.3827 -31.6425C34.5534 -64.5749 74.4078 -76.0564 111.192 -88.0835Z;
              M229.3 2.85329C257.921 25.308 268.235 65.8339 256.242 96.342C244.026 126.999 209.261 147.957 176.502 165.676C143.725 183.565 112.509 198.512 85.2395 194.18C57.7473 189.997 33.9983 166.513 17.4658 143.292C0.933393 120.07 -8.3825 97.1103 -11.8059 69.4292C-15.2294 41.7482 -12.7603 9.34593 8.15105 -7.92511C29.0624 -25.1962 68.3977 -27.1651 111.306 -25.8091C154.215 -24.4532 200.901 -19.7501 229.3 2.85329Z;
              M257.247 0.271337C281.693 17.0715 284.627 47.2796 274.604 70.8645C264.336 94.4494 240.868 111.25 216.178 129.665C191.732 147.919 166.308 167.789 135.261 171.343C104.459 175.058 67.7897 162.62 36.0098 144.204C4.22983 125.95 -22.6609 101.719 -30.4836 72.4799C-38.5509 43.0796 -27.3056 8.5099 4.4743 -8.29031C36.2542 -24.929 88.5689 -23.9597 137.706 -21.8597C186.842 -19.7597 232.557 -16.5289 257.247 0.271337Z;
              M271.652 79.8754C243.997 118.056 202.28 136.164 159.661 149.564C117.041 162.964 73.5195 171.656 31.5637 157.005C-10.4796 142.104 -50.7328 103.785 -72.6151 54.3203C-94.4973 4.85576 -97.697 -55.58 -75.6893 -97.7183C-53.5941 -139.607 -6.51553 -163.124 34.9907 -159.733C76.1853 -156.516 111.496 -126.565 159.099 -107.955C207.014 -89.1712 266.996 -81.654 290.216 -49.0558C313.299 -16.1337 299.394 41.9443 271.652 79.8754Z
              '
            >
            </animate>
          </path>
          <defs>
<linearGradient id="paint0_linear_425_3047" x1="148.737" y1="120.683" x2="28.7373" y2="-15.8165" gradientUnits="userSpaceOnUse">
<stop offset="0.15" stop-color="#FE7A36"/>
<stop offset="0.859857" stop-color="#FF9F2E" stop-opacity="0.6"/>
</linearGradient>
</defs>
<text className='pointer-events-none' x="27.5%" y="55%" fill="white" fontSize="24px">empleado</text>
</svg>

      </div>
      <svg className="w-[300px] h-[388px] absolute top-[22rem] right-[4rem] " width="192" height="158" viewBox="0 0 192 158" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.18" d="M188.229 101.252C185.301 109.736 180.501 117.456 174.189 123.836C168.717 129.416 162.229 133.896 155.073 137.036C150.221 139.168 145.089 140.588 139.829 141.244C128.065 142.684 114.785 141.724 103.549 145.832C92.613 149.832 84.185 156.852 72.053 157.672C62.105 158.344 51.589 155.932 41.757 151.388C34.793 148.156 28.305 143.984 22.481 138.984C9.96498 128.204 1.11698 114.028 0.440978 99.8281C-0.103022 88.5201 5.12498 75.2881 14.409 69.0281C24.473 62.2601 31.057 52.3201 36.985 41.9481C43.957 29.7561 51.057 16.6801 63.217 9.6561C73.101 3.9481 86.849 1.8441 98.045 0.820096C100.845 0.564096 147.421 -2.9559 174.273 30.9441C189.413 50.0721 196.081 78.0481 188.229 101.252Z" fill="#FE7A36" />
        <path d="M100.225 13.3877H70.9609V42.9917H100.225V13.3877Z" fill="url(#paint0_linear_0_1)" />
        <path d="M62.7906 83.3882C62.1106 83.1922 61.4106 83.0882 60.7026 83.0762C59.8226 83.1282 58.9586 83.3122 58.1346 83.6242C56.9546 84.0202 55.7986 84.4802 54.6706 85.0002C54.0866 85.2682 53.4266 85.6722 53.3906 86.3122C54.2426 86.8322 55.3346 86.5322 56.2986 86.2682C57.2786 86.0002 58.2706 85.7842 59.2706 85.6242C58.7066 86.7082 58.2746 87.8602 57.9826 89.0482C57.7986 89.5842 57.8066 90.1642 58.0026 90.6962C58.2786 91.2522 58.8946 91.5362 59.4666 91.7762C60.6106 92.2602 61.8306 92.7482 63.0666 92.5522C63.8026 92.3922 64.5106 92.1042 65.1506 91.7042L66.5786 90.9282C66.6866 90.8802 66.7786 90.8082 66.8546 90.7162C66.9066 90.6242 66.9426 90.5242 66.9546 90.4202L67.4946 87.6882C67.5946 87.1602 68.1746 85.5962 67.8946 85.1642C67.7426 84.9402 66.9626 84.7642 66.6946 84.6842C66.2746 84.5242 65.8546 84.3642 65.4306 84.2122C64.5506 83.9042 63.6786 83.6162 62.7906 83.3882Z" fill="#FFB4A3" />
        <path d="M120.399 72.7319C119.451 76.9959 117.039 80.7839 114.535 84.3679C111.447 88.7119 107.391 92.2719 102.683 94.7679C99.7192 96.3439 96.6592 97.9439 93.3232 98.2799C90.9232 98.5239 88.4992 98.0959 86.1232 97.6639L74.2032 95.5079C71.8232 95.0799 69.2872 94.5719 67.5632 92.8759C66.5112 91.7959 65.9032 90.3639 65.8592 88.8559C65.7552 87.1759 66.3552 85.5319 67.5112 84.3079L84.8312 87.0079C85.9872 87.1839 87.1872 87.3639 88.3152 87.0399C89.5592 86.6799 90.5552 85.7479 91.4592 84.8159C95.2632 80.8839 98.4432 76.3919 100.879 71.4959C102.579 68.0679 103.279 64.1039 105.587 60.9679C108.359 57.1839 114.171 57.3679 117.443 60.5319C119.563 62.5879 120.603 65.4719 120.767 68.4479C120.839 69.8879 120.715 71.3279 120.399 72.7319Z" fill="#FE7A36" />
        <path d="M120.399 72.7326C119.451 76.9966 117.039 80.7846 114.535 84.3686C111.447 88.7126 107.391 92.2726 102.683 94.7686C99.7194 96.3446 96.6594 97.9446 93.3234 98.2806C90.9234 98.5246 88.4994 98.0966 86.1234 97.6646L74.2034 95.5086C71.8234 95.0806 69.2874 94.5726 67.5634 92.8766C66.5114 91.7966 65.9034 90.3646 65.8594 88.8566C68.8874 90.3966 76.9354 92.5846 78.0354 92.8566C82.5674 93.9726 87.5714 95.1086 92.2034 94.2606C95.0514 93.7406 97.9234 92.6246 99.1834 89.9006C100.631 86.7606 101.939 83.4646 103.095 80.1886C104.251 76.9126 105.531 73.5006 107.799 70.8126C110.067 68.1246 113.575 66.2126 117.043 66.7726C118.403 67.0006 119.683 67.5726 120.763 68.4326C120.839 69.8766 120.715 71.3206 120.399 72.7326Z" fill="url(#paint1_linear_0_1)" />
        <path d="M105.972 88.7646C105.428 85.2166 104.952 81.6606 104.6 78.0926C104.144 73.4166 103.132 67.7686 104.416 63.2046C105.344 60.1646 107.664 58.5486 110.268 56.6766C112.432 54.9886 114.868 53.6805 117.468 52.8045C119.32 52.3165 121.236 52.1045 123.152 52.1725C129.04 52.2965 137.056 53.9766 141.708 57.8206C145.204 60.7126 146.364 65.4926 147.208 69.9486C148.368 76.1046 149.28 82.2966 149.94 88.5246C150.04 89.4246 150.136 90.3286 150.212 91.2366C150.828 98.0886 151.452 105.205 150.612 112.061C150.356 114.217 150.056 116.385 148.348 117.801C144.324 121.149 137.252 120.869 132.32 121.001C125.764 121.169 119.036 121.321 112.84 119.173C111.572 118.861 110.46 118.101 109.708 117.029C108.976 115.725 109.328 114.117 109.52 112.629C110.376 105.997 107.772 99.6046 106.688 93.1606C106.436 91.6846 106.2 90.2206 105.972 88.7646Z" fill="#FE7A36" />
        <path d="M119.277 52.516C119.277 52.516 115.497 58.252 120.017 59.464C124.537 60.676 132.477 54.88 131.277 53.348C130.077 51.816 120.201 51.976 119.277 52.516Z" fill="url(#paint2_linear_0_1)" />
        <path d="M139.679 74.3483C139.303 73.7643 136.707 68.9283 136.191 69.1043C135.299 69.4723 134.643 70.2443 134.427 71.1843C134.223 72.1123 134.183 73.0683 134.303 74.0123C134.535 76.9923 134.927 80.0123 134.507 82.9603C134.087 85.9083 132.715 88.9043 130.179 90.4923C127.719 92.0323 124.547 92.0483 122.051 93.5323C121.755 93.7363 121.435 93.9003 121.099 94.0243C120.727 94.1163 120.339 94.1443 119.955 94.1123C117.167 94.0323 114.375 94.1323 111.599 94.4163C111.199 94.4563 110.663 94.6763 110.767 95.0683C110.811 95.2443 110.979 95.3523 111.131 95.4683C112.343 96.2483 113.375 97.2763 114.159 98.4843C114.559 99.0683 114.891 99.6923 115.151 100.352C115.271 100.7 115.243 101.18 115.371 101.488C115.499 101.796 117.235 104.188 117.527 104.176L140.911 103.46L145.767 84.7523L141.679 77.7723C140.979 76.6163 140.387 75.4563 139.679 74.3483Z" fill="url(#paint3_linear_0_1)" />
        <path d="M111.28 44.7164C111.02 43.0164 110.84 41.2764 110.744 39.5924C110.652 38.0924 110.636 36.5724 110.68 35.0684C110.712 34.0964 110.68 33.3564 111.428 32.6484C113.46 30.8684 115.96 29.7124 118.628 29.3084C120.628 28.9644 122.876 29.0884 124.46 30.3604C125.564 31.3604 126.332 32.6804 126.66 34.1324C127.688 37.7804 127.344 41.6364 127.428 45.4244C127.488 48.3564 127.824 51.2764 128.428 54.1444C127.184 55.3044 125.672 56.1444 124.028 56.5844C123.248 56.7084 122.452 56.7084 121.672 56.5844C121.244 56.5724 120.836 56.3924 120.532 56.0884C120.368 55.8004 120.284 55.4724 120.288 55.1404C120.284 54.8324 120.26 54.5244 120.22 54.2204C120.06 52.5084 119.744 50.8164 119.28 49.1604C119.26 49.0164 119.184 48.8884 119.068 48.8044C118.952 48.7684 118.824 48.7684 118.708 48.8044L118.236 48.8844C117.404 49.0924 116.556 49.2284 115.7 49.2844C114.676 49.3484 113.66 49.0404 112.848 48.4124C111.812 47.5604 111.48 46.0684 111.28 44.7164Z" fill="#FFB4A3" />
        <path d="M112.266 32.5762C111.554 33.2122 111.006 34.0082 110.666 34.9002C109.454 34.2402 109.006 32.7202 109.67 31.5082C109.718 31.4202 109.77 31.3362 109.826 31.2562C107.522 30.7442 106.898 27.8042 107.874 25.9162C108.226 25.3122 108.718 24.8042 109.31 24.4322C110.426 23.6402 111.73 23.1482 113.094 23.0042C115.094 22.8402 117.046 23.5802 118.746 24.6042C119.102 24.8682 119.51 25.0562 119.946 25.1482C120.338 25.1682 120.73 25.1162 121.102 24.9962C123.546 24.4162 126.242 24.6482 128.386 25.9562C129.642 26.7242 130.682 27.8362 132.01 28.4802C133.126 29.0282 134.47 29.2802 135.246 30.2402C135.926 31.1882 135.998 32.4442 135.43 33.4642C134.85 34.4602 133.938 35.2162 132.85 35.5962C133.582 36.8322 133.174 38.4282 131.938 39.1602C131.918 39.1722 131.894 39.1842 131.874 39.1962C131.474 39.3962 130.974 39.5082 130.674 39.8482C130.438 40.1042 130.366 40.4602 130.126 40.7322C129.57 41.3642 128.758 41.6922 128.634 42.6402C128.618 43.0402 128.646 43.4442 128.718 43.8402C128.77 44.4242 128.63 45.0082 128.318 45.5082C128.11 45.8282 127.774 46.5962 127.414 46.7282C127.054 46.8602 126.638 46.4842 126.458 46.1122C125.746 44.6602 125.658 43.0162 125.754 41.4322C125.834 40.1762 127.498 40.1762 127.582 38.7322C127.638 37.7402 126.646 36.7722 125.678 37.0122C124.506 37.3042 124.078 38.9282 122.938 39.2842L123.29 35.1122C123.318 34.9322 123.318 34.7522 123.29 34.5722C123.246 34.4242 123.186 34.2762 123.114 34.1402C122.81 33.4482 122.798 32.6602 123.082 31.9562C121.646 32.6602 120.078 33.0522 118.478 33.1042C116.866 33.1442 115.306 32.5402 114.142 31.4242C113.45 31.6882 112.814 32.0762 112.266 32.5762Z" fill="#473F47" />
        <path d="M118.262 48.8923C120.154 48.1963 121.97 47.3043 123.678 46.2363C124.846 52.1723 120.21 54.2363 120.21 54.2363C120.054 52.5203 119.742 50.8243 119.278 49.1643C119.258 49.0203 119.178 48.8923 119.062 48.8083C118.946 48.7723 118.822 48.7723 118.706 48.8083L118.234 48.8883H118.262V48.8923Z" fill="#DE9F93" />
        <path d="M118.514 96.3561C117.99 96.3921 117.466 96.3601 116.95 96.2681C116.462 96.1401 115.986 95.9801 115.522 95.7801C114.634 95.4721 113.73 95.2241 112.81 95.0361C111.926 94.7801 111.002 94.6881 110.086 94.7641C109.11 94.9041 108.238 95.4201 107.37 95.8921C106.078 96.5961 104.742 97.2201 103.37 97.7561C102.746 98.0041 102.042 98.2961 101.802 98.9201C101.702 99.1201 101.738 99.3601 101.898 99.5161C101.99 99.5681 102.094 99.6001 102.198 99.6001C102.854 99.6281 103.51 99.5721 104.15 99.4321L108.59 98.6681C108.914 99.6961 109.318 100.7 109.79 101.668C109.862 101.836 109.966 101.988 110.098 102.116C110.238 102.216 110.398 102.288 110.566 102.332C111.938 102.816 113.362 103.124 114.81 103.252C116.266 103.372 117.718 102.984 118.918 102.148C119.09 101.996 119.274 101.864 119.47 101.748C119.65 101.664 119.838 101.596 120.03 101.556C121.67 101.124 123.282 100.608 124.87 100.016C125.146 99.9121 124.83 98.0481 124.778 97.8041C124.662 97.2601 124.422 96.0881 123.878 95.9521C123.53 95.8641 122.918 96.0601 122.554 96.0921C122.114 96.1361 121.67 96.1721 121.226 96.2041C120.322 96.2761 119.418 96.3281 118.514 96.3561Z" fill="#FFB4A3" />
        <path d="M152.8 77.7087C154.348 82.5767 155.252 87.6247 155.488 92.7287C155.588 95.4047 155.376 98.3286 153.556 100.309C152.248 101.725 150.316 102.385 148.44 102.837C140.74 104.693 132.68 103.929 124.808 103.089C124.248 103.137 123.752 102.725 123.7 102.161C123.696 102.109 123.696 102.057 123.7 102.009L122.348 94.3047L136.48 92.1726C141.588 91.4006 138.764 84.1967 137.856 80.8647C136.62 76.3367 135.056 71.5366 136.328 66.8366C137.092 64.0366 138.804 59.8606 142.356 60.3166C145.768 60.7526 147.78 65.2127 149.048 67.9887C150.504 71.1447 151.76 74.3927 152.8 77.7087Z" fill="#FE7A36" />
        <path d="M180.033 103.112H15.4531V110.372H180.033V103.112Z" fill="url(#paint4_linear_0_1)" />
        <path d="M174.188 110.296V123.836C168.716 129.416 162.228 133.896 155.072 137.036C150.22 139.168 145.088 140.588 139.828 141.244C128.064 142.684 114.784 141.724 103.548 145.832C92.6125 149.832 84.1845 156.852 72.0525 157.672C62.1045 158.344 51.5885 155.932 41.7565 151.388C34.7925 148.156 28.3045 143.984 22.4805 138.984V110.296H174.188Z" fill="url(#paint5_linear_0_1)" />
        <path d="M174.188 110.296V123.836C168.716 129.416 162.228 133.896 155.072 137.036C150.22 139.168 145.088 140.588 139.828 141.244C128.064 142.684 114.784 141.724 103.548 145.832C92.6125 149.832 84.1845 156.852 72.0525 157.672C62.1045 158.344 51.5885 155.932 41.7565 151.388C34.7925 148.156 28.3045 143.984 22.4805 138.984V110.296H174.188Z" fill="url(#paint6_linear_0_1)" />
        <path d="M81.9103 37.4521V56.2281H67.7543L64.8263 61.3041L62.2543 56.2281H47.4023V37.4521H81.9103Z" fill="url(#paint7_linear_0_1)" />
        <path d="M81.9103 34.916V53.692H67.7543L64.8263 58.768L62.2543 53.692H47.4023V34.916H81.9103Z" fill="white" />
        <path d="M61.5213 50.7405L56.7773 45.3645L59.1733 43.2445L62.0413 46.4965L72.0373 39.6045L73.8533 42.2365L61.5213 50.7405Z" fill="#FE7A36" />
        <path d="M168.696 37.7725V51.3045H158.492L156.384 54.9605L154.528 51.3045H143.828V37.7725H168.696Z" fill="url(#paint8_linear_0_1)" />
        <path d="M168.696 35.9443V49.4763H158.492L156.384 53.1323L154.528 49.4763H143.828V35.9443H168.696Z" fill="white" />
        <path d="M165.395 40.0439H146.703V40.4439H165.395V40.0439Z" fill="#FE7A36" />
        <path d="M153.343 42.2441H146.703V42.6441H153.343V42.2441Z" fill="#FE7A36" />
        <path d="M162.796 42.2441H156.156V42.6441H162.796V42.2441Z" fill="#FE7A36" />
        <path d="M165.395 43.9766H146.703V44.3766H165.395V43.9766Z" fill="#FE7A36" />
        <path d="M153.343 46.1768H146.703V46.5768H153.343V46.1768Z" fill="#FE7A36" />
        <path d="M162.796 46.1768H156.156V46.5768H162.796V46.1768Z" fill="#FE7A36" />
        <path d="M109.054 99.8398H80.5781V103H109.054V99.8398Z" fill="#FE7A36" />
        <path d="M91.5068 103.068H48.6068L41.2148 73.9238H84.1108L91.5068 103.068Z" fill="#FE7A36" />
        <path opacity="0.18" d="M109.059 103H91.4908L91.5068 103.068H48.6108L41.2148 73.9199H84.1108L90.6908 99.8399H109.059V103Z" fill="#FE7A36" />
        <path d="M109.059 103H91.4908L91.5068 103.068H48.6108L41.2148 73.9199H84.1108L90.6908 99.8399H109.059V103Z" fill="url(#paint9_linear_0_1)" />
        <path d="M62.8177 92.3638C65.4244 92.3638 67.5377 90.2506 67.5377 87.6438C67.5377 85.037 65.4244 82.9238 62.8177 82.9238C60.2109 82.9238 58.0977 85.037 58.0977 87.6438C58.0977 90.2506 60.2109 92.3638 62.8177 92.3638Z" fill="#FE7A36" />
        <path opacity="0.3" d="M109.059 103H91.4911L91.5071 103.068H87.5951L80.2031 73.9199H84.1111L90.6911 99.8399H109.059V103Z" fill="white" />
        <path d="M168.583 100.365H167.107C164.035 100.361 161.547 97.8725 161.543 94.8005V94.0005C161.547 90.9285 164.035 88.4405 167.107 88.4365H168.583C171.655 88.4405 174.143 90.9285 174.147 94.0005V94.8005C174.143 97.8725 171.655 100.361 168.583 100.365ZM167.107 90.0365C164.919 90.0405 163.147 91.8125 163.143 94.0005V94.8005C163.147 96.9885 164.919 98.7605 167.107 98.7645H168.583C170.771 98.7645 172.543 96.9885 172.547 94.8005V94.0005C172.547 91.8125 170.771 90.0405 168.583 90.0365H167.107Z" fill="#FE7A36" />
        <path d="M155.414 86.248H169.278V98.336C169.278 101.012 167.11 103.18 164.434 103.18H160.274C157.598 103.18 155.43 101.012 155.43 98.336L155.414 86.248Z" fill="#473F47" />
        <defs>
          <linearGradient id="paint0_linear_0_1" x1="52.1609" y1="-69.1523" x2="98.3449" y2="65.3317" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="0.08" stop-opacity="0.69" />
            <stop offset="0.21" stop-opacity="0.32" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_0_1" x1="85.1274" y1="51.7366" x2="99.6994" y2="100.301" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="0.08" stop-opacity="0.69" />
            <stop offset="0.21" stop-opacity="0.32" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint2_linear_0_1" x1="120.961" y1="41.124" x2="127.073" y2="65.136" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="0.08" stop-opacity="0.69" />
            <stop offset="0.21" stop-opacity="0.32" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint3_linear_0_1" x1="147.519" y1="104.164" x2="121.259" y2="81.8603" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="0.08" stop-opacity="0.69" />
            <stop offset="0.21" stop-opacity="0.32" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint4_linear_0_1" x1="96.1211" y1="71.4403" x2="98.0931" y2="114.36" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#F4F2F4" />
          </linearGradient>
          <linearGradient id="paint5_linear_0_1" x1="98.7285" y1="166.724" x2="98.1925" y2="109.704" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#F4F2F4" />
          </linearGradient>
          <linearGradient id="paint6_linear_0_1" x1="91.0885" y1="-116.868" x2="100.76" y2="205.544" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="0.08" stop-opacity="0.69" />
            <stop offset="0.21" stop-opacity="0.32" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint7_linear_0_1" x1="61.2343" y1="14.9682" x2="66.9863" y2="68.5921" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="0.08" stop-opacity="0.69" />
            <stop offset="0.21" stop-opacity="0.32" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint8_linear_0_1" x1="153.796" y1="21.5685" x2="157.94" y2="60.2125" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="0.08" stop-opacity="0.69" />
            <stop offset="0.21" stop-opacity="0.32" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint9_linear_0_1" x1="80.7868" y1="129.644" x2="71.4788" y2="59.2239" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="0.08" stop-opacity="0.69" />
            <stop offset="0.21" stop-opacity="0.32" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>



      <div className='w-[90px] h-[93px] bg-[#FE7A3659] rounded-[50%] bottom-[30%]  left-[6%] absolute ' />
      <div className='w-[110px] h-[113px] bg-[#38197559] rounded-[50%] bottom-[4%] left-[12%] absolute ' />
      <Formslogempleado />
      <div className='w-[80px] h-[83px] bg-[#FE7A3659] rounded-[50%] top-[5%]  right-[12%] absolute ' />
      <div className='w-[126px] h-[123px] bg-[#FF9F2E59] rounded-[50%] top-[20%]  right-[8%] absolute ' />

    </div>
  )
}
