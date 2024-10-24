import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function login(req, res) {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ message: 'User not found.' });
  }

  if (!user.verified) {
    return res.status(400).json({ message: 'Please verify your email before logging in.' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password.' });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '15m' });

  res.status(200).json({ token });
}


// git add .; git commit -m 'commit  message'; git push