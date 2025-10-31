import sharp from "sharp";
import path from "path";

const createThumbnail = async (req, res, next) => {
  if (!req.file) return next();

  const inputPath = req.file.path;
  const ext = path.extname(req.file.originalname);
  const outputPath = path.join(
    path.dirname(inputPath),
    path.basename(inputPath, ext) + "_thumb.png"
  );

  try {
    await sharp(inputPath)
      .resize(160, 160)
      .png()
      .toFile(outputPath);

    console.log("Thumbnail created:", outputPath);
    next();
  } catch (err) {
    next(err);
  }
};

export { createThumbnail };
