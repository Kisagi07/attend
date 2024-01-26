interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <section className="bg-white rounded p-4 border border-slate-200">
      {children}
    </section>
  );
};
export default Card;
