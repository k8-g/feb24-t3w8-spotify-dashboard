import { createContext, useContext, useState } from "react"
import { useSpotifyAuthContext } from "./SpotifyAuthProvider";


export const defaultProfileData = {
	userId: "",
	email: "",
	uri: "",
	link: "",
	profileImage: "",
}

// export const defaultProfileData
// import {defaultProfileData} from "./SpotifyProfileProvider.jsx";
// 
// export default const defaultProfileData
// import defaultProfileData from "./SpotifyProfileProvider.jsx"

export const SpotifyProfileContext = createContext(defaultProfileData);

export function useSpotifyProfileData(){
	return useContext(SpotifyProfileContext);
}

export function SpotifyProfileProvider({children}){

	let [profileData, setProfileData] = useState(defaultProfileData);

	// Access auth data from AuthProvider so that we can make more fetch requsts
	let {userAuthData} = useSpotifyAuthContext();

	async function fetchProfileData(accessToken){
		const result = await fetch("")
	}

	return (
		<SpotifyProfileContext.Provider>
			{children}
		</SpotifyProfileContext.Provider>
	)
}