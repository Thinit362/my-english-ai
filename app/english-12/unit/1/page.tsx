import DualLessonAssistant from '@/components/DualLessonAssistant';

export const metadata = {
  title: 'English 12 – Unit 1: Life stories we admire',
  description:
    'AI-powered lesson: vocabulary, grammar (Past Simple & Past Continuous), pronunciation (/eɪ/ & /əʊ/), listening, speaking & writing.',
};

const vocab = [
  { word: 'biography', vi: 'tiểu sử' },
  { word: 'diary', vi: 'nhật ký' },
  { word: 'legacy', vi: 'di sản' },
  { word: 'achievement', vi: 'thành tựu' },
  { word: 'obstacle', vi: 'trở ngại' },
  { word: 'perseverance', vi: 'sự kiên trì' },
  { word: 'compassion', vi: 'lòng trắc ẩn' },
  { word: 'resilience', vi: 'khả năng phục hồi' },
  { word: 'innovate', vi: 'đổi mới' },
  { word: 'charitable', vi: 'nhân ái, từ thiện' },
];

const minimalPairs = {
  'Vowel /eɪ/': ['day', 'brave', 'fame', 'change'],
  'Vowel /əʊ/': ['hope', 'heroic', 'global', 'donate'],
};

const grammarNotes = [
  {
    title: 'Past Simple',
    form: 'S + V2/ed',
    use: 'Hành động hoàn tất trong quá khứ, có mốc thời gian rõ.',
    ex: 'She published her first book in 1997.',
  },
  {
    title: 'Past Continuous',
    form: 'S + was/were + V-ing',
    use: 'Hành động đang diễn ra tại một thời điểm trong quá khứ; thường bị ngắt bởi Past Simple.',
    ex: 'She was writing when the idea suddenly came.',
  },
];

