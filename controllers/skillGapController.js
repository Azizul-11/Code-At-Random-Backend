const rolesRaw = require("../data/roles.json");

const roles = {};
for (const role in rolesRaw) {
  roles[role.toLowerCase()] = rolesRaw[role].map(s => s.toLowerCase());
}

exports.skillGap = (req, res) => {
  try {
    const targetRole = req.body.targetRole?.toLowerCase();
    const currentSkills = req.body.currentSkills.map(s => s.toLowerCase());

    if (!targetRole || !currentSkills) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const requiredSkills = roles[targetRole];
    if (!requiredSkills) {
      return res.status(404).json({ error: "Role not found" });
    }

    const matched = currentSkills.filter(skill =>
      requiredSkills.includes(skill)
    );

    const missing = requiredSkills.filter(skill =>
      !currentSkills.includes(skill)
    );

    const recommendations = missing.map(skill => `Learn ${skill} next.`);

    return res.json({
      matched,
      missing,
      recommendations,
      learningOrder: missing
    });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
