'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      router.push(`/verify/${code.trim()}`);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Credential Core</h1>
      <p className="text-xl text-gray-600 mb-8">
        Blockchain-based Credential Management System
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Xác minh văn bằng</h2>
        <form onSubmit={handleVerify} className="flex gap-2">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Nhập mã xác minh (VD: CRED-20240115-ABC123)"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Button type="submit">Tìm</Button>
        </form>
      </div>

      <div className="flex gap-4">
        <Button asChild>
          <Link href="/admin">
            Admin Portal
          </Link>
        </Button>
        <Button asChild>
          <Link href="/student">
            Student Portal
          </Link>
        </Button>
      </div>
    </main>
  );
}
