let currentAudio: HTMLAudioElement | null = null;

export type TtsOptions = {
  voice?: string;        // ví dụ: 'en-US-Wavenet-D'
  rate?: number;         // 0.25–4.0 (Google sẽ chuẩn hoá); mặc định 1.0
  // có thể mở rộng: pitch, volume...
};

/**
 * Phát TTS với Google Cloud qua /api/tts
 * Tự dừng âm cũ, bắt lỗi mạng, trả về Promise khi audio kết thúc.
 */
export async function playTTS(text: string, opts: TtsOptions = {}) {
  if (!text?.trim()) return;
  // dừng audio trước đó nếu có
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = '';
    currentAudio = null;
  }

  // gọi API (ở bước 1 bạn đã tạo /app/api/tts/route.ts)
  const res = await fetch('/api/tts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: text.trim(),
      // nếu muốn truyền voice/rate xuống server, mở rộng route.ts để nhận 2 field này
      voice: opts.voice,
      rate: opts.rate,
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => '');
    throw new Error(`TTS failed: ${res.status} ${err}`);
  }

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const audio = new Audio(url);
  currentAudio = audio;

  await new Promise<void>((resolve, reject) => {
    audio.onended = () => {
      URL.revokeObjectURL(url);
      if (currentAudio === audio) currentAudio = null;
      resolve();
    };
    audio.onerror = () => {
      URL.revokeObjectURL(url);
      if (currentAudio === audio) currentAudio = null;
      reject(new Error('Audio playback error'));
    };
    audio.play();
  });
}

/** Dừng phát nếu đang phát */
export function stopTTS() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = '';
    currentAudio = null;
  }
}
