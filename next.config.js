/** @type {import('next').NextConfig} */
require('dotenv').config()

const proxy = process.env.API || 'http://localhost:3001/';

module.exports = {
   async rewrites() {
      return [
         {
            source: '/api/:path*',
            destination: `${proxy}/:path*`,
         },
      ]
   },
}
