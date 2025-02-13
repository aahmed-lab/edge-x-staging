import { GetStaticPaths, GetStaticProps } from 'next';

import { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import useTranslate from '../../i18n/useTranslate';
import HomepageSections from '~/components/home/homepage-sections';
import { getLanguagesPaths } from '~/utils/translate';
// import { ParsedUrlQuery } from 'querystring';

// interface IParams extends ParsedUrlQuery {
//    lang: string;
// }
const HomePage = () => {
   const { translate } = useTranslate();

   return (
      <Fragment>
         <NextSeo
            title={translate({ id: 'meta:title' })}
            description={translate({ id: 'meta:desc' })}
         />
         <HomepageSections />
      </Fragment>
   );
};

/*******************************************************************
 *
 *  THIS PAGE IS USING SERVER SIDE RENDERING WITH getServerSideProps
 *
 *******************************************************************/

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: getLanguagesPaths(),
      fallback: false,
   };
};

export const getStaticProps: GetStaticProps = async () => {
   return {
      // updating the data every 1 minutes
      // revalidate: 60,
      props: {},
   };
};

export default HomePage;
