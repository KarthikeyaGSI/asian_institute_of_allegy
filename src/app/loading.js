export default function Loading() {
  return (
    <div className="fixed inset-0 bg-dark z-[9999] flex flex-col items-center justify-center gap-8">
      {/* Pulse Logo Placeholder */}
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
        <div className="relative w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      </div>
      
      <div className="text-center space-y-4">
        <h2 className="text-white font-heading text-xl font-bold tracking-widest uppercase">
          Asian Institute <span className="text-primary-accent">of Allergy</span>
        </h2>
        <div className="flex gap-2 justify-center">
            {[0, 1, 2].map((i) => (
                <div 
                    key={i}
                    className="w-1.5 h-1.5 bg-primary-accent rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                />
            ))}
        </div>
        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">Preparing Clinical Workspace</p>
      </div>
    </div>
  );
}
