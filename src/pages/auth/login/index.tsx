import Link from 'next/link';
import type { CSSProperties } from 'react';

import { LoginForm } from '@/components/Auth/Login';
import { BaseAuthLayout } from '@/templates/Base';

const styles: CSSProperties = {
  marginTop: 30,
  textAlign: 'center',
};
export default function Login() {
  return (
    <BaseAuthLayout>
      <LoginForm />

      <div style={styles}>
        <Link href="/auth/register">Signup now!</Link>
      </div>
    </BaseAuthLayout>
  );
}
