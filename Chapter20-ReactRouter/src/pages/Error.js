import MainNavigation from "../component/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Cloud not find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
