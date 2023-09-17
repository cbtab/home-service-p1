import { supabase } from "../utils/db.js";
import { Router } from "express";
export const adminServiceRouter = Router();

adminServiceRouter.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("service")
      .select("*, category_service(*)")
      .order("service_id", { ascending: true });

    if (error) {
      console.error("Error fetching service:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching service." });
    }

    res.json({ data });
  } catch (err) {
    console.error("Internal server error:", err);
    res.status(500).json({ error: "An internal server error occurred." });
  }
});
