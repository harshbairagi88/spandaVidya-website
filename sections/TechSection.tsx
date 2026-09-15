import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { T } from "../theme";
import { useReducedMotion } from "../hooks";

gsap.registerPlugin(ScrollTrigger);

type Layer = "inputs" | "processing" | "intelligence" | "outputs";
type Node = { title: string; detail: string; mark: string; tone: "sage" | "gold" | "ivory" };
type Connection = { from: string; to: string };
type Point = { x: number; y: number };
type PathData = Connection & { d: string };

const layers: { id: Layer; number: string; title: string; description: string; nodes: Node[] }[] = [
  {
    id: "inputs", number: "01", title: "Real-world inputs", description: "Multimodal health signals",
    nodes: [
      { title: "Eye images", detail: "Visual data", mark: "IM", tone: "gold" },
      { title: "Baby / child signals", detail: "Early-life cues", mark: "CH", tone: "sage" },
      { title: "Audio", detail: "Acoustic patterns", mark: "AU", tone: "ivory" },
      { title: "Video", detail: "Motion data", mark: "VD", tone: "gold" },
      { title: "RF signals", detail: "Contactless sensing", mark: "RF", tone: "sage" },
      { title: "Wearable / PPG", detail: "Physiological rhythm", mark: "PP", tone: "ivory" },
    ],
  },
  {
    id: "processing", number: "02", title: "Processing", description: "Signal and data preparation",
    nodes: [
      { title: "Signal processing", detail: "Cleaning and alignment", mark: "SP", tone: "sage" },
      { title: "Computer vision", detail: "Image interpretation", mark: "CV", tone: "gold" },
      { title: "Feature extraction", detail: "Meaningful measures", mark: "FX", tone: "ivory" },
      { title: "Data validation", detail: "Quality checks", mark: "DV", tone: "sage" },
      { title: "Multimodal fusion", detail: "Connected context", mark: "MF", tone: "gold" },
    ],
  },
  {
    id: "intelligence", number: "03", title: "AI intelligence", description: "Models and reasoning layer",
    nodes: [
      { title: "AI models", detail: "Domain-specific learning", mark: "AI", tone: "gold" },
      { title: "Machine learning", detail: "Pattern learning", mark: "ML", tone: "sage" },
      { title: "AI reasoning", detail: "Gemini-enabled exploration", mark: "AR", tone: "ivory" },
      { title: "Pattern detection", detail: "Signal relationships", mark: "PD", tone: "gold" },
      { title: "Health signal analysis", detail: "Evidence synthesis", mark: "HS", tone: "sage" },
    ],
  },
  {
    id: "outputs", number: "04", title: "Health insights", description: "Clear, structured outputs",
    nodes: [
      { title: "Health insights", detail: "Signal-led context", mark: "HI", tone: "gold" },
      { title: "Risk signals", detail: "Areas for attention", mark: "RS", tone: "sage" },
      { title: "Structured results", detail: "Consistent output", mark: "SR", tone: "ivory" },
      { title: "Reports", detail: "Readable summaries", mark: "RP", tone: "gold" },
      { title: "Continuous monitoring", detail: "Longitudinal view", mark: "CM", tone: "sage" },
    ],
  },
];

const connections: Connection[] = [
  { from: "inputs-0", to: "processing-1" }, { from: "inputs-1", to: "processing-0" },
  { from: "inputs-2", to: "processing-0" }, { from: "inputs-3", to: "processing-1" },
  { from: "inputs-4", to: "processing-2" }, { from: "inputs-5", to: "processing-4" },
  { from: "processing-0", to: "intelligence-1" }, { from: "processing-1", to: "intelligence-0" },
  { from: "processing-2", to: "intelligence-3" }, { from: "processing-3", to: "intelligence-4" },
  { from: "processing-4", to: "intelligence-2" }, { from: "intelligence-0", to: "outputs-0" },
  { from: "intelligence-2", to: "outputs-2" }, { from: "intelligence-3", to: "outputs-1" },
  { from: "intelligence-4", to: "outputs-4" },
];

const toneColor = (tone: Node["tone"]) => ({ sage: T.sagePale, gold: T.accentLight, ivory: T.ivory }[tone]);

