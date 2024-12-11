import React, {useMemo} from "react";

interface Props{
    firstChar: string
    bgcolor?: string
}

const Avatar: React.FC<Props> = ({firstChar, bgcolor})=>{
    const randomBgColor = useMemo(() =>{
        if(bgcolor) return bgcolor
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }, [bgcolor])

    return (
            <div className='w-7 h-7 rounded-full flex items-center justify-center'
            style={{ backgroundColor: randomBgColor}}
            >
                <span className='text-white text-sm font-bold'>{firstChar}</span>
            </div>
    )
}
export default Avatar