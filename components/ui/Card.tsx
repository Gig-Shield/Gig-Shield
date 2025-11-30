interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div 
      className={`
        bg-white rounded-2xl p-6 shadow-md border border-gray-100
        ${hover ? 'hover:shadow-xl hover:border-[#6A38FF] transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
