

let toImageDataFromCanvas = function(canvas: HTMLCanvasElement): ImageData {
   let ctx = canvas.getContext('2d');
   let {width, height} = canvas;
   return ctx.getImageData(0, 0, width, height);
}

let toImageDataFromPath = function(pathToImage: string) {
   let img = new Image();
   img.addEventListener('load', () => {

   });
}

let toImageDataFromImage = function(image: HTMLImageElement) {
   
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