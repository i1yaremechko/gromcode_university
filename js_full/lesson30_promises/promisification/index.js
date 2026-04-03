import { addImage } from "../promise_first-step";

export const addImageV2 = url => {
  return new Promise((resolve, reject) => {
    addImage(url, (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  });
};

addImageV2('https://server.com/image.png')
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'
