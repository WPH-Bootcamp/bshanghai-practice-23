/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export default function Error({ error, reset }: any) {
  return (
    <div>
      <h2>Terjadi kesalahan!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Coba Lagi</button>
    </div>
  );
}
