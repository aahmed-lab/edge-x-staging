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
type ButtonBtnProps = {
   loading?: boolean;
   text: string;
   id: string;
   className?: string;
   noIcon?: boolean;
   icon?: React.ReactNode;
   secondary?: boolean;
   disable?: boolean;
   customLoader?: React.ReactNode;
   callBack: () => void;
};

const ButtonBtn = ({
   className,
   loading,
   text,
   id,
   icon,
   // secondary,
   noIcon = false,
   disable,
   customLoader,
   callBack,
}: ButtonBtnProps) => {
   const { lang } = useTranslate();
   return (
      <button
         disabled={disable || loading}
         type="button"
         id={id}
         onClick={callBack}
         className={classNames(
            className,
            'block w-full rounded-none border-none border-transparent px-4 py-3 text-center text-sm font-bold leading-5 text-white',
            (loading || disable) && 'disabled:cursor-not-allowed disabled:opacity-50',
            'bg-secondary hover:bg-secondary-600',
            // 'bg-gradient-to-r from-[#C3FF42] via-[#27CBC0] to-[#0077C0]',
            'focus:outline-none focus:ring focus:ring-accent-1 focus:ring-opacity-50',
            'transition-all duration-150'
         )}>
         {noIcon ? (
            <span className="inline-flex">
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
            <span className="inline-flex">
               <div className="my-auto">{text}</div>
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

export default ButtonBtn;
