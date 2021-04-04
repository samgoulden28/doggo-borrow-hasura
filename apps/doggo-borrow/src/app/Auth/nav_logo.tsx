import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

NavLogo.propTypes = {
  type: PropTypes.string.isRequired,
};

function SvgComponent(props) {
  return (
    <svg
      width="275"
      height="64"
      viewBox="0 0 275 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M95.5586 39.7637H106.756V44H90.2852V18.4062H95.5586V39.7637ZM118.217 44.3516C115.428 44.3516 113.154 43.4961 111.396 41.7852C109.65 40.0742 108.777 37.7949 108.777 34.9473V34.4551C108.777 32.5449 109.146 30.8398 109.885 29.3398C110.623 27.8281 111.666 26.668 113.014 25.8594C114.373 25.0391 115.92 24.6289 117.654 24.6289C120.256 24.6289 122.301 25.4492 123.789 27.0898C125.289 28.7305 126.039 31.0566 126.039 34.0684V36.1426H113.928C114.092 37.3848 114.584 38.3809 115.404 39.1309C116.236 39.8809 117.285 40.2559 118.551 40.2559C120.508 40.2559 122.037 39.5469 123.139 38.1289L125.635 40.9238C124.873 42.002 123.842 42.8457 122.541 43.4551C121.24 44.0527 119.799 44.3516 118.217 44.3516ZM117.637 28.7422C116.629 28.7422 115.809 29.082 115.176 29.7617C114.555 30.4414 114.156 31.4141 113.98 32.6797H121.047V32.2754C121.023 31.1504 120.719 30.2832 120.133 29.6738C119.547 29.0527 118.715 28.7422 117.637 28.7422ZM133.615 24.9805L133.773 27.1777C135.133 25.4785 136.955 24.6289 139.24 24.6289C141.256 24.6289 142.756 25.2207 143.74 26.4043C144.725 27.5879 145.229 29.3574 145.252 31.7129V44H140.172V31.8359C140.172 30.7578 139.938 29.9785 139.469 29.498C139 29.0059 138.221 28.7598 137.131 28.7598C135.701 28.7598 134.629 29.3691 133.914 30.5879V44H128.834V24.9805H133.615ZM148.328 34.3496C148.328 31.3848 148.99 29.0234 150.314 27.2656C151.65 25.5078 153.473 24.6289 155.781 24.6289C157.633 24.6289 159.162 25.3203 160.369 26.7031V17H165.467V44H160.879L160.633 41.9785C159.367 43.5605 157.738 44.3516 155.746 44.3516C153.508 44.3516 151.709 43.4727 150.35 41.7148C149.002 39.9453 148.328 37.4902 148.328 34.3496ZM153.408 34.7188C153.408 36.5 153.719 37.8652 154.34 38.8145C154.961 39.7637 155.863 40.2383 157.047 40.2383C158.617 40.2383 159.725 39.5762 160.369 38.252V30.7461C159.736 29.4219 158.641 28.7598 157.082 28.7598C154.633 28.7598 153.408 30.7461 153.408 34.7188ZM190.586 44C190.398 43.625 190.246 42.957 190.129 41.9961C188.617 43.5664 186.812 44.3516 184.715 44.3516C182.84 44.3516 181.299 43.8242 180.092 42.7695C178.896 41.7031 178.299 40.3555 178.299 38.7266C178.299 36.7461 179.049 35.2109 180.549 34.1211C182.061 33.0195 184.182 32.4688 186.912 32.4688H190.076V30.9746C190.076 29.8379 189.736 28.9355 189.057 28.2676C188.377 27.5879 187.375 27.248 186.051 27.248C184.891 27.248 183.918 27.541 183.133 28.127C182.348 28.7129 181.955 29.4219 181.955 30.2539H178.686C178.686 29.3047 179.02 28.3906 179.688 27.5117C180.367 26.6211 181.281 25.918 182.43 25.4023C183.59 24.8867 184.861 24.6289 186.244 24.6289C188.436 24.6289 190.152 25.1797 191.395 26.2812C192.637 27.3711 193.281 28.877 193.328 30.7988V39.5527C193.328 41.2988 193.551 42.6875 193.996 43.7188V44H190.586ZM185.189 41.5215C186.209 41.5215 187.176 41.2578 188.09 40.7305C189.004 40.2031 189.666 39.5176 190.076 38.6738V34.7715H187.527C183.543 34.7715 181.551 35.9375 181.551 38.2695C181.551 39.2891 181.891 40.0859 182.57 40.6602C183.25 41.2344 184.123 41.5215 185.189 41.5215ZM212.453 34.9824V44H207.18V18.4062H217.164C219.086 18.4062 220.773 18.7578 222.227 19.4609C223.691 20.1641 224.816 21.166 225.602 22.4668C226.387 23.7559 226.779 25.2266 226.779 26.8789C226.779 29.3867 225.918 31.3672 224.195 32.8203C222.484 34.2617 220.111 34.9824 217.076 34.9824H212.453ZM212.453 30.7109H217.164C218.559 30.7109 219.619 30.3828 220.346 29.7266C221.084 29.0703 221.453 28.1328 221.453 26.9141C221.453 25.6602 221.084 24.6465 220.346 23.873C219.607 23.0996 218.588 22.7012 217.287 22.6777H212.453V30.7109ZM240.895 44C240.66 43.543 240.49 42.9746 240.385 42.2949C239.154 43.666 237.555 44.3516 235.586 44.3516C233.723 44.3516 232.176 43.8125 230.945 42.7344C229.727 41.6562 229.117 40.2969 229.117 38.6562C229.117 36.6406 229.861 35.0938 231.35 34.0156C232.85 32.9375 235.012 32.3926 237.836 32.3809H240.174V31.291C240.174 30.4121 239.945 29.709 239.488 29.1816C239.043 28.6543 238.334 28.3906 237.361 28.3906C236.506 28.3906 235.832 28.5957 235.34 29.0059C234.859 29.416 234.619 29.9785 234.619 30.6934H229.539C229.539 29.5918 229.879 28.5723 230.559 27.6348C231.238 26.6973 232.199 25.9648 233.441 25.4375C234.684 24.8984 236.078 24.6289 237.625 24.6289C239.969 24.6289 241.826 25.2207 243.197 26.4043C244.58 27.5762 245.271 29.2285 245.271 31.3613V39.6055C245.283 41.4102 245.535 42.7754 246.027 43.7012V44H240.895ZM236.693 40.4668C237.443 40.4668 238.135 40.3027 238.768 39.9746C239.4 39.6348 239.869 39.1836 240.174 38.6211V35.3516H238.275C235.732 35.3516 234.379 36.2305 234.215 37.9883L234.197 38.2871C234.197 38.9199 234.42 39.4414 234.865 39.8516C235.311 40.2617 235.92 40.4668 236.693 40.4668ZM265.715 37.0918L268.211 24.9805H273.115L268.264 44H264.01L260.406 32.0293L256.803 44H252.566L247.715 24.9805H252.619L255.098 37.0742L258.578 24.9805H262.252L265.715 37.0918Z"
        fill="black"
      />
      <path
        d="M9.00002 30C13.6024 30 17.3334 26.269 17.3334 21.6666C17.3334 17.0643 13.6024 13.3333 9.00002 13.3333C4.39765 13.3333 0.666687 17.0643 0.666687 21.6666C0.666687 26.269 4.39765 30 9.00002 30Z"
        fill="#A242BE"
      />
      <path
        d="M24 16.6667C28.6024 16.6667 32.3334 12.9357 32.3334 8.33333C32.3334 3.73096 28.6024 0 24 0C19.3976 0 15.6667 3.73096 15.6667 8.33333C15.6667 12.9357 19.3976 16.6667 24 16.6667Z"
        fill="#A242BE"
      />
      <path
        d="M44 16.6667C48.6024 16.6667 52.3334 12.9357 52.3334 8.33333C52.3334 3.73096 48.6024 0 44 0C39.3976 0 35.6667 3.73096 35.6667 8.33333C35.6667 12.9357 39.3976 16.6667 44 16.6667Z"
        fill="#A242BE"
      />
      <path
        d="M59 30C63.6024 30 67.3334 26.269 67.3334 21.6666C67.3334 17.0643 63.6024 13.3333 59 13.3333C54.3976 13.3333 50.6667 17.0643 50.6667 21.6666C50.6667 26.269 54.3976 30 59 30Z"
        fill="#A242BE"
      />
      <path
        d="M51.8 39.5333C48.9 36.1333 46.4667 33.2333 43.5334 29.8333C42 28.0333 40.0334 26.2333 37.7 25.4333C37.3334 25.3 36.9667 25.2 36.6 25.1333C35.7667 25 34.8667 25 34 25C33.1334 25 32.2334 25 31.3667 25.1667C31 25.2333 30.6334 25.3333 30.2667 25.4667C27.9334 26.2667 26 28.0667 24.4334 29.8667C21.5334 33.2667 19.1 36.1667 16.1667 39.5667C11.8 43.9333 6.43337 48.7667 7.43337 55.5333C8.40004 58.9333 10.8334 62.3 15.2 63.2667C17.6334 63.7667 25.4 61.8 33.6667 61.8H34.2667C42.5334 61.8 50.3 63.7333 52.7334 63.2667C57.1 62.3 59.5334 58.9 60.5 55.5333C61.5334 48.7333 56.1667 43.9 51.8 39.5333V39.5333Z"
        fill="#A242BE"
      />
    </svg>
  );
}

export default function NavLogo({ type }) {
  const color =
    type === "light"
      ? "common.white"
      : type === "dark"
      ? "common.black"
      : undefined;

  return (
    <Box color={color}>
      <SvgComponent />
    </Box>
  );
}
