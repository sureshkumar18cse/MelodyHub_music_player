import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getPlaylistBytag,
  getSongs,
  toggleFavourite,
} from "../controllers/songController.js";

const songRouter = express.Router();

songRouter.get("/", getSongs);
songRouter.get("/playlistByTag/:tag", getPlaylistBytag);
songRouter.post("/favourite", protect, toggleFavourite);
songRouter.get("/favourites", protect, (req, res) => {
  res.json(req.user.favourites);
});

export default songRouter;
