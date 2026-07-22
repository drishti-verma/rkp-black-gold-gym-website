const rateStore = new Map();

export function sanitize(value, max = 600) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, max);
}

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isMobile(value) {
  return /^[+0-9\s-]{8,16}$/.test(value);
}

export function validateInquiry(payload) {
  const data = {
    fullName: sanitize(payload.fullName, 80),
    mobile: sanitize(payload.mobile, 20),
    email: sanitize(payload.email, 120),
    ageGroup: sanitize(payload.ageGroup, 40),
    goal: sanitize(payload.goal, 80),
    membership: sanitize(payload.membership, 80),
    personalTraining: sanitize(payload.personalTraining, 20),
    preferredTime: sanitize(payload.preferredTime, 80),
    experience: sanitize(payload.experience, 80),
    message: sanitize(payload.message, 800),
    consent: Boolean(payload.consent),
    website: sanitize(payload.website, 120)
  };

  const errors = {};
  if (data.website) errors.website = "Spam protection triggered.";
  if (data.fullName.length < 2) errors.fullName = "Enter your full name.";
  if (!isMobile(data.mobile)) errors.mobile = "Enter a valid mobile number.";
  if (data.email && !isEmail(data.email)) errors.email = "Enter a valid email address.";
  if (!data.ageGroup) errors.ageGroup = "Choose an age group.";
  if (!data.goal) errors.goal = "Choose your fitness goal.";
  if (!data.membership) errors.membership = "Choose a preferred membership.";
  if (!data.preferredTime) errors.preferredTime = "Choose a preferred training time.";
  if (!data.experience) errors.experience = "Choose your training experience.";
  if (!data.consent) errors.consent = "Consent is required before submitting.";

  return { data, errors, valid: Object.keys(errors).length === 0 };
}

export function validateNewsletter(payload) {
  const email = sanitize(payload.email, 120);
  if (!isEmail(email)) {
    return { valid: false, errors: { email: "Enter a valid email address." }, data: { email } };
  }
  return { valid: true, errors: {}, data: { email } };
}

export function checkRateLimit(key, max = 5, windowMs = 60000) {
  const now = Date.now();
  const current = rateStore.get(key) || { count: 0, resetAt: now + windowMs };
  if (now > current.resetAt) {
    rateStore.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (current.count >= max) return false;
  current.count += 1;
  rateStore.set(key, current);
  return true;
}
