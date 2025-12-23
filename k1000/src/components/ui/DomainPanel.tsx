type Props = {
    title: string;
    onClose: () => void;
  };
  
  export default function DomainPanel({ title, onClose }: Props) {
    return (
      <div className="absolute right-0 top-0 h-full w-[360px]
        bg-black/70 backdrop-blur-xl
        p-8 text-white
        animate-slideIn">
  
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-white"
        >
          ✕
        </button>
  
        <h2 className="text-2xl tracking-widest mb-6">
          {title}
        </h2>
  
        <p className="text-sm text-neutral-300 leading-relaxed">
          This domain represents a core functional wing of K-1000,
          designed to foster growth, collaboration, and long-term
          excellence within the organisation.
        </p>
      </div>
    );
  }
  