import { Redis } from '@upstash/redis'
export const redis = new Redis({
  url: 'https://destined-doberman-44477.upstash.io',
  token: 'Aa29AAIncDFmYWRkMDczYTFlNDE0ZjdiYTNhMDlkYThiODA3Mzg3OXAxNDQ0Nzc',
})

await redis.set("foo", "bar");
await redis.get("foo");