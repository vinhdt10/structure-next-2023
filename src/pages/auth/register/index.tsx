import Link from 'next/link';
import type { CSSProperties } from 'react';

import { RegisterForm } from '@/components/Auth/Register';
import { BaseAuthLayout } from '@/templates/Base';

const styles: CSSProperties = {
  marginTop: 30,
  textAlign: 'center',
};
export default function Register() {
  return (
    <BaseAuthLayout>
      <RegisterForm />

      <div style={styles}>
        <Link href="/auth/login">Registered Before? Signin Now!</Link>
      </div>
    </BaseAuthLayout>
  );
}
