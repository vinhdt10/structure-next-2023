import type { ReactNode } from 'react';

export function BaseAuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}