const quiz = [
  {
    q: 'Choose the correct form: While Walt Disney ___ (work), he ___ (get) a new idea.',
    a: ['was working / got', 'worked / was getting', 'was working / was getting', 'works / gets'],
    correct: 0,
  },
  {
    q: 'The word “legacy” is closest in meaning to…',
    a: ['challenge', 'inheritance/impact left', 'routine', 'weakness'],
    correct: 1,
  },
  {
    q: 'Pronunciation: Which word has the sound /eɪ/?',
    a: ['hope', 'brave', 'book', 'good'],
    correct: 1,
  },
  {
    q: 'Choose the sentence in Past Simple:',
    a: [
      'They were discussing the plan.',
      'She writes every day.',
      'He invented a new method in 1928.',
      'They are meeting the editor.',
    ],
    correct: 2,
  },
  {
    q: 'Which quality best matches “perseverance”?',
    a: ['giving up easily', 'working hard despite difficulties', 'being lucky', 'speaking loudly'],
    correct: 1,
  },
  {
    q: 'Choose the correct stress & sound: /əʊ/ appears in…',
    a: ['global', 'brave', 'legacy', 'family'],
    correct: 0,
  },
];

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
          Unit 1 – Life stories we admire
        </h1>
        <p className="text-gray-700 mt-2">
          In this unit, you will learn vocabulary to describe inspiring people, practise
          Past Simple & Past Continuous, and improve pronunciation of <b>/eɪ/</b> and <b>/əʊ/</b>.
        </p>
      </header>

      {/* Learning Objectives */}
      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <div className="rounded-xl border p-4 bg-blue-50">
          <h2 className="font-semibold text-lg mb-2">🎯 Learning Objectives</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Talk about people you admire and their achievements.</li>
            <li>Use Past Simple & Past Continuous correctly in context.</li>
            <li>Pronounce /eɪ/ and /əʊ/ clearly in common words.</li>
            <li>Practise listening about famous figures and summarising life events.</li>
          </ul>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="font-semibold text-lg mb-2">🗣️ Warm-up</h2>
          <p className="text-gray-700">
            Pair work: Tell your partner about a person you admire. Use these frames:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>I admire ___ because ___.</li>
            <li>He/She was born in ___ and became famous for ___.</li>
            <li>While he/she was ___, he/she ___ (Past Simple interrupts).</li>
          </ul>
        </div>
      </div>

      {/* Vocabulary */}
      <section className="mb-8">
        <h2 className="font-semibold text-xl mb-3">🧩 Vocabulary</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {vocab.map((v) => (
            <div key={v.word} className="rounded-lg border p-3">
              <div className="font-semibold">{v.word}</div>
              <div className="text-gray-600 text-sm">{v.vi}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Grammar */}
      <section className="mb-8">
        <h2 className="font-semibold text-xl mb-3">⚙️ Grammar – Past Simple vs Past Continuous</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {grammarNotes.map((g) => (
            <div key={g.title} className="rounded-lg border p-4">
              <div className="font-semibold">{g.title}</div>
              <div className="text-gray-700 text-sm mt-1">
                <b>Form:</b> {g.form}
              </div>
              <div className="text-gray-700 text-sm">
                <b>Use:</b> {g.use}
              </div>
              <div className="text-gray-700 text-sm italic">e.g. {g.ex}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pronunciation */}
      <section className="mb-8">
        <h2 className="font-semibold text-xl mb-3">🔈 Pronunciation – /eɪ/ & /əʊ/</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(minimalPairs).map(([title, words]) => (
            <div key={title} className="rounded-lg border p-4">
              <div className="font-semibold">{title}</div>
              <p className="text-gray-700 mt-1">{words.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Assistant (song ngữ, có TTS) */}
      <section className="mb-10">
        <h2 className="font-semibold text-xl mb-3">🤖 Practice with AI Assistant</h2>
        <p className="text-gray-700 mb-3">
          Ask the assistant about famous people, practise telling a life story, or get
          feedback on your sentences.
        </p>
        <DualLessonAssistant grade={12} />
        <div className="mt-3 text-sm text-gray-600">
          <b>Suggested prompts:</b>
          <ul className="list-disc list-inside">
            <li>“Tell me a short life story of an inspiring person in 5 sentences.”</li>
            <li>“Check my past simple vs past continuous: <i>While I was walking home, I met an old friend.</i>”</li>
            <li>“Give me 6 sentences using /eɪ/ and /əʊ/ words and read them slowly.”</li>
          </ul>
        </div>
      </section>

      {/* Listening ideas (thematic) */}
      <section className="mb-8">
        <h2 className="font-semibold text-xl mb-3">🎧 Listening Ideas</h2>
        <p className="text-gray-700">
          Listen to short biographies and answer: Who is the person? What did he/she
          achieve? What difficulties did he/she face? (Examples: Walt Disney, J.K. Rowling)
        </p>
      </section>

      {/* Mini Quiz (static) */}
      <section className="mb-10">
        <h2 className="font-semibold text-xl mb-3">📝 Mini Quiz</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-800">
          {quiz.map((item, idx) => (
            <li key={idx}>
              <div className="mb-1">{item.q}</div>
              <ul className="ml-4 mt-1">
                {item.a.map((opt, i) => (
                  <li key={i} className="text-sm">
                    {String.fromCharCode(97 + i)}. {opt}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-gray-500 mt-1">
                Answer: <b>{String.fromCharCode(97 + item.correct)}</b>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Summary & Homework */}
      <section className="mb-12">
        <h2 className="font-semibold text-xl mb-3">📚 Summary & Homework</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Summarise the life story of a person you admire (120–150 words).</li>
          <li>Record yourself reading 6 sentences including /eɪ/ and /əʊ/ words.</li>
          <li>Rewrite 5 sentences by switching between Past Simple and Past Continuous.</li>
        </ul>
      </section>

      <footer className="text-xs text-gray-500">
        Inspired by the structure of Unit 1 (Global Success – Lớp 12): warm-up, vocabulary,
        grammar, pronunciation, listening & practice.
      </footer>
    </section>
  );
}
