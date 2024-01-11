const { Router } = require("express");
const auth = require("./auth.route");
const user = require("./user.route");
const seller = require("./Seller");
const admin = require("./Admin");
const product = require("./product.route");
const {
  isAuthenticatedUser,
  checkVerified,
  authorizeRole,
} = require("../middlewares/auth.middleware");

const router = Router();
router.use("/api/v1/auth", auth);
router.use("/api/v1/user", isAuthenticatedUser, checkVerified, user);
router.use("/api/v1/seller", isAuthenticatedUser, checkVerified, seller);
router.use(
  "/api/v1/admin",
  isAuthenticatedUser,
  checkVerified,
  authorizeRole("admin"),
  admin,
);
router.use("/api/v1/product", product);
router.get("/", (req, res) => {
  return res
    .status(200)
    .json({ success: true, message: "You're not meant to be here :)" });
});

module.exports = router;
