import axios from "axios";

const API_KEY = "wxv3e491ryrw70e6c";
const BASE_URL = "https://techhk.aoscdn.com";

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    const enhancedImageData = await pollForEnhancedImage(taskId);
    return enhancedImageData;
  } catch (error) {
    console.error(
      "Error enhancing image:",
      error?.response?.data || error.message
    );
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  try {
    const { data } = await axios.post(
      `${BASE_URL}/api/tasks/visual/scale`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-API-KEY": API_KEY,
        },
      }
    );
    if (!data?.data?.task_id) {
      throw new Error("Failed to upload image! Task id not found");
    }
    return data?.data?.task_id;
  } catch (error) {
    console.error("Upload failed:", error?.data?.data || error.message);
    throw error;
  }
};

const getEnhancedImage = async (taskId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
      {
        headers: {
          "X-API-KEY": API_KEY,
        },
      }
    );
    if (!data?.data) {
      throw new Error("failed to get enhanced image! Image not Found");
    }
    return data.data;
  } catch (error) {
    console.error(
      "Get Enhanced Image failed:",
      error?.response?.data || error.message
    );
    throw error;
  }
};
const pollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await getEnhancedImage(taskId);
  if (result.state === 4) {
    console.log("processing....");
    if (retries >= 20) {
      throw new Error("Max retries reached. please try again later.");
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return pollForEnhancedImage(taskId, retries + 1);
  }
  return result;
};
