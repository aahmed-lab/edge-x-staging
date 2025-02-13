import React, { useState } from 'react';
import LangSwitcher from '../shared/langSwitcher';
import NProgress from 'nprogress';
import Router from 'next/router';
import useTranslate from '../../i18n/useTranslate';
import { NextLink, Translate } from '~/i18n';
// import Image from '../shared/image';
import classNames from 'classnames';
import Image from '../shared/image';
// import { useAuth } from '~/auth';
// // import Image from '../shared/image';
// import Axios from '~/utils/axios';
// import cookie from 'js-cookie';

// interface HeaderProps {
//    isHomePageLayout?: boolean;
// }

const Header = () => {
   NProgress.configure({
      showSpinner: false,
   });
   Router.events.on('routeChangeStart', () => {
      NProgress.start();
   });
   Router.events.on('routeChangeComplete', () => {
      NProgress.done();
   });
   Router.events.on('routeChangeError', () => NProgress.done());

   const { lang } = useTranslate();
   const [isOpen, setOpen] = useState(false);

   // const token = cookie.get('token');
   // const [loading, setLoading] = useState(true);
   // const { user, updateUser, authenticated, logout } = useAuth();
   // console.log(user, 'user');

   // useEffect(() => {
   //    async function getUserData() {
   //       setLoading(true);
   //       try {
   //          const { data } = await Axios.get(`/guest-profile`, {
   //             headers: {
   //                Authorization: `Bearer ${token}`,
   //                // Accept: 'application/json',
   //             },
   //          });

   //          updateUser(data);
   //       } catch (error: any) {
   //          logout();

   //          console.log(error);
   //       }
   //       setLoading(false);
   //    }
   //    if (authenticated) {
   //       getUserData();
   //    }
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, [authenticated]);
   const toggle = () => setOpen(prev => !prev);
   const pages = [
      {
         href: '/#overview',
         label: 'overview',
         isExternal: false,
      },
      {
         href: '/#contact-us',
         label: 'exhibit',
         isExternal: false,
      },
      // {
      //    href: `https://registration.humancapabilityinitiative.org/${lang}/join/public-delegate`,
      //    label: 'register',
      //    isExternal: true,
      // },
   ];
   return (
      // <header className="sticky top-0 z-50">
      <header>
         <nav
            className={
               classNames('absolute inset-x-0 z-20')
               // isHomePageLayout ? 'bg-black py-4 text-white' : 'border-b bg-white py-4 text-black'
            }>
            <div className="container md:max-w-none md:px-4 lg:px-20 xl:px-12 lg:container mx-auto">
               <div className="row">
                  <div className="col-3 self-center md:hidden">
                     <button
                        className={classNames(
                           'hover:bg-white-700 focus:bg-white-700 inline-flex items-center justify-center rounded-md   transition duration-150 ease-in-out  focus:outline-none',
                           'text-white'
                        )}
                        aria-label="Main menu"
                        onClick={toggle}
                        aria-expanded={isOpen ? 'true' : 'false'}>
                        <svg
                           className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor">
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"
                           />
                        </svg>
                        <svg
                           className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor">
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                           />
                        </svg>
                     </button>
                  </div>
                  <div className="col-6 self-center md:col-3 lg:col-4">
                     <div className="flex justify-center md:justify-start">
                        <NextLink
                           href={'/'}
                           className={classNames(
                              'inline-block rounded-lg px-2 py-1 transition-colors duration-300',
                              'focus:outline-none focus:ring focus:ring-opacity-50'
                           )}>
                           <div className="h-[70px] w-[130px] sm:w-[200px] md:w-[150px] lg:w-[200px] xl:w-[200px]">
                              <Image
                                 src={`/images/new/logos_header_${lang}.png`}
                                 alt="Logos1"
                                 layout="fill"
                                 objectFit="contain"
                                 className="rounded-lg"
                              />
                           </div>
                        </NextLink>
                     </div>
                  </div>
                  <div className="hidden self-center md:block md:col-5 lg:col-4">
                     <ul className="flex items-center justify-center space-x-2 rtl:space-x-reverse lg:space-x-4">
                        {pages.map((item, index) => (
                           <li key={index}>
                              <NextLink
                                 href={item.href}
                                 className={classNames(
                                    'inline-block rounded-full px-4 py-1 font-medium uppercase text-white transition-colors duration-300',
                                    'focus:outline-none focus:ring focus:ring-opacity-50',
                                    'hover:text-white',
                                    'font-ar'
                                 )}>
                                 <Translate id={`web:${item.label}`} />
                              </NextLink>
                           </li>
                        ))}
                        <li>
                           <a
                              href={`https://registration.humancapabilityinitiative.org/${lang}/join/public-delegate`}
                              target="_blank"
                              rel="noreferrer"
                              className={classNames(
                                 'inline-block rounded-full py-1 font-medium uppercase text-white transition-colors duration-300 lg:px-4',
                                 'focus:outline-none focus:ring focus:ring-opacity-50',
                                 'hover:text-white',
                                 'font-ar'
                              )}>
                              <Translate id={`web:${'register'}`} />
                           </a>
                        </li>
                        <li>
                           <ul className="flex items-center justify-end space-x-2 rtl:space-x-reverse md:space-x-4">
                              <li className="my-auto">
                                 {lang !== 'en' ? (
                                    <LangSwitcher href="/en" text="English" />
                                 ) : (
                                    <LangSwitcher href="/ar" text="العربية" />
                                 )}
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </div>
                  <div className='col-3 self-center  md:col-4 lg:col-4'>
                     <div className="block lg:hidden">
                        <ul className="flex items-center justify-end space-x-2 rtl:space-x-reverse md:space-x-4">
                           {/* <li className="my-auto">
                              {lang !== 'en' ? (
                                 <LangSwitcher href="/en" text="English" />
                              ) : (
                                 <LangSwitcher href="/ar" text="العربية" />
                              )}
                           </li> */}
                        </ul>
                     </div>
                     <div className="hidden md:block">
                        <li className='flex items-center justify-end space-x-2 rtl:space-x-reverse md:space-x-4'>
                           <a
                              target="_blank"
                              rel="noreferrer"
                              href={`https://humancapabilityinitiative.org/${lang}`}
                              className={classNames(
                                 'inline-block rounded-lg px-2 py-1 transition-all duration-300',
                                 'focus:outline-none focus:ring focus:ring-opacity-50',
                                 'opacity-80 hover:opacity-100'
                              )}>
                              <div className="h-[90px] w-[250px] md:w-[200px]">
                                 <Image
                                    src={`/images/v30-HCI-HCDP.png`}
                                    alt="Logos1"
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-lg"
                                 />
                              </div>
                           </a>
                        </li>
                     </div>
                  </div>
               </div>
            </div>

            <div className={`border-b border-[#c28c24] md:hidden ${isOpen ? 'block' : 'hidden'}`}>
               <div className={classNames('bg-black px-2 pb-4  ')}>
                  <ul className="flex flex-col gap-2   ">
                     {pages.map((item, index) => (
                        <li key={index}>
                           <NextLink
                              onClick={() => toggle()}
                              exact
                              className={classNames('inline-block rounded-lg px-2 py-1 text-white')}
                              href={item.href}>
                              <Translate id={`web:${item.label}`} />
                           </NextLink>
                        </li>
                     ))}
                     {/* <li> */}
                     {/* <a
                           target="_blank"
                           rel="noreferrer"
                           href={`https://humancapabilityinitiative.org/${lang}`}
                           className={classNames(
                              'inline-block rounded-lg px-2 py-1 transition-all duration-300',
                              'focus:outline-none focus:ring focus:ring-opacity-50',
                              'opacity-80 hover:opacity-100'
                           )}>
                           <div className="h-[40px] w-[90px]">
                              <Image
                                 src={`/images/hci_logo.png`}
                                 alt="Logos1"
                                 layout="fill"
                                 objectFit="contain"
                                 className="rounded-lg "
                              />
                           </div>
                        </a> */}
                     <li className="my-auto">
                        {lang !== 'en' ? (
                           <LangSwitcher href="/en" text="English" />
                        ) : (
                           <LangSwitcher href="/ar" text="العربية" />
                        )}
                     </li>
                     {/* </li> */}
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Header;
