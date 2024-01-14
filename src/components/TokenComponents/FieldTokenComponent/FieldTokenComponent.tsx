import { useEffect, useState, useRef } from "react";
import { TokenData } from "../../../classes/TokenClasses/TokenCreator";
import "./FieldTokenComponent.scss";

export interface FieldTokenState {
  state: number;
}

export default function FieldTokenComponent(props: TokenData) {
  const [tokenExpanded, setTokenExpand] = useState(false);
  const [tokenEliminated, setTokenEliminate] = useState(false);

  const [currentToken, setCurrentToken] = useState<React.MouseEvent<
    HTMLDivElement,
    MouseEvent
  > | null>(null);
  const [parentElement, setParentElement] = useState<HTMLElement | null>();
  const [tokenTop, setTokenTop] = useState<number>(0);
  const [initialMousePos, setInitialMousePos] = useState<number>(0);
  const [initialTokenY, setInitialTokenY] = useState<number>();

  const [topEdge, setTopEdge] = useState<number>(0);
  const [bottomEdge, setBottomEdge] = useState<number>(0);

  const [tokenReleased, setTokenRelease] = useState(true);

  const tokenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentToken && tokenRef.current) {
      const tokenRect = tokenRef.current.getBoundingClientRect();

      if (parentElement && parentElement.classList.contains("battlefieldRow")) {
        const parentRect = parentElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate top edge with some padding
        setTopEdge(Math.max(tokenRect.top - parentRect.top + 5, 0));

        // Calculate bottom edge with padding and considering token height
        setBottomEdge(
          Math.min(
            parentRect.bottom - tokenRect.height - tokenRect.top - 5,
            windowHeight,
          ),
        );
      }
    }
  }, [currentToken]);

  const {
    tokenLabelColor,
    tokenAlias,
    tokenDefense,
    tokenHP,
    tokenId,
    tokenInitiative,
    tokenSpeed,
    tokenType,
  } = props;

  function expandToken() {
    setTokenExpand((prev) => !prev);
  }

  function killToken() {
    setTokenEliminate((prev) => !prev);
  }

  // TAKE TOKEN
  function takeToken(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (
      event.target instanceof HTMLDivElement &&
      event.target.id === "battlefieldToken"
    ) {
      setTokenRelease(false);

      setCurrentToken(event);
      setTokenTop(tokenRef.current!.getBoundingClientRect().top);

      setParentElement(tokenRef.current!.parentElement);

      // Add event listener directly to the handleMouseMove function
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleReleaseToken);
    }
  }

  // HANDLE MOUSE MOVE
  function handleMouseMove(event: MouseEvent) {
    if (currentToken && !tokenReleased && tokenRef.current) {
      setInitialMousePos(event.clientY - tokenTop);

      if (parentElement && parentElement.classList.contains("battlefieldRow")) {
        setInitialTokenY(tokenTop - parentElement.offsetTop);
        const parentY = parentElement.offsetTop + 15;
        const newTop = initialMousePos + tokenTop;

        const parentRect = parentElement.getBoundingClientRect();
        const bottomBoundary =
          parentRect.bottom - tokenRef.current.clientHeight;

        // Check if the new position is within boundaries
        tokenRef.current.style.top = newTop - parentY - initialTokenY! + "px";

        if (newTop >= parentRect.top + 5 && newTop <= bottomBoundary) {
        }
      }
    }
  }

  // HANDLE RELEASE TOKEN
  function handleReleaseToken() {
    setTokenRelease(true);

    // Reset the initial top position
    if (currentToken && tokenRef.current) {
      tokenRef.current?.classList.remove("draggedToken");

      tokenRef.current.style.position = "relative";
      tokenRef.current.style.top = "initial";
    }

    // Remove event listeners from document
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleReleaseToken);
  }

  useEffect(() => {
    if (!tokenReleased) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleReleaseToken);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleReleaseToken);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleReleaseToken);
    };
  }, [tokenReleased, handleMouseMove, handleReleaseToken]);

  useEffect(() => {
    // Reset the initial top position when tokenReleased changes
    if (tokenReleased && tokenRef.current) {
      tokenRef.current.style.top = "initial";
    }
  }, [tokenReleased]);

  return (
    <>
      <div
        ref={tokenRef}
        className={`tokenLabel battlefieldToken ${
          tokenExpanded ? "expanded" : ""
        }`}
        id="battlefieldToken"
        data-type={tokenType}
        style={{
          backgroundColor: `${tokenEliminated ? "gray" : tokenLabelColor}`,
          cursor: `${tokenReleased ? "" : "grabbing"}`,
          position: "relative",
        }}
        key={tokenId}
        onMouseDown={takeToken}
      >
        <span className="tokenInitiative">{tokenInitiative}</span>
        <span
          className={`${tokenEliminated ? "isDead" : ""}`}
          onClick={killToken}
        >
          <i className={`fa-solid fa-skull deathStatusIcon`}></i>
        </span>
        <span className="tokenName">{tokenAlias}</span>
        <button onClick={expandToken} className="tokenExpandButton">
          <i className="fa-solid fa-angle-down expandArrow"></i>
        </button>
      </div>

      <div
        className={`${!tokenReleased ? "previewHidden" : "tokenPreview"}`}
        style={{ display: `${tokenExpanded ? "flex" : "none"}` }}
      >
        <span>
          <i className="fa-solid fa-heart-pulse"></i>
          {tokenHP}
        </span>
        <span>
          <i className="fa-solid fa-shield-halved"></i>
          {tokenDefense}
        </span>
        <span>
          <i className="fa-solid fa-person-running"></i>
          {tokenSpeed}
        </span>
      </div>
    </>
  );
}
// import { useEffect, useState, useRef } from "react";
// import { TokenData } from "../../../classes/TokenClasses/TokenCreator";
// import "./FieldTokenComponent.scss";

