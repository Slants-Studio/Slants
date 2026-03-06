export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string; // Tailwind color class or hex
  textColor: string;
  tabColor: string;
  content: string;
  year: string;
  client: string;
  tags: string[];
  images: { url: string; caption: string }[];
}

export const projects: Project[] = [
  {
    id: "claude",
    title: "Claude",
    subtitle: "Conversational AI Interface",
    description: "A reimagined interface for Claude, focusing on warmth and approachability.",
    color: "bg-pink-300",
    textColor: "text-pink-950",
    tabColor: "bg-pink-400",
    content: "We designed a system that feels less like a tool and more like a companion. The color palette uses soft pinks and warm tones to evoke a sense of calm and trust. Typography is rounded and friendly, moving away from the sterile tech aesthetic.",
    year: "2024",
    client: "Anthropic",
    tags: ["UI/UX", "Branding", "AI"],
    images: [
      { url: "https://picsum.photos/seed/claude1/1920/1080", caption: "Initial concept sketches for the chat interface." },
      { url: "https://picsum.photos/seed/claude2/1920/1080", caption: "Typography exploration and color palette selection." },
      { url: "https://picsum.photos/seed/claude3/1920/1080", caption: "Final high-fidelity mockups of the conversation view." }
    ]
  },
  {
    id: "aiko",
    title: "Aiko",
    subtitle: "Personal Assistant App",
    description: "A mobile-first personal assistant that learns your habits.",
    color: "bg-indigo-300",
    textColor: "text-indigo-950",
    tabColor: "bg-indigo-400",
    content: "Aiko is designed to be invisible. It lives in the background, surfacing only when needed. The interface uses deep blues and purples to suggest depth and intelligence without being overwhelming.",
    year: "2023",
    client: "Aiko Inc.",
    tags: ["Mobile", "Product Design"],
    images: [
      { url: "https://picsum.photos/seed/aiko1/1920/1080", caption: "User flow diagram for the onboarding process." },
      { url: "https://picsum.photos/seed/aiko2/1920/1080", caption: "Dark mode interface design for low-light usage." },
      { url: "https://picsum.photos/seed/aiko3/1920/1080", caption: "Notification system and widget designs." }
    ]
  },
  {
    id: "perplexity",
    title: "Perplexity",
    subtitle: "Knowledge Engine",
    description: "Redefining search with a focus on clarity and citation.",
    color: "bg-gray-100",
    textColor: "text-gray-900",
    tabColor: "bg-gray-200",
    content: "For Perplexity, we stripped away everything unnecessary. The result is a stark, clean interface where content is king. We used a monochromatic palette to ensure that the information itself is the primary visual element.",
    year: "2024",
    client: "Perplexity AI",
    tags: ["Web Design", "Information Architecture"],
    images: [
      { url: "https://picsum.photos/seed/perplexity1/1920/1080", caption: "Search results page layout iterations." },
      { url: "https://picsum.photos/seed/perplexity2/1920/1080", caption: "Citation tooltip and source linking mechanism." },
      { url: "https://picsum.photos/seed/perplexity3/1920/1080", caption: "Mobile responsive design for knowledge discovery." }
    ]
  },
  {
    id: "limitless",
    title: "Limitless",
    subtitle: "Memory Augmentation",
    description: "A wearable device interface for capturing your life.",
    color: "bg-blue-500",
    textColor: "text-white",
    tabColor: "bg-blue-600",
    content: "The Limitless interface needs to handle vast amounts of data without clutter. We developed a timeline-based navigation system that allows users to effortlessly scroll through their memories. The vibrant blue signifies clarity and infinite potential.",
    year: "2025",
    client: "Limitless",
    tags: ["Wearable", "Interface Design"],
    images: [
      { url: "https://picsum.photos/seed/limitless1/1920/1080", caption: "Timeline navigation interaction prototype." },
      { url: "https://picsum.photos/seed/limitless2/1920/1080", caption: "Data visualization for daily activity summaries." },
      { url: "https://picsum.photos/seed/limitless3/1920/1080", caption: "Wearable companion app dashboard." }
    ]
  },
  {
    id: "chatgpt",
    title: "ChatGPT",
    subtitle: "Generative Pre-trained Transformer",
    description: "The ubiquitous AI chat interface, refreshed for a new era.",
    color: "bg-lime-400",
    textColor: "text-lime-950",
    tabColor: "bg-lime-500",
    content: "Our concept for ChatGPT embraces the 'glitch' aesthetic of early computing mixed with modern brutalism. The neon lime green demands attention, signaling that this is a powerful, active tool. It's bold, unapologetic, and functional.",
    year: "2024",
    client: "OpenAI",
    tags: ["Concept", "Redesign"],
    images: [
      { url: "https://picsum.photos/seed/chatgpt1/1920/1080", caption: "Brutalist typography exploration for the header." },
      { url: "https://picsum.photos/seed/chatgpt2/1920/1080", caption: "Code block syntax highlighting design." },
      { url: "https://picsum.photos/seed/chatgpt3/1920/1080", caption: "Voice mode interaction visualizer." }
    ]
  },
   {
    id: "gemini",
    title: "Gemini",
    subtitle: "Multimodal AI",
    description: "Seamlessly integrating text, code, and media.",
    color: "bg-sky-200",
    textColor: "text-sky-900",
    tabColor: "bg-sky-300",
    content: "Gemini represents the duality of creativity and logic. We used a split-screen motif and fluid gradients to represent the merging of different modalities. The interface is adaptive, changing structure based on the content being generated.",
    year: "2025",
    client: "Google",
    tags: ["Multimodal", "System Design"],
    images: [
      { url: "https://picsum.photos/seed/gemini1/1920/1080", caption: "Split-screen multimodal input interface." },
      { url: "https://picsum.photos/seed/gemini2/1920/1080", caption: "Generative image editing tools UI." },
      { url: "https://picsum.photos/seed/gemini3/1920/1080", caption: "Code generation and debugging workspace." }
    ]
  },
];
