import { Translate } from '~/i18n';

const ErrorPage = ({ error }: any) => {
   console.log(error, 'error');

   return (
      <div className="container mx-auto">
         <h1 className="mt-32 flex flex-col text-center text-4xl text-primary">
            <span>500</span>
            <span>
               <Translate id="common:500" />
            </span>
         </h1>
      </div>
   );
};

ErrorPage.getInitialProps = ({ res, err }: any) => {
   //    console.log(err);
   //    console.log(res);
   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
   return { error: statusCode };
};
// ErrorPage.isMiniHeaderFooterLayout = true;

export default ErrorPage;
