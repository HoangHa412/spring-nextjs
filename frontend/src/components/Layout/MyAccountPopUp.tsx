
import Link from "next/link";


const MyAccountPopUp = () =>{
    const tabs = [
        {label:'My profile', key:'My profile'},
        {label:'Log out', key:'logout'},
    ]

    return (
        <div className='w-[185px] p-6'>
            <div className='grid grid-cols-1 gap-6 rounded-md'>
                {tabs.map((group, i) => (
                    <div key={i}>
                        <Link href={group.key} passHref>
                            <h3
                                className={`font-normal flex items-center text-[#404D64] hover:text-blue-400`}
                            >
                                {group.label}
                            </h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAccountPopUp