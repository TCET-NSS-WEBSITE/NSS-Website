import React, { useRef, useState } from "react";
import useScrollVisibility from "../../hooks/useScrollAnimation";
import "../../styles/about/significance.css";

export default function Significance() {
  const [colorHighlight, setColorHighlight] = useState({
    isRed: false,
    isBlue: false,
    isWhite: false,
  });
  const resetStyles = {
    isRed: false,
    isBlue: false,
    isWhite: false,
  }
  const signifaceRef = useRef(null)
  const sliderRef = useRef(null)
    
  const { isVisible } = useScrollVisibility(signifaceRef, sliderRef);
  return (
    <div className={`significanceContainer ${isVisible ? "appear": ""}`} ref={signifaceRef}>
      <div className="aboutLogoContainer">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="70 70 660 660"
        >
          <g style={{ width: "100%", height: "100%" }}>
            <path
              className="cls-4"
              onMouseEnter={() =>
                setColorHighlight({ ...resetStyles, isBlue: true })
              }
              onMouseLeave={() =>
                setColorHighlight({ ...resetStyles, isBlue: false })
              }
              d="M399.9,69.7c185.13,1.01,327.73,148.79,330.24,325.41,2.6,183.08-143.41,334.57-328.68,335.18-186.67,.61-326.99-148.72-331.53-321.34C65.12,225.91,210.94,70.67,399.9,69.7Z"
            />
            <path
              class="cls-5"
              onMouseEnter={() =>
                setColorHighlight({ ...resetStyles, isWhite: true })
              }
              onMouseLeave={() =>
                setColorHighlight({ ...resetStyles, isWhite: false })
              }
              style={{pointerEvents: "all"}}
              d="M601.75,400.77c0,111.96-91.16,203.34-203.25,202.82-115.19-.53-204.55-94.05-202.59-206.64,1.91-109.88,91.12-199.11,202.84-199.23,112.16-.13,203,90.79,203,203.05Z"
            />
            <path
              className="cls-1"
              
              onMouseEnter={() =>
                setColorHighlight({ ...resetStyles, isRed: true })
              }
              onMouseLeave={() =>
                setColorHighlight({ ...resetStyles, isRed: false })
              }
              d="M485.6,423.55c20.3-10.26,41.6-14.69,64.01-14.18,8.24,.19,16.29,1.74,24.4,2.9,3.34,.48,4.71,1.91,4.13,5.64-4.5,28.72-11.85,56.46-27.45,81.42-.68,1.09-1.56,2.06-2.39,3.05q-8.5,10.15-19.61,2.13c-21.14-15.36-36.52-35.66-49.31-58.09-2.02-3.55-3.27-5.36-8.2-3.92-10.78,3.14-21.19-3.38-23.51-13.6-2.21-9.74,3.62-19.78,13.02-22.43,10.73-3.02,20.26,2.32,23.66,13.25,.37,1.2,.78,2.39,1.25,3.83Z"
            />
            <path
              className="cls-1"
              
              onMouseEnter={() =>
                setColorHighlight({ ...resetStyles, isRed: true })
              }
              onMouseLeave={() =>
                setColorHighlight({ ...resetStyles, isRed: false })
              }
              d="M552.69,388.11c-23.76-.56-44.27-4.27-64.17-11.15-3.74-1.29-5.62-1.52-7.96,2.68-5.2,9.36-17.6,11.78-26.5,6.01-8.54-5.54-10.95-17.69-5.22-26.3,5.82-8.74,17.53-11.32,26.11-4.97,5.01,3.7,4.53-1.1,5.26-2.86,7.66-18.41,19.22-33.95,34.09-47.1,6.86-6.07,14.28-11.39,22.14-16.12,2.55-1.53,4.4-2.05,6.39,1,16.83,25.83,31.06,52.72,35.14,83.88,1.51,11.56,1.57,11.68-9.93,13.36-5.96,.87-12,1.23-15.36,1.56Z"
            />
            <path
              className="cls-1"
              
              onMouseEnter={() =>
                setColorHighlight({ ...resetStyles, isRed: true })
              }
              onMouseLeave={() =>
                setColorHighlight({ ...resetStyles, isRed: false })
              }
              d="M419.75,310.05c-14.04-27.92-16.84-57.01-11.26-87.23,.84-4.57,2.45-6.19,7.18-5.36,25.18,4.45,49.85,10.53,72.34,23.2,5.93,3.34,11.25,7.76,16.93,11.56,3.02,2.02,3.06,4.15,1.17,7.03-9.02,13.74-19.82,25.71-32.74,36.03-10.65,8.51-21.87,15.98-33.72,22.59-2.09,1.16-2.81,2.11-1.7,4.5,5.37,11.52-3.69,22.97-12.85,25.34-10.11,2.62-20.57-3.68-22.96-13.77-2.68-11.3,3.89-20.64,16.45-23.4,.21-.05,.39-.17,1.14-.49Z"
            />
            <path
              className="cls-1"
              
              onMouseEnter={() =>
                setColorHighlight({ ...resetStyles, isRed: true })
              }
              onMouseLeave={() =>
                setColorHighlight({ ...resetStyles, isRed: false })
              }
              d="M375.31,450.94c9,.09,16.75,6.92,18.34,16.14,1.52,8.88-3.2,17.61-12.03,20.38-5.11,1.61-4.75,3.29-2.74,7.43,12.71,26.13,15.13,53.65,10.25,82.02-.47,2.74-.67,5.59-4.99,4.98-29.67-4.18-58.71-10.58-84.11-27.43-14.52-9.63-12.92-7.05-4.04-20.12,13.25-19.51,31.19-34.35,51.03-46.91,.53-.34,1.26-.37,1.78-.71,5.35-3.54,10.4-5.8,8.18-15.08-2.71-11.34,7.11-20.82,18.33-20.71Z"
            />
            <path
              className="cls-1"
              
              onMouseEnter={() =>
                setColorHighlight({ ...resetStyles, isRed: true })
              }
              onMouseLeave={() =>
                setColorHighlight({ ...resetStyles, isRed: false })
              }
              d="M416.16,547.54c-.6-19.77,3.04-38.16,8.34-56.23,1.28-4.38,.58-6.22-3.39-8.46-8.07-4.54-11-13.75-8-22.4,2.96-8.51,10.91-13.29,20.42-12.29,7.99,.85,14.9,7.75,16.11,16.26,.66,4.68-.54,8.87-3.29,12.81-1.44,2.06-1.45,3.66,2.09,4.71,17.53,5.19,32.11,15.41,45.17,27.91,8.09,7.74,15.22,16.33,21.23,25.83,1.73,2.74,2.28,4.43-.95,6.72-22.67,16.05-46.48,29.66-73.75,36.35-5.28,1.29-10.64,1.65-16,2.26-3.36,.38-4.52-.97-5.21-4.04-2.23-9.96-3.25-20.01-2.77-29.43Z"
            />
            <path
              className="cls-1"
              
              onMouseEnter={() =>
                setColorHighlight({ ...resetStyles, isRed: true })
              }
              onMouseLeave={() =>
                setColorHighlight({ ...resetStyles, isRed: false })
              }
              d="M253.67,418.51c19.52,.35,37.21,2.82,54.49,7.82,3.42,.99,5.15,.99,6.98-2.69,4.88-9.78,16.6-13.47,25.53-8.61,9.25,5.03,12.78,16.28,8.03,25.63-4.65,9.16-15.7,12.74-25.51,7.85-3.54-1.76-4.44-1.76-5.96,2.45-8.83,24.4-23.21,44.86-44.54,60.12-3.91,2.8-7.18,8.54-11.94,7.44-4.53-1.04-6.43-7.11-9.19-11.15-15.17-22.19-28.31-45.34-33.04-72.31-.37-2.12-.43-4.31-.92-6.4-1.01-4.24,1.08-5.6,4.86-6.53,10.77-2.64,21.73-3.19,31.2-3.62Z"
            />
            <path
              className="cls-1"
              
              onMouseEnter={() =>
                setColorHighlight({ ...resetStyles, isRed: true })
              }
              onMouseLeave={() =>
                setColorHighlight({ ...resetStyles, isRed: false })
              }
              d="M376.44,256.93c-.1,19.08-2.66,35.89-7.03,52.42-.91,3.44-1.23,5.38,2.81,7.5,7.85,4.12,11.31,11.85,9.62,19.31-1.58,7.02-7.39,13.75-15.22,14.69-7.62,.92-14.89-2.41-18.56-9.11-3.11-5.68-3.33-11.72-.15-17.31,1.94-3.4,1.43-4.48-2.14-5.64-26.82-8.73-47.22-26.01-63.72-48.34-2.84-3.84-2.68-5.96,2.17-9.68,19.46-14.95,40.33-26.9,63.73-34.24,5.73-1.8,11.77-2.6,17.67-3.84,3.99-.84,6.08,.26,7.21,4.76,2.59,10.36,3.16,20.87,3.62,29.48Z"
            />
            <path
              className="cls-1"
              
              onMouseEnter={() =>
                setColorHighlight({ ...resetStyles, isRed: true })
              }
              onMouseLeave={() =>
                setColorHighlight({ ...resetStyles, isRed: false })
              }
              d="M344.18,376.35c.13,9.23-5.93,16.58-15.05,18.26-8.77,1.61-17.31-3.22-20.19-12.01-1.28-3.9-2.05-4.91-6.36-2.83-25.59,12.31-52.47,14.47-80.15,9.19-2.75-.52-4.95-.91-4.37-4.71,4.31-28.32,10.98-55.85,26.9-80.25,8.49-13.01,8.71-12.25,21.17-3.16,20.41,14.91,34.92,34.5,47.55,55.82,1.88,3.18,3.54,3.79,7.15,2.82,12.38-3.33,23.19,4.68,23.36,16.89Z"
            />
            <g>
              <path
                class="cls-2"
                d="M230.5,246.95c-2.16,2.64-4.61,4.95-7.28,7.1-3.78,3.05-8.1,3.73-12.7,3.56-5.21-.2-10.19-1.26-14.71-4.36-.18,.43-.36,.68-.39,.95-.67,7.96-6.33,15.73-16.49,17.84-5.05,1.05-9.69,.51-13.94-2.69-2.58-1.94-5.37-3.61-8.04-5.38-1.92,1.62-7.16,10.53-8.36,14.24,15,7.82,30.04,15.65,45.51,23.71-.88,.43-1.31,.7-1.78,.85-3.08,1.01-6.18,1.94-9.23,3.03-1.39,.5-2.51,.35-3.81-.33-8.1-4.29-16.25-8.51-24.38-12.75-3.22-1.68-6.45-3.35-9.68-5.02-.41-.21-.85-.35-1.41-.58-.56,.96-.91,1.99-1.6,2.68-1.46,1.46-2.28,3.22-2.96,5.1-.67,1.86-1.43,3.68-2.14,5.53-.78,2.05-1.54,4.11-2.43,6.47,1.66-.23,3.03-.42,4.4-.59,3.65-.44,7.26-.27,10.81,.73,5.62,1.58,9.69,6.22,8.51,13.61-.07,.45-.07,.91-.11,1.43,2.27,.48,4.35-.11,6.39-.59,6.38-1.51,12.73-3.16,19.09-4.73,1.73-.43,3.49-.76,5.42-1.18-.19,1.36-1.08,1.65-1.8,1.98-3.02,1.38-6.04,2.77-9.11,4.02-7.91,3.25-15.97,6.02-24.39,7.65-2.39,.46-4.85,.63-7.28,.83-.85,.07-1.75-.04-2.59-.24-2.24-.51-3.12-1.7-2.98-3.85,.15-2.3,1.22-3.46,3.51-3.72,1.02-.11,2.04-.12,3.02-.18,1.26-3.29-.19-7.15-3.45-9.23-2.18-1.39-4.61-2.08-7.15-2.33-1.17-.11-2.36-.02-3.69-.02-1.49,3.85-3.09,7.62-4.39,11.49-.79,2.37-2.08,3.88-4.47,4.69-2.29,.78-4.47,1.91-7.27,3.14,.43-1.29,.66-2.07,.95-2.83,3.47-9.08,6.96-18.15,10.39-27.24,.38-1,.36-2.14,.66-3.19,.27-.95,.63-1.9,1.12-2.75,.53-.94,1.38-1.7,1.89-2.65,3.11-5.86,6.21-11.74,9.22-17.66,1.06-2.08,1.72-4.37,2.79-6.45,1.01-1.98,1.48-4.36,3.79-5.51,.5-.24,.76-.99,1.11-1.51,3.42-5.13,6.8-10.29,10.26-15.4,1.17-1.73,1.96-3.56,2.38-5.6,.15-.74,.51-1.54,1.01-2.08,6.41-6.88,12.89-13.7,19.32-20.57,4.06-4.33,8-8.76,12.13-13.03,2.43-2.52,4.51-5.37,7.44-7.45,2.82-2,5.38-4.36,8.06-6.54,1.7-1.38,3.43-2.74,5.37-4.27-6.05-3.09-12.05-4.9-18.64-4.1-.39,.05-.77,.18-1.15,.29-5.9,1.66-8.09,7.19-4.66,12.24,1.13,1.65,2.84,2.91,4.34,4.29,.54,.5,1.23,.85,1.85,1.27-.05,.16-.09,.33-.14,.5-.47,.09-.97,.33-1.41,.25-3.93-.74-7.63-2.08-10.81-4.57-6.27-4.93-5.76-12.79,1.08-16.92,3.91-2.36,8.16-2.93,12.58-2.09,3.41,.64,6.86,1.25,10.14,2.31,3.29,1.06,6.4,2.67,9.87,4.15,2.4-1.89,4.93-3.88,7.45-5.89,1.77-1.41,3.39-3.04,5.29-4.24,8.16-5.15,16.43-10.12,24.59-15.26,7.29-4.61,15.26-7.84,22.98-11.6,1.84-.9,3.72-2.23,5.63-2.33,1.91-.1,3.89,1.09,5.84,1.73,1.49,.5,2.98,1.02,4.96,1.7-3.42,2.24-6.98,3.29-10.23,5.21,7.28,15.45,14.51,30.8,21.88,46.46-.84-.13-1.36-.13-1.83-.29-3.07-1.04-6.11-2.15-9.19-3.16-1.37-.45-2.26-1.19-2.85-2.56-1.21-2.82-2.6-5.57-4.02-8.58-.35,.63-.57,1.02-.77,1.42-3.17,6.23-8.38,9.55-15.19,10.33-6.91,.79-13.36-.73-19.18-4.6-1.29-.86-2.42-1.97-3.9-3.2,.88-.41,1.41-.65,1.94-.9,2.45-1.12,4.01-3.05,4.81-5.57,.87-2.73,.09-5.52-2.29-7.19-1.45-1.02-3.22-1.61-4.89-2.3-.98-.41-1.82,.13-2.65,.64-2.36,1.44-4.85,2.7-7.08,4.31-3.87,2.79-7.59,5.79-11.52,8.82,10.58,13.41,21.03,26.66,31.48,39.91-.09,.16-.19,.32-.28,.49-1.92-.2-3.85-.38-5.77-.61-1.96-.24-3.9-.61-5.87-.77-1.23-.1-1.99-.66-2.72-1.59-7.62-9.71-15.27-19.38-22.92-29.06-.53-.67-1.09-1.32-1.76-2.12-1.89,1.46-3.64,2.89-5.48,4.19-1.07,.76-2.3,1.31-3.44,1.97-.47,.27-1.01,.5-1.37,.88-2.45,2.58-4.86,5.18-7.49,8,4.79,4.46,9.5,8.86,14.32,13.35-.56,.67-.99,1.22-1.45,1.73-4.41,4.76-8.81,9.52-13.25,14.25-2.05,2.18-2.75,4.72-2.34,7.64,.55,3.89,3.5,6.69,7.41,7.17,5.29,.66,9.32-1.9,13.07-5.06,4.06-3.42,5.77-8.01,6.04-13.2,.05-1.02,0-2.04,0-2.98,1.58-.5,7.07-.3,9.31,.34-.1,1.71-.09,3.52-.35,5.29-.54,3.72-2.03,7.12-3.73,10.44-.25,.35-.5,.7-.75,1.05Zm-40.1,.29c-2.34-5.96-.61-10.72,3.07-15.02,1.03-1.2,2.12-2.34,3.19-3.5,2.18-2.37,4.37-4.74,6.63-7.19-2.66-2.46-5.18-4.79-7.77-7.2-3.41,3.63-6.59,7.03-9.77,10.43-2.43,2.59-4.95,5.12-7.28,7.8-2.3,2.65-4.56,5.37-6.59,8.23-2.92,4.12-5.61,8.4-8.38,12.62-.04,.07,.09,.25,.19,.51,7.9-1.52,15.89-2.75,23.79-4.4-.14-1.21-.25-2.12-.38-3.24,1.11,.32,2,.57,3.31,.95Zm70.56-57.18c8.22,2.54,14.54-.08,18.14-7.38,.91-1.84,1.56-3.8,2.37-5.68,.55-1.26,1.17-2.48,1.95-4.1-2.44-5.19-5.09-10.82-7.73-16.41-2.44,.81-4.68,1.54-6.9,2.29-.3,.1-.56,.29-.83,.46-4.83,3.01-9.67,6.02-14.49,9.04-.41,.25-.76,.6-1.33,1.06,5.48,.22,10.16,1.52,12.5,6.66,2.47,5.42,.36,9.96-3.66,14.07Zm-96.57,67.96c.39,.48,.47,.63,.59,.71,2.16,1.45,4.32,2.91,6.5,4.34,1.51,1,2.99,2.08,4.58,2.94,3.21,1.73,6.66,1.4,9.07-.72,2.89-2.54,4.11-7.78,2.64-11.68-7.68,1.45-15.38,2.9-23.38,4.41Z"
              />
              <path
                class="cls-2"
                d="M678.41,321.23c-1.39-3.31-2.78-6.62-4.27-10.16-15.83,6.53-31.49,13-47.53,19.62,.2-.88,.26-1.4,.44-1.86,1.13-2.87,2.37-5.69,3.4-8.59,.59-1.63,1.54-2.57,3.15-3.22,8.49-3.43,16.96-6.96,25.43-10.46,3.64-1.5,7.28-3.02,11.14-4.62-.77-2.3-1.31-4.59-2.3-6.68-1.64-3.49-3.55-6.85-5.46-10.47-15.09,8.17-30,16.24-45.27,24.51,.11-.96,.1-1.56,.25-2.1,.88-3.12,1.83-6.22,2.66-9.34,.34-1.25,1-2.02,2.14-2.62,4.06-2.13,8.07-4.34,12.1-6.53,.69-.38,1.36-.78,2.3-1.32-3.08-4.59-6.09-9.07-9.17-13.65-1.52,.89-2.85,1.72-4.24,2.44-2.01,1.03-4,.46-4.94-1.62-.52-1.18-.91-2.64-.74-3.88,.44-3.03,1.12-6.05,1.94-9,.58-2.09,1.95-3.78,3.7-5.11,2.46-1.88,3.97-1.67,5.69,.89,3.49,5.18,6.95,10.38,10.43,15.57,1.71,2.56,3.42,5.12,5.17,7.73-.62,1.01-1.18,1.95-1.75,2.89,5.12-2.1,9.85-4.92,14.81-7.49-1.55-2.96-2.47-5.93-4.3-8.54-4.48-6.42-8.68-13.03-13.1-19.5-1.05-1.53-2.54-2.76-3.81-4.15-.41-.45-.97-.92-1.1-1.47-.74-3.23-3.48-4.97-5.19-7.65-13.23,11-26.21,21.81-39.51,32.87-.1-.74-.21-1.09-.19-1.42,.26-3.39,.61-6.77,.79-10.16,.07-1.39,.58-2.34,1.63-3.21,5.39-4.42,10.72-8.89,16.07-13.34,.55-.45,1.07-.93,1.82-1.57-3.58-3.38-7.09-6.7-10.77-10.17-.39,.99-.65,1.72-.95,2.44-3.14,7.52-11.01,8.45-16.33,4.79-2.54-1.75-4.41-4.07-5.64-6.89-2.96-6.78-2.45-13.68-.84-20.71,1.71,.31,1.78,1.38,1.82,2.66,.09,2.75,.16,5.53,.61,8.23,.27,1.58,1.09,3.14,1.96,4.53,2.29,3.66,5.88,5.1,9.5,4.02,3.65-1.09,6.2-4.52,6.25-8.59,0-1.25-.33-2.49-.51-3.74-.07-.5-.13-1.01-.26-1.93,.8,.41,1.31,.56,1.65,.88,5.54,5.19,11.05,10.41,16.6,15.6,.74,.69,.91,1.37,.59,2.32-.43,1.26-.75,2.55-.96,3.99,3.5-2.47,6.69-5.28,10.12-8.09-.71-.92-1.51-1.64-1.9-2.53-2.3-5.1-7.06-7.92-10.79-11.67-5.02-5.04-10.34-9.78-15.5-14.69-1.92-1.83-4.02-3.46-5.74-5.54-1.11-1.33-2.92-2.07-4.4-3.12-1.67-1.19-3.31-2.42-5.24-3.84-10.21,13.69-20.16,27.49-30.31,41.15-.17-.02-.34-.05-.51-.07-.37-2.04-.75-4.08-1.1-6.12-.27-1.56-.37-3.15-.76-4.68-.39-1.53-.03-2.68,.9-3.93,7.49-10.1,14.92-20.25,22.36-30.38,.37-.5,.73-1.02,1.17-1.63-4.32-4.46-9.76-7.18-15.25-10.42-8.72,14.69-17.41,29.32-26.25,44.22-.36-.72-.62-1.1-.73-1.53-.92-3.35-1.77-6.72-2.72-10.06-.32-1.09-.11-1.97,.47-2.9,1.39-2.21,2.7-4.47,4.02-6.72,.31-.53,.54-1.09,.82-1.67-.29-.08-.44-.18-.58-.15-8.03,1.41-14.28-1.64-19.02-7.95-4.21-5.61-6.34-11.98-5.82-19.08,.04-.55,.11-1.1,.22-1.64,.08-.37,.26-.73,.48-1.3,2.14,1.77,4.5,2.43,7.13,2.18,3.89-.37,6.37-2.97,6.42-6.87,0-.63-.04-1.27-.12-1.89-.34-2.49-1.26-4.46-4-5.23-1.58-.44-3.06-1.28-4.54-2.03-.6-.31-1.34-.75-1.56-1.31-1.2-3.07-2.27-6.19-3.53-9.7,.97,.32,1.54,.45,2.07,.69,9.24,4.12,18.42,8.37,27.72,12.35,6.72,2.88,12.61,7.14,18.96,10.63,3.38,1.86,6.83,3.62,10.03,5.75,4.41,2.92,8.62,6.15,12.91,9.25,.64,.46,1.28,.9,1.9,1.34,.19-.14,.41-.23,.4-.31-.16-6.84-.92-13.56-3.76-19.89-1.24-2.77-2.77-5.33-5.55-6.89-.4-.22-.82-.83-.83-1.26-.08-2.59-.04-5.18-.04-7.99,.69,.18,1.23,.23,1.68,.46,3.29,1.67,5.68,4.25,7.29,7.54,2.05,4.18,2.9,8.68,3.31,13.26,.45,5.04,.74,10.09,1.04,15.14,.11,1.81,.52,3.29,2.28,4.3,7.51,4.27,13.18,10.74,19.45,16.49,4.89,4.48,9.76,9,14.53,13.61,1.7,1.63,3.12,3.55,4.63,5.36,3.15,3.76,6.25,7.56,9.43,11.3,1.06,1.25,2.4,2.28,3.45,3.54,1.72,2.03,3.43,4.09,4.92,6.28,4.88,7.19,9.66,14.46,14.46,21.7,.95,1.43,1.87,2.88,2.69,4.39,3.41,6.24,6.62,12.6,10.21,18.75,5.14,8.81,8.15,18.54,12.28,27.78,.24,.53,.37,1.29,.17,1.81-1.21,3.22-2.53,6.4-3.83,9.59-.16,.01-.33,.02-.5,.04Zm-166.86-149.46c.75,2.37,1.69,4.34,3.1,6.07,2.3,2.83,5.24,4.6,8.9,4.79,1.95,.11,3.93-.19,5.89-.34,2.84-.22,5.49-2.06,8.48-.72,3.34-5.64,6.58-11.11,9.8-16.55-5.24-4.09-17.12-10.19-23.8-12.27,7.67,11.77-1.05,21.28-12.36,19.02Z"
              />
              <path
                class="cls-2"
                d="M362.62,180.81c-.48-.25-1-.45-1.45-.74-8.91-5.77-17.68-11.72-25.01-19.5-1.57-1.67-3.01-3.45-4.41-5.26-.57-.73-.98-1.64-1.28-2.52-.88-2.57,.57-4.85,3.24-5.16,1.15-.13,1.98,.49,2.63,1.33,.82,1.05,1.56,2.16,2.32,3.22,3.47-.97,5.39-4.14,4.96-8.1-.37-3.44-1.8-7.07-4.17-10.42-2.13,.46-4.35,.93-6.57,1.43-1.54,.34-3.06,.8-4.62,1.04-.8,.13-1.83,.15-2.46-.24-2.55-1.58-5-3.33-7.47-5.03-.17-.12-.25-.37-.51-.78,2.79-.66,5.44-1.3,8.11-1.9,8.55-1.92,17.08-3.97,25.67-5.69,4.78-.96,9.66-1.38,14.51-2.01,2.02-.26,4.06-.44,6.07-.66,.04-.23,.14-.45,.09-.51-4.58-4.74-9.42-9.16-15.54-11.86-1.79-.79-3.72-1.29-5.62-1.8-.74-.2-1.66-.34-2.33-.07-1.95,.79-3.08-.16-4.22-1.52-1.31-1.55-2.74-3-4.28-4.66,3.82-1.7,7.43-1.69,10.9-.39,2.56,.96,5.17,2.16,7.3,3.81,4.05,3.14,7.8,6.68,11.64,10.08,1.53,1.37,3.17,2.68,4.42,4.29,1.72,2.2,3.85,2.06,6.17,1.77,2.53-.32,5.08-.77,7.61-.8,7.52-.09,15.04,.26,22.55-.04,7.87-.32,15.56,.95,23.32,1.72,3.15,.31,6.28,1.02,9.42,1,6.39-.05,12.33,2.25,18.51,3.2,2.8,.43,5.56,1.16,8.35,1.69,1.4,.27,2.43,.87,3.21,2.13,1.57,2.53,3.29,4.98,4.7,7.92-3.49-.67-6.97-1.35-10.76-2.08-3.49,16.77-6.95,33.33-10.48,50.28-.63-.67-1.04-1-1.32-1.41-1.78-2.61-3.46-5.3-5.33-7.85-.94-1.28-1.11-2.5-.79-3.98,1.35-6.25,2.64-12.52,3.95-18.78,1.31-6.26,2.63-12.52,3.93-18.79,.08-.38,.08-.77,.14-1.36-5.79-1.91-11.75-2.49-18.06-3.05-1.85,17-3.68,33.89-5.57,51.31-.92-1.01-1.46-1.55-1.95-2.14-1.92-2.32-3.78-4.67-5.74-6.95-.85-.98-1.15-1.99-.98-3.25,.29-2.19,.49-4.4,.72-6.6,.09-.85,.17-1.69,.3-2.93-3.42,2.37-6.94,2.97-10.64,2.89-5.77-.13-10.54-2.46-14.54-6.5-1.23-1.23-2.17-2.76-3.48-3.88-3.03-2.59-3.67-9.74-1.15-13.74,1.75-2.79,4.49-3.91,7.6-4.18,3.66-.33,7.02,.87,10.3,2.33,.14,.06,.3,.12,.41,.22,2.11,2.11,4.2,4.22,6.41,6.45-1.07,.73-1.73,.14-2.4-.11-2.76-1.01-5.54-1.76-8.54-1.69-5.05,.14-8.7,4.84-8.91,9.44-.08,1.65,.69,2.84,2.3,3.5,2.21,.91,4.5,.95,6.77,.63,2.83-.39,5.54-1.26,8.01-2.76,2.98-1.79,5.98-3.55,9.26-5.49,.61-5.56,1.25-11.42,1.9-17.51-2.9-.29-5.45-1.19-8.25-1.18-8.38,.04-16.77-.22-25.15-.16-5.6,.04-11.2,.05-16.76,.88-.45,.07-.9,.21-1.53,.37,1.78,16.93,3.57,33.79,5.39,51.06-.81-.48-1.28-.7-1.68-1.01-2.56-1.99-5.05-4.07-7.66-5.99-1.28-.95-1.71-2.1-1.85-3.61-.4-4.62-.93-9.23-1.45-14.15-.55,.42-.85,.63-1.14,.86-5.81,4.68-12.36,6.15-19.58,4.38-1.67-.41-3.16-.76-4.65,.44-.47,.38-1.13,.51-1.95,.85,1.25,2.02,2.71,3.74,4.32,5.3,4.43,4.29,8.91,8.53,13.37,12.8,.61,.59,1.2,1.2,1.81,1.8-.12,.13-.24,.27-.37,.4Zm7.65-31.89c-.75-7.06-1.45-13.58-2.16-20.19-2.13,.1-3.91,.2-5.7,.28-1.15,.05-2.33-.07-3.45,.16-4.32,.91-8.63,1.93-12.93,2.92-.89,.2-1.76,.5-2.85,.81,.7,.9,1.23,1.57,1.76,2.25,2.12,2.68,3.95,5.53,5.21,8.72,1.56,3.96,2.15,7.93-.04,11.89-.06,.09,.06,.28,.11,.51,3.42-.44,6.6-1.63,9.38-3.6,2.8-1.99,5.39-4.28,8.13-6.5,.74,.79,1.46,1.57,2.55,2.75Z"
              />
            </g>
            <g>
              <path
                class="cls-3"
                d="M104.33,436.62l-.67-9.57,30.47-17.9-.05-.2-31.54,2.22-.67-9.57,49.49-3.48,.67,9.57-30.51,17.91,.05,.2,31.58-2.22,.67,9.57-49.49,3.48Z"
              />
              <path
                class="cls-3"
                d="M122.31,470.75l-2.85-12.05-11.09-.24-2.3-9.74,51.51,2.25,2.29,9.67-45.04,25.1-2.31-9.77,9.8-5.22Zm4.96-11.87l1.94,8.21,14.37-7.63-.05-.2-16.27-.38Z"
              />
              <path
                class="cls-3"
                d="M166.56,503.71l-4.09-10.9-39.4,14.78-3.38-9.02,39.4-14.79-3.98-10.61,7.05-2.65,11.45,30.52-7.05,2.65Z"
              />
              <path
                class="cls-3"
                d="M135.92,535.83l-4.27-8.55,44.38-22.17,4.27,8.55-44.38,22.17Z"
              />
              <path
                class="cls-3"
                d="M176.21,567.35c-4.88,3.21-9.58,4.34-14.12,3.39-4.54-.95-8.32-3.71-11.32-8.27-3.01-4.57-4.04-9.11-3.11-13.64,.93-4.53,3.84-8.4,8.72-11.61l11.55-7.61c4.86-3.2,9.56-4.35,14.11-3.45,4.55,.9,8.33,3.64,11.34,8.2,3.01,4.57,4.04,9.14,3.09,13.71-.94,4.57-3.85,8.46-8.7,11.66l-11.55,7.61Zm6.38-15.65c3.02-1.99,4.89-4.1,5.62-6.33,.73-2.23,.34-4.51-1.19-6.82-1.53-2.33-3.45-3.58-5.75-3.75s-4.97,.75-8,2.74l-11.64,7.66c-3.07,2.03-4.99,4.13-5.74,6.33-.76,2.2-.37,4.46,1.17,6.79,1.54,2.33,3.47,3.59,5.79,3.78,2.33,.19,5.03-.73,8.1-2.75l11.64-7.66Z"
              />
              <path
                class="cls-3"
                d="M194.03,613.96l-6.54-7.02,12.43-33.08-.16-.13-23.13,21.56-6.54-7.02,36.29-33.83,6.54,7.02-12.46,33.11,.16,.13,23.15-21.58,6.54,7.02-36.29,33.83Z"
              />
              <path
                class="cls-3"
                d="M229.52,629.17l-9.8-7.57-8.77,6.79-7.92-6.11,41.44-30.68,7.86,6.07-19.2,47.86-7.94-6.14,4.32-10.22Zm-3.62-12.35l6.68,5.16,6.36-14.98-.16-.13-12.88,9.94Z"
              />
              <path
                class="cls-3"
                d="M253.93,649.05l16.07,9.12-3.7,6.52-24.42-13.85,24.48-43.15,8.35,4.73-20.78,36.63Z"
              />
              <path
                class="cls-3"
                d="M318.63,671.31c.61-1.88,.61-3.52,0-4.92-.61-1.4-1.98-3.02-4.13-4.87-4.28-3.27-7.29-6.38-9.03-9.34-1.74-2.95-1.98-6.37-.72-10.26,1.25-3.87,3.66-6.57,7.24-8.1,3.57-1.53,7.52-1.6,11.83-.2,4.58,1.48,7.84,3.97,9.78,7.47s2.17,7.41,.67,11.75l-.13,.17-8.87-2.87c.79-2.44,.85-4.47,.17-6.09-.68-1.62-2.04-2.75-4.06-3.41-1.75-.57-3.3-.43-4.64,.41-1.35,.84-2.3,2.13-2.86,3.86-.52,1.6-.4,3.1,.37,4.49,.76,1.39,2.29,3.14,4.56,5.24,4.06,2.99,6.89,6.02,8.49,9.09,1.59,3.07,1.75,6.56,.49,10.47-1.31,4.04-3.71,6.77-7.2,8.2-3.49,1.42-7.5,1.4-12.03-.06-4.47-1.45-7.88-3.93-10.25-7.46-2.36-3.52-2.67-7.82-.91-12.88l.13-.17,8.9,2.88c-.96,2.96-1.05,5.28-.27,6.97,.78,1.68,2.33,2.9,4.66,3.66,1.96,.64,3.61,.57,4.95-.19,1.33-.76,2.29-2.04,2.87-3.83Z"
              />
              <path
                class="cls-3"
                d="M364.07,671.92l-14.92-2.58-2.46,14.2,17.87,3.09-1.28,7.39-27.33-4.73,8.46-48.88,27.26,4.72-1.28,7.42-17.81-3.08-2.16,12.49,14.92,2.58-1.28,7.39Z"
              />
              <path
                class="cls-3"
                d="M385.81,675.69l-.57,19.89-9.59-.28,1.42-49.56,14.83,.42c4.92,.14,8.76,1.54,11.51,4.18,2.75,2.65,4.06,6.26,3.93,10.85-.07,2.57-.73,4.77-1.98,6.62-1.25,1.85-3.01,3.3-5.28,4.35,2.56,.94,4.38,2.42,5.46,4.45,1.08,2.03,1.57,4.54,1.49,7.54l-.1,3.61c-.04,1.39,.08,2.84,.35,4.37,.27,1.53,.81,2.66,1.6,3.39l-.02,.72-9.93-.28c-.77-.75-1.24-1.95-1.41-3.6-.17-1.65-.23-3.3-.18-4.93l.1-3.48c.07-2.52-.39-4.49-1.4-5.9s-2.48-2.15-4.43-2.21l-5.78-.17Zm.21-7.49l5.17,.15c2.06,.06,3.65-.51,4.76-1.72,1.11-1.21,1.7-2.94,1.77-5.22,.07-2.31-.41-4.17-1.44-5.56-1.03-1.39-2.56-2.12-4.6-2.18l-5.24-.15-.42,14.68Z"
              />
              <path
                class="cls-3"
                d="M433.39,681.2l.65,2.01,.2-.02,.17-2.01,4.07-37.8,10.03-1.21-8.13,50.96-9.9,1.2-19.98-47.56,10.03-1.21,12.85,35.65Z"
              />
              <path
                class="cls-3"
                d="M473.08,686.74l-9.31,2.2-11.42-48.28,9.3-2.2,11.42,48.28Z"
              />
              <path
                class="cls-3"
                d="M511.16,658.16l.13,.17c1.87,4.97,1.94,9.18,.2,12.61-1.75,3.44-5.06,6.03-9.96,7.78-5.02,1.8-9.53,1.74-13.54-.17-4.01-1.91-6.99-5.59-8.94-11.04l-4.96-13.86c-1.94-5.43-2.03-10.16-.25-14.17,1.78-4.02,5.09-6.89,9.94-8.63,5.1-1.83,9.47-1.99,13.09-.49,3.62,1.5,6.29,4.78,8,9.84v.22s-8.77,3.14-8.77,3.14c-1.07-2.99-2.35-4.9-3.84-5.72-1.48-.82-3.47-.78-5.94,.1-2.27,.81-3.67,2.24-4.22,4.28-.55,2.04-.22,4.75,.99,8.13l4.98,13.92c1.22,3.4,2.73,5.7,4.53,6.9,1.8,1.2,3.93,1.36,6.39,.48,2.24-.8,3.64-1.97,4.2-3.51,.56-1.54,.29-3.83-.8-6.86l8.75-3.13Z"
              />
              <path
                class="cls-3"
                d="M539.23,636.47l-13.39,7.08,6.74,12.74,16.04-8.48,3.5,6.63-24.52,12.96-23.19-43.86,24.46-12.93,3.52,6.66-15.97,8.44,5.92,11.21,13.39-7.08,3.5,6.63Z"
              />
              <path
                class="cls-3"
                d="M586.15,613.77c-1.26-1.53-2.64-2.41-4.15-2.65-1.51-.24-3.62,.04-6.32,.86-5.06,1.85-9.31,2.71-12.73,2.58-3.42-.12-6.43-1.77-9.03-4.92-2.58-3.14-3.56-6.62-2.92-10.46,.63-3.83,2.7-7.19,6.21-10.08,3.71-3.06,7.56-4.46,11.56-4.22s7.41,2.17,10.26,5.77l.08,.2-7.2,5.93c-1.63-1.98-3.31-3.12-5.04-3.42-1.73-.3-3.42,.23-5.06,1.59-1.42,1.17-2.13,2.55-2.15,4.13-.02,1.59,.56,3.08,1.71,4.49,1.07,1.3,2.4,2,3.98,2.11,1.59,.11,3.88-.23,6.87-1.02,4.71-1.81,8.78-2.57,12.23-2.25,3.45,.31,6.48,2.05,9.09,5.23,2.7,3.28,3.71,6.77,3.03,10.48-.68,3.71-2.86,7.08-6.53,10.1-3.63,2.98-7.56,4.53-11.8,4.62-4.24,.09-8.02-1.96-11.34-6.17l-.08-.2,7.22-5.95c1.98,2.4,3.89,3.73,5.72,3.98,1.84,.25,3.7-.4,5.59-1.96,1.59-1.31,2.43-2.73,2.5-4.27,.07-1.53-.49-3.03-1.69-4.48Z"
              />
              <path
                class="cls-3"
                d="M621.21,574.22l.2,.09c4.02,3.48,6.07,7.15,6.17,11,.1,3.85-1.59,7.71-5.06,11.58-3.56,3.97-7.56,6.06-11.99,6.29-4.43,.23-8.8-1.59-13.11-5.46l-10.95-9.83c-4.29-3.85-6.61-7.97-6.95-12.35-.34-4.38,1.2-8.48,4.64-12.32,3.62-4.03,7.38-6.25,11.28-6.65,3.9-.4,7.81,1.22,11.72,4.85l.11,.19-6.23,6.94c-2.36-2.12-4.4-3.19-6.1-3.21-1.69-.01-3.42,.96-5.18,2.92-1.61,1.79-2.16,3.71-1.68,5.77,.49,2.06,2.07,4.28,4.74,6.68l11,9.88c2.69,2.41,5.11,3.72,7.27,3.92,2.16,.2,4.11-.67,5.85-2.61,1.59-1.77,2.27-3.47,2.03-5.09s-1.56-3.5-3.96-5.66l6.21-6.91Z"
              />
              <path
                class="cls-3"
                d="M659.7,544.64l-5.19,8.03-17.37-11.22-8.66,13.4,17.37,11.23-5.21,8.06-41.67-26.92,5.21-8.06,18,11.63,8.66-13.4-18-11.63,5.19-8.03,41.67,26.93Z"
              />
              <path
                class="cls-3"
                d="M656.43,500.4l-6.22,13.81,13.14,5.92,7.45-16.53,6.83,3.08-11.4,25.28-45.23-20.39,11.37-25.22,6.87,3.09-7.43,16.47,11.56,5.21,6.22-13.81,6.83,3.08Z"
              />
              <path
                class="cls-3"
                d="M675.74,470.04l.05-.2-33.26-18.28,3.17-12.15,48,12.53-2.41,9.22-30.23-7.89-.08,.19,28.01,16.56-1.63,6.22-32.28,.75-.02,.21,30,7.83-2.42,9.25-48-12.53,3.15-12.08,37.94,.37Z"
              />
              <path
                class="cls-3"
                d="M675.87,410.59l-1.33,15.08,14.36,1.26,1.59-18.07,7.47,.66-2.43,27.63-49.42-4.35,2.43-27.56,7.5,.66-1.58,18,12.63,1.11,1.33-15.08,7.47,.66Z"
              />
            </g>
          </g>
        </svg>
        <p>Click the logo to highlight the importance</p>
      </div>
      <div className="aboutLogoTextContainer">
        <h1 className={isVisible ? "aboutLogoTitle" : ""} ref={sliderRef}>Significance</h1>
        <p>
          The National Service Scheme (NSS) logo is a symbol of the dynamism and
          progressive outlook of youth. It features a wheel with eight bars,
          based on the giant 'Rath Wheel' of the Konark Sun Temple situated in
          Orissa.
          <span className={colorHighlight.isWhite ? "highlight-white" : ""}>
            It represents the 24 hours of a day, which symbolizes the idea that
            NSS volunteers are always ready to serve the community, day or
            night. The wheel itself represents progress and movement, indicating
            that NSS Volunteers are constantly striving to make a difference in
            their communities.
          </span>
          <span className={colorHighlight.isRed ? "highlight-red" : ""}>
            The red colour indicates that the volunteer is full of young blood
            that is lively, active, energetic and full of high spirit.
          </span>
          <span className={colorHighlight.isBlue ? "highlight-blue" : ""}>
            The color blue used in the logo represents the potential of young
            people to create positive change on a large scale. It also
            represents peace and harmony, values that NSS promotes through its
            service activities.
          </span>{" "}
          The NSS logo is a powerful representation of the organization's
          mission to empower young people to serve their communities and create
          a better world. It inspires Volunteers to be active, dynamic, and
          always ready to make a positive impact.
        </p>
      </div>
    </div>
  );
}