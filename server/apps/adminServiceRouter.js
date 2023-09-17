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

adminServiceRouter.get("/:id", async (req, res) => {
  try {
    const serviceId = req.params.id;
    const { data, error } = await supabase
      .from("service")
      .select("*, category_service(*)")
      .eq("service_id", serviceId)
      .single();

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

adminServiceRouter.delete("/:id", async (req, res) => {
  try {
    const serviceId = req.params.id;
    const { error } = await supabase
      .from("service")
      .delete()
      .eq("service_id", serviceId);

    if (error) {
      console.error("Error deleting service:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while deleting service." });
    }

    res.status(201).json({ message: "admin has been delete successfully" });
  } catch (err) {
    console.error("Internal server error:", err);
    res.status(500).json({ error: "An internal server error occurred." });
  }
});
