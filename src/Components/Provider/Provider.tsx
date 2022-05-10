import { createContext, useState } from "react";

const PageContext = createContext<string | undefined | any>(undefined);

interface PageContextInterface {
  children?: any;
  value?: any;
}

const PageProvider: React.FC<PageContextInterface> = ({ children }) => {
  const [isStartScreen, setIsStartScreen] = useState(false);
  const [isEndScreen, setIsEndScreen] = useState(false);

  const valueCtx = {
    isStartScreen,
    setIsStartScreen,
    isEndScreen,
    setIsEndScreen,
  };

  return (
    <PageContext.Provider value={valueCtx}>{children}</PageContext.Provider>
  );
};

export { PageContext, PageProvider };
