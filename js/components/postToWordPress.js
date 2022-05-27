import {displayMessage} from "./message.js";

export async function postToWordPress(endPoint, data, elem, message1, message2) {
  try {
    const response = await fetch(endPoint, {
      method: 'post',
      body: data
    })
    response.ok ? displayMessage(elem, "success-message", message1, message2) : displayMessage(elem, "error-message");
    return await response.json();

  } catch (error) {
    displayMessage(elem, "error-message");
  }
}