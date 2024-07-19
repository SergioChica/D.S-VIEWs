import React, { useContext } from 'react'
import { Formsreg } from '../../shared/Forms/Forms'
import { AppContext } from '../../../contexts/app.context'



export const Register = () => {
  return (
    <div className='w-full h-full flex flex-1 items-center relative'>
      <div className='w-[90px] h-[93px] bg-[#FE7A3659] rounded-[50%] bottom-[30%]  left-[6%] absolute ' />
      <div className='w-[110px] h-[113px] bg-[#38197559] rounded-[50%] bottom-[4%] left-[12%] absolute ' />
      <svg className="w-[456px] h-[488px] absolute left-[190px] " width="256" height="288" viewBox="0 0 256 288" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.18" d="M253.494 103.723C257.19 118.369 254.226 133.903 245.394 146.155C238.878 155.023 229.59 161.659 223.8 170.995C211.296 191.161 218.01 218.695 206.538 239.467C196.95 256.843 177.09 265.381 158.646 272.707C144.162 278.455 129.54 284.239 114.186 286.561C98.8376 288.877 82.3256 287.407 69.0236 279.421C58.0556 272.851 49.9976 262.441 42.5516 252.043C24.2576 226.465 7.71559 198.607 2.09959 167.659C-3.51641 136.711 3.49159 102.001 26.5316 80.5933C37.7456 70.1653 52.4396 62.9773 60.3536 49.8673C68.6576 36.1093 68.7716 16.9153 81.6836 7.32732C86.4476 3.78732 92.3696 2.14332 98.2496 1.36332C112.404 -0.460678 126.768 2.30532 139.236 9.24732C151.884 16.3333 162.27 27.6013 176.046 32.1373C193.878 38.0113 216.768 33.4993 228.618 50.8753C238.14 64.8493 249.252 87.4453 253.482 103.723H253.494Z" fill="url(#paint0_linear_0_1)"/>
<path d="M177.565 207.481C177.565 209.695 177.457 211.879 177.259 214.039C173.623 253.945 138.319 283.345 98.413 279.709C61.351 276.331 32.857 245.461 32.449 208.249V207.523C32.047 167.449 64.213 134.635 104.287 134.239C144.361 133.837 177.175 166.003 177.571 206.077C177.571 206.563 177.571 207.043 177.571 207.529V207.487L177.565 207.481Z" fill="#692FDB"/>
<path d="M177.565 207.481C177.565 209.695 177.457 211.879 177.259 214.039C160.561 225.397 135.985 232.567 108.583 232.567C76.723 232.567 48.733 222.889 32.449 208.207V207.481C32.047 167.407 64.213 134.593 104.287 134.197C144.361 133.795 177.175 165.961 177.571 206.035C177.571 206.521 177.571 207.001 177.571 207.487H177.565V207.481Z" fill="url(#paint1_linear_0_1)"/>
<path d="M138.278 179.114C141.176 180.158 144.326 180.902 146.696 182.882C148.802 184.628 150.086 187.154 151.118 189.68C154.568 198.158 155.816 207.38 154.736 216.47C154.448 218.888 154.01 221.378 154.64 223.712C155.27 226.046 157.418 228.23 159.836 227.942C163.19 221.282 163.262 213.506 163.268 206.048C163.268 200.606 163.268 195.044 161.444 189.908C159.95 185.678 157.316 181.946 154.592 178.388C144.668 165.356 132.656 153.2 117.362 147.338C116.726 147.014 116 146.924 115.304 147.086C112.154 148.238 112.67 153.842 113.894 156.092C115.634 159.2 117.566 162.2 119.684 165.062C124.334 171.494 130.808 176.39 138.266 179.114H138.278Z" fill="url(#paint2_linear_0_1)"/>
<path d="M109.641 162.752C109.683 161.78 109.809 160.808 110.019 159.854C110.247 158.888 110.991 158.132 111.951 157.892C112.347 157.88 112.743 157.844 113.139 157.784C113.943 157.538 114.285 156.602 114.513 155.798L117.081 146.822C117.573 145.082 118.071 143.258 117.699 141.5C117.105 138.746 114.579 136.886 112.119 135.542C110.331 134.558 108.315 133.682 106.329 134.048C103.245 134.618 101.457 137.804 100.305 140.726C98.9669 143.852 98.1389 147.176 97.8629 150.566C97.6589 154.484 97.3289 164.078 99.7529 167.504C103.113 172.31 109.107 167.096 109.641 162.752Z" fill="url(#paint3_linear_0_1)"/>
<path d="M177.614 93.8354C177.41 94.2734 177.128 94.6694 176.78 95.0054C174.02 97.9214 170.45 99.9374 166.526 100.795C165.14 101.113 163.724 101.275 162.302 101.275C161.468 95.9054 160.622 90.5234 159.968 85.1294C159.452 80.9174 159.068 76.7114 158.888 72.4814C158.762 69.8294 153.026 60.5894 154.196 58.1174C155.492 55.3934 164.828 64.7114 165.878 66.4874C171.704 76.2614 173.798 83.8214 177.794 92.2274C177.944 92.7674 177.878 93.3434 177.608 93.8354H177.614Z" fill="#692FDB"/>
<path d="M167.473 99.8114C167.191 100.177 166.879 100.507 166.531 100.813C165.145 101.131 163.729 101.293 162.307 101.293C161.473 95.9234 160.627 90.5414 159.973 85.1474C160.219 80.9114 160.663 76.6874 161.311 72.4814C161.035 74.2394 163.201 78.0795 163.789 79.8015L166.333 87.3075C167.659 91.2255 170.491 95.9894 167.467 99.8114H167.473Z" fill="url(#paint4_linear_0_1)"/>
<path d="M164.346 109.004C164.928 112.538 165.666 116.114 167.406 119.24C168.306 120.848 169.644 122.426 171.462 122.708C172.47 122.804 173.49 122.654 174.432 122.264C176.376 121.592 178.212 120.638 179.874 119.426C181.464 118.208 182.964 116.876 184.356 115.436C186.432 113.48 188.352 111.362 190.098 109.106C190.902 108.02 191.634 106.874 192.51 105.842C196.128 101.534 201.924 99.6016 206.028 95.7556C207.138 94.7296 209.382 90.0196 209.214 88.5136C207.708 87.6436 204.618 91.1416 202.95 91.6516C201.282 92.1616 199.728 92.9836 198.054 93.4516C196.05 94.0096 193.938 94.0396 191.922 93.5296C191.244 93.3556 190.428 82.6156 189.75 82.8616C189.408 83.0056 189.102 83.2216 188.85 83.4976C187.446 84.9436 186.678 97.3036 185.514 98.9116C183.912 101.084 181.698 102.734 179.502 104.312C179.304 104.45 179.058 104.594 178.842 104.486C178.698 104.378 178.602 104.216 178.584 104.036C178.014 101.912 177.366 99.8056 176.664 97.7296C176.172 96.2836 175.476 94.6876 174.024 94.2556C172.728 93.8716 171.384 94.6036 170.22 95.3056C168.726 96.2176 167.22 97.1176 165.738 98.0356C164.91 98.5396 163.914 99.0376 163.524 99.9676C163.044 101.09 163.452 102.638 163.59 103.79C163.806 105.536 164.058 107.264 164.34 108.986L164.346 109.004Z" fill="#FFAA71"/>
<path d="M148.694 151.418C155.264 153.638 162.26 154.574 168.59 157.406C169.004 157.532 169.346 157.82 169.532 158.21C169.586 158.522 169.544 158.846 169.418 159.134C164.072 175.028 161.06 191.612 160.466 208.37C164.252 209.054 168.122 209.138 171.938 208.622C172.364 208.598 172.784 208.466 173.15 208.238C173.504 207.932 173.768 207.536 173.918 207.092C180.044 193.34 185.54 179.33 190.412 165.062C191.276 162.536 192.128 159.89 191.78 157.244C191.282 153.386 188.378 150.344 185.618 147.602L164.12 126.158C163.574 125.54 162.902 125.048 162.152 124.712C161.288 124.454 160.376 124.412 159.488 124.58C151.01 125.63 139.43 125.954 123.848 125.306C121.826 125.222 131.81 136.724 132.644 138.932C133.31 140.684 135.416 142.946 136.706 144.302C139.934 147.692 144.296 149.93 148.694 151.418Z" fill="#525263"/>
<path d="M148.694 151.418C155.264 153.638 162.26 154.574 168.59 157.406C169.004 157.532 169.346 157.82 169.532 158.21C169.586 158.522 169.544 158.846 169.418 159.134C164.072 175.028 161.06 191.612 160.466 208.37C164.252 209.054 168.122 209.138 171.938 208.622C172.364 208.598 172.784 208.466 173.15 208.238C173.504 207.932 173.768 207.536 173.918 207.092C180.044 193.34 185.54 179.33 190.412 165.062C191.276 162.536 192.128 159.89 191.78 157.244C191.282 153.386 188.378 150.344 185.618 147.602L164.12 126.158C163.574 125.54 162.902 125.048 162.152 124.712C161.288 124.454 160.376 124.412 159.488 124.58C151.01 125.63 139.43 125.954 123.848 125.306C121.826 125.222 131.81 136.724 132.644 138.932C133.31 140.684 135.416 142.946 136.706 144.302C139.934 147.692 144.296 149.93 148.694 151.418Z" fill="url(#paint5_linear_0_1)"/>
<path d="M159.368 217.88C158.84 218.702 158.486 219.62 158.318 220.58C157.934 222.266 157.646 223.97 157.466 225.686C157.322 227.018 157.268 228.464 158.03 229.562C158.792 230.66 160.04 231.056 161.216 231.512C164.168 232.73 167.036 234.14 169.802 235.736C171.668 236.762 173.618 237.83 175.748 237.908C177.878 237.986 180.23 236.822 180.716 234.752C180.884 233.756 180.8 232.73 180.47 231.776C179.306 227.624 177.026 223.868 173.882 220.916C173.33 220.376 172.718 219.908 172.052 219.518C171.416 219.188 170.75 218.918 170.06 218.708C168.128 218 166.142 217.43 164.132 217.004C162.374 216.722 160.592 216.2 159.374 217.886L159.368 217.88Z" fill="#231F20"/>
<path d="M159.368 217.88C158.84 218.702 158.486 219.62 158.318 220.58C157.934 222.266 157.646 223.97 157.466 225.686C157.322 227.018 157.268 228.464 158.03 229.562C158.792 230.66 160.04 231.056 161.216 231.512C164.168 232.73 167.036 234.14 169.802 235.736C171.668 236.762 173.618 237.83 175.748 237.908C177.878 237.986 180.23 236.822 180.716 234.752C180.884 233.756 180.8 232.73 180.47 231.776C179.306 227.624 177.026 223.868 173.882 220.916C173.33 220.376 172.718 219.908 172.052 219.518C171.416 219.188 170.75 218.918 170.06 218.708C168.128 218 166.142 217.43 164.132 217.004C162.374 216.722 160.592 216.2 159.374 217.886L159.368 217.88Z" fill="url(#paint6_linear_0_1)"/>
<path d="M161.52 208.915C160.974 211.777 160.686 214.687 160.668 217.603C160.668 218.887 160.752 220.303 161.676 221.221C162.546 221.911 163.656 222.229 164.76 222.103C166.092 222.055 167.406 221.785 168.648 221.299C168.924 221.215 169.17 221.059 169.374 220.849C169.518 220.645 169.62 220.411 169.668 220.159C170.772 216.013 171.36 211.747 171.414 207.457C171.486 206.785 171.348 206.107 171.018 205.519C170.328 204.559 168.906 204.601 167.748 204.829C166.266 205.147 164.814 205.591 163.404 206.155C162.072 206.617 161.796 207.529 161.526 208.909L161.52 208.915Z" fill="#FFAA71"/>
<path d="M175.794 222.529C176.316 223.813 176.742 225.139 177.066 226.489C177.288 227.539 177.42 228.661 178.092 229.501C178.944 230.551 180.432 230.821 181.782 230.839C182.898 230.905 184.014 230.713 185.046 230.287C185.586 230.077 186.036 229.687 186.318 229.189C186.522 228.691 186.588 228.157 186.522 227.623C186.414 223.945 185.496 220.333 183.834 217.051C182.88 215.353 181.806 213.727 180.618 212.185C180.246 211.489 179.61 210.973 178.86 210.739C178.08 210.709 177.318 211.003 176.754 211.543C175.56 212.443 172.932 213.937 173.208 215.641C173.556 217.909 174.972 220.375 175.788 222.529H175.794Z" fill="#FFAA71"/>
<path d="M184.572 225.199C183.75 225.655 182.958 226.159 182.19 226.699C180.996 227.359 179.592 227.491 178.278 227.863C177.93 227.929 177.612 228.097 177.366 228.349C177.186 228.595 177.072 228.883 177.042 229.183C176.796 231.157 176.874 233.161 177.282 235.111C177.948 239.329 178.728 243.529 179.616 247.717C179.988 249.439 180.426 251.257 181.68 252.493C182.934 253.729 184.836 254.161 186.618 254.209C188.286 254.305 189.948 253.993 191.472 253.303C193.92 251.995 195.636 249.637 196.134 246.901C196.608 244.189 196.272 241.399 195.18 238.873C194.436 237.145 193.572 235.471 192.588 233.869C191.286 231.631 189.984 229.387 188.694 227.149C187.71 225.439 186.81 224.245 184.584 225.193L184.572 225.199Z" fill="#231F20"/>
<path d="M184.572 225.199C183.75 225.655 182.958 226.159 182.19 226.699C180.996 227.359 179.592 227.491 178.278 227.863C177.93 227.929 177.612 228.097 177.366 228.349C177.186 228.595 177.072 228.883 177.042 229.183C176.796 231.157 176.874 233.161 177.282 235.111C177.948 239.329 178.728 243.529 179.616 247.717C179.988 249.439 180.426 251.257 181.68 252.493C182.934 253.729 184.836 254.161 186.618 254.209C188.286 254.305 189.948 253.993 191.472 253.303C193.92 251.995 195.636 249.637 196.134 246.901C196.608 244.189 196.272 241.399 195.18 238.873C194.436 237.145 193.572 235.471 192.588 233.869C191.286 231.631 189.984 229.387 188.694 227.149C187.71 225.439 186.81 224.245 184.584 225.193L184.572 225.199Z" fill="url(#paint7_linear_0_1)"/>
<path d="M96.8476 92.6657C96.2116 94.2617 95.7916 95.9297 95.5876 97.6337C94.8976 102.044 94.4596 106.49 94.2676 110.948C93.9076 119.462 94.4536 127.994 94.2196 136.508C93.9736 145.364 92.9296 154.544 96.1156 162.806C96.6136 164.306 97.4476 165.668 98.5636 166.79C99.7096 167.912 101.354 168.362 102.908 167.978C104.312 167.438 105.38 166.274 105.806 164.828C106.208 163.4 106.382 161.918 106.328 160.442L106.442 152.348C106.442 152.18 106.442 151.988 106.61 151.916C106.754 151.868 106.91 151.898 107.024 151.994C107.648 152.534 108.242 153.104 108.8 153.71C109.442 154.232 110.474 154.484 111.044 153.884C111.362 153.458 111.488 152.918 111.386 152.39C111.038 148.886 107.984 146.36 106.166 143.342C103.544 138.998 103.544 133.526 104.204 128.468C105.02 122.138 106.73 115.964 108.434 109.808L109.88 104.6C110.972 100.646 112.052 96.3317 110.462 92.5457C109.166 89.5937 106.538 87.4457 103.388 86.7557C100.364 86.1977 97.9516 90.2117 96.8596 92.6717L96.8476 92.6657Z" fill="#FFAA71"/>
<path d="M164.068 125.587C163.132 128.101 157.864 125.167 154.852 126.673C149.104 129.571 142.546 126.595 136.138 126.673C129.316 126.799 124.612 133.513 117.844 134.371C117.352 134.473 116.842 134.473 116.35 134.371C115.414 134.095 114.868 133.159 114.466 132.283C113.884 130.933 113.464 129.517 113.218 128.059C112.378 123.253 113.218 118.093 114.118 113.209C114.874 109.069 115.624 104.923 116.368 100.777C117.238 95.9475 118.114 91.0935 118.996 86.2095C119.512 82.9875 120.238 79.8015 121.168 76.6755C121.342 76.1295 121.522 75.6015 121.72 75.0855C123.406 70.8375 125.434 66.7395 127.792 62.8275C129.238 60.3135 130.69 57.7575 132.928 55.8555C135.424 53.7495 138.646 52.6995 141.886 52.1895C144.796 51.6435 147.796 51.8175 150.628 52.6935C152.242 53.2575 152.848 54.9675 154.132 56.0175C155.758 57.2235 157.204 58.6455 158.44 60.2475C159.694 62.1795 160.588 64.3275 161.08 66.5775C165.622 84.2295 159.052 103.273 163.366 120.973C163.858 123.049 164.812 123.601 164.068 125.587Z" fill="#692FDB"/>
<path d="M157.896 63.5831L158.46 67.2791L156.288 66.0731V75.8771L153.816 64.9871L156.21 61.4951L157.896 63.5831Z" fill="url(#paint8_linear_0_1)"/>
<path d="M139.508 63.3436L140.876 64.0696L143.048 65.9596L137.258 81.4996C137.258 81.4996 145.67 68.5516 145.946 61.9516C146.114 57.8896 145.61 53.8276 144.446 49.9336L139.508 63.3496V63.3436Z" fill="url(#paint9_linear_0_1)"/>
<path d="M120.954 107.882C120.492 111.44 120.492 115.04 120.954 118.598C121.248 120.836 121.728 123.068 121.578 125.312C121.584 125.75 121.446 126.176 121.182 126.53C120.84 126.806 120.426 126.968 119.988 126.998C117.726 127.358 115.458 127.718 113.19 128.09C112.35 123.284 113.19 118.124 114.09 113.24C114.846 109.1 115.596 104.954 116.34 100.808C117.21 95.9776 118.086 91.1236 118.968 86.2396C119.484 83.0176 120.21 79.8316 121.14 76.7056C121.314 76.1596 121.494 75.6316 121.692 75.1156C123.936 73.8676 127.056 72.9436 128.448 74.9536C129.894 77.1256 127.992 82.1956 127.428 84.3676C125.37 92.2396 121.998 99.7636 120.96 107.888L120.954 107.882Z" fill="url(#paint10_linear_0_1)"/>
<path d="M173.042 45.1036C173.12 46.0036 173.09 46.9096 172.964 47.8036C172.814 48.7216 172.046 49.4116 171.116 49.4716C168.854 49.3036 167.228 51.4696 165.434 52.8616C162.56 55.0156 158.726 55.3816 155.498 53.8096C154.844 53.5756 154.124 53.8936 153.854 54.5356C153.626 55.1716 153.578 55.8616 153.71 56.5276L154.544 64.4476C154.706 65.9776 154.718 67.8436 153.422 68.6716C152.126 69.4996 150.59 68.7796 149.522 67.8436C147.836 66.2236 146.618 64.1776 145.994 61.9276C143.114 52.6456 145.346 42.5296 151.868 35.3176C153.074 33.9736 154.484 32.8276 156.044 31.9276C157.682 31.0756 159.44 30.4816 161.258 30.1696C162.884 29.7856 164.564 29.6896 166.226 29.8936C168.452 30.3016 170.48 31.4416 171.974 33.1456C173.072 34.3456 174.146 37.9336 175.304 38.5156C174.44 40.6996 173.084 42.6376 173.042 45.1036Z" fill="#FFAA71"/>
<path d="M155.803 14.0116C154.741 13.7656 153.631 13.7956 152.587 14.1076C150.547 14.8336 149.401 16.9696 148.663 19.0036C147.925 21.0376 147.319 23.2636 145.711 24.7036C144.331 25.9516 142.363 26.4496 141.121 27.8236C139.675 29.4256 139.537 31.7896 139.675 33.9436C139.675 35.5576 140.131 37.1356 140.983 38.5036C141.751 39.5476 142.933 40.2676 143.533 41.4016C144.211 42.6976 144.445 44.7016 145.909 44.7916C146.521 44.7616 147.097 44.5036 147.523 44.0656C148.999 42.7876 150.115 41.1436 150.751 39.2956C151.105 38.2696 151.339 37.1236 152.119 36.3976C152.899 35.6716 154.495 35.6296 154.849 36.6556C154.951 37.3096 154.849 37.9816 154.561 38.5756C154.375 39.2116 154.453 40.0756 155.077 40.2916C156.247 38.4796 156.907 36.3556 158.299 34.7116C161.155 31.3636 166.183 30.9676 169.525 33.8236C170.035 34.2616 170.491 34.7596 170.875 35.3056C171.601 36.3436 172.093 37.5736 173.107 38.3116C174.061 38.8936 175.153 39.2116 176.269 39.2356C178.759 39.4816 181.393 39.5776 183.637 38.4676C185.881 37.3576 187.537 34.6756 186.679 32.3176C186.001 30.4696 184.057 29.4196 182.173 28.8256C180.289 28.2316 178.279 27.9376 176.617 26.8756C174.367 25.4296 173.161 22.8496 171.853 20.5096C170.545 18.1696 168.769 15.7696 166.147 15.2176C165.079 15.0496 163.987 15.0496 162.919 15.2176C161.875 15.4396 160.807 15.5236 159.739 15.4636C158.437 15.1936 157.177 14.3116 155.803 14.0056V14.0116Z" fill="#231F20"/>
<path d="M155.803 73.5071C157.459 81.8831 157.945 90.4451 157.249 98.9591C156.679 106.039 155.317 113.071 155.365 120.175C155.473 122.173 155.413 124.177 155.185 126.163C154.867 128.131 141.661 127.381 139.735 127.357C136.489 127.315 140.605 131.701 138.163 129.589C134.335 126.253 132.625 121.045 132.151 115.993C131.479 108.787 132.955 101.575 134.563 94.5191C135.679 89.6291 136.867 84.7271 138.865 80.1311C141.343 74.4491 145.261 67.2131 146.521 61.1411C146.701 60.2531 143.623 57.0131 144.949 57.0551C145.813 57.0551 145.405 58.3931 145.555 59.0591C145.825 60.0731 146.347 61.0031 147.067 61.7651C148.075 62.9471 149.443 63.7631 150.961 64.0871C151.939 64.2671 153.055 64.2251 153.763 64.9211C154.627 65.7611 154.489 67.3991 154.735 68.5391C155.089 70.1771 155.467 71.8331 155.797 73.5071H155.803Z" fill="#FE7A36"/>
<path d="M126.488 51.9678C122.984 53.5758 119.972 56.0658 117.128 58.6698C114.77 60.7938 112.55 63.0558 110.468 65.4498C108.626 67.6218 106.952 69.8718 105.008 71.9238C102.326 74.7378 98.9843 77.4618 98.4563 81.3378C98.2943 83.3598 98.6483 85.3878 99.4823 87.2298C100.172 89.1138 101.186 90.8598 102.488 92.3898C104.138 94.2138 106.31 95.4798 108.71 96.0078C109.46 96.2058 110.246 96.2358 111.014 96.1098C112.094 95.8038 113.084 95.2458 113.912 94.4898C115.802 93.0618 117.59 91.5078 119.264 89.8338C120.974 88.0578 122.42 86.0418 124.088 84.2238C125.534 82.6578 127.076 81.2478 128.528 79.7118C130.256 77.8698 131.798 75.8658 133.34 73.8618C135.524 71.1438 137.522 68.2818 139.328 65.2938C140.834 62.6598 142.034 59.8638 142.898 56.9538C143.456 55.0578 144.344 52.6518 142.418 51.2838C138.326 48.4038 130.574 50.0598 126.494 51.9618L126.488 51.9678Z" fill="#692FDB"/>
<path d="M126.488 51.9678C122.984 53.5758 119.972 56.0658 117.128 58.6698C114.77 60.7938 112.55 63.0558 110.468 65.4498C108.626 67.6218 106.952 69.8718 105.008 71.9238C102.326 74.7378 98.9843 77.4618 98.4563 81.3378C98.2943 83.3598 98.6483 85.3878 99.4823 87.2298C100.172 89.1138 101.186 90.8598 102.488 92.3898C104.138 94.2138 106.31 95.4798 108.71 96.0078C109.46 96.2058 110.246 96.2358 111.014 96.1098C112.094 95.8038 113.084 95.2458 113.912 94.4898C115.802 93.0618 117.59 91.5078 119.264 89.8338C120.974 88.0578 122.42 86.0418 124.088 84.2238C125.534 82.6578 127.076 81.2478 128.528 79.7118C130.256 77.8698 131.798 75.8658 133.34 73.8618C135.524 71.1438 137.522 68.2818 139.328 65.2938C140.834 62.6598 142.034 59.8638 142.898 56.9538C143.456 55.0578 144.344 52.6518 142.418 51.2838C138.326 48.4038 130.574 50.0598 126.494 51.9618L126.488 51.9678Z" fill="#692FDB"/>
<path d="M187.19 85.0276C185.564 86.0536 185.048 88.1896 186.026 89.8516C187.244 91.9636 188.87 93.8116 190.82 95.2816C191.978 96.5296 194.588 96.7276 196.904 95.3656C199.22 94.0036 210.278 87.9856 215.804 84.0556C217.454 82.9216 217.868 80.6716 216.734 79.0216C216.698 78.9676 216.662 78.9136 216.62 78.8656L211.994 73.0756C210.86 71.6536 208.838 71.3176 207.302 72.2956L187.196 85.0336L187.19 85.0276Z" fill="#3D3D54"/>
<path d="M113.7 147.433C114.516 150.433 115.968 153.223 117.948 155.617C120.12 158.149 123.072 159.961 125.91 161.683L137.862 168.961C139.614 169.969 141.294 171.103 142.878 172.357C146.796 175.585 149.394 180.091 151.92 184.495L169.356 214.885C170.238 216.439 171.48 218.203 173.268 218.143C174.228 218.017 175.134 217.615 175.872 216.985C178.11 215.413 180.516 213.625 181.182 210.967C181.644 209.113 181.182 207.163 180.624 205.327C177.942 196.267 173.748 187.741 169.53 179.263C162.834 165.841 156.042 152.449 149.148 139.087C147.318 135.541 145.092 130.015 142.068 127.405C142.068 127.405 113.946 125.695 113.238 128.485C111.66 134.725 111.816 141.283 113.694 147.439L113.7 147.433Z" fill="#525263"/>
<path d="M113.7 147.433C114.516 150.433 115.968 153.223 117.948 155.617C120.12 158.149 123.072 159.961 125.91 161.683L137.862 168.961C139.614 169.969 141.294 171.103 142.878 172.357C146.796 175.585 149.394 180.091 151.92 184.495L169.356 214.885C170.238 216.439 171.48 218.203 173.268 218.143C174.228 218.017 175.134 217.615 175.872 216.985C178.11 215.413 180.516 213.625 181.182 210.967C181.644 209.113 181.182 207.163 180.624 205.327C177.942 196.267 173.748 187.741 169.53 179.263C162.834 165.841 156.042 152.449 149.148 139.087C147.318 135.541 145.092 130.015 142.068 127.405C142.068 127.405 113.946 125.695 113.238 128.485C111.66 134.725 111.816 141.283 113.694 147.439L113.7 147.433Z" fill="url(#paint11_linear_0_1)"/>
<path d="M145.329 48.002L141.357 49.574L138.945 63.062L146.961 62.702L145.329 48.002Z" fill="#692FDB"/>
<path d="M153.747 62.3715V64.1955C153.747 64.4595 153.759 64.7235 153.789 64.9875C153.831 65.2515 153.891 65.5155 153.963 65.7795L154.965 69.7155L155.379 63.3135C156.561 63.8835 157.767 64.4055 158.997 64.8615C158.907 63.9015 158.661 62.9655 158.271 62.0835C157.545 60.2295 156.879 58.3695 156.099 56.5515C155.919 56.0655 155.649 55.6155 155.319 55.2195C154.977 54.8235 154.467 54.6075 153.945 54.6375C153.219 54.9435 153.675 57.6555 153.687 58.2555L153.753 62.3655L153.747 62.3715Z" fill="#692FDB"/>
<path d="M212.318 81.8598L197.606 91.1658C197.072 91.4538 196.418 91.3338 196.022 90.8778L191.342 85.6038C190.994 85.2738 190.97 84.7278 191.3 84.3738C191.348 84.3258 191.402 84.2778 191.456 84.2418L206.198 74.9478C206.732 74.6598 207.386 74.7798 207.782 75.2358L212.462 80.4978C212.804 80.8338 212.816 81.3798 212.48 81.7278C212.432 81.7758 212.378 81.8238 212.318 81.8598Z" fill="#692FDB"/>
<defs>
<linearGradient id="paint0_linear_0_1" x1="126.159" y1="269.324" x2="117.865" y2="15.8091" gradientUnits="userSpaceOnUse">
<stop offset="0.220931" stop-color="#692FDB"/>
<stop offset="0.688362" stop-color="#FE7A36"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1" x1="236.773" y1="58.0391" x2="10.687" y2="294.193" gradientUnits="userSpaceOnUse">
<stop stop-color="#231F20" stop-opacity="0"/>
<stop offset="1" stop-color="#231F20"/>
</linearGradient>
<linearGradient id="paint2_linear_0_1" x1="176.498" y1="146.636" x2="111.602" y2="214.424" gradientUnits="userSpaceOnUse">
<stop stop-color="#231F20" stop-opacity="0"/>
<stop offset="1" stop-color="#231F20"/>
</linearGradient>
<linearGradient id="paint3_linear_0_1" x1="81.9509" y1="136.724" x2="169.659" y2="191.654" gradientUnits="userSpaceOnUse">
<stop stop-color="#231F20" stop-opacity="0"/>
<stop offset="1" stop-color="#231F20"/>
</linearGradient>
<linearGradient id="paint4_linear_0_1" x1="146.857" y1="87.1154" x2="176.569" y2="86.6594" gradientUnits="userSpaceOnUse">
<stop stop-color="#231F20" stop-opacity="0"/>
<stop offset="1" stop-color="#231F20"/>
</linearGradient>
<linearGradient id="paint5_linear_0_1" x1="123.578" y1="166.718" x2="191.858" y2="166.718" gradientUnits="userSpaceOnUse">
<stop stop-color="#231F20" stop-opacity="0"/>
<stop offset="1" stop-color="#231F20"/>
</linearGradient>
<linearGradient id="paint6_linear_0_1" x1="185.018" y1="231.386" x2="166.232" y2="226.562" gradientUnits="userSpaceOnUse">
<stop stop-color="#231F20" stop-opacity="0"/>
<stop offset="1" stop-color="#231F20"/>
</linearGradient>
<linearGradient id="paint7_linear_0_1" x1="176.904" y1="239.545" x2="196.38" y2="239.545" gradientUnits="userSpaceOnUse">
<stop stop-color="#231F20" stop-opacity="0"/>
<stop offset="1" stop-color="#231F20"/>
</linearGradient>
<linearGradient id="paint8_linear_0_1" x1="145.2" y1="59.4971" x2="165.282" y2="76.2011" gradientUnits="userSpaceOnUse">
<stop stop-color="#231F20" stop-opacity="0"/>
<stop offset="1" stop-color="#231F20"/>
</linearGradient>
<linearGradient id="paint9_linear_0_1" x1="158.426" y1="58.7536" x2="121.316" y2="73.4476" gradientUnits="userSpaceOnUse">
<stop stop-color="#231F20" stop-opacity="0"/>
<stop offset="1" stop-color="#231F20"/>
</linearGradient>
<linearGradient id="paint10_linear_0_1" x1="95.8322" y1="101.756" x2="141.81" y2="100.16" gradientUnits="userSpaceOnUse">
<stop stop-color="#231F20" stop-opacity="0"/>
<stop offset="1" stop-color="#231F20"/>
</linearGradient>
<linearGradient id="paint11_linear_0_1" x1="134.25" y1="177.043" x2="185.814" y2="155.359" gradientUnits="userSpaceOnUse">
<stop stop-color="#231F20" stop-opacity="0"/>
<stop offset="1" stop-color="#231F20"/>
</linearGradient>
</defs>
</svg>
      <Formsreg />
      <div className='w-[80px] h-[83px] bg-[#FE7A3659] rounded-[50%] top-[5%]  right-[12%] absolute ' />
      <div className='w-[126px] h-[123px] bg-[#FF9F2E59] rounded-[50%] top-[20%]  right-[8%] absolute ' />
    </div>
  )
}
