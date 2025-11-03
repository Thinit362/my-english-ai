import Image from 'next/image';

const ICON_MAP: Record<string, string> = {
  'khởi động': '/icons/warmup.png',
  'từ vựng': '/icons/vocabulary.png',
  'ngữ pháp': '/icons/grammar.png',
  'phát âm': '/icons/pronunciation.png',
};

function normalizeTag(input = '') {
  return input.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

const CardLecture = ({ data }: { data: Lecture }) => {
  const iconSrc = ICON_MAP[normalizeTag(data.tag || '')] || '/icons/default.png';

  return (
    <div className="flex items-center bg-white rounded-xl shadow-md p-4 mb-4 hover:shadow-lg transition">
      {/* Ảnh bài giảng */}
      <div className="w-24 h-24 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50 mr-4">
        <Image
          src={iconSrc}
          alt={data.title}
          width={96}
          height={96}
          className="object-contain"
        />
      </div>

      {/* Thông tin bài */}
      <div className="flex-1">
        <h3 className="text-sky-800 font-semibold hover:underline cursor-pointer">
          {data.title}
        </h3>
        <span className="text-gray-500 text-sm">{data.tag}</span>
      </div>
    </div>
  );
};
