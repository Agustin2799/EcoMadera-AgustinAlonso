import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <section className="bg-[url('https://images6.alphacoders.com/371/thumb-1920-371656.jpg')] bg-cover bg-top h-screen">
      <div className="flex items-center justify-start h-full px-5 md:px-20 pb-52">
        <div className="flex flex-col">
          <h1 className="text-white text-3xl md:text-5xl font-semibold mb-4">
           {greeting}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default ItemListContainer