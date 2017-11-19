

let toImageDataFromCanvas = function(canvas: HTMLCanvasElement): ImageData {
   let ctx = canvas.getContext('2d');
   let {width, height} = canvas;
   return ctx.getImageData(0, 0, width, height);
};

let toImageDataFromPath = function(pathToImage: string) {
   let img = new Image();
   img.src = pathToImage;
   let loaded = false;
   img.addEventListener('load', () => {
      loaded = true;
   });

   while (!loaded) {
      // spin until loaded
   }

   let canvas = new HTMLCanvasElement();
   let ctx = canvas.getContext('2d');
   ctx.drawImage(img, img.naturalWidth, img.naturalHeight);
   return ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
};

interface ImageComparison {
   actualImageData: ImageData;
   expectedImageData: ImageData;
   diffImageData: ImageData;
   percentDifferent: number;
}

function compareImageData(imageActualData: ImageData, imageExpectedData: ImageData): ImageComparison {
   let widthDiff = imageActualData.width - imageExpectedData.width;
   let heightDiff = imageActualData.height - imageExpectedData.height;

   let result: ImageComparison = {
      actualImageData: imageActualData,
      expectedImageData: imageExpectedData,
      percentDifferent: 100
   }
   if (widthDiff === 0 && heightDiff === 0) {
      let width = imageActualData.width;
      let height = imageActualData.height;
      for (let i = 0; i < imageActualData.width; i++) {
         for (let j = 0; j < imageActualData.height; j++) {
            let pixelIndex = i + j * width;
            let actualPixelR = imageActualData[pixelIndex + 0];
            let actualPixelG = imageActualData[pixelIndex + 1];
            let actualPixelB = imageActualData[pixelIndex + 2];
            let actualPixelA = imageActualData[pixelIndex + 3];

            let expectedPixelR = imageExpectedData[pixelIndex + 0];
            let expectedPixelG = imageExpectedData[pixelIndex + 1];
            let expectedPixelB = imageExpectedData[pixelIndex + 2];
            let expectedPixelA = imageExpectedData[pixelIndex + 3];
         }
      }
   }

   return null;
}

let customMatcher = {
   toImageEqual: function(util, customEqualityTesters) {

      return {
         compare: function(actual, expected) {
            let result: { pass: boolean, message: string };

            result.pass = false;
            result.message = 'Not implemented';

            return result;
         }
      };
   }
}