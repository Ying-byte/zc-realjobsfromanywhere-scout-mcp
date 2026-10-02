#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "realjobsfromanywhere",
  boardId: "realjobsfromanywhere-official",
  domain: "realjobsfromanywhere.com",
  npmName: "zc-realjobsfromanywhere-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
