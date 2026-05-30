'use client';

import dynamic from 'next/dynamic';

/** Client-component wrapper so `ssr: false` is valid (Server Components disallow it). */
const Cursor = dynamic(() => import('./Cursor'), { ssr: false });

export default function CursorLoader() {
  return <Cursor />;
}
