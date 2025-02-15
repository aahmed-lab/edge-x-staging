// import Image from '~/components/shared/image';
// import Image from '~/components/shared/image';
import Image from '~/components/shared/image';
import { Translate, useTranslate } from '~/i18n';
// import { publicUrl } from '~/utils/publicUrl';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/

const Section3 = () => {
   const { lang } = useTranslate();
   // const stores = [
   //    {
   //       href: '',
   //       src: `/images/app/${lang}/app_store.png`,
   //       label: 'app store',
   //    },
   //    {
   //       href: '',
   //       src: `/images/app/${lang}/google_play.png`,
   //       label: 'google play',
   //    },
   // ];
   return (
      <section>
         <div className="relative text-center">
            {/* <div className="absolute bottom-0  hidden w-full overflow-hidden    lg:block">
               <div className="relative -z-10 -mr-16 h-[250px] bg-hero-2 bg-contain bg-right-bottom bg-no-repeat"></div>
            </div> */}

            <div className="container">
               <div className="row mt-20 pb-4">
                  <div className="col-12 mb-2">
                     <p className="mt-3  mb-2 text-white">
                        <Translate id="common:organized_by" />
                     </p>

                     <div className="h-[60px] md:mb-0">
                        <Image
                           src={`/images/new/logos_header_${lang}.png`}
                           // height="300px"
                           // width="400px"
                           alt="about-img"
                           layout="fill"
                           objectFit="contain"
                        />
                     </div>
                     <div className="my-5"></div>
                     <p className="mb-2 mt-3 text-white">
                        <Translate id="common:in_collaboration_with" />
                     </p>

                     <div className="h-[60px] md:mb-0">
                        <Image
                           src={`/images/in_collaboration_with_${lang}_4.png`}
                           // height="300px"
                           // width="400px"
                           alt="about-img"
                           layout="fill"
                           objectFit="contain"
                        />
                     </div>
                  </div>
                  {/* <div className="col-12 mb-5">
                     <div className="mx-auto h-[30px] w-[300px] sm:h-[45px] sm:w-[400px]">
                        <Image
                           src="/images/footer_logos_2.png"
                           alt="Education Global Exhibition logo"
                           layout="fill"
                           objectFit="cover"
                           className=""
                        />
                     </div>
                  </div> */}
                  <div className="col-12 self-center text-white">
                     <small>
                        <Translate id="common:app_copyright" /> © {new Date().getFullYear()}
                     </small>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Section3;
