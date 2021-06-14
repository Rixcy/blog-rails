// @ts-check

/**
 * @type {Partial<import('next/dist/next-server/server/config').NextConfig>}
 **/

const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([withBundleAnalyzer])
