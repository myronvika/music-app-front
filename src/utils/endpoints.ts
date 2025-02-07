// const baseUrlLocal: string = "https://localhost:7143";
const baseUrl: string = "https://music-app-api.azurewebsites.net";

export const popularAudioUrl = `${baseUrl}/api/audio/popular`;
export const audiosUrl = `${baseUrl}/api/audio`;
export const audiosUploadUrl = `${baseUrl}/api/audio/upload`;
export const getUserAudiosUrl = `${baseUrl}/api/audio/userAudios`;
export const getUserAudisByUsernameUrl = `${baseUrl}/api/audio/userAudiosByUsername`;
export const loginUrl = `${baseUrl}/api/account/login`;
export const registerUrl = `${baseUrl}/api/account/register`;
export const googleUrl = `${baseUrl}/api/account/google`;
export const genresAllUrl = `${baseUrl}/api/genres`;

export const getAudioByName = `${baseUrl}/api/audio/audioByName`;

// get
export const confirmEmailUrl = `${baseUrl}/api/account/ConfirmEmail`;

// post
export const verifyEmailAgainUrl = `${baseUrl}/api/account/VerifyEmail`;

// search
export const searchAllAudiosEndpoint = `${baseUrl}/api/search/audios`;

// profile

export const getUserProfileInfo = `${baseUrl}/api/profile`;

// trackCountUrl 
export const trackCountSignalRUrl = `${baseUrl}/trackCount`;