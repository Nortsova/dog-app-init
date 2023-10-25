import { FC } from 'react';

type PlusButtonProps = {
  state: 'active' | 'default';
};

export const PlusButton: FC<PlusButtonProps> = ({ state }) => {
  switch (state) {
    case 'active':
      return (
        <svg
          width="45"
          height="44"
          viewBox="0 0 45 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_16_1590)">
            <path
              d="M40.441 13.1459L40.3261 13.098L40.2304 13.0167C39.8942 12.7294 39.4706 12.5841 38.9692 12.5841H27.6288L27.5938 11.8307C27.5238 10.3469 27.4702 8.86247 27.4173 7.37817C27.3427 5.3135 27.2659 3.179 27.1439 1.08544C27.0699 -0.167019 26.1448 -0.744844 25.3031 -0.867607L25.1858 -0.894065C24.95 -0.966243 24.7436 -1 24.5371 -1H14.6319C13.5813 -1 13.101 -0.396933 12.8832 0.108614L12.8068 0.284699L12.6583 0.406447C12.2333 0.755474 12.021 1.25149 12.0267 1.88071C12.0622 5.7044 12.4547 9.515 12.8344 12.7385L12.9314 13.5593L9.16712 13.8354C7.13976 13.9844 5.11312 14.1338 3.08566 14.2791C2.74211 14.3039 2.43525 14.3968 2.14857 14.5623L2.05845 14.6145L1.95758 14.6412C1.06905 14.8796 0.424316 15.705 0.424316 16.6033V17.1693C0.424316 17.4765 0.505922 17.787 0.667307 18.0928L0.743742 18.2374L0.755299 18.4005C0.970513 21.1597 0.988761 23.9436 0.989268 26.7913C0.989268 28.1538 2.0108 28.5507 2.45046 28.6584L2.54544 28.6877C2.79685 28.7844 3.04734 28.8307 3.31192 28.8307H13.7417L13.7589 29.6034C13.786 30.8023 13.8263 32.0006 13.867 33.1985C13.9313 35.0832 13.9977 37.032 14.0073 38.9568C14.014 40.2941 15.0092 40.7024 15.4372 40.8162L15.5304 40.8476C15.7847 40.95 16.0465 41 16.3301 41H25.9517C26.5066 41 26.9627 40.8234 27.3092 40.4749L27.4651 40.3205C27.8142 39.9735 27.9911 39.5164 27.9911 38.9605C27.9906 36.0026 27.9701 32.5156 27.8212 29.0898L27.7853 28.2646H39.2534C40.5367 28.2646 41.088 27.3421 41.1775 26.4788L41.1961 26.2987L41.2909 26.1443C41.4824 25.8339 41.5759 25.4901 41.5759 25.0937V14.9058C41.5749 13.8406 40.9593 13.3603 40.441 13.1459Z"
              fill="#FFCF32"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_16_1590"
              x="0.424316"
              y="-1"
              width="44.1514"
              height="45"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="3" dy="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_16_1590"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_16_1590"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    default:
      return (
        <svg
          width="42"
          height="41"
          viewBox="0 0 42 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.441 14.1459L40.3261 14.098L40.2304 14.0167C39.8943 13.7294 39.4706 13.5841 38.9692 13.5841H27.6288L27.5938 12.8307C27.5238 11.3469 27.4702 9.86247 27.4173 8.37817C27.3427 6.3135 27.2659 4.179 27.1439 2.08544C27.0699 0.832981 26.1448 0.255156 25.3031 0.132393L25.1858 0.105935C24.95 0.0337572 24.7436 0 24.5371 0H14.6319C13.5813 0 13.101 0.603067 12.8832 1.10861L12.8068 1.2847L12.6583 1.40645C12.2333 1.75547 12.021 2.25149 12.0267 2.88071C12.0622 6.7044 12.4547 10.515 12.8344 13.7385L12.9314 14.5593L9.16712 14.8354C7.13976 14.9844 5.11312 15.1338 3.08566 15.2791C2.74211 15.3039 2.43525 15.3968 2.14857 15.5623L2.05845 15.6145L1.95758 15.6412C1.06905 15.8796 0.424316 16.705 0.424316 17.6033V18.1693C0.424316 18.4765 0.505922 18.787 0.667307 19.0928L0.743742 19.2374L0.755299 19.4005C0.970513 22.1597 0.988761 24.9436 0.989267 27.7913C0.989267 29.1538 2.0108 29.5507 2.45046 29.6584L2.54544 29.6877C2.79685 29.7844 3.04734 29.8307 3.31192 29.8307H13.7417L13.7589 30.6034C13.786 31.8023 13.8263 33.0006 13.867 34.1985C13.9313 36.0832 13.9977 38.032 14.0073 39.9568C14.014 41.2941 15.0092 41.7024 15.4372 41.8162L15.5304 41.8476C15.7847 41.95 16.0465 42 16.3301 42H25.9517C26.5066 42 26.9627 41.8234 27.3092 41.4749L27.4651 41.3205C27.8142 40.9735 27.9911 40.5164 27.9911 39.9605C27.9906 37.0026 27.9701 33.5156 27.8212 30.0898L27.7853 29.2646H39.2534C40.5367 29.2646 41.088 28.3421 41.1775 27.4788L41.1961 27.2987L41.2909 27.1443C41.4824 26.8339 41.5759 26.4901 41.5759 26.0937V15.9058C41.5749 14.8406 40.9593 14.3603 40.441 14.1459ZM37.4964 25.1866H25.6696C24.1253 25.1866 23.8129 26.4638 23.7532 26.8555L23.7227 26.9822C23.6425 27.2282 23.6115 27.4768 23.628 27.7425C23.8427 31.1934 23.8884 34.5699 23.9039 37.1257L23.9086 37.9211H18.0587L18.0377 37.152C18.0111 36.209 17.9784 35.2649 17.9453 34.3218C17.8804 32.4635 17.813 30.5424 17.803 28.6449C17.802 28.4673 17.7777 28.2919 17.726 28.092L17.6983 27.983L17.7018 27.8702C17.7214 27.2489 17.5168 26.6703 17.1415 26.2822C16.801 25.9301 16.3377 25.7521 15.7638 25.7521H5.06284L5.05432 24.9701C5.03709 23.262 4.97322 21.5942 4.86516 20.0123L4.81082 19.2268L8.50171 18.956C10.5265 18.8067 12.5506 18.6582 14.5748 18.5127C14.7502 18.4998 14.9253 18.4642 15.1245 18.4003L15.2633 18.356L15.4092 18.3645C16.0428 18.4025 16.6137 18.2011 16.9357 17.8358C17.2062 17.5296 17.3095 17.1036 17.243 16.5703C16.7028 12.2362 16.3138 8.59267 16.173 4.89915L16.1414 4.07833H23.1677L23.2001 4.83579C23.248 5.97238 23.2882 7.10928 23.3283 8.24638C23.4066 10.465 23.4884 12.7596 23.6279 15.0082C23.6367 15.1438 23.6594 15.2823 23.6989 15.4437L23.7225 15.6318C23.7262 16.6423 24.329 17.6628 25.6684 17.6628H37.4962V25.1866H37.4964Z"
            fill="#FFCF32"
          />
        </svg>
      );
  }
};
