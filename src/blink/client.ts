import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'sombra-hk-hive-uqtu1bdt',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_nodA2efpMnzN_zRwVC6c0hpVTA7qnDy2',
  authRequired: false,
  auth: { mode: 'managed' },
})
