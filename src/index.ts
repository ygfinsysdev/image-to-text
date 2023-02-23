import { registerPlugin } from '@capacitor/core';

import type { CapMLPlugin } from './definitions';

const CapML = registerPlugin<CapMLPlugin>(
    'CapML',
    {},
  );

export { CapML };

export * from './definitions';
// export * from './web';
