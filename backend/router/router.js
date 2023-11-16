export default (app) => {
  app.get("/", function (req, res, next) {
    res.status(200).render("./index.html");
  });
  app.use("/login", import("./Auth/login.js"));
  app.use("/signup", import("./Auth/signup.js"));

  // Catch all
  app.use("*", function (req, res, next) {
    res.status(404).json({ err: "Path" + req.originalUrl + " does not exist" });
  });
};
