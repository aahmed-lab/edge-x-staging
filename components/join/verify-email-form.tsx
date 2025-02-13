import { Translate, useTranslate } from '~/i18n';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import validator from 'validator';
// import Axios from '~/utils/axios';
import CustomInput from '../shared/forms/custom-input';
// import AuthWrapper from '../shared/admin-modules/auth-wrapper';
import { toast } from 'react-hot-toast';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Axios from '~/utils/axios';
import classNames from 'classnames';
import ButtonBtn from '../shared/buttons/button-btn';
import SubmitBtn from '../shared/buttons/submit-btn';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/
type VerifyEmailFormProps = {
   userEmail: string;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   callBack: (token: string) => void;
};
const VerifyEmailForm = ({ userEmail, setIsOpen, callBack }: VerifyEmailFormProps) => {
   // const { authenticated } = useAuth();
   const { lang, translate } = useTranslate();
   const { executeRecaptcha } = useGoogleReCaptcha();

   const [loading, setLoading] = useState(false);
   const [loading2, setLoading2] = useState(false);
   const [holdOn, setHoldOn] = useState(true);

   const [isSent, setIsSent] = useState(false);

   // initialize timeLeft with the seconds prop
   const [timeLeft, setTimeLeft] = useState(30);

   useEffect(() => {
      if (!holdOn) return setTimeLeft(30);
      // exit early when we reach 0
      if (!timeLeft) return setHoldOn(false);

      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
         setTimeLeft(timeLeft - 1);
      }, 1000);

      // clear interval on re-render to avoid memory leaks
      return () => {
         clearInterval(intervalId);
      };
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
   }, [holdOn, timeLeft]);

   type FormData = {
      // email: string;
      token: string;
   };
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>();

   const sendEmailVerification = async () => {
      if (loading) {
         return;
      }
      setLoading(true);
      const recaptcha = await executeRecaptcha?.();
      try {
         await Axios.post(`/guests/email-verification?lang=${lang}`, {
            email: userEmail.toLocaleLowerCase(),
            // back_link: process.env.NEXT_PUBLIC_BASE_URL + `/${lang}/email-verification/`, // back slash in the end
            recaptcha,
         });
         setHoldOn(true);
         setIsSent(true);

         toast.success(translate({ id: 'res:check_your_email' }));
      } catch (error: any) {
         if (error?.response?.status === 403) {
            toast.error(translate({ id: 'res:recaptcha_failed' }), {
               duration: 6000,
            });
         } else {
            toast.error(translate({ id: 'res:500' }), {
               duration: 6000,
            });
         }
      }
      setLoading(false);
   };

   const verifyToken = async (values: FormData) => {
      if (loading2) {
         return;
      }
      setLoading2(true);
      const recaptcha = await executeRecaptcha?.();

      try {
         const response = await Axios.post(`/guests/email-confirmation?lang=${lang}`, {
            token: values.token,
            recaptcha,
         });

         // toast.success(translate({ id: 'res:check_your_email' }));

         setIsOpen(false);
         callBack(response.data.token);
      } catch (error: any) {
         if (error?.response?.status === 403) {
            toast.error(translate({ id: 'res:recaptcha_failed' }), {
               duration: 6000,
            });
         } else if (error?.response?.status === 404) {
            toast.error(translate({ id: 'res:wrong_token' }), {
               duration: 4000,
            });
         } else {
            toast.error(translate({ id: 'res:500' }), {
               duration: 6000,
            });
         }
      }
      setLoading2(false);
   };

   return (
      <React.Fragment>
         {isSent ? (
            <form noValidate onSubmit={handleSubmit(verifyToken)} className="relative">
               <div className="text-center text-xl text-black">
                  <Translate id="web:email_verification" />
               </div>
               <div className="mb-3 text-center text-black">
                  <Translate id="web:please_enter_the_code" /> {userEmail}
               </div>
               <CustomInput
                  // label={translate({ id: 'web:enter_8_digit_code' })}
                  type="text"
                  isInline={false}
                  placeHolder={translate({ id: 'web:code' })}
                  id="token"
                  error={errors.token?.message}
                  {...register('token', {
                     required: translate({ id: 'validation:required' }),
                  })}
               />

               <React.Fragment>
                  <div className="row">
                     <div className="col-6">
                        <button
                           type="button"
                           className={classNames(
                              'block w-full  border border-gray-500 px-4 py-[11px] text-center text-sm font-medium leading-5 text-gray-500 transition-colors duration-150  focus:outline-none focus:ring  focus:ring-opacity-50  ',
                              'disabled:cursor-not-allowed disabled:opacity-50 ',
                              'enabled:focus:ring-accent enabled:focus:ring-opacity-50 '
                           )}
                           disabled={holdOn}
                           onClick={() => {
                              // callBack(null, null);
                              // clearFileInput();
                              setIsOpen(false);
                           }}>
                           <Translate id="web:no_cancel" />
                        </button>
                     </div>
                     <div className="col-6">
                        <SubmitBtn
                           id="submit-btn" //* for test cases
                           text={translate({ id: 'web:verify_now' })}
                           loading={loading2}
                        />
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-12">
                        <p className="mt-4 text-black">
                           <Translate id="web:did_not_get_verification_code" />{' '}
                           {holdOn ? (
                              <React.Fragment>
                                 <Translate id="web:send_after" /> {timeLeft}
                              </React.Fragment>
                           ) : (
                              <button
                                 type="button"
                                 onClick={() => sendEmailVerification()}
                                 className="text-primary"
                                 disabled={loading}>
                                 {loading ? (
                                    <Translate id="web:loading" />
                                 ) : (
                                    <Translate id="web:resend" />
                                 )}
                              </button>
                           )}
                        </p>
                     </div>
                  </div>
               </React.Fragment>
            </form>
         ) : (
            <div className="relative">
               <div className="text-center text-xl text-black">
                  <Translate id="web:email_verification" />
               </div>

               <div className="mb-3 text-center text-black">
                  <Translate id="web:to_continue_you_need_to_verify_your_email_first" />
               </div>
               <React.Fragment>
                  <div className="rounded-md border border-gray-500 py-2 text-center text-gray-500">
                     {userEmail}
                  </div>
                  <div className="row mt-5">
                     <div className="col-6">
                        <button
                           type="button"
                           className={classNames(
                              ' block w-full  border border-gray-500 px-4 py-[11px] text-center text-sm font-medium leading-5 text-gray-500 transition-colors duration-150  focus:outline-none focus:ring  focus:ring-opacity-50  ',
                              'disabled:cursor-not-allowed disabled:opacity-50 ',
                              'enabled:focus:ring-accent enabled:focus:ring-opacity-50 '
                           )}
                           onClick={() => {
                              // callBack(null, null);
                              // clearFileInput();
                              setIsOpen(false);
                           }}>
                           <Translate id="web:no_cancel" />
                        </button>
                     </div>
                     <div className="col-6">
                        <ButtonBtn
                           id="submit-btn" //* for test cases
                           text={translate({ id: 'web:verify_now' })}
                           loading={loading}
                           // holdOn={holdOn}
                           callBack={() => sendEmailVerification()}
                           // timeLeft={timeLeft}
                        />
                     </div>
                  </div>
               </React.Fragment>
            </div>
         )}
      </React.Fragment>
   );
};

export default VerifyEmailForm;
