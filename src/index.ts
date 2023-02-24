import { registerPlugin } from '@capacitor/core';

import type { CapacitorOcrPlugin } from './definitions';

const CapacitorOcr = registerPlugin<CapacitorOcrPlugin>(
    'CapacitorOcr',
    {},
  );

export { CapacitorOcr };

export * from './definitions';
// export * from './web';
