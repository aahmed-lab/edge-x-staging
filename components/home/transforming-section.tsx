import { Icon } from '@iconify/react';
import classNames from 'classnames';
import { NextLink, Translate, useTranslate } from '~/i18n';
import Image from '../shared/image';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/

const TransformingSection = () => {
   const { lang } = useTranslate();
   return (
      <section className="container py-32">
         <div className="row">
            <div className="xl:col-10 xl:offset-1">
               <div className="row">
                  <div className="md:col-6">
                     <div className="ltr:md:pr-20 rtl:md:pl-20">
                        <h2 className="text-3xl font-bold leading-none text-white ltr:md:text-[50px] rtl:md:text-[45px]">
                           <Translate id={'web:transforming_education_in_saudi_arabia'} />
                        </h2>
                        <small className="block py-4 text-2xl font-medium text-[#059592]">
                           <Translate id={'web:a_vision_2030_journey'} />
                        </small>
                        <hr className="w-[180px]" />
                        <p className="mt-10 text-white">
                           <Translate id={'web:transforming_p1'} />
                        </p>
                        <div>
                           <Image
                              src={`/images/transforming_2.png`}
                              alt="bg_overview"
                              width="250"
                              height="300"
                              layout="responsive"
                              objectFit="cover"
                              className="rounded-lg"
                           />
                        </div>
                     </div>
                  </div>
                  <div className="md:col-6">
                     <h3 className="text-2xl font-medium text-[#059592]">
                        <Translate id={'web:public_education'} />
                     </h3>
                     <p className="mt-4 text-sm text-gray-300">
                        <Translate id={'web:public_education_students'} />
                     </p>
                     <p className="mt-4 text-sm text-gray-300">
                        <Translate id={'web:public_education_budget'} />
                     </p>
                     <hr className="my-10" />
                     <h3 className="text-2xl font-medium text-[#059592]">
                        <Translate id={'web:private_education'} />
                     </h3>
                     <p className="mt-4 text-sm text-gray-300">
                        <Translate id={'web:private_education_growth'} />
                     </p>
                     <p className="mt-4 text-sm text-gray-300">
                        <Translate id={'web:private_education_enrollment'} />
                     </p>
                     <hr className="my-10" />
                     <h3 className="text-2xl font-medium text-[#059592]">
                        <Translate id={'web:higher_education'} />
                     </h3>
                     <p className="mt-4 text-sm text-gray-300">
                        <Translate id={'web:higher_education_focus'} />
                     </p>
                     <p className="mt-4 text-sm text-gray-300">
                        <Translate id={'web:higher_education_students'} />
                     </p>
                     <hr className="my-10" />
                     {/* <h4
                        style={
                           {
                              // WebkitTextStroke: '1px white',
                              // WebkitTextFillColor: 'transparent',
                           }
                        }
                        className="mt-12 text-[30px] font-bold leading-none text-white ltr:tracking-wider">
                        <Translate id={'web:register_interest_edgex'} />
                     </h4> */}
                     <div className="row mt-12">
                        <div style={{
                           clipPath: lang === 'en'
                              ? 'polygon(0% 0%, 90% 0%, 100% 50%, 100% 100%, 0% 100%)'
                              : 'polygon(100% 0%, 5% 0%, 0% 30%, 0% 100%, 100% 100%)'
                        }} className="col-12">
                           <NextLink
                              className={classNames(
                                 'block bg-white px-6 py-2 text-xl font-semibold uppercase text-black md:text-2xl',
                                 'focus:border-accent focus:ring-accent focus:outline-none focus:ring focus:ring-opacity-50'
                              )}
                              href="#contact-us">
                              <span className="flex items-center justify-between">
                                 <span className="flex-grow">
                                    <Translate id={'web:download_brochure'} />
                                 </span>
                                 <span>
                                    {lang === 'en' ? (
                                       <Icon
                                          icon="fa:chevron-right"
                                          className="h-[20px] w-[20px]"
                                       />
                                    ) : (
                                       <Icon icon="fa:chevron-left" className="h-[20px] w-[20px]" />
                                    )}
                                 </span>
                              </span>
                           </NextLink>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default TransformingSection;