export default function TechSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const diagramRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [paths, setPaths] = useState<PathData[]>([]);
  const [flowActive, setFlowActive] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  const calculatePaths = useCallback(() => {
    const diagram = diagramRef.current;
    if (!diagram || window.innerWidth < 1280) return setPaths([]);
    const bounds = diagram.getBoundingClientRect();
    const pointFor = (id: string, edge: "left" | "right"): Point | null => {
      const card = nodeRefs.current[id];
      if (!card) return null;
      const rect = card.getBoundingClientRect();
      return { x: edge === "right" ? rect.right - bounds.left : rect.left - bounds.left, y: rect.top - bounds.top + rect.height / 2 };
    };
    setPaths(connections.flatMap((connection) => {
      const start = pointFor(connection.from, "right");
      const end = pointFor(connection.to, "left");
      if (!start || !end) return [];
      const bend = Math.max(28, (end.x - start.x) * 0.38);
      return [{ ...connection, d: `M ${start.x} ${start.y} C ${start.x + bend} ${start.y}, ${end.x - bend} ${end.y}, ${end.x} ${end.y}` }];
    }));
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;
    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLElement>(".pipeline-node");
      gsap.set(nodes, { autoAlpha: 0, y: 20 });
      gsap.set(".pipeline-flow", { autoAlpha: 0 });
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
        onComplete: () => setFlowActive(true),
      });
      if (headerRef.current) timeline.fromTo(headerRef.current.children, { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.11, ease: "power3.out" });
      layers.forEach((layer, index) => {
        timeline.to(nodes.filter((node) => node.dataset.layer === layer.id), { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" }, index === 0 ? "-=0.15" : "+=0.12");
      });
      timeline.to(".pipeline-flow", { autoAlpha: 1, duration: 0.55, ease: "power2.out" }, "+=0.08");
    }, section);
    return () => ctx.revert();
  }, [reducedMotion]);

  useLayoutEffect(() => {
    calculatePaths();
    const observer = new ResizeObserver(calculatePaths);
    if (diagramRef.current) observer.observe(diagramRef.current);
    window.addEventListener("resize", calculatePaths);
    return () => { observer.disconnect(); window.removeEventListener("resize", calculatePaths); };
  }, [calculatePaths]);

  const isRelated = (id: string) => !hoveredNode || id === hoveredNode || connections.some((edge) => (edge.from === id && edge.to === hoveredNode) || (edge.to === id && edge.from === hoveredNode));

  return (
    <section id="technology" ref={sectionRef} className="py-16 md:py-20 px-6 md:px-[8vw] relative overflow-hidden" style={{ background: T.darkBg }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.045]" style={{ backgroundImage: `linear-gradient(${T.accentLight} 1px, transparent 1px), linear-gradient(90deg, ${T.accentLight} 1px, transparent 1px)`, backgroundSize: "38px 38px" }} />
      <div className="absolute w-[28rem] h-[28rem] -top-40 -right-36 rounded-full pointer-events-none opacity-20" style={{ background: `radial-gradient(circle, ${T.sage}35 0%, transparent 68%)` }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="max-w-3xl mb-12 md:mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] mb-5" style={{ color: T.accentWarm }}>Infrastructure</span>
          <h2 className="serif text-4xl md:text-6xl font-semibold leading-[0.98] mb-6" style={{ color: T.ivory }}>From signals to <em className="font-medium" style={{ color: T.accentLight }}>health intelligence</em></h2>
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl" style={{ color: `${T.ivory}a8` }}>Different health signals require different forms of intelligence. SpandaVidya brings images, audio, video, physiological signals and AI models into one connected processing layer.</p>
        </div>

        <div ref={diagramRef} className="relative rounded-[20px] border p-4 md:p-6 xl:p-7 overflow-hidden" style={{ background: "linear-gradient(145deg, #191712 0%, #100f0c 100%)", borderColor: T.darkBorder, boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}>
          <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${T.accentLight}60, transparent)` }} />
          <div className="hidden xl:block pipeline-flow absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox={`0 0 ${Math.max(diagramRef.current?.clientWidth || 1, 1)} ${Math.max(diagramRef.current?.clientHeight || 1, 1)}`} preserveAspectRatio="none" aria-hidden="true">
              <defs><filter id="flow-glow"><feGaussianBlur stdDeviation="2.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
              {paths.map((path, index) => {
                const related = !hoveredNode || path.from === hoveredNode || path.to === hoveredNode;
                return <g key={`${path.from}-${path.to}`} opacity={related ? 1 : 0.14} className="transition-opacity duration-300">
                  <path d={path.d} fill="none" stroke={`${T.accentLight}22`} strokeWidth="1" />
                  <path d={path.d} fill="none" stroke={T.accentLight} strokeWidth="1" strokeDasharray="3 13" opacity="0.45" filter="url(#flow-glow)">
                    {flowActive && <animate attributeName="stroke-dashoffset" from="64" to="0" dur={`${4.8 + (index % 4) * 0.7}s`} repeatCount="indefinite" />}
                  </path>
                  {flowActive && <circle r="2.2" fill={T.sagePale} filter="url(#flow-glow)"><animateMotion dur={`${5.6 + (index % 5) * 0.65}s`} repeatCount="indefinite" path={path.d} /></circle>}
                </g>;
              })}
            </svg>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-5">
            {layers.map((layer) => (
              <div key={layer.id} className="relative min-w-0 rounded-xl border p-3 md:p-4" style={{ background: "rgba(255,255,255,0.018)", borderColor: "rgba(248,245,239,0.07)" }}>
                <div className="flex items-start justify-between gap-3 mb-4 min-h-[42px]">
                  <div><span className="block text-[9px] font-semibold tracking-[0.18em] mb-1" style={{ color: T.accentWarm }}>LAYER {layer.number}</span><h3 className="text-xs font-medium tracking-[0.02em]" style={{ color: T.ivory }}>{layer.title}</h3></div>
                  <span className="w-2 h-2 mt-1 rounded-full node-pulse" style={{ background: layer.id === "intelligence" ? T.accentLight : T.sagePale }} />
                </div>
                <p className="text-[10px] leading-relaxed mb-4" style={{ color: `${T.ivory}73` }}>{layer.description}</p>
                <div className={layer.id === "inputs" ? "grid grid-cols-2 gap-2" : "space-y-2"}>
                  {layer.nodes.map((node, index) => {
                    const id = `${layer.id}-${index}`;
                    const active = isRelated(id);
                    const color = toneColor(node.tone);
                    return <div key={id} ref={(element) => { nodeRefs.current[id] = element; }} data-layer={layer.id} className="pipeline-node group relative rounded-lg border px-2.5 py-2.5 cursor-default transition-all duration-300" onMouseEnter={() => setHoveredNode(id)} onMouseLeave={() => setHoveredNode(null)} style={{ opacity: active ? undefined : 0.35, background: hoveredNode === id ? `${color}12` : "rgba(14,13,10,0.66)", borderColor: hoveredNode === id ? `${color}9c` : `${color}33`, transform: hoveredNode === id ? "translateY(-2px)" : undefined, boxShadow: hoveredNode === id ? `0 8px 22px ${color}14` : "none" }}>
                      <div className="flex items-center gap-2 min-w-0"><span className="w-5 h-5 shrink-0 rounded border flex items-center justify-center text-[7px] font-semibold tracking-tight" style={{ color, borderColor: `${color}55`, background: `${color}10` }}>{node.mark}</span><div className="min-w-0"><p className="text-[11px] leading-tight font-medium truncate" style={{ color: T.ivory }}>{node.title}</p><p className="text-[8px] tracking-[0.03em] truncate mt-0.5" style={{ color: `${T.ivory}68` }}>{node.detail}</p></div><span className="ml-auto w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 8px ${color}` }} /></div>
                    </div>;
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="relative mt-5 pt-4 border-t flex flex-wrap items-center justify-between gap-3 text-[10px] tracking-[0.05em]" style={{ borderColor: "rgba(248,245,239,0.08)", color: `${T.ivory}78` }}><span className="flex items-center gap-2"><i className="inline-block w-1.5 h-1.5 rounded-full node-pulse" style={{ background: T.sagePale }} /> Connected signal pathways</span><span>Illustrative platform architecture for research and development</span></div>
        </div>
      </div>
    </section>
  );
}
