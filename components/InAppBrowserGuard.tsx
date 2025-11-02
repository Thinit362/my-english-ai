// components/InAppBrowserGuard.tsx
'use client';
import { useEffect, useState } from 'react';

function isInAppBrowser(ua: string) {
  const s = ua.toLowerCase();
  return (
    s.includes('zalo') ||
    s.includes('line') ||
    s.includes('fbav') || s.includes('fban') || s.includes('fb_iab') || // Facebook/Messenger
    s.includes('instagram') ||
    s.includes('tiktok') ||
    s.includes('kakaotalk') ||
    s.includes('snapchat')
  );
}
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent);
const isAndroid = () => /android/i.test(navigator.userAgent);

export default function InAppBrowserGuard() {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
    setShow(isInAppBrowser(navigator.userAgent));
  }, []);

  if (!show) return null;

  const openExternal = () => {
    if (isAndroid()) {
      // Thử Chrome Intent
      const u = new URL(window.location.href);
      const intent = `intent://${u.host}${u.pathname}${u.search}#Intent;scheme=https;package=com.android.chrome;end`;
      window.location.href = intent;
      // Fallback: mở tab mới (nhiều IAB vẫn chặn, nhưng cứ thử)
      setTimeout(() => window.open(window.location.href, '_blank'), 500);
    } else {
      // iOS: IAB không cho auto-open. Hiển thị hướng dẫn bên dưới.
      alert('Trên iPhone/iPad, hãy bấm nút ••• hoặc menu và chọn "Open in Safari".');
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Đã sao chép liên kết. Hãy mở Safari/Chrome và dán để truy cập.');
    } catch {
      alert('Sao chép không thành công. Vui lòng sao chép thủ công.');
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-amber-50 border-t border-amber-200 p-4">
      <div className="max-w-3xl mx-auto">
        <p className="font-semibold text-amber-900">
          Để dùng micro và phát âm chuẩn, vui lòng mở trang này trong Safari/Chrome.
        </p>
        <p className="text-sm text-amber-800 mt-1">
          {isIOS()
            ? 'Trên iPhone/iPad: bấm nút ••• (hoặc menu) → Open in Safari.'
            : 'Trên Android: bấm nút bên dưới để mở bằng Chrome.'}
        </p>
        <div className="mt-3 flex gap-2">
          <button
            onClick={openExternal}
            className="px-4 py-2 rounded-lg bg-[var(--navy)] text-white"
          >
            Mở trong trình duyệt
          </button>
          <button
            onClick={copyLink}
            className="px-4 py-2 rounded-lg border"
          >
            Sao chép liên kết
          </button>
        </div>
      </div>
    </div>
  );
}
