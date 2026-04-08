const columns = [
  {
    title: "Meeting preparation",
    desc: "Simulate high-stakes negotiations with an AI partner that understands your client's specific pain points and industry trends.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw8jGLZolNMZIktKdLLiSLVGXkS2HVqye7rm_6Qic4vv3Lw3uJTEbovKmvyq3L5-zkqWqEB2vVYoPuWH4xaSg-uM3PrgIauYEf0tDPr9ObretoUGwXmgmNVFSEYhAKGFK-yx24Y2l6cBr_gv7E8JdVcdF-wYIQJomdvv3Vgu0o2VoRBlwj5JONCBQI_nINAvoCjuw_ky-DjU6M3I7RmmBNmdNpmVcMNHaz8Ee9WDcL5rLlxRWu7GKkoRgxM0Mv0AvQzVVq8t3VkTk",
    alt: "Top-down shot of a minimalist desk with a tablet displaying a sales pipeline",
  },
  {
    title: "Realtime feedback",
    desc: "Receive subtle, non-intrusive nudges on your pacing, tone, and objection handling while you are live in the conversation.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe4ZPKc03rVAqljjK-OF6snjX9IxKsKVKY2EtSaAUNBCqVreKaoGZz9pGtYvqCasmJR0lG5ao7uxvilkB1HuQJbxAMa1B_unLOyc74RjHmPHMKjFYgUNsHHdWuWbfSrVJc1U5XXlb-zVSY2MinUY3Aw1VoVOfQSxLCUud1bbQ4tuwXSQzLbfdvjMb4dcqdFphg68D_5GTxlXIWMmJra7YsztToRIdzG97qwcdPe5JM94c6dc92MXeiZfYrMBI6qQAa-MeXWCMsQbM",
    alt: "Digital dashboard showing voice analysis waveforms and sentiment metrics",
  },
  {
    title: "Complex conversations",
    desc: "Break down intricate enterprise deal structures into digestible steps for better clarity and faster decision-making cycles.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcWcXjEyUdbFggeSoBewLGwz1bv9KX-eaRu-5x2o-kR3ZRWfLrV8_cKYQ_W3S80NsoXSyCdQIHkWL1yyUYqg6qzUSV9lNZW6S-XnPEQbyxzWa9lELLzzUajCoB1RJWJL2tcVFxh5WDCwaoIlHa7jHo9B9QwqV5rqea8JYCIsyACDh8EUFiJtokejkKleOeaLXzeMNY2z5LQ58zU_Cg2UVvyHZ3flwfnFO_UlExZOdSbDT8CD94lhaGdDiCqfJ2bhFVfyRsPTkYEQQ",
    alt: "Two business executives in a modern boardroom engaged in discussion",
  },
];

export default function CoachingIntelligence() {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {columns.map((col) => (
          <div key={col.title} className="space-y-6">
            <div className="aspect-square bg-surface-container-lowest rounded-xl overflow-hidden group">
              <img
                alt={col.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={col.img}
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-headline text-primary">
                {col.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {col.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
