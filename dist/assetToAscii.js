import { asciify, setChars } from "./vendor/asciify-image.js";
setChars(" .`^,:;i1tfLCG08@#");
export function getAsciiImage(input) {
    const screenWidth = process.stdout.columns || 80;
    const screenHeight = process.stdout.rows || 80;
    asciify(input, {
        fit: 'box',
        width: screenWidth,
        height: screenHeight,
        color: false
    }).then(ascii => console.log(ascii))
        .catch(console.error);
}
//# sourceMappingURL=assetToAscii.js.map