// export interface FieldTokenState {
//   state: number;
// }

// export default function FieldTokenComponent(props: TokenData) {
//   const [tokenExpanded, setTokenExpand] = useState(false);
//   const [tokenEliminated, setTokenEliminate] = useState(false);

//   const [currentToken, setCurrentToken] = useState<React.MouseEvent<
//     HTMLDivElement,
//     MouseEvent
//   > | null>(null);
//   const [parentElement, setParentElement] = useState<HTMLElement | null>();
//   const [shiftY, setShiftY] = useState<number>(0);
//   const [topEdge, setTopEdge] = useState<number>(0);
//   const [bottomEdge, setBottomEdge] = useState<number>(0);
//   const [tokenReleased, setTokenRelease] = useState(true);

//   const tokenRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (currentToken && tokenRef.current) {
//       const tokenRect = tokenRef.current.getBoundingClientRect();
//       const parentElement = tokenRef.current.parentElement;

//       if (parentElement && parentElement.classList.contains("battlefieldRow")) {
//         const parentRect = parentElement.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         // Calculate top edge with some padding
//         setTopEdge(Math.max(tokenRect.top - parentRect.top + 5, 0));

//         // Calculate bottom edge with padding and considering token height
//         setBottomEdge(
//           Math.min(
//             parentRect.bottom - tokenRect.height - tokenRect.top - 5,
//             windowHeight,
//           ),
//         );
//       }
//     }
//   }, [currentToken]);

//   const {
//     tokenLabelColor,
//     tokenAlias,
//     tokenDefense,
//     tokenHP,
//     tokenId,
//     tokenInitiative,
//     tokenSpeed,
//     tokenType,
//   } = props;

//   function expandToken() {
//     setTokenExpand((prev) => !prev);
//   }

//   function killToken() {
//     setTokenEliminate((prev) => !prev);
//   }

//   // TAKE TOKEN
//   function takeToken(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//     if (
//       event.target instanceof HTMLDivElement &&
//       event.target.id === "battlefieldToken"
//     ) {
//       setTokenRelease(false);

