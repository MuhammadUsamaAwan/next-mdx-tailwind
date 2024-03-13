import nextMDX from '@next/mdx';

const withMDX = nextMDX();

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['mdx', 'tsx'],
};

export default withMDX(config);
