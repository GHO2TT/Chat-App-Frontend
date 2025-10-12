const FormContainer = ({ children }) => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col py-[30px] md:py-0 md:justify-center items-center md:pr-[300px] md:pl-[40px]">
      {children}
    </div>
  );
};

export default FormContainer;
