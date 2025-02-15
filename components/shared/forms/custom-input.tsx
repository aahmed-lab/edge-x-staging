// import { Translate } from '~/i18n';
// import { useAuth } from '~/auth';
import classNames from 'classnames';
import { forwardRef } from 'react';
import Label from './label';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *p
 ******************************************************************/
export type InputProps = {
   label?: React.ReactNode;
   type?: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'time';
   error?: React.ReactNode;
   name?: string;
   id?: string;
   innerRef?: any;
   disabled?: boolean;
   placeHolder?: string;
   autoComplete?: string;
   className?: string;
   groupClassName?: string;
   append?: React.ReactElement | React.ReactNode;
   prepend?: React.ReactElement | React.ReactNode;
   appendPaddingClass?: string;
   prependPaddingClass?: string;
   isInline?: boolean;
   isRequired?: boolean;
   help?: React.ReactNode;
   rows?: number;
   readOnly?: boolean;
   // value?: string | number | readonly string[] | undefined;
} & React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
const CustomInput = forwardRef<any, InputProps>(
   (
      {
         label,
         error,
         className,
         // labelClassName,
         groupClassName,
         disabled = false,
         id = '',
         type = 'text',
         append,
         prepend,
         prependPaddingClass,
         appendPaddingClass,
         // innerRef,
         autoComplete,
         placeHolder = '',
         isInline = false,
         isRequired = false,
         readOnly,
         // value = '',
         help,
         rows,
         ...props
      },
      ref
   ) => {
      // const { authenticated } = useAuth();

      const Tag = type === 'textarea' ? 'textarea' : 'input';

      return (
         <div
            className={
               groupClassName || classNames(isInline ? 'row pb-1' : 'relative mb-5 w-full pb-1')
            }>
            {label && (
               <div className={classNames(isInline ? 'md:col-3' : '')}>
                  <Label id={id} label={label} isRequired={isRequired} />
               </div>
            )}
            <div className={classNames(isInline ? 'mb-5 md:col-9' : '')}>
               <div className="col-12">
                  <div className={classNames('relative')}>
                     {/* prepend */}
                     {prepend && <span className="absolute-v-center">{prepend}</span>}
                     <Tag
                        autoComplete={autoComplete}
                        id={id}
                        ref={ref}
                        // ref={innerRef}
                        type={type}
                        placeholder={placeHolder}
                        // value={value}
                        readOnly={readOnly}
                        className={classNames(
                           className,
                           error &&
                              typeof error !== 'boolean' &&
                              '!border-error focus:border-error focus:ring-error',
                           'custom-input block w-full  rounded-xl border-gray-400 text-black   placeholder:text-[#b7bac1] focus:border-[#c28c24] focus:outline-none focus:ring focus:ring-[#c28c24] focus:ring-opacity-50  ',
                           appendPaddingClass && `${appendPaddingClass}`,
                           prependPaddingClass && `${prependPaddingClass}`,
                           disabled &&
                              'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-50'
                        )}
                        rows={rows}
                        disabled={disabled}
                        {...props}
                     />
                     {/* append */}
                     {append && <span className="absolute-v-center left-2">{append}</span>}
                  </div>
                  {help && <div>{help}</div>}
                  {error && typeof error !== 'boolean' && (
                     <div className="absolute mt-0.5 text-xs text-error" role="alert">
                        {error}
                     </div>
                  )}
               </div>
            </div>
         </div>
      );
   }
);
CustomInput.displayName = `CustomInput`;
export default CustomInput;
