import {AppUser, FirebaseUser} from "../../@types";

interface mapUserProps {
    (user: FirebaseUser): AppUser
}

export const mapUserData: mapUserProps = (user) => {
    const { uid, email, xa } = user
    return {
        id: uid,
        email,
        token: xa,
    }
}
