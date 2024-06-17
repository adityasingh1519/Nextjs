const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="card  drop-shadow-lg h-full border border-black">  
        <h1 className="font-bold p-5 text-center ">{children}</h1>
      </div>
    </>
  );
};

export default Card;