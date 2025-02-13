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
               'inline-block items-center rounded-md font-semibold text-white transition-colors duration-150 rtl:justify-end',
               'focus:border-white focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50',
               'text-center',
               // 'bg-gradient-to-r from-[#1b365d] to-[#7dc7c0]',
               'focus:outline-none focus:ring focus:ring-opacity-50'
            )}>
            <div className="h-full w-full rounded px-2 py-1 text-white ltr:font-ar rtl:font-en rtl:order-0 lg:px-4">
               <div className="text-amber-500">{text}</div>
            </div>
         </a>
      </Link>
   );
};

export default LangSwitcher;
