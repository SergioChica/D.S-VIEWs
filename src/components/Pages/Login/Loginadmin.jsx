import React from 'react'
import { Formslogadmin } from '../../shared/Forms/Forms'
import { useLocation } from 'wouter'



export const LoginAdmin = () => {
  const [location, setLocation] = useLocation();
  return (
    <div className='w-full h-full flex flex-1 items-center relative'>
      <div > 

      <svg className="w-[470px] rotate-180 h-[488px] fixed right-[-1rem] top-[22rem] " width="316" height="235" viewBox="0 0 316 235" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className='cursor-pointer ' onClick={() => setLocation("/loginempleados")}
            fill="url(#paint0_linear_425_3047)" transform="translate(0 0)">
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
<stop offset="0.15" stop-color="#692FDB"/>
<stop offset="0.859857" stop-color="#381975" stop-opacity="0.6"/>
</linearGradient>
</defs>
<text className='pointer-events-none' x="30.5%" y="40%" fill="white" fontSize="24px">uı̣ɯpɐ</text>
</svg>

      </div>

      <svg className="w-[300px] h-[388px] absolute left-[4rem] bottom-[22rem] " width="192" height="158" viewBox="0 0 192 158" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.18" d="M176.3 127.6C169.528 136.072 160.448 147.44 148.748 157.44C137.048 167.44 122.588 176.144 105.22 179.116C100.612 179.904 95.9398 180.268 91.2638 180.208C88.6238 180.176 44.7038 178.952 22.8638 144.636C10.3478 124.956 7.34783 103.756 23.3958 85.4962C31.1118 76.6962 40.4758 68.8762 44.8958 58.0562C46.7398 53.5482 47.6318 48.6922 49.5718 44.2202C54.1358 33.7402 64.1358 26.3202 74.9878 22.8682C85.8398 19.4162 97.5518 19.5282 108.876 20.8682C123.216 22.5642 138.74 27.1642 146.392 39.4082C151.252 47.1842 152.132 56.8722 156.628 64.8602C160.228 71.2322 165.916 76.1642 171.992 80.2242C176.924 83.5202 182.392 86.5682 185.32 91.7362C186.404 93.6522 187.14 95.7442 187.5 97.9162C189.256 108.44 182.408 119.96 176.3 127.6Z" fill="#692FDB"/>
<path d="M148.751 157.44C136.995 167.48 122.591 176.144 105.223 179.116C106.519 168.952 110.623 150.288 110.623 150.288L143.611 144.536L148.751 157.44Z" fill="#473F47"/>
<path d="M118.581 110.82C117.873 115.552 115.529 119.876 113.069 123.984C111.465 126.64 109.533 129.076 107.309 131.24C105.329 133.176 103.613 134.632 100.613 134.288C98.4653 134.04 96.4933 132.964 94.7893 131.632C93.3853 130.604 92.2413 129.264 91.4453 127.72C90.8413 126.432 90.6013 125.004 90.7573 123.592C91.2333 119.292 94.9253 116.336 96.7133 112.608C98.7693 108.324 98.8773 103.236 101.481 99.1077C104.217 94.7597 110.581 94.5117 114.401 97.7197C116.873 99.8037 118.233 102.872 118.637 106.12C118.833 107.68 118.813 109.264 118.581 110.82Z" fill="#692FDB"/>
<path d="M84.0411 107.196C83.4611 106.22 82.4411 105.068 82.3251 103.96C82.1731 102.568 82.3251 101.188 82.0411 99.7956C81.6051 97.6556 80.2531 96.2596 79.1131 94.4756C78.5571 94.5636 78.4451 95.3036 78.4691 95.8636C78.5091 96.8036 78.7011 97.8636 78.5971 98.7916C78.4931 99.7196 77.5171 99.6436 76.9011 99.2516C74.2611 97.5596 70.9811 97.1796 67.8451 97.2516C67.6171 97.2396 67.3931 97.2796 67.1811 97.3676C66.9651 97.4596 66.8331 97.6716 66.8411 97.9036C66.8851 98.2276 67.2651 98.3716 67.5851 98.4436C68.4891 98.6516 69.4011 98.8116 70.3131 98.9756C70.8971 99.0516 71.4691 99.2236 72.0011 99.4796C72.5371 99.7476 72.9171 100.256 73.0171 100.848C72.4371 100.936 71.8411 100.896 71.2771 100.728C69.9611 100.464 68.6171 100.384 67.2771 100.48C66.9331 100.508 66.5331 100.588 66.3931 100.9C66.3091 101.224 66.4331 101.568 66.7091 101.76C67.2531 102.224 68.0051 102.32 68.7091 102.424C69.2931 102.508 69.8771 102.616 70.4531 102.74C70.9411 102.82 71.4131 102.996 71.8331 103.256C71.9011 103.304 71.9731 103.38 71.9491 103.46C71.9251 103.54 71.7891 103.56 71.6891 103.544C71.3691 103.48 71.0651 103.372 70.7531 103.288C69.5611 102.952 68.3011 102.924 67.0931 103.204C66.9411 103.24 66.7651 103.308 66.7411 103.46C66.7371 103.54 66.7571 103.62 66.8011 103.684C67.0731 104.028 67.4611 104.256 67.8931 104.324C68.9651 104.612 70.0891 104.748 71.0931 105.212C71.3571 105.304 71.5731 105.496 71.6931 105.744C70.5611 105.852 69.4211 105.372 68.2931 105.532C68.0971 105.544 67.9091 105.624 67.7651 105.756C67.5611 106.056 67.6331 106.468 67.9291 106.68C68.2211 106.876 68.5611 106.988 68.9131 107.004L71.0211 107.292C71.5131 107.344 72.0011 107.444 72.4771 107.584C73.3411 107.86 74.1291 108.34 74.7691 108.98C74.9491 109.192 75.0291 109.472 75.1931 109.692C75.8571 110.604 77.1491 110.304 77.5731 111.428C77.8091 112.048 77.9731 112.696 78.2211 113.316C78.4331 113.832 79.1211 114.78 79.1211 115.316C79.9211 117.016 80.6971 118.732 81.4611 120.428C82.2971 122.276 83.0611 124.148 84.0091 125.944C85.8291 129.336 88.2091 132.544 91.5691 134.536C92.4531 135.112 93.4611 135.468 94.5091 135.576C95.5731 135.672 96.6131 135.22 97.2731 134.376C97.5851 133.88 97.7811 133.32 97.8451 132.736C98.3371 129.596 97.2531 126.392 95.6171 123.668C93.9811 120.944 91.8131 118.588 89.8571 116.068C88.2971 114.072 86.8731 111.972 85.5891 109.788C85.0731 108.932 84.5571 108.068 84.0411 107.196Z" fill="#FFB4A3"/>
<path d="M102.936 134.052C100.256 134.452 97.5557 134.76 94.8517 134.932C94.1757 135.012 93.4877 134.976 92.8237 134.832C92.2317 134.64 91.6757 134.348 91.1837 133.968C87.4277 131.28 85.0397 127.132 82.7637 123.116C81.2637 120.408 80.0117 117.568 79.0157 114.636C78.4557 113.036 77.7477 111.436 76.4757 110.348C76.2637 110.164 76.0197 109.948 76.0117 109.684C77.1157 109.5 78.1597 110.196 79.0037 110.924C81.7477 113.296 82.7597 116.208 84.4957 119.236C84.8957 119.9 89.3877 126.704 89.3637 126.732C90.1157 125.964 91.3837 125.8 91.9837 124.912C92.3037 124.44 92.3397 123.864 92.5797 123.36C92.8197 122.856 93.2717 122.616 93.4917 122.2C93.9557 121.324 93.1437 120.036 92.7117 119.192C94.2837 118.644 96.2677 119.632 97.5837 118.608C97.9117 118.332 98.1837 118 98.3837 117.624C98.9717 116.624 99.4157 115.548 99.7037 114.424C100.568 111.012 99.9677 107.288 101.248 104.024C101.776 102.672 102.604 101.456 103.668 100.468C104.936 104.068 105.864 108.228 107.86 111.436C109.592 114.236 109.06 117.836 110.152 120.948C110.516 121.984 111.056 122.948 111.352 124.016C111.648 125.084 111.688 126.288 111.076 127.216C110.864 127.508 110.624 127.776 110.356 128.016L106.572 131.7C105.38 132.82 104.612 133.792 102.936 134.052Z" fill="url(#paint0_linear_425_4475)"/>
<path d="M103.66 123.756C102.712 123.048 101.916 122.16 101.312 121.144C100.048 118.848 100.38 116.044 100.744 113.448C101.34 109.24 101.944 105.048 102.528 100.824C102.988 97.6238 104.48 95.2638 107.708 94.0798C108.188 93.8758 108.7 93.7398 109.22 93.6798C109.996 93.6398 110.772 93.7038 111.556 93.6358C113.136 93.4598 114.704 93.1918 116.252 92.8358C117.044 92.6878 117.828 92.4838 118.592 92.2318C119.88 91.7678 121.036 91.0118 122.24 90.3558C123.58 89.6278 124.924 88.9998 126.444 89.3238C127.964 89.6478 129.504 89.5598 131 89.8398C134.036 90.3918 136.948 91.4758 139.604 93.0398C141.4 94.1078 143.048 95.4118 144.5 96.9158C150.26 102.916 149.216 112.612 147.78 119.936C147.008 123.868 146.272 127.852 145.26 131.728C144.932 133.172 144.824 134.652 144.936 136.128C145 137.36 145.788 138.58 146.044 139.804C146.64 142.62 146.308 145.556 145.096 148.168C144.812 148.848 144.376 149.456 143.824 149.948C143.124 150.44 142.324 150.768 141.484 150.916C137.536 151.888 133.524 152.576 129.516 153.26L124.824 154.06C121.432 154.708 118.008 155.168 114.568 155.44C113.656 155.492 112.7 155.512 111.888 155.1C110.76 154.524 110.18 153.256 109.828 152.04C109.34 150.344 109.14 148.58 109.236 146.82C109.324 145.18 109.84 143.84 110.26 142.316C110.68 140.792 110.52 138.736 110.484 137.116C110.448 135.404 110.284 133.7 109.984 132.016C109.82 130.828 109.468 129.676 108.936 128.6C107.8 126.492 105.544 125.276 103.66 123.756Z" fill="#692FDB"/>
<path d="M140.243 114.64C139.983 114.1 136.787 109 136.243 109.58C132.555 113.56 132.439 119.796 129.163 124.12C127.839 125.772 126.211 127.156 124.363 128.192C120.179 130.672 115.395 131.952 110.535 131.892C111.139 134.236 111.335 136.98 110.743 139.348C109.883 142.668 108.779 146.408 109.255 149.884C109.563 152.14 110.855 154.404 112.959 155.236C114.195 155.724 115.567 155.684 116.887 155.58C120.411 155.24 123.915 154.708 127.383 153.98L139.455 151.692C140.279 151.584 141.079 151.336 141.819 150.956C142.627 150.416 143.299 149.7 143.783 148.86C145.127 146.796 146.151 144.46 146.223 141.98C146.307 139.12 145.135 136.452 144.711 133.664C144.495 132.428 144.551 131.156 144.879 129.944C145.119 129.048 146.027 127.688 145.587 126.7L141.987 118.612C141.375 117.272 140.879 115.936 140.243 114.64Z" fill="url(#paint1_linear_425_4475)"/>
<path d="M137.036 95.9956C137.036 96.4636 136.636 96.7956 136.236 97.0876C132.72 99.7356 128.768 102.072 124.392 102.508C118.236 103.12 111.888 99.4556 109.344 93.8156C112.144 93.7156 114.876 93.4836 118.864 90.9836C119.076 90.8396 119.252 90.6516 119.384 90.4316C120.232 89.0876 120.292 86.2836 119.076 85.9676C118.956 85.9316 118.824 85.9236 118.7 85.9396H118.628C117.724 86.1556 116.8 86.2916 115.872 86.3396C114.752 86.4076 113.644 86.0716 112.756 85.3876C111.6 84.4716 111.232 82.8356 111.032 81.3516C110.744 79.4876 110.548 77.5876 110.44 75.7516C110.24 72.2476 109.456 69.0676 109.94 65.4996C109.98 65.0836 110.088 64.6796 110.264 64.2996C110.564 63.8156 110.992 63.4236 111.5 63.1716C112.884 62.4036 114.488 62.1156 116.072 61.9716C117.5 61.8316 119.028 61.7956 120.28 62.4956C121.916 63.4036 122.832 64.7196 124.632 65.3156C126.432 65.9116 127.48 68.0396 127.876 69.7956C129.008 73.7956 128.628 78.0156 128.72 82.1636C128.824 87.1316 129.38 93.4036 135.264 94.7436C136.032 94.9156 137.052 95.2036 137.036 95.9956Z" fill="#FFB4A3"/>
<path d="M112.271 67.8637C111.623 67.3757 111.035 66.8117 110.523 66.1797C109.947 68.8197 110.075 71.5557 110.427 74.2397L106.915 74.3677C106.571 74.4117 106.219 74.3597 105.903 74.2197C105.651 74.0477 105.447 73.8197 105.311 73.5477C103.543 70.6197 102.963 66.8837 104.223 63.6997C105.483 60.5157 108.739 58.0997 112.155 58.2637C112.323 58.2837 112.491 58.2717 112.651 58.2277C112.875 58.1197 113.059 57.9477 113.183 57.7317C115.715 53.9157 120.219 51.9037 124.751 52.5677C128.367 52.8957 131.787 54.3437 134.539 56.7117C136.747 58.6397 138.391 61.1277 139.299 63.9117C140.335 67.1117 139.439 69.8877 138.899 73.1117C138.455 75.7797 138.835 79.0277 141.183 80.3717C142.035 80.8557 143.027 81.0157 143.983 81.3157C147.095 82.3477 149.459 84.9037 150.243 88.0837C150.799 90.4357 149.959 93.4997 147.603 94.0397C147.087 94.1557 146.463 94.1877 146.187 94.6397C146.059 94.8957 146.007 95.1877 146.043 95.4717L146.107 99.0117C143.787 96.2477 139.931 95.4677 136.391 94.7557C132.851 94.0437 128.991 93.0037 126.991 89.9997C125.491 87.7437 125.391 84.8277 125.755 82.1437C126.119 79.4597 126.887 76.8157 126.955 74.1037C127.015 73.1197 126.563 72.1757 125.755 71.6077C125.119 71.2197 124.447 70.8837 123.755 70.6037C122.023 69.7717 120.575 68.4517 119.587 66.8077C119.887 67.9157 120.399 68.9557 121.087 69.8717C117.995 70.5157 114.779 69.7837 112.271 67.8637Z" fill="#473F47"/>
<path d="M125.063 87.7032C124.663 89.3392 123.719 90.9032 122.227 91.6792C121.783 91.9472 121.251 92.0312 120.747 91.9152C120.519 91.8312 120.311 91.7032 120.135 91.5392C119.807 91.2352 119.555 90.8552 119.403 90.4312C120.251 89.0872 120.311 86.2832 119.095 85.9672C119.147 85.8952 119.167 85.8592 119.151 85.8632L118.719 85.9392C119.875 85.5112 121.003 85.0232 122.103 84.4672C122.643 84.1912 123.183 83.8992 123.703 83.5912C123.899 83.4832 125.139 82.9192 125.139 82.6992C125.339 84.3632 125.447 86.0712 125.063 87.7032Z" fill="#DE9F93"/>
<path d="M147.257 124.147C147.257 124.283 147.257 124.419 147.277 124.547C147.373 125.879 147.813 127.023 147.485 128.383C146.917 130.727 144.617 132.355 142.241 132.783C139.865 133.211 137.441 132.603 135.149 131.823C133.369 131.215 131.465 130.339 130.705 128.623C130.277 127.499 130.177 126.275 130.417 125.095C130.597 124.023 130.661 122.947 130.749 121.847C131.149 116.723 131.337 111.195 134.401 106.831C136.237 104.219 139.549 100.567 143.033 102.359C146.389 104.079 146.797 109.419 147.073 112.759C147.297 115.491 147.413 118.231 147.397 120.971C147.389 121.995 147.233 123.103 147.257 124.147Z" fill="#692FDB"/>
<path d="M80.4928 130.084C79.1208 131.812 81.1688 135.728 85.0728 138.836C88.9768 141.944 93.2568 143.064 94.6328 141.336C94.8808 141.024 96.5768 138.996 96.6128 138.556C96.7608 136.556 93.2488 135.128 90.0528 132.584C86.7088 129.924 84.2848 126.984 82.4528 127.784C82.1368 127.9 80.6928 129.84 80.4928 130.084Z" fill="#692FDB"/>
<path d="M80.4928 130.084C79.1208 131.812 81.1688 135.728 85.0728 138.836C88.9768 141.944 93.2568 143.064 94.6328 141.336C94.8808 141.024 96.5768 138.996 96.6128 138.556C96.7608 136.556 93.2488 135.128 90.0528 132.584C86.7088 129.924 84.2848 126.984 82.4528 127.784C82.1368 127.9 80.6928 129.84 80.4928 130.084Z" fill="url(#paint2_linear_425_4475)"/>
<path d="M84.1075 134.028C84.9235 134.996 85.8355 135.88 86.8275 136.664C90.7355 139.772 95.0155 140.892 96.3875 139.164C97.7595 137.436 95.7115 133.516 91.8075 130.408C91.0035 129.768 90.1515 129.192 89.2595 128.684C86.1915 126.952 83.3275 126.556 82.2515 127.912C81.2475 129.172 82.0715 131.6 84.1075 134.028Z" fill="#692FDB"/>
<path opacity="0.3" d="M84.1082 134.028C83.9642 133.66 83.8322 133.284 83.7082 132.908C83.5842 132.436 83.5042 131.948 83.4722 131.46C83.3882 130.844 83.2122 130.332 83.5042 129.736C83.7482 129.252 84.1642 128.876 84.6682 128.676C85.4002 128.408 86.1962 128.396 86.9362 128.64C87.6602 128.88 88.3602 129.196 89.0162 129.584C88.9522 129.312 89.0162 129.028 89.1962 128.812L89.2802 128.688C86.2122 126.956 83.3482 126.56 82.2722 127.916C81.2482 129.172 82.0722 131.6 84.1082 134.028Z" fill="white"/>
<path d="M100.536 126.96C100.244 128.528 99.0595 129.78 97.5115 130.16C95.9795 130.496 95.2035 131.38 94.3995 132.728C93.7395 133.836 93.0755 135.02 93.0635 136.308C91.4355 135.948 89.9515 135.112 88.7995 133.908C87.6515 132.688 87.0195 131.068 87.0395 129.392C87.8115 129.452 88.5835 129.344 89.3115 129.08C90.9115 128.5 92.2875 127.2 92.5915 125.524C92.9875 123.332 95.0875 121.88 97.2755 122.276C97.2755 122.276 97.2795 122.276 97.2835 122.276C97.3995 122.296 97.5115 122.32 97.6235 122.352C99.6395 122.9 100.904 124.9 100.536 126.96Z" fill="#692FDB"/>
<path opacity="0.3" d="M97.6402 122.348C96.8642 122.748 95.9162 123.296 95.7442 123.416C94.7602 124.128 93.9562 125.064 93.4002 126.144C93.0522 126.824 92.8962 127.596 92.2522 128.072C91.8922 128.324 91.4842 128.496 91.0522 128.572C90.8802 128.604 90.7082 128.624 90.5402 128.672C90.1842 128.78 89.8762 129.008 89.5322 129.14C89.4602 129.164 89.3762 129.144 89.3242 129.088C89.6482 128.916 90.0002 128.804 90.3202 128.612C90.6442 128.42 90.9482 128.196 91.2282 127.944C91.7802 127.448 92.2002 126.82 92.4562 126.124C92.5242 125.928 92.5802 125.724 92.6162 125.52C93.0122 123.328 95.1122 121.876 97.3002 122.272C97.3002 122.272 97.3042 122.272 97.3082 122.272C97.4202 122.292 97.5322 122.316 97.6402 122.348Z" fill="white"/>
<path d="M100.419 124.988C100.627 125.624 100.675 126.3 100.555 126.96C100.263 128.528 99.0791 129.78 97.5311 130.16C95.9951 130.492 95.2231 131.38 94.4191 132.728C93.7591 133.836 93.0951 135.02 93.0831 136.308C91.4551 135.944 89.9751 135.112 88.8191 133.908C87.6711 132.688 87.0391 131.068 87.0591 129.392C87.0591 129.5 88.5391 129.304 88.6591 129.276C88.9951 129.228 89.3311 129.144 89.6511 129.032C89.8631 128.96 90.0911 128.96 90.3031 129.032L90.9231 129.148C92.6591 129.54 94.4751 129.252 96.0071 128.348C96.8351 127.892 97.4831 127.168 97.8431 126.292C98.1511 125.404 97.9191 124.292 97.1391 123.776C97.0471 123.724 96.9631 123.66 96.8911 123.58C96.7591 123.364 96.8111 123.088 97.0071 122.932C97.2071 122.788 97.4511 122.724 97.6951 122.756C98.3191 122.816 98.8991 123.1 99.3271 123.556C99.8031 123.936 100.175 124.428 100.419 124.988Z" fill="url(#paint3_linear_425_4475)"/>
<path d="M105.021 130.68C104.485 130.476 103.969 130.22 103.477 129.92C103.025 129.608 102.593 129.26 102.193 128.88C101.393 128.236 100.553 127.644 99.6768 127.108C98.8608 126.512 97.9448 126.072 96.9688 125.812C95.7448 125.568 94.4728 125.716 93.3368 126.24C92.1648 126.816 91.0568 127.228 90.0528 128.112C89.6448 128.436 89.3208 128.856 89.1168 129.336C89.0288 129.528 89.0288 129.744 89.1168 129.936C89.2248 130.084 89.3808 130.184 89.5608 130.216C90.2728 130.404 91.0128 130.14 91.7368 130.004C92.4608 129.868 93.3368 129.912 93.7648 130.508C94.1128 130.996 94.0288 131.656 93.9808 132.256C93.9448 132.872 93.9448 133.484 93.9808 134.1C93.9728 134.448 94.0448 134.788 94.1888 135.104C94.4488 135.484 94.8288 135.764 95.2648 135.904C95.9648 136.188 96.6928 136.396 97.4368 136.524C98.2368 136.664 99.0368 136.584 99.8368 136.664C100.529 136.756 101.229 136.792 101.929 136.768C102.721 136.68 103.517 136.668 104.309 136.732C106.309 136.98 108.437 137.892 110.445 138.28C114.989 139.164 119.589 139.728 124.193 140.16C130.221 140.724 136.717 140.96 141.865 137.76C142.785 137.244 143.565 136.512 144.145 135.632C144.721 134.732 144.805 133.6 144.361 132.628C144.061 132.12 143.653 131.688 143.161 131.36C140.609 129.472 137.265 128.96 134.093 129.136C130.921 129.312 127.833 130.16 124.705 130.736C120.917 131.432 117.065 131.748 113.213 131.68C110.537 131.628 107.565 131.652 105.021 130.68Z" fill="#FFB4A3"/>
<path d="M87.8219 69.6246L88.0819 78.0246L82.5899 71.7606C71.9939 74.4246 61.2459 67.9886 58.5819 57.3926C55.9179 46.7966 62.3539 36.0486 72.9499 33.3846C83.5459 30.7206 94.2939 37.1566 96.9579 47.7526C99.0939 56.2606 95.3779 65.1566 87.8219 69.6126V69.6246Z" fill="url(#paint4_linear_425_4475)"/>
<path d="M87.693 67.0885L87.953 75.4885L82.461 69.2245C71.865 71.8885 61.117 65.4525 58.453 54.8565C55.789 44.2605 62.225 33.5125 72.821 30.8485C83.417 28.1845 94.165 34.6205 96.829 45.2165C98.965 53.7245 95.249 62.6205 87.693 67.0765V67.0885Z" fill="white"/>
<path d="M72.4214 57.0166L65.9414 49.6726L69.2214 46.7806L73.1334 51.2166L86.7854 41.8086L89.2654 45.4046L72.4214 57.0166Z" fill="#692FDB"/>
<path d="M23.7734 94.3878L38.2014 97.0078C38.2014 97.0078 40.6014 86.3518 32.3174 85.0918C24.0334 83.8318 23.7734 94.3878 23.7734 94.3878Z" fill="url(#paint5_linear_425_4475)"/>
<path d="M23.7734 94.3878L38.2014 97.0078C38.2014 97.0078 40.6014 86.3518 32.3174 85.0918C24.0334 83.8318 23.7734 94.3878 23.7734 94.3878Z" fill="url(#paint6_linear_425_4475)"/>
<path d="M32.3183 85.0918C40.7183 87.4478 37.0183 96.0478 37.0183 96.0478C27.0183 124.048 32.3903 143.684 32.3903 143.684L71.1143 148.544C71.1143 148.544 71.2263 129.46 75.8023 113.764C77.8423 106.748 77.8503 101.516 77.2343 97.8718C76.5943 94.0718 73.5743 91.1158 69.7623 90.5598L32.3183 85.0918Z" fill="url(#paint7_linear_425_4475)"/>
<path opacity="0.51" d="M70.457 97.3199L44.305 93.2719C43.985 93.2039 43.781 92.8919 43.849 92.5719C43.849 92.5639 43.849 92.5559 43.853 92.5479L43.897 92.3119C43.945 91.9759 44.249 91.7359 44.589 91.7639L70.737 95.8119C71.057 95.8759 71.261 96.1879 71.197 96.5039C71.197 96.5159 71.193 96.5239 71.189 96.5359L71.145 96.7719C71.097 97.1079 70.797 97.3479 70.457 97.3199Z" fill="#692FDB"/>
<path opacity="0.51" d="M69.5428 102.204L43.3948 98.16C43.0748 98.092 42.8668 97.7761 42.9348 97.4521C42.9348 97.4481 42.9348 97.4441 42.9348 97.4401L42.9788 97.2081C43.0228 96.8721 43.3268 96.628 43.6668 96.66L69.8188 100.708C70.1348 100.776 70.3388 101.088 70.2748 101.404C70.2748 101.412 70.2708 101.424 70.2668 101.432L70.2228 101.664C70.1748 101.996 69.8748 102.236 69.5388 102.204H69.5428Z" fill="#692FDB"/>
<path opacity="0.51" d="M68.6249 107.092L42.4769 103.04C42.1569 102.972 41.9529 102.66 42.0209 102.34C42.0209 102.332 42.0209 102.324 42.0249 102.316L42.0689 102.08C42.1169 101.744 42.4169 101.504 42.7569 101.532L68.9089 105.58C69.2289 105.648 69.4329 105.96 69.3649 106.28C69.3649 106.288 69.3649 106.296 69.3609 106.304L69.3169 106.54C69.2689 106.88 68.9649 107.12 68.6249 107.092Z" fill="#692FDB"/>
<path opacity="0.51" d="M67.7148 111.976L41.5628 107.928C41.2428 107.86 41.0388 107.548 41.1068 107.228C41.1068 107.22 41.1068 107.212 41.1108 107.204L41.1548 106.972C41.2028 106.636 41.5068 106.392 41.8468 106.424L67.9948 110.468C68.3188 110.54 68.5228 110.86 68.4508 111.184C68.4508 111.184 68.4508 111.192 68.4508 111.196L68.4068 111.428C68.3588 111.764 68.0588 112.004 67.7188 111.976H67.7148Z" fill="#692FDB"/>
<path opacity="0.51" d="M66.7955 116.864L40.6475 112.816C40.3275 112.752 40.1235 112.44 40.1875 112.124C40.1875 112.112 40.1915 112.104 40.1955 112.092L40.2395 111.856C40.2835 111.52 40.5875 111.276 40.9275 111.308L67.0795 115.356C67.3955 115.424 67.5995 115.736 67.5355 116.052C67.5355 116.06 67.5315 116.072 67.5275 116.08L67.4835 116.316C67.4395 116.652 67.1355 116.896 66.7955 116.864Z" fill="#692FDB"/>
<path opacity="0.51" d="M61.0111 120.995L39.5911 117.679C39.3511 117.627 39.1991 117.395 39.2471 117.155C39.2471 117.151 39.2471 117.147 39.2471 117.139V117.059C39.2871 116.811 39.5111 116.635 39.7631 116.659L61.1871 119.975C61.4271 120.031 61.5791 120.271 61.5231 120.511C61.5231 120.511 61.5231 120.515 61.5231 120.519V120.595C61.4831 120.843 61.2591 121.019 61.0071 120.995H61.0111Z" fill="#692FDB"/>
<path opacity="0.51" d="M48.9391 125.143C44.7951 124.503 40.7351 127.731 39.8671 132.343C38.9991 136.955 41.6631 141.231 45.8071 141.871C49.9511 142.511 54.0151 139.287 54.8791 134.671C55.7431 130.055 53.0911 125.783 48.9391 125.143ZM46.0191 140.743C42.4471 140.191 40.1511 136.511 40.8951 132.523C41.6391 128.535 45.1471 125.751 48.7231 126.303C52.2991 126.855 54.5951 130.539 53.8471 134.527C53.0991 138.515 49.6071 141.287 46.0271 140.731L46.0191 140.743Z" fill="#692FDB"/>
<path d="M43.0391 132.604L45.6191 136.604L52.6191 131.428L51.9111 130.288L46.0111 134.244L44.4031 131.664L43.0391 132.604Z" fill="#692FDB"/>
<path d="M86.2699 83.6963L86.6099 85.1203C86.6499 85.2683 86.6499 85.4283 86.6099 85.5763C86.5659 85.6963 86.4899 85.8043 86.3899 85.8843C85.4739 86.7043 84.4379 87.3803 83.3179 87.8843C82.4379 88.3283 81.3499 89.1243 80.4219 89.3443C80.6299 88.3523 81.9339 87.4043 82.6299 86.7483C83.0259 86.4123 86.3259 83.9243 86.2699 83.6963Z" fill="#692FDB"/>
<path d="M74.9805 79.54L76.3845 79.94C76.5325 79.972 76.6725 80.044 76.7845 80.148C76.8645 80.248 76.9205 80.364 76.9445 80.492C77.2125 81.692 77.2885 82.932 77.1765 84.156C77.1285 85.144 77.2845 86.484 77.0165 87.4C76.2565 86.724 76.0765 85.124 75.8525 84.2C75.7365 83.704 75.2045 79.608 74.9805 79.54Z" fill="#692FDB"/>
<path d="M90.033 91.5244L89.441 92.8644C89.393 93.0124 89.305 93.1404 89.185 93.2404C89.073 93.3084 88.949 93.3444 88.821 93.3524C87.593 93.4604 86.357 93.3724 85.157 93.1004C84.185 92.9244 82.837 92.9004 81.957 92.5164C82.725 91.8484 84.333 91.8804 85.285 91.7804C85.809 91.7244 89.941 91.7404 90.033 91.5244Z" fill="#692FDB"/>
<defs>
<linearGradient id="paint0_linear_425_4475" x1="74.0717" y1="162.448" x2="99.8597" y2="104.252" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.08" stop-opacity="0.69"/>
<stop offset="0.21" stop-opacity="0.32"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_425_4475" x1="146.552" y1="155.996" x2="117.357" y2="124.816" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.08" stop-opacity="0.69"/>
<stop offset="0.21" stop-opacity="0.32"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_425_4475" x1="96.3648" y1="130.913" x2="82.6413" y2="134.774" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.08" stop-opacity="0.69"/>
<stop offset="0.21" stop-opacity="0.32"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_425_4475" x1="100.87" y1="140.024" x2="91.8765" y2="124.971" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.08" stop-opacity="0.69"/>
<stop offset="0.21" stop-opacity="0.32"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_425_4475" x1="85.3019" y1="-4.70739" x2="73.1219" y2="87.9086" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.08" stop-opacity="0.69"/>
<stop offset="0.21" stop-opacity="0.32"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_425_4475" x1="25.1166" y1="90.8801" x2="39.1146" y2="96.9666" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#F4F2F4"/>
</linearGradient>
<linearGradient id="paint6_linear_425_4475" x1="53.6393" y1="93.1846" x2="23.9903" y2="93.4" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.08" stop-opacity="0.69"/>
<stop offset="0.21" stop-opacity="0.32"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_425_4475" x1="23.4576" y1="107.457" x2="79.424" y2="131.792" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#F4F2F4"/>
</linearGradient>
</defs>
</svg>
  

      <div className='w-[90px] h-[93px] bg-[#FE7A3659] rounded-[50%] bottom-[30%]  left-[6%] absolute ' />
      <div className='w-[110px] h-[113px] bg-[#38197559] rounded-[50%] bottom-[4%] left-[12%] absolute ' />
      <Formslogadmin />
      <div className='w-[80px] h-[83px] bg-[#FE7A3659] rounded-[50%] top-[5%]  right-[12%] absolute ' />
      <div className='w-[126px] h-[123px] bg-[#FF9F2E59] rounded-[50%] top-[20%]  right-[8%] absolute ' />

    </div>
  )
}
