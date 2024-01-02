import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// 1) upload video
export const uploadVideo = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

// 2) get all videos
export const getAllVideos = async()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

// 3) delete video

export const deleteVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}