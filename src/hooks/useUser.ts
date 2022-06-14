import { useEffect, useState } from "react";
import { createUser } from "../interfaces/users";
import { User } from "../types";

const useUser = () => {
    const [userList, setUserList] = useState<User[]> ([] as User[])

    const handleCreateUser = async (user: Omit<User, "id">) => {
        const newUser = await createUser(user)  
        setUserList(
            oldUserList => [...oldUserList, newUser]
        )   
    }

    return handleCreateUser;
}

export default useUser;