//       setCurrentToken(event);
//       setShiftY(event.clientY - tokenRef.current!.getBoundingClientRect().top);
//       setParentElement(tokenRef.current!.parentElement);

//       // Add event listener directly to the handleMouseMove function
//       document.addEventListener("mousemove", handleMouseMove);
//       document.addEventListener("mouseup", handleReleaseToken);
//     }
//   }

//   // HANDLE MOUSE MOVE
//   function handleMouseMove(event: MouseEvent) {
//     if (currentToken && !tokenReleased && tokenRef.current) {
//       tokenRef.current?.classList.add("draggedToken");
//       const pageY = event.pageY;
//       const newTop = pageY - shiftY;
//       tokenRef.current.style.position = "absolute";

//       if (parentElement && parentElement.classList.contains("battlefieldRow")) {
//         const parentRect = parentElement.getBoundingClientRect();
//         const bottomBoundary =
//           parentRect.bottom - tokenRef.current.clientHeight - 10;

//         // Check if the new position is within boundaries
//         if (newTop >= parentRect.top + 5 && newTop <= bottomBoundary) {
//           tokenRef.current.style.top = newTop + "px";
//         }
//       }
//     }
//   }

//   // HANDLE RELEASE TOKEN
//   function handleReleaseToken() {
//     setTokenRelease(true);

//     // Reset the initial top position
//     if (currentToken && tokenRef.current) {
//       tokenRef.current?.classList.remove("draggedToken");

//       tokenRef.current.style.position = "relative";
//       tokenRef.current.style.top = "initial";
//     }

//     // Remove event listeners from document
//     document.removeEventListener("mousemove", handleMouseMove);
//     document.removeEventListener("mouseup", handleReleaseToken);
//   }

//   useEffect(() => {
//     if (!tokenReleased) {
//       document.addEventListener("mousemove", handleMouseMove);
//       document.addEventListener("mouseup", handleReleaseToken);
//     } else {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleReleaseToken);
//     }

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleReleaseToken);
//     };
//   }, [tokenReleased, handleMouseMove, handleReleaseToken]);

//   useEffect(() => {
//     // Reset the initial top position when tokenReleased changes
//     if (tokenReleased && tokenRef.current) {
//       tokenRef.current.style.top = "initial";
//     }
//   }, [tokenReleased]);

//   return (
//     <>
//       <div
//         ref={tokenRef}
//         className={`tokenLabel battlefieldToken ${
//           tokenExpanded ? "expanded" : ""
//         }`}
//         id="battlefieldToken"
//         data-type={tokenType}
//         style={{
//           backgroundColor: `${tokenEliminated ? "gray" : tokenLabelColor}`,
//           cursor: `${tokenReleased ? "" : "grabbing"}`,
//           position: "relative",
//         }}
//         key={tokenId}
//         onMouseDown={takeToken}
//       >
//         <span className="tokenInitiative">{tokenInitiative}</span>
//         <span
//           className={`${tokenEliminated ? "isDead" : ""}`}
//           onClick={killToken}
//         >
//           <i className={`fa-solid fa-skull deathStatusIcon`}></i>
//         </span>
//         <span className="tokenName">{tokenAlias}</span>
//         <button onClick={expandToken} className="tokenExpandButton">
//           <i className="fa-solid fa-angle-down expandArrow"></i>
//         </button>
//       </div>

//       <div
//         className={`${!tokenReleased ? "previewHidden" : "tokenPreview"}`}
//         style={{ display: `${tokenExpanded ? "flex" : "none"}` }}
//       >
//         <span>
//           <i className="fa-solid fa-heart-pulse"></i>
//           {tokenHP}
//         </span>
//         <span>
//           <i className="fa-solid fa-shield-halved"></i>
//           {tokenDefense}
//         </span>
//         <span>
//           <i className="fa-solid fa-person-running"></i>
//           {tokenSpeed}
//         </span>
//       </div>
//     </>
//   );
// }
