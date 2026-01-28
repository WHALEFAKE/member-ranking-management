import { pool } from "../config/connectDB.js";

const activityController = {
  // =========================================================
  // PUBLIC ENDPOINTS
  // =========================================================

  // GET /v1/activities - Get all activities
  getAllActivities: async (req, res) => {
    try {
      const { rows } = await pool.query(
        `SELECT 
          id, title, type, starts_at, ends_at,
          location, description, checkin_enabled,
          requires_evidence, status, gem_amount,
          created_at, updated_at
        FROM activities 
        ORDER BY starts_at DESC`
      );

      return res.status(200).json({ activities: rows });
    } catch (error) {
      console.log("Get all activities error: ", error);
      return res.status(500).json({ error: error.message });
    }
  },

  // GET /v1/activities/:id - Get activity by ID
  getActivityById: async (req, res) => {
    try {
      const { id } = req.params;

      const { rows } = await pool.query(
        `SELECT 
          id, title, type, starts_at, ends_at,
          location, description, checkin_enabled,
          requires_evidence, status, gem_amount,
          created_at, updated_at
        FROM activities 
        WHERE id = $1`,
        [id]
      );

      if (rows.length === 0) {
        return res.status(404).json({ error: "Activity not found" });
      }

      return res.status(200).json({ activity: rows[0] });
    } catch (error) {
      console.log("Get activity by id error: ", error);
      return res.status(500).json({ error: error.message });
    }
  },

  // =========================================================
  // ADMIN ENDPOINTS
  // =========================================================

  // POST /v1/activities - Create new activity (Admin only)
  createActivity: async (req, res) => {
    try {
      const {
        title,
        type,
        startsAt,
        endsAt,
        location,
        description,
        checkinEnabled = true,
        requiresEvidence = false,
        status = "upcoming",
        gemAmount = 0,
      } = req.body;

      // Validate required fields
      if (!title || !type || !startsAt) {
        return res.status(400).json({
          error: "title, type, and startsAt are required",
        });
      }

      const { rows } = await pool.query(
        `INSERT INTO activities
        (title, type, starts_at, ends_at, location, description, 
         checkin_enabled, requires_evidence, status, gem_amount)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING *`,
        [
          title,
          type,
          startsAt,
          endsAt || null,
          location || null,
          description || null,
          checkinEnabled,
          requiresEvidence,
          status,
          gemAmount,
        ]
      );

      return res.status(201).json({ activity: rows[0] });
    } catch (error) {
      console.log("Create activity error: ", error);
      return res.status(500).json({ error: error.message });
    }
  },

  // PUT /v1/activities/:id - Update activity (Admin only)
  updateActivity: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        title,
        type,
        startsAt,
        endsAt,
        location,
        description,
        checkinEnabled,
        requiresEvidence,
        status,
        gemAmount,
      } = req.body;

      // Build dynamic update query
      const updates = [];
      const values = [];
      let paramCount = 1;

      if (title !== undefined) {
        updates.push(`title = $${paramCount++}`);
        values.push(title);
      }
      if (type !== undefined) {
        updates.push(`type = $${paramCount++}`);
        values.push(type);
      }
      if (startsAt !== undefined) {
        updates.push(`starts_at = $${paramCount++}`);
        values.push(startsAt);
      }
      if (endsAt !== undefined) {
        updates.push(`ends_at = $${paramCount++}`);
        values.push(endsAt);
      }
      if (location !== undefined) {
        updates.push(`location = $${paramCount++}`);
        values.push(location);
      }
      if (description !== undefined) {
        updates.push(`description = $${paramCount++}`);
        values.push(description);
      }
      if (checkinEnabled !== undefined) {
        updates.push(`checkin_enabled = $${paramCount++}`);
        values.push(checkinEnabled);
      }
      if (requiresEvidence !== undefined) {
        updates.push(`requires_evidence = $${paramCount++}`);
        values.push(requiresEvidence);
      }
      if (status !== undefined) {
        updates.push(`status = $${paramCount++}`);
        values.push(status);
      }
      if (gemAmount !== undefined) {
        updates.push(`gem_amount = $${paramCount++}`);
        values.push(gemAmount);
      }

      if (updates.length === 0) {
        return res.status(400).json({ error: "No fields to update" });
      }

      values.push(id);

      const { rows } = await pool.query(
        `UPDATE activities 
        SET ${updates.join(", ")}, updated_at = CURRENT_TIMESTAMP
        WHERE id = $${paramCount}
        RETURNING *`,
        values
      );

      if (rows.length === 0) {
        return res.status(404).json({ error: "Activity not found" });
      }

      return res.status(200).json({ activity: rows[0] });
    } catch (error) {
      console.log("Update activity error: ", error);
      return res.status(500).json({ error: error.message });
    }
  },

  // DELETE /v1/activities/:id - Delete activity (Admin only)
  deleteActivity: async (req, res) => {
    try {
      const { id } = req.params;

      const { rows } = await pool.query(
        "DELETE FROM activities WHERE id = $1 RETURNING id, title",
        [id]
      );

      if (rows.length === 0) {
        return res.status(404).json({ error: "Activity not found" });
      }

      return res.status(200).json({
        message: "Activity deleted successfully",
        deletedActivity: rows[0],
      });
    } catch (error) {
      console.log("Delete activity error: ", error);
      return res.status(500).json({ error: error.message });
    }
  },

  // GET /v1/activities/:id/participants - Get activity participants (Admin only)
  getActivityParticipants: async (req, res) => {
    try {
      const { id } = req.params;

      // First check if activity exists
      const { rows: activityRows } = await pool.query(
        "SELECT id, title, type, status, gem_amount FROM activities WHERE id = $1",
        [id]
      );

      if (activityRows.length === 0) {
        return res.status(404).json({ error: "Activity not found" });
      }

      // Get participants (check-ins) with user info
      const { rows: participants } = await pool.query(
        `SELECT 
          c.id, c.user_id, c.checked_at, c.status, c.evidence, c.created_at,
          u.username, u.avatar, u.email, u.club_role
        FROM check_ins c
        JOIN users u ON c.user_id = u.id
        WHERE c.activity_id = $1
        ORDER BY c.checked_at DESC`,
        [id]
      );

      // Count statistics
      const totalParticipants = participants.length;
      const attendedCount = participants.filter(p => p.status === "attended").length;
      const pendingCount = participants.filter(p => p.status === "pending").length;

      return res.status(200).json({
        activity: activityRows[0],
        participants: participants,
        stats: {
          totalParticipants,
          attendedCount,
          pendingCount,
        },
      });
    } catch (error) {
      console.log("Get activity participants error: ", error);
      return res.status(500).json({ error: error.message });
    }
  },
};

export default activityController;
