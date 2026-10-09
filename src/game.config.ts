/**
 * Identity of this game within the game lab. `npm run init-game` rewrites these values.
 *
 * `id` must be unique across every lab game: it namespaces the Supabase table, the
 * PeerJS room ids on the public PeerJS server, and localStorage keys, so two games can
 * never collide on shared infrastructure.
 */
export const GAME_CONFIG = {
  id: 'van',
  title: 'Delivery Van',
  tagline: 'Plan your route, deliver the parcels. Play solo, live or async.',
} as const

/** The Supabase table this game owns. Must match supabase/migrations/. */
export const SUPABASE_TABLE = `${GAME_CONFIG.id}_games`
