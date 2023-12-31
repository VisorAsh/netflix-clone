import { signOut } from 'next-auth/react'
import { AiOutlineClose } from "react-icons/ai"

import useCurrentUser from '@/hooks/useCurrentUser'

interface AccountMenuProps {
    visible?: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    const {data: user} = useCurrentUser()
    if (!visible) {
        return null
    }

    return (
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                    <img
                        src="/images/default-blue.png"
                        alt="Acount profile"
                        className="w-8 rounded-md"
                    />
                    <p className="text-white text-sm grooup-hover/item:underline">
                        {user?.name}
                    </p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4" />
                <div
                    onClick={() => signOut()}
                    className="px-3 text-center text-white text-sm hover:underline flex items-center gap-2"
                >
                    <div className="border-2 border-red-800 rounded-full">
                        <AiOutlineClose size={20} className="text-red-800" />
                    </div>
                    Sign out of Netflix
                </div>
            </div>
        </div>
    )
}

export default AccountMenu;
