import Header from "./UI/Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
