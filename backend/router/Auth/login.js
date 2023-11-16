import { Router } from "express";
import User from "../../model/user";

const router = Router();

router.post("/login", async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  await User.create({
    username: username,
    password: password,
  });

  res.send(res);
});

export default router;
