// 'use client'
// import { FC } from 'react'
// import { usePathname, useRouter } from 'next/navigation'
// import { useTranslation } from 'react-i18next'
// import i18nConfig from '../../../../i18n.config.mjs'
// import { UsFlag, ViFlag } from '@/icons'
// import { twMerge } from 'tailwind-merge'
//
// const options = ['vi', 'en']
// const Switcher: FC = () => {
//   const { i18n } = useTranslation()
//   const currentLocale = i18n.language
//   const router = useRouter()
//   const currentPathname = usePathname()
//
//   const handleChange = (newLocale: string) => {
//     const days = 30
//     const date = new Date()
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
//     const expires = date.toUTCString()
//     document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`
//
//     if (
//       currentLocale === i18nConfig.defaultLocale &&
//       !i18nConfig.prefixDefault
//     ) {
//       router.push('/' + newLocale + currentPathname)
//     } else {
//       router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
//     }
//
//     router.refresh()
//   }
//
//   const baseClasses = 'h-6 p-[4px] rounded-[47px] text-xs/4 uppercase'
//
//   const activeClasses =
//     'rounded-[100px] bg-[#0094FF] flex gap-[2px] pr-2 text-white font-semibold transition-transform transform duration-300'
//
//   return (
//     <div className='h-[30px] w-[67px] border border-[#E1E7F8] bg-[#EFF9FF] p-[2px] rounded-[41px] backdrop-blur-[20px] text-[#4C4F67] flex items-center  md:mt-[7px] 2xl:mt-[16px]'>
//       {options.map((locale) => (
//         <button
//           key={locale}
//           className={twMerge(
//             baseClasses,
//             locale === currentLocale && activeClasses
//           )}
//           onClick={() => {
//             handleChange(locale)
//           }}
//         >
//           {locale === currentLocale && (
//             <>
//               <ViFlag
//                 width={15}
//                 height={15}
//                 className={twMerge(
//                   'hidden rounded-full',
//                   currentLocale === 'vi' && 'block'
//                 )}
//               />
//               <UsFlag
//                 width={15}
//                 height={15}
//                 className={twMerge(
//                   'hidden rounded-full',
//                   currentLocale === 'en' && 'block'
//                 )}
//               />
//             </>
//           )}
//           {locale}
//         </button>
//       ))}
//     </div>
//   )
// }
// export default Switcher
