const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-[70px]">
      <div>
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      </div>
      <div>
        <p>Something went wrong!</p>
      </div>
    </div>
  );
};

export default ErrorPage;
