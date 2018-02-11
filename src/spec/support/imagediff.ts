

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

let toBase64Image = function(imageData: ImageData) {
   let canvas = new HTMLCanvasElement();
   canvas.width = imageData.width;
   canvas.height = imageData.height;

   let ctx = canvas.getContext('2d');
   ctx.putImageData(imageData, 0, 0);

   return canvas.toDataURL('image/png', 0);
}

interface ImageComparison {
   actualImageData: ImageData;
   expectedImageData: ImageData;
   diffImageData: ImageData;
   percentSame: number;
}

function compareImageData(imageActualData: ImageData, imageExpectedData: ImageData): ImageComparison {
   let widthDiff = imageActualData.width - imageExpectedData.width;
   let heightDiff = imageActualData.height - imageExpectedData.height;

   let result: ImageComparison = {
      actualImageData: imageActualData,
      expectedImageData: imageExpectedData,
      diffImageData: new ImageData(widthDiff, heightDiff),
      percentSame: 100
   }

   let totalPixels = widthDiff * heightDiff;
   let pixelsDiff = 0;
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

            let pixelDiffR = Math.abs(expectedPixelR - actualPixelR);
            let pixelDiffG = Math.abs(expectedPixelG - actualPixelG);
            let pixelDiffB = Math.abs(expectedPixelB - actualPixelB);
            let pixelDiffA = Math.abs(expectedPixelA - actualPixelA);
            
            if (!pixelDiffR || !pixelDiffG || !pixelDiffB || !pixelDiffA) {
               pixelsDiff++;
            }

            result.diffImageData.data[pixelIndex + 0] = pixelDiffR;
            result.diffImageData.data[pixelIndex + 1] = pixelDiffG;
            result.diffImageData.data[pixelIndex + 2] = pixelDiffB;
            result.diffImageData.data[pixelIndex + 3] = pixelDiffA;
         }
      }
   }

   return result;
}

export let customMatcher = {
   toBeImage: function(util, customEqualityTesters) {

      return {
         compare: function(actual: HTMLCanvasElement, expected: string, percent: number) {
            let result: { pass: boolean, message: string };

            let actualImageData = toImageDataFromCanvas(actual);
            let expectedImageData = toImageDataFromPath(expected);

            let compare = compareImageData(actualImageData, expectedImageData);

            result.pass = compare.percentSame >= percent;
            result.message = 'Not implemented';

            return result;
         }
      };
   }
}