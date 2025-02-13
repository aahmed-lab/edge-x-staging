import classNames from 'classnames';
import ThreeDotsWave from '~/components/animation/three-dots-wave';
import { useTranslate } from '~/i18n';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/
type SubmitBtnProps = {
   loading?: boolean;
   text: string;
   id: string;
   className?: string;
   noIcon?: boolean;
   icon?: React.ReactNode;
   secondary?: boolean;
   disable?: boolean;
   customLoader?: React.ReactNode;
};

const SubmitBtn = ({
   className,
   loading,
   text,
   id,
   icon,
   // secondary,
   noIcon = false,
   disable,
   customLoader,
}: SubmitBtnProps) => {
   const { lang } = useTranslate();
   return (
      <button
         disabled={disable || loading}
         type="submit"
         id={id}
         className={classNames(
            className,
            (loading || disable) && 'disabled:cursor-not-allowed disabled:opacity-50',
            // 'bg-gradient-to-r from-[#C3FF42] via-[#27CBC0] to-[#0077C0]',
            'w-full rounded-xl bg-gradient-to-r from-[#059592] via-[#6c9961] to-[#dc9d27] px-6 py-2 text-xl font-bold uppercase text-black md:text-2xl',
            'focus:border-accent focus:ring-accent focus:outline-none focus:ring focus:ring-opacity-50',
            'focus:outline-none focus:ring focus:ring-accent-1 focus:ring-opacity-50',
            'transition-all duration-150'
         )}>
         {noIcon ? (
            <span className="inline-flex justify-between">
               <div className={classNames('my-auto')}>
                  {loading ? (
                     <div className="w-8">
                        {customLoader ? customLoader : <ThreeDotsWave color="white" />}
                     </div>
                  ) : (
                     <div className="my-auto">{text}</div>
                  )}
               </div>
            </span>
         ) : (
            <span className="inline-flex justify-between">
               <div className="my-auto flex-grow">{text}</div>
               <div className={classNames('my-auto ltr:ml-2 rtl:mr-2', lang === 'ar' && 'flip-x')}>
                  {loading ? (
                     <div className="w-8">
                        {customLoader ? customLoader : <ThreeDotsWave color="white" />}
                     </div>
                  ) : (
                     <React.Fragment>
                        {icon ? icon : <ArrowRightIcon className="h-5 w-5" />}
                     </React.Fragment>
                  )}
               </div>
            </span>
         )}
      </button>
   );
};

export default SubmitBtn;
