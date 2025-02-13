import { GetServerSideProps } from 'next';
import { Translate } from '~/i18n';
const NotFoundPage = () => {
   return (
      <div className="container mx-auto">
         <h1 className="mt-[200px] flex flex-col text-center text-4xl text-white ">
            <span>404</span>
            <span>
               <Translate id="common:404" />
            </span>
         </h1>
      </div>
   );
};

export const getServerSideProps: GetServerSideProps = async () => {
   // It's better to use getServerSideProps than statically generating pages for not found :O
   return {
      props: {},
   };
};

// NotFoundPage.isMiniHeaderFooterLayout = true;
export default NotFoundPage;
