import React from 'react';

const TechStackItem: React.FC<TechStackItemProps> = ({ item }) => {
  const { name, category, description } = item;

  return (
    <div className="bg-white border border-black/5 rounded-2xl p-6.5 shadow-sm hover:shadow-md hover:border-brand-accent/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[160px] group">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent mb-2.5 block">
          {category}
        </span>
        <h4 className="font-serif text-2xl font-bold text-brand-text mb-2.5 group-hover:text-brand-accent transition-colors duration-300">
          {name}
        </h4>
        <p className="text-brand-muted text-xs leading-relaxed">
          {description}
        </p>
      </div>
      <div className="w-8 h-[1px] bg-brand-accent/20 group-hover:w-14 group-hover:bg-brand-accent/60 transition-all duration-500 mt-5" />
    </div>
  );
};

export default TechStackItem;
