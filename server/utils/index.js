import jwt from "jsonwebtoken";

const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // Determine if we're in production based on NODE_ENV
  const isProduction = process.env.NODE_ENV === "production";
  
  res.cookie("token", token, {
    httpOnly: false,
    secure: isProduction, // Only use secure cookies in production
    sameSite: isProduction ? "none" : "lax", // Use 'none' for cross-site in production, 'lax' in development
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
  });
};

export default createJWT;
