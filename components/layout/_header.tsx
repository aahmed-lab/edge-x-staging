import React from 'react';
import LangSwitcher from '../shared/langSwitcher';
import NProgress from 'nprogress';
import Router from 'next/router';
import useTranslate from '../../i18n/useTranslate';
import Image from '../shared/image';
// import classNames from 'classnames';
// import Image from '../shared/image';

const MiniHeader = () => {
   NProgress.configure({
      showSpinner: false,
   });
   Router.events.on('routeChangeStart', () => {
      NProgress.start();
   });
   Router.events.on('routeChangeComplete', () => NProgress.done());
   Router.events.on('routeChangeError', () => NProgress.done());

   const { lang } = useTranslate();

   return (
      <header>
         {/* Top-left triangle */}
         {/* <div
            style={{
               clipPath: 'polygon(0 0, 100% 0, 0 100%)',
               background: 'linear-gradient(to bottom right, #55A6D9, #55A6D9, #55A6D9)',
               transform: lang === 'ar' ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
            className={classNames(
               'absolute top-0  h-[200px] w-[200px]',
               'ltr:left-0 rtl:right-0'
               // lang === 'ar' && 'flip-x'
            )}></div> */}
         <div className="absolute top-0 hidden w-full overflow-hidden lg:block">
            {/* <div
               className={classNames(
                  'bg-body-bg-1  relative  -z-0 h-[300px] bg-contain  bg-left-top  bg-no-repeat  ',
                  lang === 'ar' && 'flip-x'
               )}></div> */}
            {/* <!-- Top-left trapezoid --> */}
         </div>
         <div className="container relative z-20 md:px-12">
            <div className="row py-8">
               <div className="col-6 lg:col-4 lg:offset-4">
                  <div className="mx-auto h-[100px] w-[220px] md:h-[120px] md:w-[300px]">
                     <Image
                        src={`/images/logo.png`}
                        alt="logo"
                        // width="150"
                        // height="71"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                     />
                  </div>
               </div>
               <div className="col-6 self-center ltr:text-right rtl:text-left lg:col-4">
                  <ul className="">
                     <li className="my-auto">
                        {lang !== 'en' ? (
                           <LangSwitcher href="/en" text="English" />
                        ) : (
                           <LangSwitcher href="/ar" text="عربي" />
                        )}
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </header>
   );
};

export default MiniHeader;
