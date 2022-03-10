const multer =  require('multer');
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/');
  },
  filename(req, file = {}, cb) {
    const { originalname } = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
    cb(null,req.filename = `${file.fieldname}__${Date.now()}${fileExtension}`);
  },
});

module.exports = multer({ storage });