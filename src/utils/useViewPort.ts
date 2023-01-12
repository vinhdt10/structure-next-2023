import { useDebugValue, useLayoutEffect, useMemo, useState } from 'react';

import { AppConfig } from '@/utils/appConfig';

const { VIEWPORT } = AppConfig;

type UseViewPortBagType = {
  isMobile: boolean;
  onMobileTransition: Function;
};

export default function useViewPort(): UseViewPortBagType {
  const [isMobile, setIsMobile] = useState(false);

  const handleResizeEvent = (): any => {
    if (window) {
      if (!isMobile && window.innerWidth <= VIEWPORT.MOBILE) {
        setIsMobile(true);
      }
      if (isMobile && window.innerWidth > VIEWPORT.MOBILE) {
        setIsMobile(false);
      }
    }
  };

  useLayoutEffect((): any => {
    if (!globalThis) {
      globalThis.addEventListener('resize', handleResizeEvent);
      handleResizeEvent();

      return (): any => {
        globalThis.removeEventListener('resize', handleResizeEvent);
      };
    }

    return (): any => {};
  });

  const onMobileTransition = useMemo(
    () =>
      (memoizedFn: (isMobile: any) => any): any => {
        return memoizedFn(isMobile);
      },
    [isMobile]
  );

  useDebugValue(isMobile ? 'MOBILE' : 'DESKTOP_OR_TABLET');
  return { isMobile, onMobileTransition };
}
