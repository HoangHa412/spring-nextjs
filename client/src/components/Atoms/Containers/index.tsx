import React, {ElementType, PropsWithChildren} from 'react'
import {twMerge} from 'tailwind-merge'

interface ContainerProps extends PropsWithChildren {
    tag?: ElementType
    className?: string
}

const Container = ({
                       tag,
                       children,
                       className,
                       ...restProps
                   }: ContainerProps): JSX.Element => {
    const Tag = tag || 'div'
    const baseClasses =
        'mx-auto max-w-[1440px] px-4 md:px-[64px] lg:px-[84px] 2xl:px-[120px]'
    return (
        <Tag className={twMerge(baseClasses, className, '')} {...restProps}>
            {children}
        </Tag>
    )
}

export default Container
