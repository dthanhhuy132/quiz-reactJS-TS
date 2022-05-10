import { createContext, useState } from "react";

const PageContext = createContext<string | undefined | any>(undefined);

interface PageContextInterface {
  children?: any;
  value?: any;
}

const PageProvider: React.FC<PageContextInterface> = ({ children }) => {
  const [pageRouter, setPageRouter] = useState("start-page");
  const [totalScore, setTotalScore] = useState(0);

  const valueCtx = {
    pageRouter,
    setPageRouter,
    totalScore,
    setTotalScore,
  };

  return (
    <PageContext.Provider value={valueCtx}>{children}</PageContext.Provider>
  );
};

export { PageContext, PageProvider };
