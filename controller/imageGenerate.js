const textToImage = require("text-to-image");
const { toPngFormat, hslToHex } = require("./utils.js");

module.exports = {
  quote: async (req, res) => {
    let color = req.body.changedColor;
    color = hslToHex(color.hue, color.saturation, color.brightness);
    let quote;

    req.body.Quote.length == 0
      ? (quote = "Enter the quote")
      : (quote = req.body.Quote);

    const dataUrl = await textToImage.generate(quote, {
      bgColor: "black",
      textColor: color,
      customHeight: 500,
      fontWeight: "bold",
      textAlign: "center",
      verticalAlign: "center",
      maxWidth: 1000,
      fontFamily: "font-family: sans-serif",
      fontSize: 25,
      lineHeight: 30,
      margin: 5,
    });

    // console.log(dataUrl);
    //    let quoteImage;
    //    let file=await imageFormatting.toPngFormat(dataUrl,quoteImage);
    //    console.log("iop",file)
    return res.status(200).json({ image: dataUrl });
  },
};
