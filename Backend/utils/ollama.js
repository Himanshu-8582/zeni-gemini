import axios from "axios";
import dotenv from 'dotenv';
dotenv.config({ path: "./.env" });
// console.log(process.env);

const getAPIresponse = async (command) => {
  try {
    const apiURL = process.env.GEMINI_API_URI;
    console.log(apiURL);
    const response = await axios.post(
      apiURL,
      {
        contents: [
          {
            parts: [{ text: command }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const text =
      response.data.candidates[0].content.parts[0].text;

    // console.log("Gemini:", text);
    return text;


  } catch (error) {
    console.error("Error connecting to Ollama API:", error);
    throw error; // let the caller handle it
  }
};

// getAPIresponse("Hello how are you?")

export default getAPIresponse;


