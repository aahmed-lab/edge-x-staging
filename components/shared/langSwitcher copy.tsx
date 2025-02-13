import { useRouter } from 'next/router';
import transConfig from '~/translation.json';
const { languages } = transConfig;

import Link from 'next/link';
import classNames from 'classnames';
interface NavLinkProps extends React.HTMLProps<HTMLAnchorElement> {
   className?: string;
   text: string | React.ReactNode;
}

const LangSwitcher: React.FC<NavLinkProps> = ({ text, href, ...rest }) => {
   const router = useRouter();
   const regex = new RegExp(`^/(${Object.keys(languages).join('|')})`);
   const hrefAs = `${router.asPath.replace(regex, `${href}`)}`;
   const pathname = router.pathname;

   const linkHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      router.push(pathname, hrefAs);
   };

   return (
      <Link href={pathname} as={hrefAs}>
         <a
            {...rest}
            onClick={linkHandler}
            className={classNames(
               'inline-block items-center rounded-md   p-[2px]  font-semibold text-secondary transition-colors duration-150  rtl:justify-end',
               'focus:border-secondary focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-50 ',
               'min-w-[80px] text-center',
               'bg-gradient-to-r from-[#5067c4] via-[#00a992] to-[#00a992]',
               'focus:outline-none focus:ring focus:ring-accent-1 focus:ring-opacity-50'
            )}>
            <div className="h-full w-full rounded bg-black px-4 py-1  ltr:font-ar rtl:font-en rtl:order-0">
               <div className=" bg-gradient-to-r from-[#5067c4] via-[#00a992] to-[#00a992] bg-clip-text text-transparent">
                  {text}
               </div>
            </div>
         </a>
      </Link>
   );
};

export default LangSwitcher;
