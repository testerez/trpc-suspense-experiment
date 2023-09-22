/** @type {import("next").NextConfig} */
const config = {
  /** We run eslint as a separate task in CI */
  eslint: {
    ignoreDuringBuilds: !!process.env.CI,
  },
}

module.exports = config
